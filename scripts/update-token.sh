#!/bin/bash

TOKEN=$1
VALUE=$2

if [ -z "$TOKEN" ] || [ -z "$VALUE" ]; then
  echo "Usage: ./scripts/update-token.sh <token-name> <new-value>"
  exit 1
fi

echo "⚡ Tufail: Updating token $TOKEN to $VALUE..."

cd ~/ds-playground

node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('packages/tokens/src/tokens/figma-variables.json', 'utf8'));
if (data.semanticColors.light['$TOKEN'] !== undefined) {
  const old = data.semanticColors.light['$TOKEN'];
  data.semanticColors.light['$TOKEN'] = '$VALUE';
  data.semanticColors.dark['$TOKEN'] = '$VALUE';
  fs.writeFileSync('packages/tokens/src/tokens/figma-variables.json', JSON.stringify(data, null, 2));
  console.log('Updated $TOKEN: ' + old + ' → $VALUE');
} else {
  console.error('Token $TOKEN not found');
  process.exit(1);
}
"

if [ $? -ne 0 ]; then
  echo "❌ Token update failed"
  exit 1
fi

echo "🔄 Running token pipeline..."
cd packages/tokens && node src/transform-figma-tokens.js && cd ~/ds-playground
pnpm --filter @acme-ds/tokens build:tokens
pnpm --filter @acme-ds/tokens build
pnpm --filter @acme-ds/react build

echo "✅ Done. Token $TOKEN updated to $VALUE. Refresh Storybook to see the change."
