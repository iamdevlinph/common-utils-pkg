/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['dist/*'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
};
