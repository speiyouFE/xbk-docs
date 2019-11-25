# 全局配置

## API 接口

### `this.$rtcApi.setRtcConfig()`

## 示例代码

```js
this.$rtcApi.setRtcConfig({
  weblog: false,
  env: 'test',
  streamPrefix: 'mediaWeclassroomDT',
  liveConfig: {
    captureBitrate: 100000,
    captureFps: 15,
    encodedResolutionWidth: 500,
    encodedResolutionHeight: 500,
    previewCaptureBitrate: 100000,
    previewCaptureFps: 15,
    previewResolutionWidth: 200,
    previewResolutionHeight: 200
  }
})
```

## 参数

| 参数                                  | 说明                                         | 类型    | 可选值       | 默认值             |
| ------------------------------------- | -------------------------------------------- | ------- | ------------ | ------------------ |
| weblog                                | 是否开启日志                                 | boolean | —            | false              |
| env                                   | 环境                                         | string  | test、online | false              |
| streamPrefix                          | 视频流前缀                                   | string  | —            | mediaWeclassroomDT |
| liveConfig                            | 视频流配置参数                               | object  | —            | —                  |
| liveConfig['captureBitrate']          | 大画面视频采集码率（取值范围：40kb~2000kb）  | number  | —            | 100000             |
| liveConfig['captureFps']              | 大画面视频采集帧率（取值范围：5~30）         | number  | —            | 15                 |
| liveConfig['encodedResolutionWidth']  | 大画面视频编码分辨率                         | number  | —            | 500                |
| liveConfig['encodedResolutionHeight'] | 大画面视频编码分辨率                         | number  | —            | 500                |
| liveConfig['previewCaptureBitrate']   | 预览画面视频采集码率（取值范围：40kb~300kb） | number  | —            | 100000             |
| liveConfig['previewCaptureFps']       | 预览画面视频采集帧率（取值范围：5~15）       | number  | —            | 15                 |
| liveConfig['previewResolutionWidth']  | 预览视频编码分辨率                           | number  | —            | 200                |
| liveConfig['previewResolutionHeight'] | 预览视频编码分辨率                           | number  | —            | 200                |

[[toc]]
