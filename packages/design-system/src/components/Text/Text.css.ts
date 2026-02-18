import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

const base = style({
  margin: 0,
  fontFamily: vars.font.body,
  color: vars.color.text
});

export const text = styleVariants({
  body: [
    base,
    {
      fontSize: vars.fontSize.md,
      lineHeight: vars.lineHeight.normal
    }
  ],
  subtle: [
    base,
    {
      fontSize: vars.fontSize.sm,
      lineHeight: vars.lineHeight.normal,
      color: vars.color.textSubtle
    }
  ],
  heading: [
    base,
    {
      fontSize: vars.fontSize.xl,
      lineHeight: vars.lineHeight.tight,
      fontWeight: 700
    }
  ]
});
