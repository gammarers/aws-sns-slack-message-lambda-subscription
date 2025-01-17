import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as sns from 'aws-cdk-lib/aws-sns';
import { SNSSlackMessageLambdaSubscription } from '../src';

describe('Subscription Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const topic = new sns.Topic(stack, 'Topic', {
    topicName: 'example-topic',
  });

  new SNSSlackMessageLambdaSubscription(stack, 'SNSSlackMessageLambdaSubscription', {
    topic,
    slackWebhookSecretName: 'slak-webhook',
  });

  const template = Template.fromStack(stack);

  it('Is SNS Subscription Resource Count', () => {
    template.resourceCountIs('AWS::SNS::Subscription', 1);
  });

  it('Is Lambda Function Resource Count', () => {
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });

  it('Is IAM Role Resource Count', () => {
    template.resourceCountIs('AWS::IAM::Role', 1);
  });

  it('Is Logs LogGroup Resource Count', () => {
    template.resourceCountIs('AWS::Logs::LogGroup', 1);
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});