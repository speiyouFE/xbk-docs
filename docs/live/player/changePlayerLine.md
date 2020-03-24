# 切换线路 <BadgeTip text="异步接口" type="green"></BadgeTip>

切换播放器的线路，线路地址一定要是初始化的时候传递进去的地址

## API 接口

### `this.$liveApi.changePlayerLine(url, widgetID)`

## 示例代码

```js
this.$liveApi.changePlayerLine({ name: '线路一', lineId: 1, url: 'rtmp://xxxxx.com' }, 101).then(() => {
  // ...
})
```

## 参数

| 参数          | 说明          | 类型   | 可选值 | 默认值 |
| ------------- | ------------- | ------ | ------ | ------ |
| url           | 线路信息      | object | —      | —      |
| url['name']   | 线路名称      | string | —      | —      |
| url['lineId'] | 线路 Id       | number | —      | —      |
| url['url']    | 线路地址      | string | —      | —      |
| widgetID      | 播放器窗口 id | number | —      | —      |

[[toc]]
