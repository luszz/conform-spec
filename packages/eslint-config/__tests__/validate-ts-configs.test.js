/**
 * 验证 TS 规则
 */

const assert = require('assert');
const eslint = require('eslint');
const path = require('path');
const sumBy = require('lodash/sumBy');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

describe('Validate TS configs', () => {
  it('Validate eslint-config-harmony/typescript', async () => {
    const configPath = './typescript/index.js';
    const filePath = path.join(__dirname, './fixtures/ts.ts');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.equal(sumBy(results, 'warningCount'), 0);

    // 验证 eslint-plugin-typescript 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return (
        result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1
      );
    });
    assert.notEqual(errorReportedByReactPlugin.length, 0);

    const errorReportedByNoRedeclare = messages.filter((result) => {
      return result.ruleId === 'no-redeclare';
    });
    assert.equal(errorReportedByNoRedeclare.length, 0);

    // 验证 eslint-import-resolver-typescript 工作是否正常
    const filePath2 = path.join(__dirname, './fixtures/ts-import-a.ts');
    const filePath3 = path.join(__dirname, './fixtures/ts-import-b.ts');
    const reports2 = cli.lintFiles([filePath2, filePath3]);
    assert.ok(reports2.errorCount !== 0 || reports2.warnCount !== 0);
  });

  it('Validate eslint-config-harmony/typescript/vue3', async () => {
    const configPath = './typescript/vue3.js';
    const filePath = path.join(__dirname, './fixtures/ts-vue3.vue');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));

    // 验证 lint 工作是否正常
    const results = await cli.lintFiles([filePath]);
    assert.equal(sumBy(results, 'fatalErrorCount'), 0);
    assert.notEqual(sumBy(results, 'errorCount'), 0);
    assert.notEqual(sumBy(results, 'warningCount'), 1);

    // 验证 eslint-plugin-vue 及 @typescript-eslint 工作是否正常
    const { messages } = results[0];
    const errorReportedByReactPlugin = messages.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('vue/') !== -1;
    });
    const errorReportedByTSPlugin = messages.filter((result) => {
      return (
        result.ruleId && result.ruleId.indexOf('@typescript-eslint/') !== -1
      );
    });
    assert.notEqual(errorReportedByReactPlugin.length, 1);
    assert.notEqual(errorReportedByTSPlugin.length, 1);
  });

  it('Validate eslint-config-harmony/typescript/node', async () => {
    const configPath = './typescript/node.js';
    const filePath = path.join(__dirname, './fixtures/ts-node.ts');

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false,
      overrideConfig: {
        parserOptions: {
          project: path.join(__dirname, './fixtures/tsconfig.json'),
        },
      },
    });

    // 验证导出的 config 是否正常
    const config = await cli.calculateConfigForFile(filePath);
    assert.ok(isObject(config));
    assert.strictEqual(config.env.node, true);
    assert.strictEqual(config.plugins.includes('node'), true);

    // 验证已开启的 link 规则是否校验正常
    const results = await cli.lintFiles([filePath]);
    const { messages, errorCount, warningCount } = results[0];
    console.log(results[0])
    const ruleIds = Array.from(messages.map((item) => item.ruleId));

    assert.strictEqual(ruleIds.includes('node/prefer-promises/fs'), true);
    assert.strictEqual(
      ruleIds.includes('@typescript-eslint/no-unused-vars'),
      true
    );
    assert.strictEqual(ruleIds.includes('no-console'), true);
    assert.strictEqual(ruleIds.includes('no-var'), true);
    assert.strictEqual(ruleIds.includes('eol-last'), false);
    assert.equal(errorCount, 2);
    assert.equal(warningCount, 2);

    // 验证已关闭的 link 规则是否校验正常，以 @typescript-eslint/explicit-function-return-type 为例
    assert.strictEqual(
      ruleIds.includes('@typescript-eslint/explicit-function-return-type'),
      false
    );
  });
});
