
# UploadTextDocumentRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`text` | string

## Example

```typescript
import type { UploadTextDocumentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Meeting notes,
  "text": Discussed Q3 budget and hiring plans.,
} satisfies UploadTextDocumentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadTextDocumentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


