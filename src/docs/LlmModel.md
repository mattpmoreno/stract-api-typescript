
# LlmModel


## Properties

Name | Type
------------ | -------------
`id` | string
`maker` | string
`name` | string
`creditsPerMInput` | number
`creditsPerMOutput` | number
`canDoImages` | boolean
`canDoAudio` | boolean
`canDoVideo` | boolean
`isAvailable` | boolean

## Example

```typescript
import type { LlmModel } from ''

// TODO: Update the object below with actual values
const example = {
  "id": google.gemma-3-27b-it,
  "maker": Google,
  "name": Gemma 3 27B,
  "creditsPerMInput": null,
  "creditsPerMOutput": null,
  "canDoImages": null,
  "canDoAudio": null,
  "canDoVideo": null,
  "isAvailable": null,
} satisfies LlmModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LlmModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


