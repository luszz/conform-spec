---
title: eslint-plugin-harmony
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: luszz
  link: https://github.com/luszz/harmony-spec
---

# eslint-plugin-harmony

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

::: code-group

```sh [npm]
$ npm install eslint-plugin-harmony eslint --save-dev
```

```sh [pnpm]
$ pnpm add eslint-plugin-harmony eslint --save-dev
```

```sh [yarn]
$ yarn add eslint-plugin-harmony eslint --save-dev
```
:::

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['eslint-config-harmony'],
  rules: {
    'eslint-plugin-harmony/no-http-url': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:eslint-plugin-harmony/recommended',
};
```

## 支持的规则

- [`no-http-url`](https://luszz.github.io/harmony-spec/npm/eslint-plugin.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
