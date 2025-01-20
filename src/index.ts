import { ResourceDefaultNaming, ResourceNaming, ResourceNamingType } from '@gammarers/aws-resource-naming';
import { Duration, Names, RemovalPolicy, Stack } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { SendSlackMessageFunction } from './funcs/send-slack-message-function';

export interface ResourceCustomNaming {
  readonly type: ResourceNamingType.CUSTOM;
  readonly functionName: string;
  readonly functionRoleName: string;
}

export type ResourceNamingOption = ResourceDefaultNaming | ResourceCustomNaming;

export interface SNSSlackMessageLambdaSubscriptionProps {
  readonly topic: sns.ITopic;
  readonly slackWebhookSecretName: string;
  readonly resourceNamingOption?: ResourceNamingOption;
}

export class SNSSlackMessageLambdaSubscription extends Construct {
  constructor(scope: Construct, id: string, props: SNSSlackMessageLambdaSubscriptionProps) {
    super(scope, id);

    // 👇 Get account & region
    const account = Stack.of(scope).account;
    const region = Stack.of(scope).region;

    // 👇 Create random 8 length string
    const random = ResourceNaming.createRandomString(`${Names.uniqueId(scope)}.${Names.uniqueId(this)}`);
    const autoNaming = {
      functionName: `send-slack-message-${random}-func`,
      functionRoleName: `send-slack-message-lambda-func-exec-${random}-role`,
    };
    const names = ResourceNaming.naming(autoNaming, props.resourceNamingOption as ResourceNaming.ResourceNamingOption);

    // Lambda function
    const sendMessageFunction = new SendSlackMessageFunction(this, 'SendSlackMessageFunction', {
      functionName: names.functionName,
      description: 'Send Slack message function',
      architecture: lambda.Architecture.ARM_64,
      role: new iam.Role(this, 'LambdaExecutionRole', {
        roleName: names.functionRoleName,
        description: '',
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        ],
        inlinePolicies: {
          'get-secret-policy': new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                effect: iam.Effect.ALLOW,
                actions: [
                  'secretsmanager:GetSecretValue',
                ],
                resources: [
                  `arn:aws:secretsmanager:${region}:${account}:secret:${props.slackWebhookSecretName}*`,
                ],
              }),
            ],
          }),
        },
      }),
      timeout: Duration.seconds(10),
      paramsAndSecrets: lambda.ParamsAndSecretsLayerVersion.fromVersion(lambda.ParamsAndSecretsVersions.V1_0_103, {
        cacheSize: 500,
        logLevel: lambda.ParamsAndSecretsLogLevel.INFO,
      }),
      environment: {
        SLACK_WEBOOK_SECRET_NAME: props.slackWebhookSecretName,
      },
      logFormat: lambda.LogFormat.JSON,
      systemLogLevel: lambda.SystemLogLevel.INFO,
      applicationLogLevel: lambda.ApplicationLogLevel.INFO,
      logGroup: new logs.LogGroup(this, 'SendSlackMessageFunctionLogGroup', {
        logGroupName: names.functionName ? `/aws/lambda/${names.functionName}` : undefined,
        retention: logs.RetentionDays.THREE_MONTHS,
        removalPolicy: RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE,
      }),
    });
    sendMessageFunction.addPermission('InvokeFunctionFromSNS', {
      principal: new iam.ServicePrincipal('sns.amazonaws.com'),
      action: 'lambda:InvokeFunction',
      sourceArn: props.topic.topicArn,
    });

    new sns.Subscription(this, 'LambdaSubscription', {
      topic: props.topic,
      protocol: sns.SubscriptionProtocol.LAMBDA,
      endpoint: sendMessageFunction.functionArn,
    });
  }
}
