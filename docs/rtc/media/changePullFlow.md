# 切换视频来源

切换视频来源

## API 接口

### `this.$rtcApi.changePullFlow(fromUserID,toUserID,domID)`

## 示例代码

```js
this.$rtcApi.changePullFlow('123', '456', 'changeVideo').then(() => {
  // ...
})
```

## 参数

| 参数       | 说明          | 类型   | 可选值 | 默认值 |
| ---------- | ------------- | ------ | ------ | ------ |
| fromUserID | 旧用户 id     | string | —      | —      |
| toUserID   | 新用户 id     | string | —      | —      |
| domID      | video 标签 ID | string | —      | —      |

[[toc]]
