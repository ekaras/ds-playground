#!/bin/bash
# figma-to-data.sh - Optimized fetcher for PM3 Senior Engineer (Tufail)

FIGMA_URL=$1

if [ -z "$FIGMA_URL" ]; then
  echo "Error: No Figma URL provided."
  exit 1
fi

FILE_KEY=$(echo $FIGMA_URL | sed -E 's/.*\/(file|design)\/([^/]+)\/.*/\2/')
NODE_ID=$(echo $FIGMA_URL | sed -E 's/.*node-id=([^&]+).*/\1/' | sed 's/-/:/g')
FIGMA_TOKEN=$(cat ~/.figma-token 2>/dev/null)

if [ -z "$FIGMA_TOKEN" ]; then
  echo "Error: No Figma token found in ~/.figma-token"
  exit 1
fi

# We use jq to strip the 'noise' and keep only what a Designer/Engineer cares about
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=2" | \
  jq '.nodes["'$NODE_ID'"].document | {
    name: .name,
    type: .type,
    absoluteBoundingBox: .absoluteBoundingBox,
    children: [.children[]? | {
      name: .name,
      type: .type,
      characters: .characters,
      style: .style,
      fills: .fills,
      strokes: .strokes,
      cornerRadius: .cornerRadius,
      paddingLeft: .paddingLeft,
      paddingRight: .paddingRight,
      paddingTop: .paddingTop,
      paddingBottom: .paddingBottom
    }]
  }'
