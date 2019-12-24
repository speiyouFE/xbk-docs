# 设置 App 应用音量

设置当前运行的应用程序音量

## API 接口

### `this.$rtcApi.setAppVolume(volume)`

## 示例代码

```js
this.$rtcApi.setAppVolume(80).then(() => {
  // ...
})
```

## 参数

| 参数   | 说明   | 类型   | 可选值   | 默认值 |
| ------ | ------ | ------ | -------- | ------ |
| volume | 音量值 | number | 0 -- 100 | —      |

::: danger
该 API 会设置整个程序的音量
:::

[[toc]]
