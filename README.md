[TOC]

# 说明

业务开发常用工具函数封装

## 安装

```sh
yarn add @hotsuitor/akutil
```

## 使用

```js
import akutil from 'akutil'
```

## 参与开发

1. git clone 代码
2. 安装依赖
3. 配置 Git hook
3.1 `npx husky install`
3.2 `npx husky set pre-commit "npx lint-staged"`
3.3 提示：因为没有将钩子 '.husky/pre-commit' 设置为可执行，钩子被忽略。
设置执行权限 `chmod +x .husky/pre-commit`
