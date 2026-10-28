// Smoke test: runs the built SDK in dist/ against the live Stract API.
// Requires STRACT_API_KEY.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  Configuration,
  CreditsApi,
  LlmModelApi,
  ResponseError,
  StructApi,
  UserApi,
} = require('../dist');

const apiKey = process.env.STRACT_API_KEY;
if (!apiKey) {
  throw new Error('STRACT_API_KEY is not set. Add it to .env or your environment.');
}

const config = new Configuration({ accessToken: apiKey });

test('authenticates and returns the current user', async () => {
  const user = await new UserApi(config).getMyUser();
  assert.ok(user.id);
  assert.ok(user.email);
  assert.ok(user.dtCreated instanceof Date);
});

test('rejects an invalid API key with a 401 ResponseError', async () => {
  const unauthenticated = new UserApi(new Configuration({ accessToken: 'invalid-key' }));
  await assert.rejects(unauthenticated.getMyUser(), (err) => {
    assert.ok(err instanceof ResponseError);
    assert.equal(err.response.status, 401);
    return true;
  });
});

test('lists LLM models', async () => {
  const models = await new LlmModelApi(config).getLlmModels();
  assert.ok(Array.isArray(models));
  assert.ok(models.length > 0);
});

test('lists structs', async () => {
  const structs = await new StructApi(config).getStructs();
  assert.ok(Array.isArray(structs));
});

test('returns the credit balance', async () => {
  const credits = await new CreditsApi(config).getCurrentCredits();
  assert.ok(credits);
});
