import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const input = style({
  display: 'block',
  width: '100%',
  border: `1px solid ${vars.color.borderDefault}`,
  borderRadius: vars.radius.r8,
  padding: `${vars.spacing.s8} ${vars.spacing.s12}`,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  color: vars.color.textDefault,
  background: vars.color.bgDefault,
  transition: 'border-color 180ms ease',
  selectors: {
    '&:focus': {
      outline: `3px solid ${vars.color.borderFocus}`,
      outlineOffset: '2px',
      borderColor: vars.color.borderFocus
    },
    '&:disabled': {
      background: vars.color.actionDisabledBg,
      color: vars.color.actionDisabledText,
      cursor: 'not-allowed'
    }
  }
});

export const inputError = style({
  borderColor: vars.color.borderStrong,
  selectors: {
    '&:focus': {
      outline: `3px solid ${vars.color.borderStrong}`,
      borderColor: vars.color.borderStrong
    }
  }
});
