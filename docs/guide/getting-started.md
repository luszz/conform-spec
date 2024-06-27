# conform-spec

前端编码规范工程化

## :tada: 能力支持

### 1. 全面的前端生态

支持前端全部生态，无需关注环境，支持直接使用

### 2. 完善的规范配件

支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级

### 3. 完整的测试用例

配套完整的测试用例，提升项目健壮性

## :couch_and_lamp: 配套工具

引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | npm 包                                                                                   |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [eslint-config-conform](https://www.npmjs.com/package/eslint-config-conform)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [stylelint-config-conform](https://www.npmjs.com/package/stylelint-config-conform)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [commitlint-config-conform](https://www.npmjs.com/package/commitlint-config-conform)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [markdownlint-config-conform](https://www.npmjs.com/package/markdownlint-config-conform) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [eslint-plugin-conform](https://www.npmjs.com/package/eslint-plugin-conform)             |

[conform-lint](https://www.npmjs.com/package/conform-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[conform-lint](https://www.npmjs.com/package/conform-lint) 方便地为项目接入全部规范。

## 其他

## 测试`markdown config`

全局安装`markdownlint-cli`

```bash
npm i -g markdownlint-cli
pnpm run lint
```

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

## :email: 联系

- **前端编码规范工程化** <https://luszz.github.io/conform-spec/>
- **GitHub**: <https://github.com/luszz/conform-spec>

</br>
