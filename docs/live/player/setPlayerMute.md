# 播放器静音 <BadgeTip text="异步接口" type="green"></BadgeTip>

设置指定 widgetID 的播放器是否静音

## API 接口

### `this.$liveApi.setPlayerMute(state, widgetID)`

## 示例代码

```js
this.$liveApi.setPlayerMute(true, 101).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明          | 类型    | 可选值 | 默认值 |
| -------- | ------------- | ------- | ------ | ------ |
| state    | 是否静音      | boolean | —      | —      |
| widgetID | 播放器窗口 id | number  | —      | —      |

[[toc]]
