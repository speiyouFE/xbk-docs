# 开始推流

开始推流,本地摄像头拍摄的视频数据开始向远端发送

## API 接口

### `this.$rtcApi.startPushFlow()`

## 示例代码

```js
this.$rtcApi.startPushFlow().then(() => {
  // ...
})
```

::: danger
在开始调用此 API 前，一定得先调用 [initLocalStream](initLocalStream.html) 进行本地视频初始化
:::
[[toc]]
