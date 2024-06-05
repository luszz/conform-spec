module.exports = {
  plugins: ['@stylistic'],

  rules: {
    // 注释内容和注释符之间需留有一个空格
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],

    // 使用小驼峰命名风格
    camelcase: 'off',

    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',

    // 使用一致的 this 别名
    'consistent-this': 'off',

    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
      },
    ],

    // 要求或禁止命名的函数表达式
    'func-names': 'off',

    // 强制只能使用函数声明或函数表达式
    'func-style': 'off',

    // 禁用指定的标识符
    'id-denylist': 'off',

    // 强制标识符的最小和最大长度
    'id-length': 'off',

    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',

    // 控制语句的嵌套层级不要过深，不要超过 4 级
    // @reason 适合做后置检查
    'max-depth': ['off', 4],

    // 文件最大行数：1000
    // @reason 适合做后置检查
    'max-lines': [
      'off',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // 函数最大行数：80
    // @reason 适合做后置检查
    'max-lines-per-function': [
      'off',
      {
        max: 80,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // 回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // 函数参数数量上限
    'max-params': ['off', 3],

    // 函数块最多允许的的语句数量
    'max-statements': ['off', 10],

    // 使用大驼峰风格命名类和构造函数
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组。
    'no-array-constructor': 'error',

    // 不要使用按位操作符
    'no-bitwise': 'warn',

    // 禁用 continue 语句
    'no-continue': 'off',

    // 禁止行内注释
    'no-inline-comments': 'off',

    // 禁止 if 作为唯一语句出现在 else 中，此时应写成 else if
    'no-lonely-if': 'error',

    // 禁止连续赋值
    'no-multi-assign': ['error'],

    // 禁用否定的表达式
    'no-negated-condition': 'off',

    // 不要使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 使用字面量创建对象
    'no-object-constructor': 'error',

    // 不要使用一元自增自减运算符
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],

    // 禁用特定的语法
    'no-restricted-syntax': 'off',

    // 禁用三元操作符
    'no-ternary': 'off',

    // 命名不要以下划线开头或结尾
    'no-underscore-dangle': 'off',

    // 避免不必要的三元表达式
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 尽可能使用简写形式的赋值操作符
    'operator-assignment': ['warn', 'always'],

    // 使用扩展运算符替代 Object.assign
    'prefer-object-spread': 'off',

    // 要求对对象属性名排序
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // 要求对变量声明排序
    'sort-vars': 'off',

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['off', 'never'],

    // 要求正则表达式被括号括起来
    'wrap-regex': 'off',
  },
};
