# 设置摄像头 <BadgeTip text="异步接口" type="green"></BadgeTip>

设置默认摄像头

## API 接口

### `this.$rtcApi.setCamera(deviceID)`

## 示例代码

```js
this.$rtcApi.setCamera('deviceID').then(() => {
  // ...
})
```

## 参数

| 参数     | 说明      | 类型   | 可选值 | 默认值 |
| -------- | --------- | ------ | ------ | ------ |
| deviceID | 摄像头 id | string | —      | —      |

:::info
`deviceID: string` 必选，摄像头 id，从 [getCameraList](getCameraList.html) 的返回值中选择一个摄像头 id 传入
:::

[[toc]]
