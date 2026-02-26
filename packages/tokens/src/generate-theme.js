import fs from 'fs';
import path from 'path';

/**
 * Convert camelCase to kebab-case
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Build theme contract object from transformed tokens
 */
function buildThemeContract() {
  const transformedDir = './src/tokens/transformed';
  const files = fs.readdirSync(transformedDir).filter(f => f.endsWith('.json'));
  
  const themeContract = {};
  
  // We'll use semantic-light as the source for color tokens
  // (both light and dark have the same keys)
  const semanticLight = JSON.parse(
    fs.readFileSync(path.join(transformedDir, 'semantic-light.json'), 'utf8')
  );
  
  // Build color tokens from semantic light
  if (semanticLight.color) {
    themeContract.color = {};
    Object.keys(semanticLight.color).forEach(key => {
      const cssVar = `pm3-color-${toKebabCase(key)}`;
      themeContract.color[key] = cssVar;
    });
  }
  
  // Build spacing tokens
  const spacingFile = path.join(transformedDir, 'spacing.json');
  if (fs.existsSync(spacingFile)) {
    const spacing = JSON.parse(fs.readFileSync(spacingFile, 'utf8'));
    if (spacing.spacing) {
      themeContract.spacing = {};
      Object.keys(spacing.spacing).forEach(key => {
        // Convert spacing0 -> s0, spacing2 -> s2, etc.
        const shortKey = key.replace('spacing', 's');
        const cssVar = `pm3-spacing-${key}`;
        themeContract.spacing[shortKey] = cssVar;
      });
    }
  }
  
  // Build radius tokens
  const radiusFile = path.join(transformedDir, 'radius.json');
  if (fs.existsSync(radiusFile)) {
    const radius = JSON.parse(fs.readFileSync(radiusFile, 'utf8'));
    if (radius.radius) {
      themeContract.radius = {};
      Object.keys(radius.radius).forEach(key => {
        // Convert radius0 -> r0, radius2 -> r2, radiusFull -> full, etc.
        let shortKey = key.replace('radius', 'r');
        // Special case for 'full'
        if (key === 'radiusFull') {
          shortKey = 'full';
        }
        const cssVar = `pm3-radius-${toKebabCase(key)}`;
        themeContract.radius[shortKey] = cssVar;
      });
    }
  }
  
  // Build typography tokens
  const typographyFile = path.join(transformedDir, 'typography.json');
  if (fs.existsSync(typographyFile)) {
    const typography = JSON.parse(fs.readFileSync(typographyFile, 'utf8'));
    if (typography.typography) {
      themeContract.typography = {};
      Object.keys(typography.typography).forEach(key => {
        const cssVar = `pm3-typography-${toKebabCase(key)}`;
        themeContract.typography[key] = cssVar;
      });
    }
  }
  
  return themeContract;
}

/**
 * Generate theme.css.ts file
 */
function generateThemeFile() {
  const themeContract = buildThemeContract();
  
  const output = `import { createGlobalThemeContract } from '@vanilla-extract/css';

/**
 * Auto-generated theme contract from Figma tokens.
 * DO NOT EDIT MANUALLY - run \`pnpm run build:tokens\` to regenerate.
 */
export const vars = createGlobalThemeContract(${JSON.stringify(themeContract, null, 2)});
`;
  
  fs.writeFileSync('./src/theme.css.ts', output);
  console.log('✓ theme.css.ts generated');
  
  // Log token counts
  Object.entries(themeContract).forEach(([category, tokens]) => {
    console.log(`  ${category}: ${Object.keys(tokens).length} tokens`);
  });
}

generateThemeFile();
