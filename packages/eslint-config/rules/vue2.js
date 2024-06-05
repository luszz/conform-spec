/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * @link https://eslint.vuejs.org/rules/
 */

const base = require('eslint-plugin-vue/lib/configs/base.js');
const vue2Essential = require('eslint-plugin-vue/lib/configs/vue2-essential.js');
const vue2StronglyRecommended = require('eslint-plugin-vue/lib/configs/vue2-strongly-recommended.js');
const vue2Recommended = require('eslint-plugin-vue/lib/configs/vue2-recommended.js');

module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    ...base.rules,
    ...vue2Essential.rules,
    ...vue2StronglyRecommended.rules,
    ...vue2Recommended.rules,
    'node/prefer-global/process': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    // this is deprecated
    'vue/component-tags-order': 'off',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
    }],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-setup-props-reactivity-loss': 'off',
    'vue/no-sparse-arrays': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-html': 'off',
    'vue/object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-template': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
