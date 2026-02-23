import StyleDictionary from 'style-dictionary';

const configs = [
  {
    source: ['src/tokens/transformed/core-colors.json'],
    output: 'core-colors.css',
    selector: ':root'
  },
  {
    source: ['src/tokens/transformed/semantic-light.json'],
    output: 'semantic-light.css',
    selector: ':root, [data-theme="light"]'
  },
  {
    source: ['src/tokens/transformed/semantic-dark.json'],
    output: 'semantic-dark.css',
    selector: '[data-theme="dark"]'
  },
  {
    source: ['src/tokens/transformed/spacing.json'],
    output: 'spacing.css',
    selector: ':root'
  },
  {
    source: ['src/tokens/transformed/radius.json'],
    output: 'radius.css',
    selector: ':root'
  },
  {
    source: ['src/tokens/transformed/typography.json'],
    output: 'typography.css',
    selector: ':root'
  }
];

for (const cfg of configs) {
  const sd = new StyleDictionary({
    source: cfg.source,
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: 'pm3',
        buildPath: 'src/generated/',
        files: [{
          destination: cfg.output,
          format: 'css/variables',
          options: { selector: cfg.selector }
        }]
      }
    }
  });
  await sd.buildAllPlatforms();
}

// JS output with all tokens
const sdJs = new StyleDictionary({
  source: ['src/tokens/transformed/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      prefix: 'pm3',
      buildPath: 'src/generated/',
      files: [{ destination: 'tokens.js', format: 'javascript/es6' }]
    }
  }
});
await sdJs.buildAllPlatforms();

console.log('All token files built successfully');
