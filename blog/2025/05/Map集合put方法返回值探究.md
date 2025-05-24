---
title: Map集合put方法返回值探究
date: 2025-05-24
authors: [xilio]
tags: [Java,Map]
---

遇到一个特别需要注意的Map集合使用问题，就是**Map#put**方法的返回值到底是什么，主要有以下几种情况：

1、如果之前已经有对应的key，如果此时再放入一个相同key的值，此时是做更新覆盖操作，返回旧值
2、如果之前没有对应的key，则执行添加操作，返回NULL

```java
    Map<String, Integer> cache = new HashMap<>();
    Integer r1=cache.put("key1",100); //返回NULL
    Integer r2=cache.put("key1",200); //返回100 覆盖

```
备注：规则适用于Map下的各种实现，例如**HashMap**、**ConcurrentHashMap**都有相同的规则。

补充：如果需要实现如果已经有对应key存在的时候不做任何操作，可以使用框架提供的另一个方法**Map#putIfAbsent**，案例如下：
```java
    HashMap<Object, Object> map = new HashMap<>();
    Object o = map.putIfAbsent("1", "2");
    System.out.println(o);//返回的是null
    System.out.println("--");
    Object o1 = map.putIfAbsent("1", "3");//key已经存在了，所以返回的是之前的值 不做任何操作
    System.out.println(o1);//返回的是之前的值 o1=2

```
