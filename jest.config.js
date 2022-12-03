const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/.babelrc',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  resolver: `<rootDir>/resolver.js`,
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.{ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ['node_modules'],
};
