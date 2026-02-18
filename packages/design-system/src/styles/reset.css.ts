import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@acme-ds/tokens';

globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.body,
  color: vars.color.text,
  background: vars.color.background,
});
