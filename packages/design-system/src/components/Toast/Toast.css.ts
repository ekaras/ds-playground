import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const toast = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 380,
  height: 56,
  padding: `${vars.spacing.s12} ${vars.spacing.s20}`,
  background: vars.color.bgSurface,
  border: `1px solid ${vars.color.borderDefault}`,
  borderRadius: 8,
  gap: vars.spacing.s12,
});

export const toastContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.s4,
  flex: 1,
});

export const toastTitle = style({
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  fontWeight: 600,
  color: vars.color.textDefault,
  margin: 0,
});

export const toastTitleSuccess = style({
  color: vars.color.systemSuccessText,
});

export const toastMessage = style({
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodySmall,
  fontWeight: 400,
  color: vars.color.textDefault,
  margin: 0,
});

export const toastMessageSuccess = style({
  color: vars.color.systemSuccessText,
});

export const toastCloseButtonSuccess = style({
  color: vars.color.systemSuccessText,
});

export const toastCloseButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  color: vars.color.textDefault,
  fontSize: 16,
  fontWeight: 'bold',
  ':hover': {
    opacity: 0.7,
  },
  ':focus': {
    outline: `2px solid ${vars.color.borderDefault}`,
    outlineOffset: 2,
  },
});

export const toastSuccess = style({
  background: vars.color.systemSuccessBg,
  borderColor: vars.color.systemSuccessBorder,
});
