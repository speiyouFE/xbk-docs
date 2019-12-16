# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```html
<template>
  <sc-tabs v-model="activeName" @tab-click="handleClick">
    <sc-tab-pane label="CSS3" name="first">CSS3</sc-tab-pane>
    <sc-tab-pane label="Javascript" name="second">Javascript</sc-tab-pane>
    <sc-tab-pane label="HTML5" name="third">HTML5</sc-tab-pane>
    <sc-tab-pane label="PHP" name="fourth">PHP</sc-tab-pane>
  </sc-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
```

:::

## 参数

| 参数                    | 说明                      | 类型    | 可选值           | 默认值              |
| ----------------------- | ------------------------- | ------- | ---------------- | ------------------- |
| type                    | 风格类型                  | string  | card/border-card | —                   |
| closable                | 标签是否可关闭            | boolean | —                | false               |
| addable                 | 标签是否可增加            | boolean | —                | false               |
| editable                | 标签是否同时可增加和关闭  | boolean | —                | false               |
| active-name(deprecated) | 选中选项卡的 name         | string  | —                | 第一个选项卡的 name |
| value                   | 绑定值，选中选项卡的 name | string  | —                | 第一个选项卡的 name |

### Events

| 事件名称   | 说明                                    | 回调参数              |
| ---------- | --------------------------------------- | --------------------- |
| tab-click  | tab 被选中时触发                        | 被选中的标签 tab 实例 |
| tab-remove | 点击 tab 移除按钮后触发                 | 被删除的标签的 name   |
| tab-add    | 点击 tabs 的新增按钮后触发              | —                     |
| edit       | 点击 tabs 的新增按钮或 tab 被关闭后触发 | (targetName, action)  |

### Tab-pane API

| 参数     | 说明                                             | 类型    | 可选值 | 默认值                                                |
| -------- | ------------------------------------------------ | ------- | ------ | ----------------------------------------------------- |
| label    | 选项卡标题                                       | string  | —      | —                                                     |
| disabled | 是否禁用                                         | boolean | —      | false                                                 |
| name     | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string  | —      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable | 标签是否可关闭                                   | boolean | —      | false                                                 |

[[toc]]

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
<style lang="scss">
.sc-tabs__item{
  line-height:inherit
}
.sc-tabs__content{
margin-top:1rem;
  border:1px solid #e5e5e5;
  padding:1rem
}
</style>
