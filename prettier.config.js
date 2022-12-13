module.exports = {
  parser: "babel",
  trailingComma: "es5",
  semi: false,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  arrowParens: "always",
  overrides: [
    {
      files: ["*.ts"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
    {
      files: ["*.yml", "*.yaml"],
      options: {
        parser: "yaml",
      },
    },
    {
      files: ["*.md"],
      options: {
        parser: "markdown",
      },
    },
  ],
}
