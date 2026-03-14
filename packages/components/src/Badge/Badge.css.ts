
import { style } from '@vanilla-extract/css';
import { Pm3ColorSystemSuccessBg, Pm3ColorSystemSuccessBorder, Pm3ColorTextDefault, Pm3RadiusRadiusFull, Pm3SpacingSpacing8, Pm3SpacingSpacing16, Pm3TypographyFontFamilyBrand, Pm3TypographyFontSizeLabelMedium, Pm3TypographyFontWeightRegular, Pm3TypographyLetterSpacingBodyMedium, Pm3TypographyLineHeightLabelMedium } from '../../tokens/src/generated/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${Pm3SpacingSpacing8} ${Pm3SpacingSpacing16}`,
  borderRadius: Pm3RadiusRadiusFull,
  backgroundColor: Pm3ColorSystemSuccessBg,
  border: `1px solid ${Pm3ColorSystemSuccessBorder}`,
  gap: Pm3SpacingSpacing8,
  fontFamily: Pm3TypographyFontFamilyBrand,
  fontSize: Pm3TypographyFontSizeLabelMedium,
  fontWeight: Pm3TypographyFontWeightRegular,
  lineHeight: Pm3TypographyLineHeightLabelMedium,
  letterSpacing: Pm3TypographyLetterSpacingBodyMedium,
  color: Pm3ColorTextDefault,
});
