import path from 'path';
import type { ScanOptions, ScanReport, Config, ScanResult, PKG } from '../type';
import fs from 'fs-extra';
import { PKG_NAME } from '../utils/constants';
import { doPrettier, doStylelint, doEslint, doMarkdownlint } from '../lints';

export default async (options: ScanOptions): Promise<ScanReport> => {
  const { cwd, fix, outputReport, config: scanConfig } = options;

  const readConfigFile = (pth: string): any => {
    const localPath = path.resolve(cwd, pth);
    return fs.existsSync(localPath) ? require(localPath) : {};
  };
  const pkg: PKG = readConfigFile('package.json');
  const config: Config = scanConfig || readConfigFile(`${PKG_NAME}.config.js`);
  const runErrors: Error[] = [];
  let results: ScanResult[] = [];

  // prettier
  if (fix && config.enablePrettier !== false) {
    await doPrettier(options);
  }

  // eslint
  if (config.enableESLint !== false) {
    try {
      const eslintResults = await doEslint({ ...options, pkg, config });
      results = results.concat(eslintResults);
    } catch (error) {
      runErrors.push(error);
    }
  }

  if (config.enableStylelint !== false) {
    try {
      const stylelintResults = await doStylelint({ ...options, pkg, config });
      results = results.concat(stylelintResults);
    } catch (error) {
      runErrors.push(error);
    }
  }

  if (config.enableMarkdownlint !== false) {
    try {
      const markdownlintResults = await doMarkdownlint({ ...options, pkg, config });
      results = results.concat(markdownlintResults);
    } catch (error) {
      runErrors.push(error);
    }
  }

  if (outputReport) {
    const reportPath = path.resolve(process.cwd(), `./${PKG_NAME}-report.json`);
    fs.outputFile(reportPath, JSON.stringify(results, null, 2), () => {});
  }

  return {
    results,
    errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
    warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
    runErrors,
  };
};
