# 销毁播放器

销毁播放器指定 widgetID 的播放器

:::danger
废弃的播放器一定要销毁！！！
:::

## API 接口

### `this.$liveApi.destroyPlayer(widgetID)`

## 示例代码

```js
this.$liveApi.destroyPlayer(101).then(() => {
  // ...
})
```

## 参数

| 参数     | 说明          | 类型   | 可选值 | 默认值 |
| -------- | ------------- | ------ | ------ | ------ |
| widgetID | 播放器窗口 id | number | —      | —      |

[[toc]]
