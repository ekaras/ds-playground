import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${vars.spacing.s8} ${vars.spacing.s16}`,
  borderRadius: vars.radius.full,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  lineHeight: vars.typography.lineHeightLabelMedium,
  fontWeight: vars.typography.fontWeightRegular,
  border: `1px solid ${vars.color.borderDefault}`,
  background: vars.color.bgSurface,
  color: vars.color.textDefault,
});

export const badgeSuccess = style({
  background: vars.color.systemSuccessBg,
  border: `1px solid ${vars.color.systemSuccessBorder}`,
});

export const badgeError = style({
  background: vars.color.systemErrorBg,
  border: `1px solid ${vars.color.systemErrorBorder}`,
});

export const badgeInfo = style({
  background: vars.color.systemInfoBg,
  border: `1px solid ${vars.color.systemInfoBorder}`,
});

export const badgeWarning = style({
  background: vars.color.systemWarningBg,
  border: `1px solid ${vars.color.systemWarningBorder}`,
});

export const badgePromotion = style({
  background: vars.color.systemPromotionBg,
  border: `1px solid ${vars.color.systemPromotionBorder}`,
});
