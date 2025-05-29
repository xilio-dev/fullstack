
## 变量
1、定义变量
```shell
name="admin" #或 name='admin' 支持重新给变量赋值，如name="lisa"
```
2、获取变量值。$变量名
```shell
value=$name
```
3、字符串内使用变量
```shell
val="My name is $name"
```
>注意：只有双引号内可以嵌套使用变量

## 获取参数
脚本实际参数范围是[$1~n)，其中$0获取到的是执行脚本的名称。
```shell
./install.sh a b c
echo "$0,$1,$2,$3" #结果：./install.sh,a,b,c
```
## 数组
1、定义括号初始化数组，以空格初始化值
```shell
arr=(1 2 "小敏") #定义并初始化数组
arr[3]="小明" # 添加一个元素
```
2、符取变量的值，下标从0开始
```shell
echo ${arr[0]}
```
3、遍历数组
```shell
for item in ${arr[@]};do
    echo $item
done
```
4、获取数组所有元素
```shell
echo ${arr[*]} #输出：1 2 小敏 小明
```

