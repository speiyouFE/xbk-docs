# 初始化

初始化播放器

## API 接口

### `this.$liveApi.initPlayer(urls, domID, widgetID, width, height, x, y)`

## 示例代码

```js
this.$liveApi.initPlayer([{ name: '线路一', lineId: 1, url: 'rtmp://xxxxx.com' }], 'video').then(obj => {
  console.log(obj)
})
```

## 参数

| 参数              | 说明                                       | 类型   | 可选值 | 默认值 |
| ----------------- | ------------------------------------------ | ------ | ------ | ------ |
| urls              | 可用线路信息                               | array  | —      | —      |
| urls[0]['url']    | 线路地址（必选）                           | string | —      | —      |
| urls[0]['lineid'] | 线路 ID（必选）                            | number | —      | —      |
| urls[0]['name']   | 线路名称（必选）                           | string | —      | —      |
| domID             | video 标签 ID                              | string | —      | —      |
| widgetID          | 窗口 id 如果传了会复用当前播放器播放新的流 | string | —      | —      |
| width             | 视频宽                                     | number | —      | 960    |
| height            | 视频高                                     | number | —      | 550    |
| x                 | x 坐标                                     | number | —      | 0      |
| y                 | y 坐标                                     | number | —      | 0      |

[[toc]]
