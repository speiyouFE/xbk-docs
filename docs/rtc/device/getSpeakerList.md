# 获取扬声器/音箱/耳机列表 <BadgeTip text="异步接口" type="green"></BadgeTip>

获取当前电脑上的扬声器/音箱/耳机列表

## API 接口

### `this.$rtcApi.getSpeakerList()`

## 示例代码

```js
this.$rtcApi.getSpeakerList().then(list => {
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
