import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['src/tokens/tokens-transformed.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'pm3',
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'core-colors.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'coreColors'
        },
        {
          destination: 'semantic-light.css',
          format: 'css/variables',
          options: { selector: ':root, [data-theme="light"]' },
          filter: (token) => token.path[0] === 'semanticLight'
        },
        {
          destination: 'semantic-dark.css',
          format: 'css/variables',
          options: { selector: '[data-theme="dark"]' },
          filter: (token) => token.path[0] === 'semanticDark'
        },
        {
          destination: 'spacing.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'spacing'
        },
        {
          destination: 'typography.css',
          format: 'css/variables',
          filter: (token) => token.path[0] === 'typography'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      prefix: 'pm3',
      buildPath: 'src/generated/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
});

sd.buildAllPlatforms();
