
## 介绍
TOML 旨在成为一个语义明显且易于阅读的最小化配置文件格式。TOML 被设计成可以无歧义地映射为哈希表。TOML 应该能很容易地被解析成各种语言中的数据结构。

文档地址：https://toml.io/cn/

```toml
# 这是一个 TOML 文档

title = "TOML 示例"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00

[database]
enabled = true
ports = [ 8000, 8001, 8002 ]
data = [ ["delta", "phi"], [3.14] ]
temp_targets = { cpu = 79.5, case = 72.0 }

[servers]

[servers.alpha]
ip = "10.0.0.1"
role = "前端"

[servers.beta]
ip = "10.0.0.2"
role = "后端"
```
