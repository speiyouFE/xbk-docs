# H5 录音

H5 录音功能 (v1.0.1)

## API 接口

- `Recorder.init(object)`
- `Recorder.startRecord()`
- `Recorder.stopRecord()`
- `Recorder.getRecordBlob()`
- `Recorder.pauseRecord()` <BadgeTip text="1.0.1 新增接口" type="green"></BadgeTip>
- `Recorder.resumeRecord()` <BadgeTip text="1.0.1 新增接口" type="green"></BadgeTip>
- `Recorder.playRecord(audioDomId)`
- `Recorder.getRecordSrc(blobFile)`
- `Recorder.createWaves(config={},canvasDomId)` <BadgeTip text="1.0.1 废弃此接口" type="danger"></BadgeTip>
- `Recorder.uploadRecord(url, method , callback)`<BadgeTip text="1.0.1 废弃此接口" type="danger"></BadgeTip>
- `Recorder.isSupport()` <BadgeTip text="1.0.1 新增接口" type="green"></BadgeTip>

## 示例代码

### 初始化

```js
import Recorder from '@neosjs/h5-recorder'

// 初始化录音机
Recorder.init(
  {
    type: 'wav', // 音频类型
    sampleRate: 16000, // 码率
    bitRate: 16, // 采用数位
    wave: 'wave' // 波形类型，设置了会展示波形图
  },
  cb => {
    switch (cb.action) {
      case 'initState': // 初始化状态
        console.log(cb.data)
        break
      case 'connectRecord': // 连接录音
        console.log(cb.data)
        break
      case 'disconnectRecord': // 断开录音连接
        console.log(cb.data)
        break
      case 'startRecord': // 开始录音
        console.log(cb.data)
        break
      case 'stopRecord': // 停止录音
        console.log(cb.data)
        break
      case 'closeRecord': // 关闭录音、释放资源
        console.log(cb.data)
        break
      case 'pauseRecord': // 暂停录音
        console.log(cb.data)
        break
      case 'resumeRecord': // 恢复录音
        console.log(cb.data)
        break
      case 'playRecord': // 播放录音
        console.log(cb.data)
        break
      case 'isSupport': // 浏览器是否支持H5录音功能
        console.log(cb.data)
        break
      default:
    }
  }
)
```

#### 初试化参数

| 参数                  | 说明             | 类型   | 可选值          | 默认值 |
| --------------------- | ---------------- | ------ | --------------- | ------ |
| configs = {}          | 初始化录音机参数 | object | —               | —      |
| configs['bitRate']    | 采样数位         | number | 8, 16           | 16     |
| configs['sampleRate'] | 采样率           | number | —               | 16000  |
| configs['type']       | 音频类型         | string | mp3、wav        | wav    |
| configs['wave']       | 波形图类型       | string | frequency、wave | wave   |

### 开始录音 <BadgeTip text="异步接口" type="blue"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.startRecord()
```

### 停止录音 <BadgeTip text="异步接口" type="blue"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.stopRecord(success, fail)
// 或者
const res = await Recorder.stopRecord()
```

#### 参数

| 参数    | 说明       | 类型     | 是否必填 | 默认值 |
| ------- | ---------- | -------- | -------- | ------ |
| success | 成功的回调 | function | 否       | -      |
| fail    | 失败的回调 | function | 否       | -      |

### 播放录音 <BadgeTip text="异步接口" type="blue"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.playRecord(audioDomId)
```

#### 参数

| 参数       | 说明            | 类型   | 是否必填 | 默认值 |
| ---------- | --------------- | ------ | -------- | ------ |
| audioDomId | audio 标签的 id | string | 是       | -      |

### 暂停录音 <BadgeTip text="异步接口" type="blue"></BadgeTip> <BadgeTip text="1.0.1 新增接口" type="green"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.pauseRecord()
```

### 恢复录音 <BadgeTip text="异步接口" type="blue"></BadgeTip> <BadgeTip text="1.0.1 新增接口" type="green"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.resumeRecord()
```

### 获取录音文件 <BadgeTip text="异步接口" type="blue"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.getRecordBlob()
```

### 获取本地 src 地址 <BadgeTip text="异步接口" type="blue"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.getRecordSrc(blobFile)
```

#### 参数

| 参数     | 说明      | 类型   | 是否必填 | 默认值 |
| -------- | --------- | ------ | -------- | ------ |
| blobFile | blob 文件 | string | 否       | -      |

### 创建一个波形图 <BadgeTip text="异步接口" type="blue"></BadgeTip> <BadgeTip text="1.0.1 废弃此接口" type="danger"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.createWaves(config, canvasDomId)
```

#### 参数

| 参数                | 说明             | 类型   | 是否必填 | 默认值     |
| ------------------- | ---------------- | ------ | -------- | ---------- |
| config = {}         | 波形图的配置     | object | 否       | -          |
| config['bgColor']   | 波形图背景色     | string | 否       | #ffffff    |
| config['gap']       | 每条线之间的间隔 | string | 否       | 6.5        |
| config['startX']    | 起始位置         | number | 否       | 5          |
| config['lineWidth'] | 线条宽度         | number | 否       | 5          |
| canvasDomId         | canvas 元素 id   | string | 否       | audioWaves |

### 上传音频文件 <BadgeTip text="异步接口" type="blue"></BadgeTip> <BadgeTip text="1.0.1 废弃此接口" type="danger"></BadgeTip>

```js
import Recorder from '@neosjs/h5-recorder'

Recorder.uploadRecord(url, method, callback)
```

#### 参数

| 参数     | 说明     | 类型     | 是否必填 | 默认值 |
| -------- | -------- | -------- | -------- | ------ |
| url      | 后端地址 | string   | 是       | -      |
| method   | 方法     | string   | 否       | post   |
| callback | 回调方法 | function | 否       | -      |

[[toc]]
