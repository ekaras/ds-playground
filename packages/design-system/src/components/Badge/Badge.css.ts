import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.s4} ${vars.spacing.s12}`,
  background: vars.color.bgSurface,
  border: `1px solid ${vars.color.borderDefault}`,
  color: vars.color.textDefault,
  borderRadius: vars.radius.full,
  fontFamily: vars.typography.fontFamilyBrand,
  fontSize: vars.typography.fontSizeBodyMedium,
  lineHeight: vars.typography.fontSizeBodyMedium,
  fontWeight: 400,
  gap: vars.spacing.s4,
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
