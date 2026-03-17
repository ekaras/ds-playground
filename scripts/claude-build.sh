#!/bin/bash
# claude-build.sh - Invokes Claude Code to build a component from Figma
# Returns when Claude Code is done. Nothing else.
# Usage: claude-build.sh <figma-url> <component-name>

FIGMA_URL=$1
COMPONENT_NAME=$2

if [ -z "$FIGMA_URL" ] || [ -z "$COMPONENT_NAME" ]; then
  echo "Usage: claude-build.sh <figma-url> <component-name>"
  exit 1
fi

cd /Users/optimus/ds-playground && claude -p "
Your task: Build the $COMPONENT_NAME component for the PM3 design system.
Figma URL: $FIGMA_URL

Before writing a single file, explore the codebase:
1. Run: find packages/design-system/src/components -name '*.css.ts' | head -5
2. Read those css.ts files to understand the exact styling pattern used
3. Read packages/tokens/src/generated/tokens.js for exact token names
4. Use Figma MCP (get_design_context) to fetch design specs from the Figma URL

Then build following EXACTLY the same patterns you found. Do not introduce any library or pattern not already present in the codebase.

Output files:
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.css.ts
- apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx

Do NOT touch packages/design-system/src/index.ts
Do NOT run pnpm build
Do NOT commit anything

When done, print: CLAUDE_DONE
" \
--allowedTools "mcp__figma__get_design_context,mcp__figma__get_metadata,mcp__figma__get_screenshot,Bash,Read,Write,Edit" \
--dangerously-skip-permissions \
2>/dev/null

echo "CLAUDE_DONE"
