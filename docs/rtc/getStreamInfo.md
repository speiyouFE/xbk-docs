# 获取视频流

获取视频流 ID

## API 接口

### `this.$rtcApi.getStreamInfo()`

## 示例代码

```js
this.$rtcApi.getStreamInfo(userID).then(() => {
  // ...
})
```

## 返回值

```json
{
    streamId ："mediaWeclassroomDTXXXXXXXXXX"
}
```

## 参数

| 参数   | 说明             | 类型   | 可选值 | 默认值 |
| ------ | ---------------- | ------ | ------ | ------ |
| userID | 用户 ID （必选） | string | —      | —      |

[[toc]]
