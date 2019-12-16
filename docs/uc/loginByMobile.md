# 手机号登录

手机号登录。

## API 接口

### `this.$ucApi.loginByMobile(object)`

## 示例代码

```js
this.$ucApi.loginByMobile({
  userName: 'xxxxxxxxx',
  deviceId: '12312312',
  code: '12312312'
})
```

## 返回值

```json
{
  "code": 0,
  "message": "操作成功",
  "result": {
    "token": "xxxxxxxxxxxxxxx",
    "userId": "xxxxxxxxxxxxxxx",
    "userName": "xxxxxxxxxxxxxxx",
    "phone": "123456789",
    "areaId": "010",
    "areaName": "北京",
    "gradeId": "10",
    "gradeName": "高中一年级",
    "role": 1,
    "point": 1,
    "relateUserList": [
      {
        "uid": "123456",
        "phone": "12345678",
        "areaCode": "010",
        "cityName": "北京",
        "name": "xxxxx",
        "userType": "1",
        "sex": 0,
        "card": "xxxxxxxxxxx",
        "grId": "6",
        "grName": "",
        "stuId": "xxxxxxxxxxxxxx"
      }
    ],
    "uid": "xxxxxxxxx",
    "talToken": "xxxxxxxxx"
  }
}
```

## 参数

| 参数     | 说明    | 类型   | 可选值 | 默认值 |
| -------- | ------- | ------ | ------ | ------ |
| userName | 账号名  | string | —      | —      |
| deviceId | 设备 ID | string | —      | —      |
| code     | code    | string | —      | —      |

::: info
`code: string`，必选，code，从 [loginTalUC](loginTalUC.html) 的返回值中获取。

`deviceId: string`，必选，deviceId，从 [getDeviceInfo](getDeviceInfo.html) 的返回值中获取。
:::

[[toc]]
