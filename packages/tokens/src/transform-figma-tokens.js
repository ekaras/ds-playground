import fs from 'fs';

const input = JSON.parse(fs.readFileSync('./src/tokens/figma-variables.json', 'utf8'));

/**
 * Convert camelCase to kebab-case
 * e.g., actionPrimaryBg -> action-primary-bg
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Detect token type from value
 */
function detectType(value, key) {
  // Check if it's a hex color
  if (typeof value === 'string' && value.startsWith('#')) {
    return 'color';
  }
  // Font family check
  if (key.toLowerCase().includes('fontfamily') || key.toLowerCase().includes('font-family')) {
    return 'fontFamily';
  }
  // Font weight check
  if (key.toLowerCase().includes('fontweight') || key.toLowerCase().includes('font-weight')) {
    return 'fontWeight';
  }
  // Default to dimension for numbers
  if (typeof value === 'number') {
    return 'dimension';
  }
  // String values (like font families or other text)
  return 'string';
}

/**
 * Format value based on type
 */
function formatValue(value, type) {
  if (type === 'dimension' && typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

/**
 * Process a flat object of tokens
 */
function processTokenGroup(tokens, categoryKey) {
  const result = {};
  result[categoryKey] = {};
  
  Object.entries(tokens).forEach(([key, value]) => {
    const type = detectType(value, key);
    const formattedValue = formatValue(value, type);
    result[categoryKey][key] = { value: formattedValue, type };
  });
  
  return result;
}

/**
 * Separate spacing and radius tokens
 */
function splitSpacingAndRadius(tokens) {
  const spacing = { spacing: {} };
  const radius = { radius: {} };
  
  Object.entries(tokens).forEach(([key, value]) => {
    const type = detectType(value, key);
    const formattedValue = formatValue(value, type);
    
    if (key.toLowerCase().startsWith('spacing')) {
      spacing.spacing[key] = { value: formattedValue, type };
    } else if (key.toLowerCase().startsWith('radius')) {
      radius.radius[key] = { value: formattedValue, type };
    }
  });
  
  return { spacing, radius };
}

// Process all token groups dynamically
const outputs = {};

// Core colors
if (input.coreColors?.default) {
  outputs.coreColors = processTokenGroup(input.coreColors.default, 'color');
}

// Semantic colors - light theme
if (input.semanticColors?.light) {
  outputs.semanticLight = processTokenGroup(input.semanticColors.light, 'color');
}

// Semantic colors - dark theme
if (input.semanticColors?.dark) {
  outputs.semanticDark = processTokenGroup(input.semanticColors.dark, 'color');
}

// Spacing and radius (need to be split)
if (input.spacingAndRadius?.default) {
  const { spacing, radius } = splitSpacingAndRadius(input.spacingAndRadius.default);
  outputs.spacing = spacing;
  outputs.radius = radius;
}

// Typography
if (input.typography?.default) {
  outputs.typography = processTokenGroup(input.typography.default, 'typography');
}

// Write all outputs
fs.mkdirSync('./src/tokens/transformed', { recursive: true });

Object.entries(outputs).forEach(([name, data]) => {
  const fileName = toKebabCase(name);
  fs.writeFileSync(
    `./src/tokens/transformed/${fileName}.json`,
    JSON.stringify(data, null, 2)
  );
});

const fileCount = Object.keys(outputs).length;
console.log(`Transformation complete — ${fileCount} token files created`);
console.log('Files:', Object.keys(outputs).map(k => toKebabCase(k) + '.json').join(', '));
