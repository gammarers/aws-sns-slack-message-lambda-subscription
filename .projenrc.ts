import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.120.0',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.7.x',
  jsiiVersion: '5.7.x',
  name: '@gammarers/aws-sns-slack-message-lambda-subscription',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-sns-slack-message-lambda-subscription.git',
  deps: [
    '@gammarers/aws-resource-naming@0.8.0',
  ],
  devDeps: [
    '@gammarers/jest-aws-cdk-asset-filename-renamer@^0.5.21',
    '@gammarers/aws-resource-naming@0.8.0',
    '@slack/webhook@^7.0.3',
    '@types/aws-lambda@^8.10.145',
    'axios@^1.6.7',
    'aws-sdk-client-mock@^4.1.0',
    'aws-sdk-client-mock-jest@^4.1.0',
  ],
  peerDeps: [
    '@gammarers/aws-resource-naming@^0.8.0',
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
});
project.synth();