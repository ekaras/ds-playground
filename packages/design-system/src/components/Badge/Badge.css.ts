import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.full,
  padding: `${vars.spacing.s8} ${vars.spacing.s16}`,
  fontFamily: vars.typography.fontFamilyBrand,
  fontWeight: vars.typography.fontWeightRegular,
  fontSize: vars.typography.fontSizeBodyMedium,
  lineHeight: vars.typography.lineHeightBodyMedium,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  background: vars.color.bgSurface,
  border: `1px solid ${vars.color.borderDefault}`,
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

export const badgeWarning = style({
  background: vars.color.systemWarningBg,
  border: `1px solid ${vars.color.systemWarningBorder}`,
  color: vars.color.systemWarningText,
});
