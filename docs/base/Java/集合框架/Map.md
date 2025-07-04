
## ConcurrentHashMap 线程安全问题

只能保证单个操作的原子性，不保证批量操作的原子性，例如for循环put会出现线程安全问题。

**1、putAll方法**


**2、复合操作**

```java
// 复合操作: 检查-计算-更新
if (map.containsKey(randomNum)) {
    map.put(randomNum, map.get(randomNum) + 1);
} else {
    map.put(randomNum, 1);
}
```
解决方案：
```java
// 使用compute方法保证原子性
map.compute(randomNum, (k, v) -> v == null ? 1 : v + 1);
```
