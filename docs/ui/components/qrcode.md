# 二维码

生成二维码。

## 基础用法

:::demo 基础用法

```html
<template>
  <sc-qrcode value="https://xbk-docs.sealui.com"></sc-qrcode>
  <sc-qrcode value="https://xbk-docs.sealui.com" background="#e5e5e5"></sc-qrcode>
</template>
```

:::

## 参数

| 参数            | 说明                                  | 类型   | 可选值     | 默认值  |
| --------------- | ------------------------------------- | ------ | ---------- | ------- |
| value           | 二维码的内容                          | string | —          | —       |
| background      | 二维码背景色                          | string | —          | #ffffff |
| backgroundAlpha | 二维码背景色的亮度                    | number | —          | 1       |
| color           | 二维码颜色                            | string | —          | #000000 |
| colorAlpha      | 二维码颜色的亮度                      | number | —          | 1       |
| level           | 二维码的级别                          | string | L、M、Q、H | L       |
| padding         | 二维码的边距                          | number | —          | 2       |
| size            | 二维码的尺寸                          | number | —          | 180     |
| logo            | 二维码中间的 logo                     | string | —          | —       |
| radius          | 二维码的圆角幅度(有 padding 值时有效) | number | —          | —       |

[[toc]]
