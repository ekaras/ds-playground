#!/bin/bash
# add-export.sh - Adds component export to index.ts
# Usage: add-export.sh <component-name>

COMPONENT_NAME=$1
INDEX_FILE="/Users/optimus/ds-playground/packages/design-system/src/index.ts"
COMPONENT_DIR="/Users/optimus/ds-playground/packages/design-system/src/components/$COMPONENT_NAME"

if [ -z "$COMPONENT_NAME" ]; then
  echo "Usage: add-export.sh <component-name>"
  exit 1
fi

# Check component file exists first
if [ ! -f "$COMPONENT_DIR/$COMPONENT_NAME.tsx" ]; then
  echo "❌ Component file not found: $COMPONENT_DIR/$COMPONENT_NAME.tsx"
  exit 1
fi

# Check if export already exists
if grep -q "$COMPONENT_NAME" "$INDEX_FILE"; then
  echo "ℹ️  Export already exists for $COMPONENT_NAME — skipping"
  exit 0
fi

# Use wildcard export — clean and always correct
EXPORT_LINE="export * from './components/$COMPONENT_NAME/$COMPONENT_NAME';"

echo "$EXPORT_LINE" >> "$INDEX_FILE"
echo "✅ Added to index.ts: $EXPORT_LINE"
