---
name: pm3-token-sync
description: Update PM3 design system tokens and rebuild the component pipeline. Use when asked to change a colour, spacing, or any design token value in the PM3 design system. Triggers on instructions like "change the primary button colour to X", "update spacing token Y to Z", or "sync tokens from Figma".
---

# PM3 Token Sync

## IMPORTANT: Only use the approved script

Never edit token files directly. Never use npm. Always use exactly this command:
```bash
cd ~/ds-playground && ./scripts/update-token.sh <tokenName> "<hexValue>"
```

## Token name mapping

- "primary button colour" or "primary colour" → `actionPrimaryBg`
- "primary button hover" → `actionPrimaryBgHover`
- "primary button text" → `actionPrimaryText`
- "background" → `bgDefault`
- "text colour" → `textDefault`
- "focus ring" → `borderFocus`

## Example

Change primary button to green:
```bash
cd ~/ds-playground && ./scripts/update-token.sh actionPrimaryBg "#00A86B"
```

## After running

Report exactly:
1. The command you ran
2. The output from the script
3. Tell user to refresh Storybook at localhost:6006
