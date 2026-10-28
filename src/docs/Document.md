
# Document


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`catalogId` | string
`catalogName` | string
`text` | string
`extension` | string
`dateCreated` | Date
`processingStatus` | [DocumentProcessingStatus](DocumentProcessingStatus.md)

## Example

```typescript
import type { Document } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "catalogId": null,
  "catalogName": null,
  "text": null,
  "extension": .pdf,
  "dateCreated": null,
  "processingStatus": null,
} satisfies Document

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Document
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


