# 设置扬声器

设置默认扬声器

## API 接口

### `this.$rtcApi.setSpeaker(deviceID)`

## 示例代码

```js
this.$rtcApi.setSpeaker('deviceID').then(() => {
  // ...
})
```

## 参数

| 参数     | 说明      | 类型   | 可选值 | 默认值 |
| -------- | --------- | ------ | ------ | ------ |
| deviceID | 扬声器 id | string | —      | —      |

:::info
`deviceID: string` 扬声器 id，从 [getSpeakerList](getSpeakerList.html) 的返回值中选择一个扬声器 id 传入
:::

[[toc]]
