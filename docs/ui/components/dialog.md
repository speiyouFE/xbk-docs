# 弹层

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```html
<template>
  <sc-button type="success" @click="showDialog">打开弹层</sc-button>
  <sc-dialog :visible.sync="dialogVisible" width="50%">
    <p>已选择张明明，可选择其他学员</p>
  </sc-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      showDialog() {
        this.dialogVisible = true
      }
    }
  }
</script>
```

:::

## 参数

| 参数                  | 说明                                                                         | 类型                                 | 可选值 | 默认值 |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| visible               | 是否显示 Dialog，支持 .sync 修饰符                                           | boolean                              | —      | false  |
| title                 | Dialog 的标题，也可通过具名 slot （见下表）传入                              | string                               | —      | —      |
| width                 | Dialog 的宽度                                                                | string                               | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                                            | boolean                              | —      | false  |
| top                   | Dialog CSS 中的 margin-top 值                                                | string                               | —      | 15%    |
| modal                 | 是否需要遮罩层                                                               | boolean                              | —      | true   |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean                              | —      | true   |
| append-to-body        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                                         | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                                          | string                               | —      | —      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                           | boolean                              | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                             | boolean                              | —      | true   |
| show-close            | 是否显示关闭按钮                                                             | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                           | function(done)，done 用于关闭 Dialog | —      | —      |
| center                | 是否对头部和底部采用居中布局                                                 | boolean                              | —      | false  |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| on-close | Dialog 关闭的回调 | —        |
| on-open  | Dialog 打开的回调 | —        |

[[toc]]

<script>
  export default {
    data(){
      return {
        dialogVisible:false
      }
    },
    methods: {
      showDialog() {
        this.dialogVisible = true
      }
    }
  }
</script>
