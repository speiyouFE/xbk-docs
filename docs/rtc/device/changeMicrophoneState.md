# 开关麦克风 <BadgeTip text="异步接口" type="green"></BadgeTip>

打开或关闭麦克风

## API 接口

### `this.$rtcApi.changeMicrophoneState(state)`

## 示例代码

```js
this.$rtcApi.changeMicrophoneState(true).then(() => {
  // ...
})
```

## 参数

| 参数  | 说明 | 类型    | 可选值      | 默认值 |
| ----- | ---- | ------- | ----------- | ------ |
| state | 状态 | boolean | true、false | —      |

[[toc]]
