# 播放器静音开关

通过播放器 id 控制用户声音开关

## API 接口

### `this.$rtcApi.pullAudioFlow(playerID, isMute)`

## 示例代码

```js
this.$rtcApi.pullAudioFlow(101, true).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明               | 类型    | 可选值 | 默认值 |
| -------- | ------------------ | ------- | ------ | ------ |
| playerID | 播放器 ID （必选） | string  | —      | —      |
| isMute   | 是否静音 （必选）  | boolean | —      | true   |

:::info
`playerID: string` 必选，播放器 id，从 [initPullFlow](initPullFlow.html) 的返回值中获取
:::

[[toc]]
