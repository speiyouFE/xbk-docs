# 设置线路列表 <BadgeTip text="异步接口" type="green"></BadgeTip>

设置播放器线路列表。初始化播放器时，会自动设置一次。

## API 接口

### `this.$liveApi.setPlayerLineList(urls, widgetID)`

## 示例代码

```js
this.$liveApi.setPlayerLineList([{ name: '线路一', lineId: 1, url: 'rtmp://xxxxx.com' }], 101).then(() => {
  // ...
})
```

## 参数

| 参数            | 说明          | 类型   | 可选值 | 默认值 |
| --------------- | ------------- | ------ | ------ | ------ |
| urls            | 可用线路信息  | array  | —      | —      |
| urls[0][url]    | 线路地址      | string | —      | —      |
| urls[0][lineid] | 线路 Id       | number | —      | —      |
| urls[0][name]   | 线路名称      | string | —      | —      |
| widgetID        | 播放器窗口 id | number | —      | —      |

[[toc]]
