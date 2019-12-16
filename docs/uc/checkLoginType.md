# 登录类型

登录之前需要先检查一下本次登录的登录类型是什么。目前有：手机登录、学员编号登录。

## API 接口

### `this.$ucApi.checkLoginType(userName)`

## 示例代码

```js
this.$ucApi.checkLoginType('13800138000')
```

## 返回值

```json
{
  "loginType": 1, // 1 --> 手机登录，2 --> 学员编号
  "talId": "xxxxxxxxxxx"
}
```

## 参数

| 参数     | 说明   | 类型   | 可选值 | 默认值 |
| -------- | ------ | ------ | ------ | ------ |
| userName | 账号名 | string | —      | —      |

[[toc]]
