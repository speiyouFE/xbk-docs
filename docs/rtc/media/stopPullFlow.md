# 停止拉流

停止拉取某个用户的视频流

## API 接口

### `this.$rtcApi.stopPullFlow(userID, recovery)`

## 示例代码

```js
this.$rtcApi.stopPullFlow(123, true).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明                   | 类型    | 可选值 | 默认值 |
| -------- | ---------------------- | ------- | ------ | ------ |
| userID   | 用户 ID （必选）       | string  | —      | —      |
| recovery | 是否回收播放器（可选） | boolean | —      | false  |

[[toc]]
