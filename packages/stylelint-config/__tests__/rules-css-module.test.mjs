import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import stylelint from 'stylelint';
import config from '../index.js';

describe('flags no warnings with css-module', () => {
  const validCss = fs.readFileSync('./__tests__/fixtures/css-module.scss', 'utf-8');
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config,
    });
  });

	it('did not error', () => {
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});

});
