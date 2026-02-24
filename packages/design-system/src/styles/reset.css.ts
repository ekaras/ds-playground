import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0
});

globalStyle('body', {
  fontFamily: vars.typography.fontFamilyBrand,
  color: vars.color.textDefault,
  background: vars.color.bgDefault,
});
