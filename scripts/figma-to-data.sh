#!/bin/bash
# figma-to-data.sh - Fetches rich Figma data: structure, tokens, and exports SVG icons

FIGMA_URL=$1
FILE_KEY=$(echo $FIGMA_URL | sed -E 's/.*\/(file|design)\/([^/]+)\/.*/\2/')
NODE_ID=$(echo $FIGMA_URL | sed -E 's/.*node-id=([^&]+).*/\1/' | sed 's/-/:/g' | sed 's/%3A/:/g')
FIGMA_TOKEN=$(cat ~/.figma-token 2>/dev/null)
SCRIPTS_DIR="$(dirname "$0")"
OUTPUT_DIR="${2:-/tmp/figma-export}"

if [ -z "$FIGMA_TOKEN" ]; then
  echo "Error: No Figma token found at ~/.figma-token"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

echo "=== COMPONENT STRUCTURE & TOKENS ==="
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/nodes?ids=$NODE_ID&depth=5" | \
  jq '.nodes["'$NODE_ID'"].document' | \
  tee /tmp/figma-raw.json | \
  node "$SCRIPTS_DIR/resolve-figma-colors.js"

echo ""
echo "=== VARIANT PROPERTIES ==="
cat /tmp/figma-raw.json | jq '{
  name: .name,
  variants: [.. | objects | select(.type == "COMPONENT") | {
    name,
    fills: [.fills[]? | select(.color) | .color],
    strokes: [.strokes[]? | select(.color) | .color],
    effects: [.effects[]? | {type, radius}]
  }]
}'

echo ""
echo "=== SVG ICON EXPORT ==="
VECTOR_IDS=$(cat /tmp/figma-raw.json | jq -r '[.. | objects | select(.type == "VECTOR") | .id] | .[0]')

if [ -n "$VECTOR_IDS" ] && [ "$VECTOR_IDS" != "null" ]; then
  ENCODED_IDS=$(echo $VECTOR_IDS | sed 's/;/%3B/g' | sed 's/:/%3A/g')
  SVG_URL=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
    "https://api.figma.com/v1/images/$FILE_KEY?ids=$VECTOR_IDS&format=svg" | \
    jq -r '.images | to_entries[0].value')
  
  if [ -n "$SVG_URL" ] && [ "$SVG_URL" != "null" ]; then
    SVG_FILE="$OUTPUT_DIR/icon.svg"
    curl -s "$SVG_URL" -o "$SVG_FILE"
    # Replace hardcoded fills with currentColor
    sed -i '' 's/fill="#[^"]*"/fill="currentColor"/g' "$SVG_FILE"
    echo "SVG exported and fixed: $SVG_FILE"
    cat "$SVG_FILE"
  fi
else
  echo "No vector icons found in component"
fi
