import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const input = style({
  width: '100%',
  minHeight: '40px',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  padding: `0 ${vars.space[3]}`,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  color: vars.color.text,
  background: vars.color.background,
  transition: `border-color ${vars.motion.fast} ease`,
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${vars.color.focus}`,
      outlineOffset: '2px',
      borderColor: vars.color.focus
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.color.surface,
      color: vars.color.textSubtle
    }
  }
});

export const inputError = style({
  borderColor: vars.color.danger
});
