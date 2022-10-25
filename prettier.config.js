module.exports = {
  parser: 'babel',
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.json'],
      options: {
        parser: 'json5',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        parser: 'yaml',
      },
    },
    {
      files: ['*.md'],
      options: {
        parser: 'markdown',
      },
    },
  ],
}
