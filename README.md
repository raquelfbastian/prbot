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
## How it works
1. Push to feat/* branch
2. Bot diffs your branch vs main
3. Azure OpenAI writes the PR description
4. Bot opens the PR automatically

## Workflow files
- `.github/workflows/auto-pr.yml` — auto PR creator
- `.github/workflows/pr-review.yml` — AI code reviewer
