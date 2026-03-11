#!/bin/bash
# figma-to-data.sh - Fetches rich Figma node data including variants, interactions, and metadata.

FIGMA_URL=$1
FILE_KEY=$(echo $FIGMA_URL | sed -E 's/.*\/(file|design)\/([^/]+)\/.*/\2/')
NODE_ID=$(echo $FIGMA_URL | sed -E 's/.*node-id=([^&]+).*/\1/' | sed 's/-/:/g' | sed 's/%3A/:/g')
FIGMA_TOKEN=$(cat ~/.figma-token 2>/dev/null)

if [ -z "$FIGMA_TOKEN" ]; then
  echo "Error: No Figma token found at ~/.figma-token"
  exit 1
fi

echo "=== COMPONENT STRUCTURE (depth 5) ==="
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=5" | \
  jq '.nodes["'$NODE_ID'"].document'

echo ""
echo "=== COMPONENT METADATA & DESCRIPTIONS ==="
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID" | \
  jq '.nodes["'$NODE_ID'"].document | {name, description, type, componentPropertyDefinitions}'

echo ""
echo "=== PROTOTYPE INTERACTIONS ==="
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=5" | \
  jq '[.nodes["'$NODE_ID'"].document | .. | objects | select(.interactions != null) | {name, interactions}]'

echo ""
echo "=== VARIANT PROPERTIES ==="
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=3" | \
  jq '[.nodes["'$NODE_ID'"].document | .. | objects | select(.type == "COMPONENT") | {name, description, fills, strokes, effects}]'
