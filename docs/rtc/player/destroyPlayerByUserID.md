# 销毁播放器(userID) <BadgeTip text="异步接口" type="green"></BadgeTip>

销毁播放器

:::danger
不用的播放器，一定要销毁！
:::

## API 接口

### `this.$rtcApi.destroyPlayerByUserID(userID)`

## 示例代码

```js
this.$rtcApi.destroyPlayerByUserID(123).then(() => {
  // ...
})
```

## 参数

| 参数   | 说明             | 类型   | 可选值 | 默认值 |
| ------ | ---------------- | ------ | ------ | ------ |
| userID | 用户 ID （必选） | string | —      | —      |

[[toc]]
