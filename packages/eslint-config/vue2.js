module.exports = {
  extends: [
    './index',
    './rules/vue2',
  ].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@babel/eslint-parser',
  },
};
