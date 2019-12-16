# 图标

PC 客户端一套常用的图标集合。

## 使用方法

基础使用方法。
:::demo 直接通过设置 `name` 来使用即可

```html
<sc-icon name="close"></sc-icon>
<sc-icon name="clear"></sc-icon>
<sc-icon name="arrow-down-fill"></sc-icon>
<sc-icon name="download"></sc-icon>
```

:::

## 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'sc-icon-' + name"></i>
      <span class="icon-name">{{name}}</span>
    </span>
  </li>
</ul>

<script>
  const iconList = ['close','clear','arrow-down-fill','arrow-up-fill','arrow-left','info-circle','download','subtract','clean','upload','logout','check','success-circle','setting','waiting-circle','equal-circle','microphone','exchange','camera','avatar','clock','refresh']

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>

<style lang="scss">
.demo-box{
  .sc-icon{
    margin:0 1rem;
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
}
ul.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0;
  border: solid 1px #eaeefb;
  border-radius: 4px;
}
.icon-list li {
  list-style: none;
  padding:0;
  margin:0;
  float: left;
  width: calc( 100% / 6 );
  text-align: center;
  height: 110px;
  line-height: 110px;
  color: #666;
  font-size: 13px;
  transition: color .15s linear;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: 0px;
  margin-bottom: -1px;
  &:nth-child(6n){
    margin-right:-10px;
  }
  span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    color: #99a9bf;
  }
  i {
    display: block;
    margin:0 auto;
    margin-bottom: 15px;
    color: #606266;
  }
  .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
    color: #606266;
  }
}
</style>

[[toc]]
