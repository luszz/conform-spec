module.exports = {
  extends: ['./index', './rules/vue3'].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
