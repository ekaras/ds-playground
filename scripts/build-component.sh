#!/bin/bash
# build-component.sh - Passes Figma data to Claude Code to build a component
# Usage: build-component.sh <figma-url> <component-name>

FIGMA_URL=$1
COMPONENT_NAME=$2
SCRIPTS_DIR="$(dirname "$0")"
COMPONENT_DIR="/Users/optimus/ds-playground/packages/design-system/src/components/$COMPONENT_NAME"

mkdir -p "$COMPONENT_DIR"

echo "Fetching Figma data..."
FIGMA_DATA=$("$SCRIPTS_DIR/figma-to-data.sh" "$FIGMA_URL" "$COMPONENT_DIR" 2>/dev/null)

PROMPT="You are building a React component for a design system called PM3.

Component name: $COMPONENT_NAME
Output directory: $COMPONENT_DIR

Here is the Figma design data:
$FIGMA_DATA

Instructions:
1. Check tokens.js at packages/tokens/src/generated/tokens.js for exact token names
2. Use Vanilla Extract for styling (css.ts files)
3. Create: $COMPONENT_NAME.tsx, $COMPONENT_NAME.css.ts, $COMPONENT_NAME.stories.tsx
4. Use the exported icon.svg from $COMPONENT_DIR if it exists — never use text characters for icons
5. Export the component from packages/design-system/src/index.ts
6. All colours must use PM3 tokens — no hardcoded hex values"

echo "Building component with Claude Code..."
cd /Users/optimus/ds-playground && claude -p "$PROMPT" \
  --allowedTools "Bash,Read,Write,Edit" \
  --dangerously-skip-permissions \
  2>/dev/null

echo "Done."
