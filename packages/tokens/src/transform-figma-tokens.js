import fs from 'fs';

const input = JSON.parse(fs.readFileSync('./src/tokens/figma-variables.json', 'utf8'));

// Core colours
const coreColors = { color: {} };
Object.entries(input.coreColors.default).forEach(([key, value]) => {
  coreColors.color[key] = { value, type: 'color' };
});

// Semantic light — flat, no nesting
const semanticLight = { color: {} };
Object.entries(input.semanticColors.light).forEach(([key, value]) => {
  semanticLight.color[key] = { value, type: 'color' };
});

// Semantic dark — flat, no nesting
const semanticDark = { color: {} };
Object.entries(input.semanticColors.dark).forEach(([key, value]) => {
  semanticDark.color[key] = { value, type: 'color' };
});

// Spacing
const spacing = { spacing: {} };
Object.entries(input.spacingAndRadius.default).forEach(([key, value]) => {
  if (key.startsWith('spacing')) {
    spacing.spacing[key] = { value: `${value}px`, type: 'dimension' };
  }
});

// Radius
const radius = { radius: {} };
Object.entries(input.spacingAndRadius.default).forEach(([key, value]) => {
  if (key.startsWith('radius')) {
    radius.radius[key] = { value: `${value}px`, type: 'dimension' };
  }
});

// Typography
const typography = { typography: {} };
Object.entries(input.typography.default).forEach(([key, value]) => {
  const type = key.startsWith('fontFamily') ? 'fontFamily' :
               key.startsWith('fontWeight') ? 'fontWeight' : 'dimension';
  const val = typeof value === 'number' ? `${value}px` : value;
  typography.typography[key] = { value: val, type };
});

fs.mkdirSync('./src/tokens/transformed', { recursive: true });
fs.writeFileSync('./src/tokens/transformed/core-colors.json', JSON.stringify(coreColors, null, 2));
fs.writeFileSync('./src/tokens/transformed/semantic-light.json', JSON.stringify(semanticLight, null, 2));
fs.writeFileSync('./src/tokens/transformed/semantic-dark.json', JSON.stringify(semanticDark, null, 2));
fs.writeFileSync('./src/tokens/transformed/spacing.json', JSON.stringify(spacing, null, 2));
fs.writeFileSync('./src/tokens/transformed/radius.json', JSON.stringify(radius, null, 2));
fs.writeFileSync('./src/tokens/transformed/typography.json', JSON.stringify(typography, null, 2));

console.log('Transformation complete — 6 token files created');
