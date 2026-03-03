#!/bin/bash
# figma-to-data.sh - Fetches raw Figma node data for Tufail to analyze.

FIGMA_URL=$1
FILE_KEY=$(echo $FIGMA_URL | sed -E 's/.*\/(file|design)\/([^/]+)\/.*/\2/')
NODE_ID=$(echo $FIGMA_URL | sed -E 's/.*node-id=([^&]+).*/\1/' | sed 's/-/:/g')
FIGMA_TOKEN=$(cat ~/.figma-token 2>/dev/null)

if [ -z "$FIGMA_TOKEN" ]; then
  echo "Error: No Figma token found in ~/.figma-token"
  exit 1
fi

curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=2" | \
  jq '.nodes["'$NODE_ID'"].document'
