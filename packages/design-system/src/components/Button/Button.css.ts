import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const button = style({
  border: 'none',
  background: vars.color.actionPrimaryBg,
  color: vars.color.actionPrimaryText,
  borderRadius: vars.radius.full,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeLabelLarge,
  lineHeight: vars.typography.lineHeightBodyLarge,
  fontWeight: 600,
  padding: `${vars.spacing.s8} ${vars.spacing.s16}`,
  minHeight: '40px',
  cursor: 'pointer',
  transition: 'all 180ms ease',
  selectors: {
    '&:hover': {
      background: vars.color.actionPrimaryBgHover,
    },
    '&:focus-visible': {
      outline: `3px solid ${vars.color.borderFocus}`,
      outlineOffset: '2px'
    },
    '&:disabled': {
      background: vars.color.actionDisabledBg,
      color: vars.color.actionDisabledText,
      cursor: 'not-allowed',
    }
  }
});
