# 获取系统信息 <BadgeTip text="异步接口" type="green"></BadgeTip>

获取当前系统的信息

## API 接口

### `this.$liveApi.getSystemInformation()`

## 示例代码

```js
this.$liveApi.getSystemInformation().then(info => {
  console.log(info)
})
```

## 返回值

```json
{
  "version": "xxxxxxxx",
  "systemName": "xxxxxxxx",
  "time": "xxxxxxx"
}
```

[[toc]]
