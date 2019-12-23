# 播放音频

播放音频文件

## API 接口

### `this.$audio(object|string)`

## 示例代码

```js
this.$audio({
  src:'xxx', // 音效文件名，音效文件放在 public/sounds/ 目录下
  times: 1   // 播放次数，
  loop: true // 是否循环播放   如果设置了loop，则times的设置就无效了，loop > times
})

// 或者
this.$audio('xxx')
```

## 参数

| 参数  | 说明         | 类型    | 可选值 | 默认值 |
| ----- | ------------ | ------- | ------ | ------ |
| src   | 音频文件地址 | string  | —      | —      |
| times | 播放次数     | number  | —      | 1      |
| loop  | 是否循环     | boolean | —      | false  |

::: danger
音效文件名，音效文件放在 `public/sounds/` 目录下

如果只需要播放一次，则参数直接传 src 地址即可

如果设置了 `loop`，则 `times` 的设置就无效了，`loop` 大于 `times`
:::

[[toc]]
