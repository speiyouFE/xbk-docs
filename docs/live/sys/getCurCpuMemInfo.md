# 获取内存和 cpu 信息 <BadgeTip text="异步接口" type="green"></BadgeTip>

获取当前 cpu 内存信息

## API 接口

### `this.$liveApi.getCurCpuMemInfo()`

## 示例代码

```js
this.$liveApi.getCurCpuMemInfo().then(info => {
  console.log(info)
})
```

## 返回值

```json
{
    "cpuRate":"28"
    "memRate":"21"
    "memTotal":"16180.00"
    "memUsed":"3442.00"
    "diskTotal":"1052.00"
    "diskUsed":"98.00"
    "cpuType":"Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz"
    "resolution":"1920x1080"
    "dpi":"100"
    "gpu type":"xxxxx, xxxxx, xxxxx"
    "gpu total":"xxxxM, xxxxM, xxxxM"
    "gpu used":"NA"
}
```

[[toc]]
