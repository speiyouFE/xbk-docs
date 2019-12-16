# 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选
:::demo `v-model`的值为当前被选中的`sc-option`的 value 属性值

```html
<template>
  <sc-select v-model="value" placeholder="请选择">
    <sc-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"> </sc-option>
  </sc-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: 'JavaScript'
          },
          {
            value: '选项2',
            label: 'CSS3'
          },
          {
            value: '选项3',
            label: 'HTML5'
          },
          {
            value: '选项4',
            label: 'PHP'
          },
          {
            value: '选项5',
            label: 'IOS'
          }
        ],
        value: ''
      }
    }
  }
</script>
```

:::

[[toc]]

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: 'JavaScript'
          },
          {
            value: '选项2',
            label: 'CSS3'
          },
          {
            value: '选项3',
            label: 'HTML5'
          },
          {
            value: '选项4',
            label: 'PHP'
          },
          {
            value: '选项5',
            label: 'IOS'
          }
        ],
        value: ''
      }
    }
  }
</script>
