module.exports = {
  plugins: ['eslint-plugin-conform'],
  rules: {
    'eslint-plugin-conform/no-http-url': 'warn',
    'eslint-plugin-conform/no-secret-info': 'error',
  },
};
