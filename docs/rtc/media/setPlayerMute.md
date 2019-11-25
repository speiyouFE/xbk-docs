# 播放器静音

设置指定用户是否静音

## API 接口

### `this.$rtcApi.setPlayerMute(userID, isMute)`

## 示例代码

```js
this.$rtcApi.setPlayerMute(123, true).then(() => {
  // ...
})
```

## 参数

| 参数   | 说明              | 类型    | 可选值 | 默认值 |
| ------ | ----------------- | ------- | ------ | ------ |
| userID | 用户 ID （必选）  | string  | —      | —      |
| isMute | 是否静音 （必选） | boolean | —      | true   |

[[toc]]
