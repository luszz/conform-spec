---
title: eslint-config-conform
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: luszz
  link: https://github.com/luszz/conform-spec
---

# eslint-config-conform

> conform JavaScript TypeScript Node 规范

提供了多套配置文件以支持 `JavaScript`、`TypeScript`、`Vue`、`Node.js` 等多种项目类型。

## JavaScript 项目 - eslint-config-conform

针对未使用 `Vue` 的原生 `JavaScript` 项目，使用 `ESLint` 原生规则和 [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 规则，使用 [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) 作为 `parser`，是本包的默认配置。

### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.24.5
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.24.5
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)@^2.1.0

### 安装

::: code-group

```sh [npm]
$ npm i -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import @stylistic/eslint-plugin
```

```sh [pnpm]
$ pnpm add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import @stylistic/eslint-plugin
```

```sh [yarn]
$ yarn add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import @stylistic/eslint-plugin
```

### 配置

```json
{
  "extends": ["eslint-config-conform"]
}
```

## JavaScript + Vue3 项目 - eslint-config-conform/vue3

针对 `JS Vue3` 的项目，继承了默认配置，并启用了 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 插件的规则，使用 [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser) 作为 parser。

### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.24.5
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.24.5
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^9.4.2
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^9.26.0
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)@^2.1.0

### 安装

::: code-group

```sh [npm]
npm i -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

```sh [pnpm]
pnpm add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

```sh [yarn]
yarn add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

### 配置

```json
{
  "extends": ["eslint-config-conform/vue3"]
}
```

## JavaScript (Node.js) 项目 - eslint-config-conform/node

针对 Node.js 项目，继承了默认配置和 [eslint-config-egg 的规则](https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js)，规则由 ESLint 原生规则和 [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) 提供。

### 依赖

- [@babel/core](https://www.npmjs.com/package/@babel/core)@^7.24.5
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)@^7.24.5
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^12.3.1
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)@^2.1.0

### 安装

::: code-group

```sh [npm]
npm i -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg @stylistic/eslint-plugin
```

```sh [pnpm]
pnpm add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg @stylistic/eslint-plugin
```

```sh [yarn]
yarn add -D eslint-config-conform @babel/core @babel/eslint-parser eslint-plugin-import eslint-config-egg @stylistic/eslint-plugin
```

### 配置

```json
{
  "extends": ["eslint-config-conform/node"]
}
```

## TypeScript 项目 - eslint-config-conform/typescript

针对未使用 `Vue` 的 `TypeScript` 项目，继承了默认配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^6.21.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^6.21.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@3.6.1

### 安装

::: code-group

```sh [npm]
npm i -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

```sh [pnpm]
pnpm add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

```sh [yarn]
yarn add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript
```

### 配置

```json
{
  "extends": ["eslint-config-conform/typescript"]
}
```

需保证项目已安装 `typescript` 依赖，另外如果项目的 `TS` 配置文件不是 `./tsconfig.json`，则需要设置 `.eslintrc` 中的 [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) 字段 ，例如：

```json
{
  "extends": "eslint-config-conform/typescript",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

## TypeScript + Vue3 项目 - eslint-config-conform/typescript/vue3

针对 `TS Vue3` 项目，继承了 `JS Vue3` 的配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 `parser`。

### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^6.21.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^6.21.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@3.6.1
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)@^9.4.2
- [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)@^9.26.0
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)@^2.1.0

### 安装

::: code-group

```sh [npm]
npm i -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

```sh [pnpm]
pnpm add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

```sh [yarn]
yarn add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript vue-eslint-parser eslint-plugin-vue @stylistic/eslint-plugin
```

### 配置

```json
{
  "extends": ["eslint-config-conform/typescript/vue3"]
}
```

## TypeScript (Node.js) 项目 - eslint-config-conform/typescript/node

针对未使用 `Vue` 的 `TypeScript(Node)` 项目，继承了 `JS Node.js` 配置，并启用了 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 插件的规则，使用 [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) 作为 parser。

### 依赖

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)@^6.21.0
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)@^6.21.0
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)@^2.29.1
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)@3.6.1
- [eslint-config-egg](https://www.npmjs.com/package/eslint-config-egg)@^12.3.1
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)@^2.1.0

### 安装

::: code-group

```sh [npm]
npm i -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg @stylistic/eslint-plugin
```

```sh [pnpm]
pnpm add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg @stylistic/eslint-plugin
```

```sh [yarn]
yarn add -D eslint-config-conform @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-import-resolver-typescript eslint-config-egg @stylistic/eslint-plugin
```

### 配置

```json
{
  "extends": ["eslint-config-conform/typescript/node"]
}
```

## 配合 Prettier 使用

如果你的项目使用 [Prettier](https://prettier.io/) 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突，[例如这条规则](https://github.com/typescript-eslint/typescript-eslint/issues/372)。为了避免冲突，你需要手动安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 和 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)：

### 安装

::: code-group

```sh [npm]
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

```sh [pnpm]
pnpm add --save-dev eslint-config-prettier eslint-plugin-prettier
```

```sh [yarn]
yarn add --save-dev eslint-config-prettier eslint-plugin-prettier
```

### 配置

并修改 `.eslintrc` 的 `extends` 配置，增加 `prettier`，如下（以 TS Vue3 项目为例）：

```json
{
  "extends": ["eslint-config-conform/typescript/vue3", "prettier"]
}
```

了解更多请阅读 [Prettier - Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)。

## 了解更多

- 如果你对 ESLint 还不熟悉，可以阅读官网的 [Getting Started](https://eslint.org/docs/user-guide/getting-started) 快速入门。
- 了解如何为 IDE 配置 ESLint，可以参考官网的 [Integrations](http://eslint.org/docs/user-guide/integrations)。
- 了解如何在继承本包的基础上对项目 ESLint 进行个性化配置，可参考官网的 [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)。下面简介下 ESLint 配置中的几个常用字段：
  - `extends`: 继承一组规则集。`"extends": "eslint-config-conform",` 表示继承本包定义的规则配置。
  - `rules`: 配置规则，这里定义的规则会覆盖 `extends` 的规则。如果觉得本包开启的某条规则过于严格，你可以暂时在这里将其关闭。
  - `parser`: 设置 ESLint 的解析器。ESLint 使用 espree 作为默认的解析器，可以通过这个参数指定其他的解析器。比如指定为 [@babel/eslint-parser](https://npmjs.com/package/@babel/eslint-parser)，以解析 Babel 支持但 ESLint 默认解析器不支持的语法（本包不同配置文件使用的解析器可在简介表格中的「依赖 parser」一列查看）。
  - `globals`: 指定代码中可能用到的全局变量，以免全局变量被 [no-undef](http://eslint.org/docs/rules/no-undef) 规则报错。
  - `env`: 指定代码的运行环境，每个环境预定义了一组对应的全局变量，本包已开启的环境有 browser、node、jquery、es6 及几个测试框架的环境。
- 了解常用的 ESLint 命令，如 `--fix`、`--ext`，可参考官网的 [Command Line Interface](http://eslint.org/docs/user-guide/command-line-interface)。
