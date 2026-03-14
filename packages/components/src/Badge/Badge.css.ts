import { style } from '@vanilla-extract/css';
import { Pm3ColorSystemSuccess50, Pm3ColorSystemSuccess400, Pm3ColorInk700, Pm3RadiusRadiusFull, Pm3SpacingSpacing8, Pm3SpacingSpacing16, Pm3TypographyFontFamilyBrand, Pm3TypographyFontWeightRegular, Pm3TypographyFontSizeLabelMedium, Pm3TypographyLineHeightLabelMedium, Pm3TypographyLetterSpacingLabelMedium } from '@pm3/tokens';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${Pm3SpacingSpacing8} ${Pm3SpacingSpacing16}`,
  borderRadius: Pm3RadiusRadiusFull,
  backgroundColor: Pm3ColorSystemSuccess50,
  border: `1px solid ${Pm3ColorSystemSuccess400}`,
  boxSizing: 'border-box',
});

export const label = style({
  fontFamily: Pm3TypographyFontFamilyBrand,
  fontWeight: Pm3TypographyFontWeightRegular,
  fontSize: Pm3TypographyFontSizeLabelMedium,
  lineHeight: Pm3TypographyLineHeightLabelMedium,
  letterSpacing: Pm3TypographyLetterSpacingLabelMedium,
  color: Pm3ColorInk700,
});
