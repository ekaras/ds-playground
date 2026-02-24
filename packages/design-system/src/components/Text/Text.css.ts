import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

const base = style({
  margin: 0,
  fontFamily: `var(--${vars.typography.fontFamilyBrand})`,
  color: `var(--${vars.color.textDefault})`
});

export const text = styleVariants({
  body: [
    base,
    {
      fontSize: `var(--${vars.typography.fontSizeBodyLarge})`,
      lineHeight: `var(--${vars.typography.lineHeightBodyLarge})`
    }
  ],
  subtle: [
    base,
    {
      fontSize: `var(--${vars.typography.fontSizeBodyMedium})`,
      lineHeight: `var(--${vars.typography.lineHeightBodyMedium})`,
      color: `var(--${vars.color.textSubtle})`
    }
  ],
  heading: [
    base,
    {
      fontSize: `var(--${vars.typography.fontSizeLabelLarge})`,
      lineHeight: `var(--${vars.typography.lineHeightBodyLarge})`,
      fontWeight: 700
    }
  ]
});
