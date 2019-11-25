# init

SDK 的完全初始化方法，该方法执行完毕之后，所有 SDK 方法均可调用

## API 接口

### `this.$rtcApi.initRtc(initConfig)`

## 示例代码

```js
this.$rtcApi.initRtc({
  appId: 'xxxxxx',
  userId: 'xxxxxx',
  userName: 'xxxxxx',
  userRole: 'xxxxxx',
  roomId: 'xxxxxx',
  teacherId: 'xxxxxx',
  devices: 'devices' || {}, // 检测到的设备
  extension: this.getAllExtTargetVersion()
})
```

初始化完成后，会执行一个回调。 该回调 sdk 会主动执行。

#### sdk 相关通知

```json
{
    type: 'sdk_status',
    data: { //根据 SDK 所处的时机和状态不同，返回数据结构有不同, 一次消息只会存在以下情况的其中一种
        // SDK初始化之前 [关联 API : init ]
        {
            sdk_type : //string ,当前准备加载的SDK类型
            status: 'before_init' //当前所状态：sdk初始化之前
        }

        // SDK初始化完成 [关联 API : init ]
        {
            sdk_type：//string ,当前加载完成的SDK类型
            status: 'init_finished' //当前所状态：
        }

        // 卸载SDK完成
        {
            sdk_type : //string ,被卸载的SDK类型
            status: 'uninstall_finished'
        }
    }
}
```

#### 设备信息通知

```json
// 麦克风检测
{
    type: 'real_time_mic_volume', //实时麦克风音量，默认未开启，需要执行 openMicVolumeCb 开启麦克风音量回调
    data: {
        volume // Number，实时麦克风音量大小，范围为 [0, 100]
    }
}

// 设备检测出错
{
    type: 'device_error', //设备检测出现问题
    data: {
        deviceType, // string，出现问题的设备类型，'microphone'|'camera'
        useDeviceId: deviceId, // string，当前使用的设备 id (以实际接收到的内容为准)
        useDeviceName: deviceName, // string，当前使用的设备名称
        deviceList: speakerData // array，当前的设备列表 (以实际接收到的内容为准)
    }
}

// 热插拔
{
    type: 'plug_and_unplug', //当前有新设备插入或已有设备拔出
    data: {
        deviceType, // string，设备类型，'microphone'|'camera'
        useDeviceId: deviceId, // string，插拔后，当前使用的设备 id
        useDeviceName: deviceName, // string，插拔后，当前使用的设备名称
        deviceList: speakerData // array，插拔后，当前的设备列表
    }
}
```

#### 推拉流质量信息通知

```json
// 推流质量
{
    type:'push_quality',
    data:{
        video: {
            bitrate, // Number，画面码率
            fps // Number，画面帧率
        }
    }
}

// 拉流质量
{
    type:'pull_quality',
    data:{
        video: {
            bitrate, // Number，画面码率
            fps, // Number，画面帧率
            userId, // Number，用户 id
            streamId, // String，流 id
            volume, // Number，音量
            realTimeVolume // Number，真实的实时音量
        }
    }
}
```

## 参数

| 参数      | 说明                 | 类型   | 可选值 | 默认值     |
| --------- | -------------------- | ------ | ------ | ---------- |
| appId     | 机构 ID              | string | —      | VWAkjBflyZ |
| userId    | 当前登录用户 ID      | string | —      | —          |
| userName  | 当前登录用户 Name    | string | —      | —          |
| userRole  | 当前登录用户 role    | string | —      | student    |
| roomId    | 房间 ID              | string | —      | —          |
| teacherId | 辅导老师 ID          | string | —      | —          |
| devices   | 检测到的设备，非必选 | object | —      | —          |
| extension | 扩展信息，非必选     | object | —      | —          |

[[toc]]
