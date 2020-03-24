# 播放器静音(playerID) <BadgeTip text="异步接口" type="green"></BadgeTip>

设置指定播放器是否静音

## API 接口

### `this.$rtcApi.setPlayerMuteByPlayerID(playerID, isMute)`

## 示例代码

```js
this.$rtcApi.setPlayerMuteByPlayerID(123, true).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明              | 类型    | 可选值 | 默认值 |
| -------- | ----------------- | ------- | ------ | ------ |
| plauerID | 用户 ID （必选）  | string  | —      | —      |
| isMute   | 是否静音 （必选） | boolean | —      | true   |

:::info
`playerID: string` 必选，播放器 id，从 [initPullFlow](initPullFlow.html) 的返回值中获取
:::

[[toc]]
