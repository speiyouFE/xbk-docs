# 获取摄像头列表 <BadgeTip text="异步接口" type="green"></BadgeTip>

获取当前电脑上的摄像头列表

## API 接口

### `this.$rtcApi.getCameraList()`

## 示例代码

```js
this.$rtcApi.getCameraList().then(list => {
  console.log(list)
})
```

## 返回值

```json
[
  {
    deviceId, // String，设备 id
    deviceName, // String，设备名称
    isDefault // Boolean，是否为系统默认设备，建议选择系统默认设备进行上课
  }
]
```

[[toc]]
