
# Account


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`dateCreated` | Date
`accountUserRole` | [AccountUserRole](AccountUserRole.md)
`subscriptionType` | string
`subscriptionDtStarted` | Date
`subscriptionBillingPeriodEnd` | Date

## Example

```typescript
import type { Account } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "dateCreated": null,
  "accountUserRole": null,
  "subscriptionType": null,
  "subscriptionDtStarted": null,
  "subscriptionBillingPeriodEnd": null,
} satisfies Account

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Account
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


