# 设置 App 静音

设置当前运行的应用程序静音

## API 接口

### `this.$rtcApi.setAppMute(mute)`

## 示例代码

```js
this.$rtcApi.setAppMute(true).then(() => {
  // ...
})
```

## 参数

| 参数 | 说明     | 类型    | 可选值 | 默认值 |
| ---- | -------- | ------- | ------ | ------ |
| mute | 是否静音 | boolean | —      | false  |

::: danger
该 API 会设置整个程序静音
:::

[[toc]]
