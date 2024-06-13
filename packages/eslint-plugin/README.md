# eslint-plugin-conform

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

::: code-group

```sh [npm]
$ npm install eslint-plugin-conform eslint --save-dev
```

```sh [pnpm]
$ pnpm add eslint-plugin-conform eslint --save-dev
```

```sh [yarn]
$ yarn add eslint-plugin-conform eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['eslint-config-conform'],
  rules: {
    'eslint-plugin-conform/no-http-url': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:eslint-plugin-conform/recommended',
};
```

## 支持的规则

- [`no-http-url`](https://luszz.github.io/conform-spec/npm/eslint-plugin.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
