import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${vars.spacing.s2} ${vars.spacing.s8}`,
  borderRadius: vars.radius.full,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeCaptionDefault,
  lineHeight: vars.typography.lineHeightCaptionDefault,
  fontWeight: vars.typography.fontWeightMedium,
  border: `1px solid ${vars.color.borderDefault}`,
  background: vars.color.bgSurface,
  color: vars.color.textDefault,
});

export const badgeSuccess = style({
  background: vars.color.systemSuccessBg,
  border: `1px solid ${vars.color.systemSuccessBorder}`,
  color: vars.color.systemSuccessText,
});

export const badgeError = style({
  background: vars.color.systemErrorBg,
  border: `1px solid ${vars.color.systemErrorBorder}`,
  color: vars.color.systemErrorText,
});

export const badgeInfo = style({
  background: vars.color.systemInfoBg,
  border: `1px solid ${vars.color.systemInfoBorder}`,
  color: vars.color.systemInfoText,
});

export const badgeWarning = style({
  background: vars.color.systemWarningBg,
  border: `1px solid ${vars.color.systemWarningBorder}`,
  color: vars.color.systemWarningText,
});

export const badgePromotion = style({
  background: vars.color.systemPromotionBg,
  border: `1px solid ${vars.color.systemPromotionBorder}`,
  color: vars.color.systemPromotionText,
});
