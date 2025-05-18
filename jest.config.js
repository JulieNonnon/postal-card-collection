module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: { //pour que Jest comprenne que @ fait référence à src
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['vue', 'ts', 'js', 'json'],
  testMatch: ['**/tests/**/*.spec.ts'],
//   testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
};
