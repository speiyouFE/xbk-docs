# 上传文件

上传文件到阿里云 OSS

## API 接口

### `this.$oss.uploadFile(file,token)`

### `this.$oss.uploadContent(buffer,token)`

## 示例代码

#### 上传图片

```js
this.$rtcApi.uploadFile('filepath', 'xxxxxxxxxxx').then(res => {
  console.log(res)
})
```

:::info
如果需要上传 `base64`的图片，需要先调用工具函数的 `dataURLtoBlob` 将 `base64` 转成 `blob` 文件
:::

#### 上传文本内容

```js
this.$rtcApi.uploadContent('BufferContent', 'xxxxxxxxxxx').then(res => {
  console.log(res)
})
```

## 返回值

```json
{
  "errCode": 0,
  "errMsg": "xxxx",
  "data": {
    "imgUrl": "http://xxxxxxxxxx"
  }
}
```

## 参数

| 参数   | 说明                   | 类型   | 可选值 | 默认值 |
| ------ | ---------------------- | ------ | ------ | ------ |
| file   | 需要上传的本地图片路径 | string | —      | —      |
| buffer | 需要 buffer 内容       | string | —      | —      |
| token  | 用户 token             | string | —      | —      |

:::danger
`token` 是获取 oss 配置的必要参数，用 `token` 去换取 `accessKeyId`、`accessKeySecret`、`bucket`、`stsToken`等信息
:::

[[toc]]
