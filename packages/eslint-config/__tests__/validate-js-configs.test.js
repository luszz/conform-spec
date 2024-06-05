/**
 * 验证 JS
 */

const assert = require('assert');
const eslint = require('eslint');
const path = require('path');
const sumBy = require('lodash/sumBy');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

describe('Validate JS configs', () => {
  test('Validate eslint-config-harmony', async () => {
    const configPath = './index.js';
    const filePath = path.join(__dirname, './fixtures/index.js');
    
    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false, // 如果不关这个参数，会将目录下的 eslintrc 与 overrideConfigFile merge
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    expect(sumBy(results, 'fatalErrorCount')).toBe(0);
    expect(sumBy(results, 'errorCount')).toBe(2);
    expect(sumBy(results, 'warningCount')).toBe(1);
  });

  it('Validate eslint-config-harmony/es5', async () => {
    const configPath = './es5.js';
    const filePath = path.join(__dirname, './fixtures/es5.js');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 0);

    // 验证 es5 覆盖的规则是否正常，取 @stylistic/comma-dangle 进行测试
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId === '@stylistic/comma-dangle';
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('Validate eslint-config-harmony/vue2', async () => {
    const configPath = './vue2.js';
    const filePath = path.join(__dirname, './fixtures/vue2.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 0);

    // 验证 eslint-plugin-vue 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('Validate eslint-config-harmony/vue3', async () => {
    const configPath = './vue3.js';
    const filePath = path.join(__dirname, './fixtures/vue3.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 1);

    // 验证 eslint-plugin-vue 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);
  });

  it('Validate eslint-config-encode/node', async () => {
    const configPath = './node.js';
    const filePath = path.join(__dirname, './fixtures/node.js');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(config.env.node, true);
    assert.strictEqual(config.plugins.includes('node'), true);

    // 验证已开启的 link 规则是否校验正常
    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, warningCount } = results[0];
    const ruleIds = Array.from(messages.map((item) => item.ruleId));
    assert.strictEqual(ruleIds.includes('node/prefer-promises/fs'), true);
    assert.strictEqual(ruleIds.includes('no-unused-vars'), true);
    assert.strictEqual(ruleIds.includes('node/no-new-require'), true);
    assert.strictEqual(ruleIds.includes('semi'), false);
    assert.strictEqual(ruleIds.includes('quotes'), false);
    assert.strictEqual(errorCount, 5);
    assert.strictEqual(warningCount, 3);

    // 验证已关闭的 link 规则是否校验正常，以 node/exports-style 为例
    assert.strictEqual(ruleIds.includes('node/exports-style'), false);
  });
});
