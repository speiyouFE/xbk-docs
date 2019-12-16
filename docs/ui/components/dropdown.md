# 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素以及需要通过具名`slot`为`dropdown` 来设置下拉菜单。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<sc-dropdown>
  <span class="sc-dropdown-link"> 下拉菜单<i class="sc-icon-arrow-down-fill"></i> </span>
  <sc-dropdown-menu slot="dropdown">
    <sc-dropdown-item>1</sc-dropdown-item>
    <sc-dropdown-item>2</sc-dropdown-item>
    <sc-dropdown-item>3</sc-dropdown-item>
    <sc-dropdown-item disabled>4</sc-dropdown-item>
    <sc-dropdown-item divided>5</sc-dropdown-item>
  </sc-dropdown-menu>
</sc-dropdown>
```

<style lang="scss">
  .sc-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>

:::

## 菜单隐藏方式

可以`hide-on-click`属性来配置。

:::demo 下拉菜单默认在点击菜单项后会被隐藏，将`hide-on-click`属性默认为`false`可以关闭此功能。

```html
<sc-dropdown :hide-on-click="false">
  <span class="sc-dropdown-link"> 下拉菜单<i class="sc-icon-arrow-down-fill"></i> </span>
  <sc-dropdown-menu slot="dropdown">
    <sc-dropdown-item>1</sc-dropdown-item>
    <sc-dropdown-item>2</sc-dropdown-item>
    <sc-dropdown-item>3</sc-dropdown-item>
    <sc-dropdown-item disabled>4</sc-dropdown-item>
    <sc-dropdown-item divided>5</sc-dropdown-item>
  </sc-dropdown-menu>
</sc-dropdown>

<style lang="scss">
  .sc-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
</style>
```

:::

## 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

:::demo

```html
<sc-dropdown @change="handleCommand">
  <span class="sc-dropdown-link"> 下拉菜单<i class="sc-icon-arrow-down-fill"></i> </span>
  <sc-dropdown-menu slot="dropdown">
    <sc-dropdown-item value="a">1</sc-dropdown-item>
    <sc-dropdown-item value="b">2</sc-dropdown-item>
    <sc-dropdown-item value="c">3</sc-dropdown-item>
    <sc-dropdown-item value="d" disabled>4</sc-dropdown-item>
    <sc-dropdown-item value="e" divided>5</sc-dropdown-item>
  </sc-dropdown-menu>
</sc-dropdown>

<style lang="scss">
  .sc-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(value) {
        this.$toast('click on item ' + value)
      }
    }
  }
</script>
```

:::

## 参数

| 参数          | 说明                                                                 | 类型    | 可选值                                               | 默认值     |
| ------------- | -------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ---------- |
| type          | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效) | string  | —                                                    | —          |
| size          | 菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效           | string  | medium / small / mini                                | —          |
| placement     | 菜单弹出位置                                                         | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | 触发下拉的行为                                                       | string  | hover, click                                         | hover      |
| hide-on-click | 是否在点击菜单项后隐藏菜单                                           | boolean | —                                                    | true       |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                   | number  | —                                                    | 250        |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）                   | number  | —                                                    | 150        |

### Events

| 事件名称       | 说明                                          | 回调参数                      |
| -------------- | --------------------------------------------- | ----------------------------- |
| click          | `split-button` 为 true 时，点击左侧按钮的回调 | —                             |
| value          | 点击菜单项触发的事件回调                      | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发                         | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型                 | 可选值 | 默认值 |
| -------- | ---------- | -------------------- | ------ | ------ |
| value    | 指令       | string/number/object | —      | —      |
| disabled | 禁用       | boolean              | —      | false  |
| divided  | 显示分割线 | boolean              | —      | false  |

[[toc]]

<style lang="scss">
  .demo-box {
    .sc-dropdown {
      vertical-align: top;

      & + .sc-dropdown {
        margin-left: 15px;
      }
    }
    .sc-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .sc-icon-arrow-down-fill {
      width: 16px;
    }
  }

  .block-col-2 {
    margin: -24px;

    .sc-col {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;

      &:last-child {
        border-right: 0;
      }
    }
  }

 .demo-dropdown .demonstration {
   display: block;
   color: #8492a6;
   font-size: 14px;
   margin-bottom: 20px;
 }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      },
      handleCommand(value) {
        this.$toast.tip('click on item ' + value)
      }
    }
  }
</script>
