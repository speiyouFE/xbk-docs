# 设置摄像头参数 <BadgeTip text="异步接口" type="green"></BadgeTip>

设置当前电脑上摄像头参数

## API 接口

### `this.$rtcApi.setCameraParams(width,height,frameRate)`

## 示例代码

```js
this.$rtcApi.setCameraParams(800, 600, 15).then(() => {
  // ...
})
```

## 参数

| 参数      | 说明           | 类型   | 可选值 | 默认值 |
| --------- | -------------- | ------ | ------ | ------ |
| width     | 摄像头分辨率宽 | number | —      | —      |
| height    | 摄像头分辨率高 | number | —      | —      |
| frameRate | 摄像头帧率     | number | —      | 15     |

[[toc]]
