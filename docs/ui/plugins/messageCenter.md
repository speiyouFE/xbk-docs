# 消息中心

收发 Websocket 消息

### 打开连接

```js
this.$messageCenter.open(url, liveClassId)
```

### 关闭连接

````js
this.$messageCenter.close()

### 监听消息

```js
this.$messageCenter.bind(listener)
````

### 卸载监听

```js
this.$messageCenter.unbind(listener)
```

### 发送消息到服务器

```js
this.$messageCenter.send(object)
```

### 发送互动答案到服务器

```js
this.$messageCenter.sendAnswer(stuid, answer)
```

### 主观题发送图片服务器

```js
this.$messageCenter.sendImgQuest(interactionId, url)
```

### 发送测试指令

```js
this.$messageCenter.sendTest(order, (content = {}))
```

[[toc]]
