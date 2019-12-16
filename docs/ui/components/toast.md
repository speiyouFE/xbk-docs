# 轻提示

轻提示

## 基础用法

:::demo 基本用法

```html
<template>
  <sc-button @click="showTip">提示</sc-button>
</template>

<script>
  export default {
    methods: {
      showTip() {
        this.$toast.tip('已经关闭了', 2000)
      }
    }
  }
</script>
```

:::

## 带图标

:::demo

```html
<template>
  <sc-button @click="showSuccess">成功提示</sc-button>
  <sc-button @click="showError">错误提示</sc-button>
  <sc-button @click="showInfo">信息提示</sc-button>
  <sc-button @click="showLoading">Loading</sc-button>
</template>

<script>
  export default {
    methods: {
      showSuccess() {
        this.$toast.success('成功了', 3000)
      },
      showError() {
        this.$toast.error('失败了', 3000)
      },
      showInfo() {
        this.$toast.info('提示', 3000)
      },
      showLoading() {
        this.$toast.loading('加载中')
        setTimeout(() => {
          this.$toast.close()
        }, 5000)
      }
    }
  }
</script>
```

:::

## 公共用法

```js
this.$toast({
  msg: '信息',
  icon: '图标',
  duration: '2000' // 持续时间。ms
})
```

## 参数

| 参数     | 说明             | 类型    | 可选值 | 默认值 |
| -------- | ---------------- | ------- | ------ | ------ |
| msg      | 提示消息         | string  | —      | —      |
| duration | 持续时间（毫秒） | number  | —      | 3000   |
| modal    | 是否显示遮罩     | boolean | —      | true   |
| icon     | 图标             | string  | —      | —      |
| position | 提示未知         | string  | —      | center |

[[toc]]

<script>
export default{
  methods: {
    showTip(){
      this.$toast.tip('已经关闭了', 2000)
    },
    showSuccess(){
      this.$toast.success('成功了', 3000)
    },
    showError(){
      this.$toast.error('失败了', 3000)
    },
    showInfo(){
      this.$toast.info('提示', 3000)
    },
    showLoading(){
      this.$toast.loading('加载中', 3000)
    }
  }
}
</script>
