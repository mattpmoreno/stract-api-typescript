
# Job


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | [JobStatus](JobStatus.md)
`structId` | string
`structName` | string
`isComplete` | boolean
`dtCreated` | Date
`dtCompleted` | Date
`catalogId` | string
`catalogName` | string
`documentIds` | Array&lt;string&gt;
`notes` | string
`creditsUsed` | number
`instructions` | string
`llmModelId` | string

## Example

```typescript
import type { Job } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "structId": null,
  "structName": null,
  "isComplete": null,
  "dtCreated": null,
  "dtCompleted": null,
  "catalogId": null,
  "catalogName": null,
  "documentIds": null,
  "notes": null,
  "creditsUsed": null,
  "instructions": null,
  "llmModelId": google.gemma-3-27b-it,
} satisfies Job

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Job
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


