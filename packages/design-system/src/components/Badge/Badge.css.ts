import styled from 'styled-components';
import {
  Pm3ColorSystemSuccessBg,
  Pm3ColorSystemSuccessBorder,
  Pm3ColorTextDefault,
  Pm3RadiusRadiusFull,
  Pm3SpacingSpacing8,
  Pm3SpacingSpacing16,
  Pm3TypographyFontFamilyBrand,
  Pm3TypographyFontSizeBodyMedium,
  Pm3TypographyLineHeightBodyMedium,
  Pm3TypographyLetterSpacingBodyMedium,
  Pm3TypographyFontWeightRegular,
} from '@/packages/tokens/src/generated/tokens';

export const BadgeContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${Pm3SpacingSpacing8} ${Pm3SpacingSpacing16};
  gap: ${Pm3SpacingSpacing8};
  border-radius: ${Pm3RadiusRadiusFull};
  background-color: ${Pm3ColorSystemSuccessBg};
  border: 1px solid ${Pm3ColorSystemSuccessBorder};

  color: ${Pm3ColorTextDefault};
  font-family: ${Pm3TypographyFontFamilyBrand};
  font-size: ${Pm3TypographyFontSizeBodyMedium};
  line-height: ${Pm3TypographyLineHeightBodyMedium};
  letter-spacing: ${Pm3TypographyLetterSpacingBodyMedium};
  font-weight: ${Pm3TypographyFontWeightRegular};
`;
