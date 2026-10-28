
# AccountUser


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | string
`suserId` | string
`accountUserRole` | [AccountUserRole](AccountUserRole.md)
`email` | string
`firstName` | string
`lastName` | string

## Example

```typescript
import type { AccountUser } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "suserId": null,
  "accountUserRole": null,
  "email": null,
  "firstName": null,
  "lastName": null,
} satisfies AccountUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


