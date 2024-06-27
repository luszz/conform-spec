import glob from 'glob';
import type { PKG } from '../../type';

/**
 * 获取 ESLint 配置类型
 * @param cwd
 * @param pkg
 * @returns eslint-config-conform/index
 * @returns eslint-config-conform/typescript/index
 * @returns eslint-config-conform/typescript/vue3
 */
export function getESLintConfigType(cwd: string, pkg: PKG): string {
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const dependencies = Object.keys(pkg.dependencies || {});
  const language = tsFiles.length > 0 ? 'typescript' : '';
  let dsl = '';

  // dsl判断
  if (vueFiles.length > 0 || dependencies.some((name) => /^@vue(-|$)/.test(name))) {
    dsl = 'vue3';
  } else if (vueFiles.length > 0 || dependencies.some((name) => /^vue(-|$)/.test(name))) {
    dsl = 'vue';
  }

  return `eslint-config-conform/${`${language}/${dsl}`.replace(/\/$/, '/index').replace(/^\//, '')}`;
}
