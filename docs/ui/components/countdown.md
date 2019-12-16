# 倒计时

倒计时组件

## 基础用法

:::demo `time`属性表示倒计时总时长，单位为毫秒

```html
<template>
  <sc-countdown :time="time" />
</template>

<script>
  export default {
    data() {
      return {
        time: 5000
      }
    }
  }
</script>
```

:::

## 自定义格式

:::demo 通过`format`属性设置倒计时文本的内容

```html
<template>
  <sc-countdown :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
</template>
```

:::

## 自定义样式

:::demo 通过插槽自定义倒计时的样式，`data`对象格式见下方表格

```html
<template>
  <sc-countdown :time="time" format="DD 天 HH 时 mm 分 ss 秒">
    <template v-slot="data">
      <span class="item">{{ data.hours }}</span>
      <span class="item">{{ data.minutes }}</span>
      <span class="item">{{ data.seconds }}</span>
    </template>
  </sc-countdown>
</template>
```

:::

## 手动控制

:::demo 通过 `ref` 获取到组件实例后，可以调用`start`、`pause`、`reset`方法

```html
<template>
  <sc-countdown ref="countDown" millisecond :time="3000" :auto-start="false" format="ss:SSS" @finish="finished"></sc-countdown>
  <sc-button type="success" size="small" @click="start">开始</sc-button>
  <sc-button type="danger" size="small" @click="pause">暂停</sc-button>
  <sc-button size="small" @click="reset">重置</sc-button>
</template>
<script>
  export default {
    methods: {
      start() {
        this.$refs.countDown.start()
      },
      pause() {
        this.$refs.countDown.pause()
      },
      reset() {
        this.$refs.countDown.reset()
      },
      finish() {
        this.$toast('倒计时结束')
      }
    }
  }
</script>
```

:::

## 参数

| 参数        | 说明                 | 类型    | 可选值 | 默认值   |
| ----------- | -------------------- | ------- | ------ | -------- |
| time        | 倒计时时长，单位毫秒 | number  | —      | —        |
| format      | 时间格式             | number  | —      | HH:mm:ss |
| autoStart   | 是否自动开始倒计时   | boolean | —      | true     |
| millisecond | 是否开启毫秒级渲染   | boolean | —      | false    |

### Format 格式

| 格式 | 说明 |
| ---- | ---- |
| DD   | 天数 |
| HH   | 小时 |
| mm   | 分钟 |
| ss   | 秒数 |
| S    | 毫秒(一位数) |
| SS    | 毫秒(两位数) |
| SSS    | 毫秒(三位数) |

### Events

| 事件名 | 说明                     | 回调 |
| ------ | ------------------------ | ---- |
| finish | 倒计时结束时触发         | —    |
| remain | 倒计时剩余时间，实时返回 | —    |

### timeData 格式

| 名称         | 说明       | 类型   |
| ------------ | ---------- | ------ |
| days         | 剩余天数   | number |
| hours        | 剩余小时   | number |
| minutes      | 剩余分钟数 | number |
| seconds      | 剩余秒数   | number |
| milliseconds | 剩余毫秒   | number |
| days         | 剩余天数   | number |

[[toc]]

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000
      }
    },
    methods: {
      start() {
        this.$refs.countDown.start()
      },
      pause() {
        this.$refs.countDown.pause()
      },
      reset() {
        this.$refs.countDown.reset()
      },
      finish() {
        this.$toast('倒计时结束')
      },
      finished(){

      }
    }
  }
</script>

<style lang="scss">
.item{
  background:#09bb07;
  padding:3px;
  border-radius:.1rem;
  color:#fff
}
.sc-countdown + .sc-button{
  margin-top:.5rem;
}
</style>
