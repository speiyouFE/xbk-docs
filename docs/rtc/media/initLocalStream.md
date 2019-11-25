# 初始化本地视频

初始化本地视频

## API 接口

### `this.$rtcApi.initLocalStream(userID, domID, micState)`

## 示例代码

```js
this.$rtcApi.initLocalStream(123, 'video', false).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明          | 类型    | 可选值 | 默认值 |
| -------- | ------------- | ------- | ------ | ------ |
| userID   | 用户 ID       | string  | —      | —      |
| domId    | video 标签 ID | string  | —      | —      |
| micState | 麦克风状态    | boolean | —      | —      |

:::tip
本地视频初始化完成后，即可开始 [startPushFlow](startPushFlow.html)
:::
[[toc]]
