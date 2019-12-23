# 日志上报

将日志上报到阿里云、自有日志服务器

## API 接口

### `this.$logger.putLogs(event, msg, level)`

### `this.$logger.uploadLog(data)`

## 示例代码

```js
// 上报到阿里云
this.$logger.putLogs('STOP_SCREEN', '互动关闭', 'info')

// 上报到自有日志服务器
this.$logger.uploadLog({
  userName: 'xxxxx',
  deviceName: 'xxxxx'
})
```

## putLogs 参数

| 参数  | 说明         | 类型   | 可选值      | 默认值 |
| ----- | ------------ | ------ | ----------- | ------ |
| event | 日志事件名称 | string | —           | —      |
| msg   | 日志信息     | string | —           | —      |
| level | 日志级别     | string | info、error | info   |

## uploadLog 参数

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| data | 日志信息 | object | —      | —      |
