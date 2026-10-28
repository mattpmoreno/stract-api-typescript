
# SyncTextJobRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`text` | string
`additionalInstructions` | string
`outputType` | string
`llmModelId` | string

## Example

```typescript
import type { SyncTextJobRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Meeting notes,
  "text": Discussed Q3 budget and hiring plans.,
  "additionalInstructions": Focus on extracting financial figures only,
  "outputType": null,
  "llmModelId": google.gemma-3-27b-it,
} satisfies SyncTextJobRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncTextJobRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


