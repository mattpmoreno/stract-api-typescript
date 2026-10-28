
# EditFieldRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`type` | [FieldType](FieldType.md)
`enumValues` | Array&lt;string&gt;

## Example

```typescript
import type { EditFieldRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": email,
  "description": Customer's email address,
  "type": null,
  "enumValues": null,
} satisfies EditFieldRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EditFieldRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


