# 播放器截图 <BadgeTip text="异步接口" type="green"></BadgeTip>

播放器截图

## API 接口

### `this.$nativeApi.snapShot(params)`

## 示例代码

```js
// 获取stream信息
const streamInfo = await this.$rtcApi.getStreamInfo(userId)
const params = {
  uiChnIndex: 'nosupport',
  pszStreamID: streamInfo.snapshootId
}

// 截屏
this.$nativeApi.snapShot(params).then(res => {
  console.log(res)
})
```

## 返回值

```json
{
  channel_index:"mediaWeclassroomDTXXXXXXXXXX",
  data:"xxxxxxxxxx", // base64的图片地址
  length:"xxxx"
  result:"x"
}
```

## 参数

| 参数        | 说明                | 类型   | 可选值 | 默认值    |
| ----------- | ------------------- | ------ | ------ | --------- |
| uiChnIndex  | 这是一个固定值      | string | —      | nosupport |
| pszStreamID | 需要截图的视频流 ID | string | —      | —         |

::: info
pszStreamID: string 视频流 id，从 [getStreamInfo](/rtc/getStreamInfo.html) 的返回值中获取
:::
[[toc]]
