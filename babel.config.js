module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env'],
    },
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    build: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            loose: true,
            useBuiltIns: 'usage',
          },
        ],
      ],
    },
  },
}
