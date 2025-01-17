# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SNSSlackMessageLambdaSubscription <a name="SNSSlackMessageLambdaSubscription" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer"></a>

```typescript
import { SNSSlackMessageLambdaSubscription } from '@gammarers/aws-sns-slack-message-lambda-subscription'

new SNSSlackMessageLambdaSubscription(scope: Construct, id: string, props: SNSSlackMessageLambdaSubscriptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps">SNSSlackMessageLambdaSubscriptionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps">SNSSlackMessageLambdaSubscriptionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.isConstruct"></a>

```typescript
import { SNSSlackMessageLambdaSubscription } from '@gammarers/aws-sns-slack-message-lambda-subscription'

SNSSlackMessageLambdaSubscription.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### ResourceCustomNaming <a name="ResourceCustomNaming" id="@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.Initializer"></a>

```typescript
import { ResourceCustomNaming } from '@gammarers/aws-sns-slack-message-lambda-subscription'

const resourceCustomNaming: ResourceCustomNaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.functionRoleName">functionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.type">type</a></code> | <code>@gammarers/aws-resource-naming.ResourceNamingType</code> | *No description.* |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `functionRoleName`<sup>Required</sup> <a name="functionRoleName" id="@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.functionRoleName"></a>

```typescript
public readonly functionRoleName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming.property.type"></a>

```typescript
public readonly type: ResourceNamingType;
```

- *Type:* @gammarers/aws-resource-naming.ResourceNamingType

---

### SNSSlackMessageLambdaSubscriptionProps <a name="SNSSlackMessageLambdaSubscriptionProps" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.Initializer"></a>

```typescript
import { SNSSlackMessageLambdaSubscriptionProps } from '@gammarers/aws-sns-slack-message-lambda-subscription'

const sNSSlackMessageLambdaSubscriptionProps: SNSSlackMessageLambdaSubscriptionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.slackWebhookSecretName">slackWebhookSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |
| <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.resourceNamingOption">resourceNamingOption</a></code> | <code><a href="#@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming">ResourceCustomNaming</a> \| @gammarers/aws-resource-naming.ResourceDefaultNaming</code> | *No description.* |

---

##### `slackWebhookSecretName`<sup>Required</sup> <a name="slackWebhookSecretName" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.slackWebhookSecretName"></a>

```typescript
public readonly slackWebhookSecretName: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

##### `resourceNamingOption`<sup>Optional</sup> <a name="resourceNamingOption" id="@gammarers/aws-sns-slack-message-lambda-subscription.SNSSlackMessageLambdaSubscriptionProps.property.resourceNamingOption"></a>

```typescript
public readonly resourceNamingOption: ResourceCustomNaming | ResourceDefaultNaming;
```

- *Type:* <a href="#@gammarers/aws-sns-slack-message-lambda-subscription.ResourceCustomNaming">ResourceCustomNaming</a> | @gammarers/aws-resource-naming.ResourceDefaultNaming

---



