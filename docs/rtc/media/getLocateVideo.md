# 获取本地预览视频

获取本地预览视频

## API 接口

### `this.$rtcApi.getLocateVideo(domID)`

## 示例代码

```js
this.$rtcApi.getLocateVideo('myVideo').then(() => {
  // ...
})
```

## 参数

| 参数  | 说明          | 类型   | 可选值 | 默认值 |
| ----- | ------------- | ------ | ------ | ------ |
| domID | video 标签 ID | string | —      | —      |

:::info
该方法会默认调用 [changeCameraState](../device/changeCameraState.html) 打开摄像头
:::
[[toc]]
