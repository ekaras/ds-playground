import { style } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.systemSuccessBg,
  border: `1px solid ${vars.color.systemSuccessBorder}`,
  borderRadius: vars.radius.full,
  padding: `${vars.spacing.s8} ${vars.spacing.s16}`,
  fontFamily: vars.typography.fontFamilyBrand,
  fontWeight: vars.typography.fontWeightRegular,
  fontSize: vars.typography.fontSizeBodyMedium,
  lineHeight: vars.typography.lineHeightBodyMedium,
  color: vars.color.textDefault,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
