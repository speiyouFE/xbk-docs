# 销毁播放器(playerID)

根据播放器 ID 销毁播放器

:::danger
不用的播放器，一定要销毁！
:::

## API 接口

### `this.$rtcApi.destroyPlayerByPlayerID(playerID)`

## 示例代码

```js
this.$rtcApi.destroyPlayerByPlayerID(123)
```

## 参数

| 参数     | 说明               | 类型   | 可选值 | 默认值 |
| -------- | ------------------ | ------ | ------ | ------ |
| playerID | 播放器 id （必选） | number | —      | —      |

:::info
`playerID: string` 必选，播放器 id，从 [initPullFlow](initPullFlow.html) 的返回值中获取
:::

[[toc]]
