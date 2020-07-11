module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
  ],
  setupFilesAfterEnv: ['./jasmine.js'],
  collectCoverageFrom: ['packages/**/src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: [
  ],
};
