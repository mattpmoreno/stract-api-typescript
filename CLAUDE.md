# Instructions for Claude

- Do not run tests (`npm test`, `npm run test:sdk`, `node --test`, or any other way of executing them). Write and edit test files, but leave running them to the user.
- Do not run Node scripts in general (`node ...`, `npm run ...`, `npx ...`), including one-off checks such as `node --check`. If something needs to run, give the user the command instead.
- Do not read `.env` files (`.env`, `.env.*`), by any tool or command, including listing or checking whether they exist.
