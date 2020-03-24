# 获取视频地址 <BadgeTip text="异步接口" type="green"></BadgeTip>

获取视频地址

## API 接口

### `this.$rtcApi.getVideoUrl(userID, domID, isLocal)`

## 示例代码

```js
this.$rtcApi.getVideoUrl(123, 'video', false).then(() => {
  // ...
})
```

## 参数

| 参数    | 说明          | 类型    | 可选值 | 默认值 |
| ------- | ------------- | ------- | ------ | ------ |
| userID  | 用户 ID       | string  | —      | —      |
| domID   | video 标签 ID | string  | —      | —      |
| isLocal | 是否本地视频  | boolean | —      | false  |

[[toc]]
