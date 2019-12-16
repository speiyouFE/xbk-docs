# 按钮

基础组件，触发业务逻辑时使用。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 `Button` 的样式。

```html
<template>
  <sc-button>默认按钮</sc-button>
  <sc-button type="primary">主要按钮</sc-button>
  <sc-button type="success">成功按钮</sc-button>
  <sc-button type="info">信息按钮</sc-button>
  <sc-button type="warning">警告按钮</sc-button>
  <sc-button type="danger">危险按钮</sc-button>
  <br /><br />
  <sc-button plain>朴素按钮</sc-button>
  <sc-button type="primary" plain>主要按钮</sc-button>
  <sc-button type="success" plain>成功按钮</sc-button>
  <sc-button type="info" plain>信息按钮</sc-button>
  <sc-button type="warning" plain>警告按钮</sc-button>
  <sc-button type="danger" plain>危险按钮</sc-button>
  <br /><br />
  <sc-button round>圆角按钮</sc-button>
  <sc-button type="primary" round>主要按钮</sc-button>
  <sc-button type="success" round>成功按钮</sc-button>
  <sc-button type="info" round>信息按钮</sc-button>
  <sc-button type="warning" round>警告按钮</sc-button>
  <sc-button type="danger" round>危险按钮</sc-button>
</template>
```

:::

## 禁用状态

按钮不可用状态
:::demo 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

```html
<template>
  <sc-button disabled>默认按钮</sc-button>
  <sc-button type="primary" disabled>主要按钮</sc-button>
  <sc-button type="success" disabled>成功按钮</sc-button>
  <sc-button type="info" disabled>信息按钮</sc-button>
  <sc-button type="warning" disabled>警告按钮</sc-button>
  <sc-button type="danger" disabled>危险按钮</sc-button>
</template>
```

:::

## 自定义颜色

自定义按钮颜色
:::demo 你可以使用 `color` 属性来定义按钮颜色，支持单色和多色渐变。

```html
<template>
  <sc-button color="linear-gradient(to bottom, #00ecff, #0098ff)">默认按钮</sc-button>
  <sc-button color="#dc0000">主要按钮</sc-button>
</template>
```

:::

## 参数

| 参数  | 说明           | 类型   | 可选值                            | 默认值 |
| ----- | -------------- | ------ | --------------------------------- | ------ |
| type  | 按钮类型       | string | primary、success、danger、warning | —      |
| size  | 按钮尺寸       | string | large、small、mini                | —      |
| color | 自定义按钮颜色 | string | —                                 | —      |

:::info
color 可以是纯色、也可以意思渐变 `color="linear-gradient(to bottom, #4bb0ff, #6149f6)`
:::

[[toc]]
