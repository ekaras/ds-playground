import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const link = style({
  display: 'inline-flex',
  alignItems: 'flex-end',
  gap: vars.spacing.s4,
  borderRadius: vars.radius.r2,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  lineHeight: vars.typography.lineHeightBodyMedium,
  letterSpacing: vars.typography.letterSpacingBodyMedium,
  fontWeight: vars.typography.fontWeightRegular,
  color: vars.color.textDefault,
  textDecoration: 'underline',
  textDecorationSkipInk: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.borderFocus}`,
      outlineOffset: '2px',
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'underline',
    },
    '&[aria-disabled="true"]': {
      color: vars.color.textDisabled,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
});

export const linkIcon = style({
  flexShrink: 0,
  marginBottom: '2px',
});
