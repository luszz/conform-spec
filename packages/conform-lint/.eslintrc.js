module.exports = {
  extends: ['eslint-config-conform/typescript/node', 'prettier'],
  parserOptions: {
    project: ['**/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
};
