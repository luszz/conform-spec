module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/fixtures/template/init',
    '<rootDir>/test/fixtures/template/temp',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
