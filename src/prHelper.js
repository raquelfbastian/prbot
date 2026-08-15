// src/utils/prHelper.js
// Utility to format PR descriptions

export function formatTitle(branchName) {
  const slug = branchName.replace(/^(feat|fix|chore|refactor)\//, '')
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export function truncateDiff(diff, maxLines = 200) {
  const lines = diff.split('\n')
  if (lines.length <= maxLines) return diff
  return lines.slice(0, maxLines).join('\n') + '\n... (truncated)'
}

export async function callAzureOpenAI(endpoint, apiKey, deployment, messages) {
  const res = await fetch(`${endpoint}/openai/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({ model: deployment, messages, max_tokens: 1024 })
  })
  const json = await res.json()
  return json.choices[0].message.content
}
