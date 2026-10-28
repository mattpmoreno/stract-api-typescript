
# AccountCreditLedger


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | string
`suserId` | string
`spendingSuserId` | string
`amount` | number
`createdAt` | Date
`type` | string
`referenceId` | string
`referenceTable` | string
`idempotencyKey` | string

## Example

```typescript
import type { AccountCreditLedger } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "suserId": null,
  "spendingSuserId": null,
  "amount": 42,
  "createdAt": null,
  "type": null,
  "referenceId": null,
  "referenceTable": null,
  "idempotencyKey": null,
} satisfies AccountCreditLedger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountCreditLedger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


