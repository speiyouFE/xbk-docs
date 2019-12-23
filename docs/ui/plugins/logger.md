# 日志打印

输出日志到控制台

## API 接口

### `this.$logger.capsule(object)`

## 示例代码

```js
this.$logger.capsule({
  title: '提示信息',
  info: '这里是日志内容',
  type: 'primary' // 默认 primary
})
```

## 日志级别

### 普通日志

```js
this.$logger.default(string)
```

### 成功日志

```js
this.$logger.success(string)
```

### 警告日志

```js
this.$logger.warning(string)
```

### 错误日志

```js
this.$logger.danger(string)
```

## 参数

| 参数  | 说明     | 类型   | 可选值 | 默认值  |
| ----- | -------- | ------ | ------ | ------- |
| title | 日志标题 | string | —      | —       |
| info  | 日志信息 | number | —      | —       |
| type  | 日志类型 | string | —      | primary |

::: danger
在生产环境下，将不会输出任何控制台信息
:::

[[toc]]
