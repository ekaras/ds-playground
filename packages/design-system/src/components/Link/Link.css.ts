import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.s8,
  background: 'transparent',
  border: 'none',
  color: vars.color.textDefault,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  fontWeight: 500,
  lineHeight: vars.typography.lineHeightBodyMedium,
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: 0,
  transition: 'all 180ms ease',
  selectors: {
    '&:hover': {
      color: vars.color.textInverse,
    },
  },
});

export const linkFocus = style({
  outline: `3px solid ${vars.color.borderFocus}`,
  outlineOffset: '2px',
});

export const linkActive = style({
  color: vars.color.actionPrimaryBg,
  fontWeight: 600,
});

export const linkDisabled = style({
  color: vars.color.actionDisabledText,
  textDecoration: 'none',
  cursor: 'not-allowed',
  opacity: 0.5,
});
