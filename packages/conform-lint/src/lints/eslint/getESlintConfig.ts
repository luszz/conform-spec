import { ESLint } from 'eslint';
import { Config, PKG, ScanOptions } from '../../type';
import { ESLINT_FILE_EXT } from '../../utils/constants';
import { glob } from 'fast-glob';
import path from 'path';
import fs from 'fs-extra';
import { getESLintConfigType } from './getESlintConfigType';

/**
 * 获取 ESLint 配置
 */
export function getESlintConfig(opts: ScanOptions, pkg: PKG, config: Config): ESLint.Options {
  const { cwd, fix, ignore } = opts;
  const lintConfig: ESLint.Options = {
    cwd,
    fix,
    ignore,
    extensions: ESLINT_FILE_EXT,
    errorOnUnmatchedPattern: false,
  };

  if (config.eslintOptions) {
    Object.assign(lintConfig, config.eslintOptions);
  } else {
    const lintConfigFiles = glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0 && !pkg.eslintConfig) {
      lintConfig.resolvePluginsRelativeTo = path.resolve(__dirname, '../../');
      lintConfig.useEslintrc = false;
      lintConfig.baseConfig = {
        extends: [
          getESLintConfigType(cwd, pkg),
          //  ESLint 不再管格式问题，直接使用 Prettier 进行格式化
          ...(config.enablePrettier ? ['prettier'] : []),
        ],
      };
    }

    // 根据扫描目录下有无lintignore文件，若无则使用默认的 ignore 配置
    const lintIgnoreFile = path.resolve(cwd, '.eslintignore');
    if (!fs.existsSync(lintIgnoreFile) && !pkg.eslintIgnore) {
      lintConfig.ignorePath = path.resolve(__dirname, '../config/_eslintignore.ejs');
    }
  }

  return lintConfig;
}
