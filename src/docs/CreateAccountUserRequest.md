
# CreateAccountUserRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`firstName` | string
`lastName` | string
`accountUserRole` | [AccountUserRole](AccountUserRole.md)

## Example

```typescript
import type { CreateAccountUserRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": user@example.com,
  "firstName": Jane,
  "lastName": Doe,
  "accountUserRole": null,
} satisfies CreateAccountUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAccountUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


