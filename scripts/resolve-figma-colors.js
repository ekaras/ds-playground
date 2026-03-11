#!/usr/bin/env node
// resolve-figma-colors.js
// Reads figma-to-data output and resolves RGB fills to PM3 token names

const fs = require('fs');
const path = require('path');

const tokensPath = path.join(__dirname, '../packages/tokens/src/tokens/figma-variables.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath));

// Build hex → token name reverse lookup from semanticColors only
const hexToToken = {};
for (const [mode, values] of Object.entries(tokens.semanticColors)) {
  for (const [tokenName, hex] of Object.entries(values)) {
    if (!hexToToken[hex]) hexToToken[hex] = {};
    hexToToken[hex][mode] = tokenName;
  }
}

// Convert Figma RGBA (0-1) to hex
function rgbaToHex(r, g, b) {
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Read piped JSON from figma-to-data.sh
let input = '';
process.stdin.on('data', d => input += d);
process.stdin.on('end', () => {
  try {
    const doc = JSON.parse(input);
    const results = {};

    // Walk all nodes looking for fills with color values
    function walk(node, variantName) {
      if (node.type === 'COMPONENT') variantName = node.name;
      
      if (node.fills && node.fills.length > 0) {
        node.fills.forEach(fill => {
          if (fill.color) {
            const hex = rgbaToHex(fill.color.r, fill.color.g, fill.color.b);
            const token = hexToToken[hex];
            if (token && variantName) {
              if (!results[variantName]) results[variantName] = {};
              results[variantName][node.name + '_fill'] = {
                hex,
                light: token.light || null,
                dark: token.dark || null
              };
            }
          }
        });
      }

      if (node.children) node.children.forEach(child => walk(child, variantName));
    }

    walk(doc, null);
    console.log(JSON.stringify(results, null, 2));
  } catch (e) {
    console.error('Parse error:', e.message);
  }
});
