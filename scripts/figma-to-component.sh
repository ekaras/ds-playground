#!/bin/bash

FIGMA_URL=$1

if [ -z "$FIGMA_URL" ]; then
  echo "Usage: ./scripts/figma-to-component.sh <figma-url>"
  exit 1
fi

ANTHROPIC_KEY=$(node -e "const f=require('fs');const d=JSON.parse(f.readFileSync('/Users/optimus/.openclaw/agents/tufail/agent/auth-profiles.json','utf8'));console.log(d.profiles['anthropic:default'].key)")

RESPONSE=$(curl -s https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d "{
    \"model\": \"claude-sonnet-4-5-20250929\",
    \"max_tokens\": 2000,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": \"You have access to the Figma MCP. Read this Figma frame: $FIGMA_URL\n\nExtract all visual properties (background colour, border, border radius, padding, font size, font weight, line height). Then map each property to the closest token from the PM3 design system vars in ~/ds-playground/packages/tokens/src/theme.css.ts.\n\nRespond with ONLY a JSON object like this:\n{\n  \\\"componentName\\\": \\\"Badge\\\",\n  \\\"tokens\\\": {\n    \\\"background\\\": \\\"vars.color.bgSuccess\\\",\n    \\\"border\\\": \\\"1px solid\\\",\n    \\\"borderColor\\\": \\\"vars.color.borderSuccess\\\",\n    \\\"borderRadius\\\": \\\"vars.radius.rFull\\\",\n    \\\"paddingVertical\\\": \\\"vars.spacing.s8\\\",\n    \\\"paddingHorizontal\\\": \\\"vars.spacing.s16\\\",\n    \\\"fontFamily\\\": \\\"vars.typography.fontFamilyBrand\\\",\n    \\\"fontSize\\\": \\\"vars.typography.fontSizeBodyMedium\\\",\n    \\\"color\\\": \\\"vars.color.textDefault\\\"\n  }\n}\"
    }]
  }")

echo $RESPONSE | node -e "
const d=require('fs').readFileSync('/dev/stdin','utf8');
const j=JSON.parse(d);
const text=j.content[0].text;
console.log(text);
"
