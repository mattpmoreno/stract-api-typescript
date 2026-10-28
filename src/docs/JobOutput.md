
# JobOutput


## Properties

Name | Type
------------ | -------------
`id` | string
`jobDocumentId` | string
`data` | { [key: string]: any; }
`dtCreated` | Date

## Example

```typescript
import type { JobOutput } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "jobDocumentId": null,
  "data": null,
  "dtCreated": null,
} satisfies JobOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


