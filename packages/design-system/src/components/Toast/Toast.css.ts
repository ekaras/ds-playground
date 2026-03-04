import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const toast = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.spacing.s12} ${vars.spacing.s20}`,
  background: vars.color.bgSurface,
  border: `1px solid ${vars.color.borderDefault}`,
  color: vars.color.textDefault,
  borderRadius: vars.radius.r8,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodySmall,
  lineHeight: vars.typography.lineHeightBodySmall,
  gap: vars.spacing.s8,
});

export const toastSuccess = style({
  background: vars.color.systemSuccessBg,
  border: `1px solid ${vars.color.systemSuccessBorder}`,
  color: vars.color.systemSuccessText,
});

export const toastError = style({
  background: vars.color.systemErrorBg,
  border: `1px solid ${vars.color.systemErrorBorder}`,
  color: vars.color.systemErrorText,
});

export const toastInfo = style({
  background: vars.color.systemInfoBg,
  border: `1px solid ${vars.color.systemInfoBorder}`,
  color: vars.color.systemInfoText,
});

export const toastWarning = style({
  background: vars.color.systemWarningBg,
  border: `1px solid ${vars.color.systemWarningBorder}`,
  color: vars.color.systemWarningText,
});

export const toastPromotion = style({
  background: vars.color.systemPromotionBg,
  border: `1px solid ${vars.color.systemPromotionBorder}`,
  color: vars.color.systemPromotionText,
});
