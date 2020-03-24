# 退出教室 <BadgeTip text="异步接口" type="green"></BadgeTip>

退出教室

## API 接口

### `this.$rtcApi.leaveRoom()`

## 示例代码

```js
this.$rtcApi.leaveRoom().then(()=>{
  // ...
})
```

:::danger
在退出课堂页之前，必须调用此接口

该接口调用后，会：**停止本地推流、销毁采集器、销毁所有RTC播放器**
:::

[[toc]]
