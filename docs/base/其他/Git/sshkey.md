填写邮箱并执行
```js
ssh-keygen -t ed25519 -C "xxx@gmail.com"
```
:::tip 提示
ed25519是加密算法
:::
mac进入`/Users/xxx/.ssh`文件夹可看到如下文件：
```js
config		id_ed25519.pub	id_rsa.pub	known_hosts.old
id_ed25519	id_rsa		known_hosts
```
复制id_ed25519.pub文件的内容到Github
