# deviceCheckCallBack

设备检测回调

设备检测完毕，返回当前设备的相关信息(摄像头、麦克风、扬声器)

:::info
此方法在 sdk 内部会执行，开发者无需手动执行
:::

## API 接口

### `this.$rtcApi.deviceCheckCallBack()`

## 示例代码

```js
switch (obj.type) {
  // 麦克风检测
  case 'real_time_mic_volume':
    dispatchEvent(this.RtcSdkReceive.RTC_RECEIVE_REAL_MIC_VOLUME, obj.data.volume)
    break
  // 设备检测出错
  case 'device_error':
    dispatchEvent(this.RtcSdkReceive.RTC_RECEIVE_DEVICE_ERROR, {
      deviceType: obj.data.deviceType,
      useDeviceId: obj.data.useDeviceId,
      useDeviceName: obj.data.useDeviceName,
      deviceList: obj.data.deviceList
    })
    break
  // 热插拔
  case 'plug_and_unplug':
    dispatchEvent(this.RtcSdkReceive.RTC_RECEIVE_PLUG_AND_UNPLUG, {
      deviceType: obj.data.deviceType,
      useDeviceId: obj.data.useDeviceId,
      useDeviceName: obj.data.useDeviceName,
      deviceList: obj.data.deviceList
    })
    break
}
```

[[toc]]
