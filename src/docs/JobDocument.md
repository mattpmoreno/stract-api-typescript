
# JobDocument


## Properties

Name | Type
------------ | -------------
`id` | string
`jobId` | string
`documentId` | string
`documentName` | string
`notes` | string
`status` | [JobStatus](JobStatus.md)
`isComplete` | boolean
`errorDescription` | string
`creditsUsed` | number
`dtStarted` | Date
`dtCompleted` | Date

## Example

```typescript
import type { JobDocument } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "jobId": null,
  "documentId": null,
  "documentName": null,
  "notes": null,
  "status": null,
  "isComplete": null,
  "errorDescription": null,
  "creditsUsed": null,
  "dtStarted": null,
  "dtCompleted": null,
} satisfies JobDocument

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobDocument
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


