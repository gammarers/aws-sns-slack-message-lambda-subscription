import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.189.1',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.8.x',
  jsiiVersion: '5.8.x',
  name: '@gammarers/aws-sns-slack-message-lambda-subscription',
  description: 'This AWS CDK Construct is designed to post messages sent from an SNS topic to a Slack Webhook via a Lambda function.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'sns', 'lambda', 'slack', 'webhook'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-sns-slack-message-lambda-subscription.git',
  deps: [
    '@gammarers/aws-resource-naming@0.10.1',
  ],
  devDeps: [
    '@gammarers/jest-aws-cdk-asset-filename-renamer@^0.5.21',
    '@slack/webhook@^7.0.3',
    '@types/aws-lambda@^8.10.145',
    'axios@^1.6.7',
    'aws-sdk-client-mock@^4.1.0',
    'aws-sdk-client-mock-jest@^4.1.0',
  ],
  peerDeps: [
    '@gammarers/aws-resource-naming@^0.10.1',
  ],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/node_modules/@gammarers/jest-aws-cdk-asset-filename-renamer'],
    },
    extraCliOptions: ['--silent'],
  },
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_20_X,
    bundlingOptions: {
      externals: ['@aws-sdk/*'],
      sourcemap: true,
    },
  },
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['2 16 * * 3']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-sns-slack-message-lambda-subscription',
    module: 'gammarers.aws_sns_slack_message_lambda_subscription',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.SNSSlackMessageLambdaSubscription',
  },
});
project.synth();