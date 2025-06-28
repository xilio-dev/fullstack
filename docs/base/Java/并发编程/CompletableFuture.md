

## 案例
### 基本使用
1、执行异步无返回值任务
```java
CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
    System.out.println(Thread.currentThread().getName());
});
```
2、异步执行带返回值的任务
```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    System.out.println(Thread.currentThread().getName());
    return "hello";
});
System.out.println(future.get()); //out:hello
```
3、获取结果
#get：有一场，会阻塞，直到有结果才会停止阻塞
#getNow: 无异常，不阻塞，有结果立即返回，如果没有结果，需要等待一段时间才能够再次获取真正的结果，且当前返回默认值。
```java
// 阻塞获取结果
String result = future.get();
// 设置超时时间获取结果
String resultWithTimeout = future.get(1, TimeUnit.SECONDS);
// 非阻塞获取结果（如果完成则返回，否则返回默认值）
String resultOrElse = future.getNow("默认值");
```
### 组合多个异步任务+合并结果

```java
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "hello");
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "world");
//等待两个都完成然后组合结果
future1.thenCombine(future2, (s1, s2) -> s1 + " " + s2)//组合多个任务
        .thenAccept(System.out::println);//out: helloworld
```
### 任务链式调用
```java
CompletableFuture.supplyAsync(() -> {
    try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }
    return "hello";
}).thenApply(s -> s + " world")//同步组合上一步的结果
.thenApplyAsync(s -> s + "!")//异步组合上一步的结果
.thenAccept(System.out::println);//消费任务 out：hello world! 
```
### 并行执行多个任务
```java
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {
    try {Thread.sleep(1000);} catch (InterruptedException ignored) {}
    return "result1";
});
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
    try {Thread.sleep(1500);} catch (InterruptedException ignored) {}
    return "result2";
});CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> {
    try {Thread.sleep(500);} catch (InterruptedException ignored) {}
    return "result3";
});
//等待所有任务都完成
CompletableFuture<Void> futures = CompletableFuture.allOf(future1, future2, future3);
futures.thenRun(() -> {
    System.out.println("所有任务已经执行完成～");
    try {
        System.out.println(future1.get());
        System.out.println(future2.get());
        System.out.println(future3.get());
    }  catch (Exception e) {
        e.printStackTrace();
    }
});
```
### 异常处理
```java
CompletableFuture.supplyAsync(() -> {
    if (new Random().nextBoolean()) {
        throw new RuntimeException("出错了");
    }
    return "结果";
}).exceptionally(e -> {
    System.out.println("error" + e.getMessage());
    return "默认结果";
}).thenAccept(System.out::println);
```
