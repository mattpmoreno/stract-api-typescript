
# CreateJobRequest


## Properties

Name | Type
------------ | -------------
`additionalInstructions` | string
`catalogId` | string
`documentIds` | Array&lt;string&gt;
`llmModelId` | string

## Example

```typescript
import type { CreateJobRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "additionalInstructions": Focus on extracting financial figures only,
  "catalogId": null,
  "documentIds": null,
  "llmModelId": google.gemma-3-27b-it,
} satisfies CreateJobRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateJobRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


