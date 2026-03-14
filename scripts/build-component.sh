#!/bin/bash
# build-component.sh - Builds a component using Claude Code + Figma MCP
# Usage: build-component.sh <figma-url> <component-name>

FIGMA_URL=$1
COMPONENT_NAME=$2

if [ -z "$FIGMA_URL" ] || [ -z "$COMPONENT_NAME" ]; then
  echo "Usage: build-component.sh <figma-url> <component-name>"
  exit 1
fi

echo "Building $COMPONENT_NAME from Figma..."

cd /Users/optimus/ds-playground && claude -p "
Your task: Build the $COMPONENT_NAME component for the PM3 design system.
Figma URL: $FIGMA_URL

Before writing a single file:
1. Run: find packages/design-system/src/components -name '*.css.ts' | head -3
2. Read 2-3 existing css.ts files to understand the exact styling pattern used
3. Read packages/design-system/src/index.ts to understand the export pattern
4. Read packages/tokens/src/generated/tokens.js to get exact token names
5. Use the Figma MCP (get_design_context) to fetch design specs from the Figma URL

Then build following EXACTLY the same patterns you found in step 2. Do not introduce any library or pattern not already present in the codebase.

Output files:
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.css.ts
- apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx
- Add export to packages/design-system/src/index.ts

When done, report only the files created.
" \
--allowedTools "mcp__figma__get_design_context,mcp__figma__get_metadata,mcp__figma__get_screenshot,Bash,Read,Write,Edit" \
--dangerously-skip-permissions \
2>/dev/null

echo "Running build..."
cd /Users/optimus/ds-playground && pnpm build

if [ $? -eq 0 ]; then
  echo "Build passed ✅"
else
  echo "Build failed ❌ — check errors above"
  exit 1
fi
