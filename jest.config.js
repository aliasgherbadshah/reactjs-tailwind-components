module.exports = {
  testPathIgnorePatterns: ['/node_modules'],
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/svgTransform.js',
  },
};
