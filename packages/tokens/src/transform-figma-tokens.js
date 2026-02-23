import fs from 'fs';

const input = JSON.parse(fs.readFileSync('./src/tokens/figma-variables.json', 'utf8'));
const output = {};

// Core colours
output.coreColors = {};
Object.entries(input.coreColors.default).forEach(([key, value]) => {
  output.coreColors[key] = { value, type: 'color' };
});

// Semantic light
output.semanticLight = {};
Object.entries(input.semanticColors.light).forEach(([key, value]) => {
  output.semanticLight[key] = { value, type: 'color' };
});

// Semantic dark
output.semanticDark = {};
Object.entries(input.semanticColors.dark).forEach(([key, value]) => {
  output.semanticDark[key] = { value, type: 'color' };
});

// Spacing and radius
output.spacing = {};
Object.entries(input.spacingAndRadius.default).forEach(([key, value]) => {
  const type = key.startsWith('radius') ? 'dimension' : 'dimension';
  output.spacing[key] = { value: `${value}px`, type };
});

// Typography
output.typography = {};
Object.entries(input.typography.default).forEach(([key, value]) => {
  const type = key.startsWith('fontFamily') ? 'fontFamily' :
               key.startsWith('fontWeight') ? 'fontWeight' :
               key.startsWith('fontSize') || key.startsWith('lineHeight') ? 'dimension' : 'number';
  const val = typeof value === 'number' && !key.startsWith('fontWeight') ? `${value}px` : value;
  output.typography[key] = { value: val, type };
});

fs.writeFileSync('./src/tokens/tokens-transformed.json', JSON.stringify(output, null, 2));
console.log('Transformation complete — tokens-transformed.json created');
