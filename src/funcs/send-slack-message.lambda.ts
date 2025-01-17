import { IncomingWebhook, IncomingWebhookResult, IncomingWebhookSendArguments } from '@slack/webhook';
import { Context, SNSEvent, SNSEventRecord } from 'aws-lambda';
import axios from 'axios';

const SECRET_MANAGER_GET_URL = 'http://localhost:2773/secretsmanager/get';
const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN || '';

interface SlackWebhookSecrets {
  readonly Workspace: string;
  readonly Channel: string;
  readonly Webhook: string;
}

class NotSetSecretStringError extends Error {
  constructor() {
    super('get object is empty');
    this.name = 'NotSetSecretStringError';
  }
}

export const handler = async (event: SNSEvent, context: Context): Promise<void> => {
  console.log({ event, context });

  const axiosRequestConfig = {
    params: {
      secretId: encodeURIComponent(process.env.SLACK_WEBOOK_SECRET_NAME!), // require URI Encord "/"
      // withDecryption: true,
    },
    headers: {
      'X-Aws-Parameters-Secrets-Token': AWS_SESSION_TOKEN,
    },
  };

  let slackWebhookSecrets: SlackWebhookSecrets | null = null;

  return axios.get(SECRET_MANAGER_GET_URL, axiosRequestConfig)
    .then((value) => {
      slackWebhookSecrets = JSON.parse(value.data.SecretString);
      if (!slackWebhookSecrets) {
        throw new NotSetSecretStringError();
      }
      const webhook = new IncomingWebhook(`https://hooks.slack.com/services/${slackWebhookSecrets.Workspace}/${slackWebhookSecrets.Channel}/${slackWebhookSecrets.Webhook}`);

      const promises: Promise<IncomingWebhookResult>[] = event.Records.map((record: SNSEventRecord) => {
        const id = record.Sns.MessageId;
        console.log({ MessageId: id });
        //const subject = record.Sns.Subject;
        const message = record.Sns.Message;
        const jsonMessage = JSON.parse(message) as IncomingWebhookSendArguments;
        return webhook.send(jsonMessage);
      });

      return Promise.all(promises);
    })
    .then((results: IncomingWebhookResult[]) => {
      console.info({ Succeed: 'Webhook Sent', results });
    })
    .catch((error) => {
      throw error;
    });
};