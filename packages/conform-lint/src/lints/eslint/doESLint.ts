import { extname } from 'path';
import { Config, PKG, ScanOptions } from '../../type';
import { ESLINT_FILE_EXT, ESLINT_IGNORE_PATTERN } from '../../utils/constants';
import fg from 'fast-glob';
import { getESlintConfig } from './getESlintConfig';
import { ESLint } from 'eslint';
import { formatESLintResults } from './formatESLintResults';

export type DoEslintOptions = ScanOptions & {
  pkg: PKG;
  config: Config;
};

export async function doEslint(options: DoEslintOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => ESLINT_FILE_EXT.includes(extname(name)));
  } else {
    files = await fg(`**/*.{${ESLINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`, {
      cwd: options.cwd,
      ignore: ESLINT_IGNORE_PATTERN,
    });
  }

  const eslint = new ESLint(getESlintConfig(options, options.pkg, options.config));
  const reports = await eslint.lintFiles(files);
  if (options.fix) {
    await ESLint.outputFixes(reports);
  }

  return formatESLintResults(reports, options.quiet, eslint);
}
