# 初始化拉流

初始化拉流

## API 接口

### `this.$rtcApi.initPullFlow(userID, domID, needPlayerId, mute)`

## 示例代码

```js
this.$rtcApi.initPullFlow(123, 'video').then(() => {
  // ...
})
```

## 参数

| 参数         | 说明                        | 类型    | 可选值 | 默认值 |
| ------------ | --------------------------- | ------- | ------ | ------ |
| userID       | 用户 ID （必选）            | string  | —      | —      |
| domId        | video 标签 ID （必选）      | string  | —      | —      |
| needPlayerId | 是否需要返回播放 id（可选） | boolean | —      | false  |
| mute         | 静音拉流（可选）            | boolean | —      | false  |

[[toc]]
