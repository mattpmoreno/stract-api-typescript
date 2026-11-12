// Regenerates src/ from the OpenAPI spec.
//
// The spec is fetched from <STRACT_API_BASE_URL>/spec/openapi.yaml (set the base
// URL in .env to generate from e.g. staging) and falls back to production.
const { spawnSync } = require('node:child_process');

const DEFAULT_BASE_URL = 'https://api.stract-api.com';

try {
  process.loadEnvFile('.env');
} catch (err) {
  if (err.code !== 'ENOENT') throw err;
}

const baseUrl = (process.env.STRACT_API_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
const specUrl = `${baseUrl}/spec/openapi.yaml`;
console.log(`Generating from ${specUrl}`);

const result = spawnSync(
  'npx',
  ['openapi-generator-cli', 'generate', '--generator-key', 'stract', '--input-spec', specUrl],
  { stdio: 'inherit', shell: true },
);
process.exit(result.status ?? 1);
