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
You are building a React component for the PM3 design system.

Component name: $COMPONENT_NAME
Figma URL: $FIGMA_URL

CRITICAL: The ONLY valid package structure is:
- packages/design-system/src/components/ — component files go HERE
- apps/storybook/src/stories/ — stories go HERE
- packages/tokens/src/generated/ — read tokens from HERE

DO NOT create packages/ui/ or any new package. It does not exist in this repo.
DO NOT run pnpm build or any build commands — that will be handled after you finish.

Instructions:
1. Use the Figma MCP (get_design_context) to fetch the full design spec from the Figma URL
2. Read packages/tokens/src/generated/tokens.js for exact token names
3. Read packages/tokens/src/generated/semantic-light.css for CSS variable names
4. Study an existing component like Badge or Toast as a reference pattern
5. Create these files:
   - packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx
   - packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.css.ts
   - apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx
6. Add export to packages/design-system/src/index.ts
7. Use Vanilla Extract for styling — no inline styles, no hardcoded hex values
8. Use CSS pseudo-classes for interactive states (hover, focus-visible, active, disabled)
9. Add a static Focus story using a decorator that applies focus styles via className
10. For icons: download the SVG from Figma MCP asset URLs, save to component folder, use currentColor for fill
11. All colours must use PM3 tokens only
12. When done, report ONLY the files you created — nothing else
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
