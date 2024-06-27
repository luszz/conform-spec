import { extname, join } from 'path';
import fg from 'fast-glob';
import { PKG, ScanOptions } from '../../type';
import { STYLELINT_FILE_EXT, STYLELINT_IGNORE_PATTERN } from '../../utils/constants';
import { getStylelintConfig } from './getStylelintConfig';
import { formatStylelintResults } from './formatStylelintResults';
import stylelint from 'stylelint';

export type DoStylelintOptions = ScanOptions & {
  pkg: PKG;
};

export async function doStylelint(options: DoStylelintOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => STYLELINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${STYLELINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: STYLELINT_IGNORE_PATTERN,
    });
  }

  const data = await stylelint.lint({
    ...getStylelintConfig(options, options.pkg, options.config),
    files,
  });

  return formatStylelintResults(data.results, options.quiet);
}
