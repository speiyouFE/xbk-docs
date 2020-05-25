# H5录音

H5录音功能

## API 接口

- `Recorder.init(object)`
- `Recorder.startRecord()`
- `Recorder.stopRecord()`
- `Recorder.getRecordBlob()`
- `Recorder.playRecord(audioDomId)`
- `Recorder.getRecordSrc(blobFile)`
- `Recorder.createWaves(config={},canvasDomId)`
- `Recorder.uploadRecord(url, method , callback)`

## 示例代码
### 初始化
```js
import Recorder from '@neosjs/h5-recorder'

// 初始化录音机
Recorder.init({
  bits: 16, // 采样数位 8, 16
  rate: 16000, // 采样率
  type: 'audio/mp3' // 音频格式
},cb => {
  switch (cb.action) {
    case 'initComplete': // 初始化完成
      console.log(cb.data) 
      break
    case 'startRecord': // 开始录音
      console.log(cb)
      break
    case 'stopRecord': // 停止录音
      console.log(cb)
      break
    case 'keepSlience': // 一直没有音频输入
      console.log(cb)
      break
    case 'clearanceRecord': // 断断续续的音频输入
      console.log(cb)
      break
    case 'keepSpeaking': // 持续输入音频
      console.log(cb)
      break
    case 'volData': // 音量值
      console.log(cb)
      break
    case 'playRecord': // 播放录音
      console.log(cb)
      break
    case 'encodeRecord': // 录音编码
      console.log(cb)
      break
    case 'isSupport': // 是否支持录音
      console.log(cb)
      break
  }
})
```

#### 初试化参数

| 参数  | 说明         | 类型    | 可选值 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| configs = {}   | 初始化录音机参数 | object  | —      | —      |
| configs['bits'] | 采样数位      | number  | 8, 16      | 16      |
| configs['rate']  | 采样率     | number | —      | 16000  |
| configs['type']  | 音频类型     | string | audio/mp3、audio/wav     | audio/mp3  |


### 开始录音 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.startRecord() 
```

### 停止录音 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.stopRecord() 
```

### 播放录音 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.playRecord(audioDomId) 
```
#### 参数

| 参数  | 说明         | 类型    | 是否必填 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| audioDomId | audio标签的id | string | 是 | -|

### 获取录音文件 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.getRecordBlob() 
```

### 获取本地src地址 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.getRecordSrc(blobFile) 
```
#### 参数

| 参数  | 说明         | 类型    | 是否必填 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| blobFile | blob文件 | string | 否 | -|

### 创建一个波形图 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.createWaves(config,canvasDomId) 
```
#### 参数

| 参数  | 说明         | 类型    | 是否必填 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| config = {} | 波形图的配置 | object | 否 | -|
| config['bgColor'] | 波形图背景色 | string | 否 | #ffffff |
| config['gap']  | 每条线之间的间隔 | string | 否 | 6.5 |
| config['startX']  | 起始位置 | number | 否 | 5 |
| config['lineWidth']  | 线条宽度 | number | 否 | 5 |
| canvasDomId | canvas元素id | string | 否 | audioWaves |

### 上传音频文件 <BadgeTip text="异步接口" type="green"></BadgeTip>
```js
import Recorder from '@neosjs/h5-recorder'

Recorder.uploadRecord(url, method , callback) 
```
#### 参数

| 参数  | 说明         | 类型    | 是否必填 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| url | 后端地址 | string | 是 | -|
| method | 方法 | string | 否 | post |
| callback  | 回调方法 | function | 否 | -|

[[toc]]
