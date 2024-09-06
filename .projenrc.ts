import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.120.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.5.x',
  jsiiVersion: '5.5.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-sns-slack-message-lambda-subscription',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-sns-slack-message-lambda-subscription.git',
  releaseToNpm: false, // todo: temp
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.4.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      //schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 16 * * 3']), // every wednesday 16:00 (JST/THU:0100)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();