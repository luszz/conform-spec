import glob from 'glob';
import fs from 'fs-extra';
import path from 'path';
import { PKG, ScanOptions, Config } from '../../type';
import { STYLELINT_IGNORE_PATTERN } from '../../utils/constants';

export function getStylelintConfig(opts: ScanOptions, pkg: PKG, config: Config) {
  const { cwd, fix } = opts;
  if (config.enableStylelint === false) return {} as any;

  const lintConfig: any = {
    fix: Boolean(fix),
    allowEmptyInput: true,
  };

  if (config.stylelintOptions) {
    Object.assign(lintConfig, config.stylelintOptions);
  } else {
    // 根据扫描目录下有无lintrc文件，若无则使用默认的 lint 配置
    const lintConfigFiles = glob.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0 && !pkg.stylelint) {
      lintConfig.config = {
        extends: 'stylelint-config-conform',
      };
    }

    // 根据扫描目录下有无lintignore文件，若无则使用默认的 ignore 配置
    const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
    if (!fs.existsSync(ignoreFilePath)) {
      lintConfig.ignorePattern = STYLELINT_IGNORE_PATTERN;
    }
  }
}
