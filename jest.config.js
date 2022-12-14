module.exports = {
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/__tests__/"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  testPathIgnorePatterns: [
    "/(?:production_)?node_modules/",
    ".d.ts$",
    "__tests__/fixtures",
    "__tests__/helpers/*.+(ts|tsx|js)",
    "__mocks__",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  // 引入其他功能，入口执行脚本
  // setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  globals: {
    "ts-test": {},
  },
}
