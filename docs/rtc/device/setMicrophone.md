# 设置麦克风 <BadgeTip text="异步接口" type="green"></BadgeTip>

设置默认麦克风

## API 接口

### `this.$rtcApi.setMicrophone(deviceID)`

## 示例代码

```js
this.$rtcApi.setMicrophone('deviceID').then(() => {
  // ...
})
```

## 参数

| 参数     | 说明      | 类型   | 可选值 | 默认值 |
| -------- | --------- | ------ | ------ | ------ |
| deviceID | 麦克风 id | string | —      | —      |

:::info
`deviceID: string` 必选，麦克风 id，从 [getMicrophoneList](getMicrophoneList.html) 的返回值中选择一个麦克风 id 传入
:::

[[toc]]
