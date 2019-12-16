# 登录集团用户中心

登录集团用户中心。

`loginTalUC`接口是一个集合，集成了`loginPassword` 和 `loginSms` 两种登录方式

## API 接口

### `this.$ucApi.loginTalUC(object)`

## 示例代码

```js
this.$ucApi.loginTalUC({
  username: 'xxxxxxxxx',
  password: 'xxxxxxxxx',
  phoneCode: 86,
  smsCode: 'xxxxxxxxx',
  loginType: 'userPassword'
})
```

::: tip

- 如果 `loginType` 是 userPassword，则此时是 用户名 + 密码登录，`username, password` 为必填项，其余可为空
- 如果 `loginType` 不是 userPassword，则此时是 验证码登录，`username, phoneCode, smsCode` 为必填项，其余可为空
  :::

## 返回值

```json
{
  {
    "errcode": 0,
    "errmsg": "请求成功",
    "data": {
      code:"xxxxxxxx"
    }
  }
}
```

## 参数

| 参数      | 说明             | 类型   | 可选值 | 默认值 |
| --------- | ---------------- | ------ | ------ | ------ |
| username  | 账号名           | string | —      | —      |
| password  | 密码             | string | —      | —      |
| phoneCode | 手机地区码       | string | —      | —      |
| smsCode   | 手机验证码       | string | —      | —      |
| loginType | 登录类型（必选） | string | —      | —      |

[[toc]]
