# prbot 🤖

AI-powered GitHub PR bot using Azure OpenAI (gpt-4.1-mini).

## Features
- Auto-creates PRs when pushing to `feat/**`, `fix/**`, `chore/**` branches
- AI-generated PR descriptions from commit log and diff
- AI code review posted as PR comment on every PR open/update

## Setup
Add these secrets (Settings → Secrets → Actions):
- `AZURE_OPENAI_ENDPOINT`
- `AZURE_OPENAI_API_KEY`
- `AZURE_OPENAI_DEPLOYMENT`

Then enable: Settings → Actions → General → Allow GitHub Actions to create and approve pull requests ✓
