import { styled } from '../../styled';
import React from 'react';
import { Pm3ColorInk700, Pm3ColorSystemSuccessBg, Pm3ColorSystemSuccessBorder, Pm3RadiusRadiusFull, Pm3SpacingSpacing8, Pm3SpacingSpacing16, Pm3TypographyFontFamilyBrand, Pm3TypographyFontSizeLabelMedium, Pm3TypographyFontWeightRegular, Pm3TypographyLineHeightLabelMedium, Pm3TypographyLetterSpacingLabelMedium } from '@pm3-ds/tokens/generated/tokens';

const StyledBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Pm3SpacingSpacing8} ${Pm3SpacingSpacing16};
  background-color: ${Pm3ColorSystemSuccessBg};
  border: 1px solid ${Pm3ColorSystemSuccessBorder};
  border-radius: ${Pm3RadiusRadiusFull};
  font-family: ${Pm3TypographyFontFamilyBrand};
  font-size: ${Pm3TypographyFontSizeLabelMedium};
  font-weight: ${Pm3TypographyFontWeightRegular};
  line-height: ${Pm3TypographyLineHeightLabelMedium};
  letter-spacing: ${Pm3TypographyLetterSpacingLabelMedium};
  color: ${Pm3ColorInk700};
  white-space: nowrap;
`;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const Badge = ({ label, ...props }: BadgeProps) => {
  return <StyledBadge {...props}>{label}</StyledBadge>;
};