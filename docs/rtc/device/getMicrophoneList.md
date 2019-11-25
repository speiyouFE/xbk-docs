# 获取麦克风/话筒列表

获取当前电脑上的麦克风/话筒列表

## API 接口

### `this.$rtcApi.getMicrophoneList()`

## 示例代码

```js
this.$rtcApi.getMicrophoneList().then(list => {
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
