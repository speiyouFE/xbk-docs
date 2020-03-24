# 切换视频来源 (暂时废弃) <BadgeTip text="异步接口" type="green"></BadgeTip>
 
切换视频来源

## API 接口

### `this.$rtcApi.changePullFlow(fromUserID,toUserID,domID,needPlayerId,mute)`

## 示例代码

```js
this.$rtcApi.changePullFlow('123', '456', 'changeVideo', true, true).then(res => {
  console.log(res)
})
```

## 返回值

```json
[
  {
    videoSrc, // 视频流地址
    playerId, // 播放器id  如果传了 needPlayerId，则返回该字段
  }
]

## 参数

| 参数         | 说明                  | 类型    | 可选值 | 默认值 |
| ------------ | --------------------- | ------- | ------ | ------ |
| fromUserID   | 旧用户 id             | string  | —      | —      |
| toUserID     | 新用户 id             | string  | —      | —      |
| domID        | video 标签 ID         | string  | —      | —      |
| needPlayerId | 是否需要返回播放器 ID | boolean | —      | false  |
| mute         | 是否静音切换视频流    | boolean | —      | false  |

[[toc]]
```
