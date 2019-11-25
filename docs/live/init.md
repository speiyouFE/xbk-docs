# init

SDK 的完全初始化方法，该方法执行完毕之后，所有 SDK 方法均可调用

## API 接口

### `this.$liveApi.initLive(initConfig)`

## 示例代码

```js
this.$rtcApi.initLive({
  appId: 'xxxxxxxxx',
  userId: 'xxxxxxxxx',
  userName: 'xxxxxxxxx',
  teacherId: 'xxxxxxxxx',
  teacherMasterId: 'xxxxxxxxx',
  roomId: 'xxxxxxxxx',
  weblog: false
})
```

初始化完成后，会执行一个回调。 该回调 sdk 会主动执行。
