import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const button = style({
  border: `1px solid ${vars.color.brand}`,
  background: vars.color.brand,
  color: vars.color.background,
  borderRadius: vars.radius.md,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.normal,
  fontWeight: 600,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  minHeight: '40px',
  cursor: 'pointer',
  transition: `all ${vars.motion.base} ease`,
  selectors: {
    '&:hover': { background: vars.color.brandHover, borderColor: vars.color.brandHover },
    '&:focus-visible': {
      outline: `3px solid ${vars.color.focus}`,
      outlineOffset: '2px'
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  }
});
