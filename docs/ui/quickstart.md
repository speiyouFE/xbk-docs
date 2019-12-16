# 快速上手

学而思在线小班课 PC 客户端

## 开发步骤

### 开发之前

```shell
// 安装项目依赖
npm install

// 启动本地服务
npm run serve

// 构建生产环境
npm run build
```

### 开始开发

> 由于项目使用模块自动加载、自动加载布局等。所以新建页面后，需要对应修改相应的模块。

##### 1. 新建页面

页面存在目录位于 `src/views` 下面。新建完页面后，需要修改 `src/router/index.js` 挂载到路由上。

##### 2. 新建模块

模块目录位于 `src/modules` 下面，模块结构如下：

```
coursePage          // 模块名称(和页面名称需一一对应)
├── demo            // 子模块
│   └── index.vue     // 子模块的入口文件
├── interactive     // 子模块
│   └── index.vue     // 子模块的入口文件
└── liveMain        // 子模块
       ├── index.vue        // 子模块的入口文件
       └── vuex       // 子模块的vuex
           ├── actions.js
           └── index.js
```

##### 3. 修改模块配置

模块的配置文件位于 `src/core/moduleManage/moduleConfig.json` 和 `src/core/moduleManage/pageType.js`两个文件

##### 4. 修改布局配置

布局的配置文件位于 `src/core/layoutManage` 下，需要自行新建以页面名称对应的配置

## 插件

- audio --> 音频播放插件 (`this.$audio`)
- events --> vue 事件 (`this.$events`)
- logger --> 日志插件 (`this.$logger`)
- request --> 网络请求插件 (`this.$request`)
- storage --> vuex 持久化插件 (此插件无需关注，已全局加载)

> 所以插件均已全局挂载，无需单独挂载。

## 项目组件

#### 按钮

```html
<sc-button>默认按钮</scbutton>
<sc-button type="success">带颜色的按钮</scbutton>
<sc-button size="large">超大号按钮</scbutton>
<sc-button color="#dc0000">自定义颜色按钮</scbutton>
<sc-button disabled>禁用状态按钮</sc-button>
```

| 参数  | 说明           | 类型   | 可选值                            | 默认值 |
| ----- | -------------- | ------ | --------------------------------- | ------ |
| type  | 按钮类型       | string | primary、success、danger、warning | —      |
| size  | 按钮尺寸       | string | large、small、mini                | —      |
| color | 自定义按钮颜色 | string | —                                 | —      |

> color 可以是纯色、也可以意思渐变 color="linear-gradient(to bottom, #4bb0ff, #6149f6)

#### 图标

```html
<sc-icon name="success"></sc-icon>
```

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 图标名称 | string | —      | —      |

#### 弹层

```html
<sc-dialog :visible.sync="dialogVisible" width="50%" customClass="dialog-demo" @closed="closed">
  <p>已选择张明明，可选择其他学员</p>
</sc-dialog>
```

| 参数        | 说明           | 类型   | 可选值 | 默认值 |
| ----------- | -------------- | ------ | ------ | ------ |
| customClass | 弹层自定义样式 | string | —      | —      |

#### 卡片

```html
<sc-card start>
  <h2>初中一年级暑期数学课程分别预览初中一年级暑期数学课程分别预览</h2>
  <h3><sc-icon name="waiting-circle"></sc-icon> 2018年12月29日 周六下午 18:30 -- 20:30</h3>
  <h3><sc-icon name="waiting-circle"></sc-icon> 2 / 10</h3>
  <p><span>主讲 张昭</span> <span>辅导 张昭</span><span>进入课堂</span></p>
</sc-card>
```

| 参数  | 说明       | 类型    | 可选值 | 默认值 |
| ----- | ---------- | ------- | ------ | ------ |
| start | 是否进行中 | boolean | —      | false  |

#### 输入框

```html
<sc-input v-model="input" placeholder="输入账号" clearable></sc-input>
```

#### 选择器

```html
<sc-select v-model="value" @change="change" placeholder="下拉选择">
  <sc-option value="+86" label="+86"> </sc-option>
</sc-select>
```

#### Tabs

```html
<sc-tabs v-model="activeName" @tab-click="handleClick">
  <sc-tab-pane label="验证码登录" name="first">验证码登录</sc-tab-pane>
  <sc-tab-pane label="密码登录" name="sec">密码登录</sc-tab-pane>
</sc-tabs>
```

#### 轻提示

```js
this.$toast.tip('已经关闭了', 2000) // 一般提示。无图标
this.$toast.success('成功了', 3000) // 成功提示。带成功图标
this.$toast.error('失败了', 3000) // 失败提示。带失败图标
this.$toast.info('提示', 3000) // 信息提示。带信息图标
this.$toast.loading('提示') // 加载中提示

this.$toast({
  msg: '信息',
  icon: '图标',
  duration: '2000' // 持续时间。ms
})
```

#### ScLottie

## 特性

- 模块自动加载
- 布局自动挂载
- vuex 自动挂载
- 全局挂载 C++ API (`this.$nativeApi`)
- 全局挂载 Live API (`this.$liveApi`)
- 全局挂载 RTC API (`this.$rtcApi`)
- 全局挂载 UC API (`this.$ucApi`)
- 全局 WS 消息中心 (`this.$messageCenter`)
- 打印日志 (`this.$logger.default|success|danger`)
- 日志上传阿里云 (`this.$logger.putLogs(msg,level)`)

## WebSocket

#### 建立连接

`this.$messageCenter.open(url)`

#### 指令监听

往`listenerArr`里 push 指令及对应的执行函数。例如：
`this.listenerArr.push(['STOP_SCREEN', this.stopScreenEventFn.bind(this)])`

#### 发送消息

`this.$messageCenter.send(data)`

为简化开发，提供了两个特殊指令：发送答案、模拟服务器发送测试指令
`this.$messageCenter.sendAnswer(userId,answer)`
`this.$messageCenter.sendTest(command,content)`

## 目录结构

```
├── assets          // 静态资源目录
│   ├── fonts
│   ├── imgs
│   └── styles
│       ├── common
│       └── mixins
├── components        // 项目组件
├── core          // 项目核心文件
│   ├── api         // 项目公用api
│   ├── layoutManage      // 项目布局管理
│   │   ├── coursePage
│   │   └── listsPage
│   └── moduleManage    // 项目模块管理
├── mixins
├── modules         // 项目模块目录
│   ├── coursePage
│   │   ├── demo
│   │   ├── interactive
│   │   └── liveMain
│   │       └── vuex
│   └── listsPage
│       ├── leftBar
│       ├── lists
│       └── topBar
├── plugins         // 项目插件目录
├── router          // 路由目录
├── store         // 状态管理
│   └── common
├── utils         // 常用函数
└── views         // 项目视图目录
```
