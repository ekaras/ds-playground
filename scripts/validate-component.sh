#!/bin/bash
# validate-component.sh - Validates a component before committing
# Usage: validate-component.sh <component-name>

COMPONENT_NAME=$1
COMPONENT_DIR="/Users/optimus/ds-playground/packages/design-system/src/components/$COMPONENT_NAME"
STORIES_FILE="/Users/optimus/ds-playground/apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx"
INDEX_FILE="/Users/optimus/ds-playground/packages/design-system/src/index.ts"
ERRORS=0

echo "Validating $COMPONENT_NAME..."

# 1. Check component files exist in correct location
if [ ! -f "$COMPONENT_DIR/$COMPONENT_NAME.tsx" ]; then
  echo "❌ Missing: $COMPONENT_DIR/$COMPONENT_NAME.tsx"
  ERRORS=$((ERRORS + 1))
fi

if [ ! -f "$COMPONENT_DIR/$COMPONENT_NAME.css.ts" ]; then
  echo "❌ Missing: $COMPONENT_DIR/$COMPONENT_NAME.css.ts"
  ERRORS=$((ERRORS + 1))
fi

if [ ! -f "$STORIES_FILE" ]; then
  echo "❌ Missing: $STORIES_FILE"
  ERRORS=$((ERRORS + 1))
fi

# 2. Check no styled-components
if grep -r "styled-components\|styled\." "$COMPONENT_DIR" 2>/dev/null | grep -q "import"; then
  echo "❌ styled-components found — use @vanilla-extract/css instead"
  ERRORS=$((ERRORS + 1))
fi

# 3. Check vanilla-extract is used
if ! grep -q "@vanilla-extract/css" "$COMPONENT_DIR/$COMPONENT_NAME.css.ts" 2>/dev/null; then
  echo "❌ @vanilla-extract/css not found in css.ts"
  ERRORS=$((ERRORS + 1))
fi

# 4. Check correct token import
if ! grep -q "@acme-ds/tokens" "$COMPONENT_DIR/$COMPONENT_NAME.css.ts" 2>/dev/null; then
  echo "❌ @acme-ds/tokens not found — tokens must be imported from @acme-ds/tokens"
  ERRORS=$((ERRORS + 1))
fi

# 5. Check no hardcoded hex values
if grep -r "#[0-9A-Fa-f]\{3,6\}" "$COMPONENT_DIR" 2>/dev/null | grep -v "//"; then
  echo "❌ Hardcoded hex values found — use vars tokens instead"
  ERRORS=$((ERRORS + 1))
fi

# 6. Check no wrong path imports
if grep -r "@/packages\|\.\.\/\.\.\/tokens" "$COMPONENT_DIR" 2>/dev/null | grep "import"; then
  echo "❌ Wrong token import path found — use @acme-ds/tokens"
  ERRORS=$((ERRORS + 1))
fi

# 7. Check export exists in index.ts
if ! grep -q "$COMPONENT_NAME" "$INDEX_FILE" 2>/dev/null; then
  echo "❌ No export found for $COMPONENT_NAME in index.ts"
  ERRORS=$((ERRORS + 1))
fi

# Result
if [ $ERRORS -eq 0 ]; then
  echo "✅ Validation passed — $COMPONENT_NAME is clean"
  exit 0
else
  echo ""
  echo "❌ Validation failed with $ERRORS error(s) — fix before committing"
  exit 1
fi
