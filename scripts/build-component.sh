#!/bin/bash
# build-component.sh - Builds a component using Claude Code + Figma MCP
# Usage: build-component.sh <figma-url> <component-name>

FIGMA_URL=$1
COMPONENT_NAME=$2
SCRIPTS_DIR="$(dirname "$0")"

if [ -z "$FIGMA_URL" ] || [ -z "$COMPONENT_NAME" ]; then
  echo "Usage: build-component.sh <figma-url> <component-name>"
  exit 1
fi

echo "🔨 Building $COMPONENT_NAME..."

# Step 1 — Claude Code builds files only (no commits, no exports, no builds)
cd /Users/optimus/ds-playground && claude -p "
Your task: Build the $COMPONENT_NAME component for the PM3 design system.
Figma URL: $FIGMA_URL

STEP 1 — Explore the codebase before writing anything:
1. Run: find packages/design-system/src/components -name '*.css.ts' | head -5
2. Read ALL those css.ts files — understand the exact pattern
3. Read packages/tokens/src/generated/tokens.js for exact token variable names
4. Use Figma MCP (get_design_context) to fetch design specs from: $FIGMA_URL

STEP 2 — Build these files following EXACTLY the patterns from step 1:
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.tsx
- packages/design-system/src/components/$COMPONENT_NAME/$COMPONENT_NAME.css.ts
- apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx

RULES — non negotiable:
- Use @vanilla-extract/css with style() function — exactly as you saw in existing css.ts files
- Import tokens from @acme-ds/tokens using vars object — exactly as you saw
- No styled-components, no inline styles, no hardcoded hex values
- No new packages, no new directories outside the paths above
- Do NOT touch packages/design-system/src/index.ts
- Do NOT run pnpm build or any build commands
- Do NOT commit anything

When done, list only the files you created.
" \
--allowedTools "mcp__figma__get_design_context,mcp__figma__get_metadata,mcp__figma__get_screenshot,Bash,Read,Write,Edit" \
--dangerously-skip-permissions \
2>/dev/null

# Step 2 — Add export to index.ts via script (not Claude Code)
echo "📦 Adding export..."
"$SCRIPTS_DIR/add-export.sh" "$COMPONENT_NAME"
if [ $? -ne 0 ]; then
  echo "❌ Failed to add export"
  exit 1
fi

# Step 3 — Validate before building
echo "🔍 Validating..."
"$SCRIPTS_DIR/validate-component.sh" "$COMPONENT_NAME"
if [ $? -ne 0 ]; then
  echo "❌ Validation failed — rolling back"
  rm -rf "/Users/optimus/ds-playground/packages/design-system/src/components/$COMPONENT_NAME"
  rm -f "/Users/optimus/ds-playground/apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx"
  sed -i '' "/$COMPONENT_NAME/d" /Users/optimus/ds-playground/packages/design-system/src/index.ts
  exit 1
fi

# Step 4 — Build
echo "🏗️  Running build..."
cd /Users/optimus/ds-playground && pnpm build
if [ $? -ne 0 ]; then
  echo "❌ Build failed — rolling back"
  rm -rf "/Users/optimus/ds-playground/packages/design-system/src/components/$COMPONENT_NAME"
  rm -f "/Users/optimus/ds-playground/apps/storybook/src/stories/$COMPONENT_NAME.stories.tsx"
  sed -i '' "/$COMPONENT_NAME/d" /Users/optimus/ds-playground/packages/design-system/src/index.ts
  exit 1
fi

# Step 5 — Commit and deploy
echo "🚀 Committing and deploying..."
cd /Users/optimus/ds-playground
git add -A
git commit -m "feat: Add $COMPONENT_NAME component"
git push origin main
curl -s -X POST https://api.vercel.com/v1/integrations/deploy/prj_ad23jLIhks7hcDFWqrLJ0eG88wzr/411cJz6M5e

echo "✅ $COMPONENT_NAME built, validated, committed and deployed"
