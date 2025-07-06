
切换保护模式
```js
# 连接到本地Redis服务器
redis-cli
# 禁用保护模式
> CONFIG SET protected-mode no
# 使更改永久生效
> CONFIG REWRITE
```
