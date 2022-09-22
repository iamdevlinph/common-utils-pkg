/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.ts', '!src/**/*.{js,jsx}'],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['jest-chain'],
};
