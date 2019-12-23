# 异步请求

## 基础用法

```js
this.$request({
  method: 'GET',
  url: 'https://xxxxx.com',
  data: {},
  retry: 1,
  retryDelay: 2000,
  before: () => {
    this.$toast.info('开始请求')
  },
  after: () => {
    this.$toast.info('请求完成')
  }
})
  .then(res => {
    // ...
  })
  .catch(err => {
    // ...
  })
```

```js
this.$request({
  url: 'https://xxxxx.com',
  data: {},
  retry: 1,
  retryDelay: 2000,
  before: () => {
    this.$toast.info('开始请求')
  },
  after: () => {
    this.$toast.info('请求完成')
  },
  success: res => {
    // ...
  },
  fail: err => {
    // ...
  }
})
```

### API

| 参数            | 说明                                                                                                | 类型     | 默认值 | 可选值                   |
| --------------- | --------------------------------------------------------------------------------------------------- | -------- | ------ | ------------------------ |
| url             | 请求的 URL 地址                                                                                     | string   | —      | —                        |
| method          | HTTP 请求方法                                                                                       | string   | GET    | POST、PUT、DELETE、PATCH |
| data            | 请求的参数                                                                                          | object   | —      | —                        |
| header          | 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/x-www-form-urlencoded | object   | —      | —                        |
| dataType        | 返回的数据格式                                                                                      | string   | json   | —                        |
| retry           | 请求失败后的重试次数                                                                                | number   | 3      | —                        |
| retryDelay      | 请求失败后的重试间隔 (毫秒)                                                                         | number   | 2000   | —                        |
| dataType        | 数据类型                                                                                            | string   | json   | —                        |
| timeOut         | 请求超时时长 (毫秒)                                                                                 | number   | 5000   | —                        |
| withCredentials | 是否跨域请求                                                                                        | boolean  | false  | —                        |
| before          | 请求拦截器                                                                                          | function | —      | —                        |
| after           | 响应拦截器                                                                                          | function | —      | —                        |
| success         | 请求成功的回调                                                                                      | function | —      | —                        |
| fail            | 请求失败的回调                                                                                      | function | —      | —                        |

[[toc]]
