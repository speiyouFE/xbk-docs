# 拉取音频流 <BadgeTip text="异步接口" type="green"></BadgeTip>

通过 userID 控制是否只拉取音频流

## API 接口

### `this.$rtcApi.pullAudioFlow(userID, state)`

## 示例代码

```js
this.$rtcApi.pullAudioFlow(101, true).then(() => {
  // ...
})
```

## 参数

| 参数   | 说明                                                   | 类型    | 可选值 | 默认值 |
| ------ | ------------------------------------------------------ | ------- | ------ | ------ |
| userID | 用户 ID （必选）                                       | string  | —      | —      |
| state  | 是否只拉取音频 (true: 只拉取音频流，false: 拉取音视频) | boolean | —      | true   |

[[toc]]
