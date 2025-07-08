
## 介绍

Fork/Join是一个并行任务执行框架，他的功能是将一个大的任务拆分为很多的小任务并行执行，最后再合并，用到了分治思想。
该框架的设计分为两个步骤：
- 拆分任务（Fork）
- 执行并合并任务（Join）

任务的创建方式有两种，分别是继承**RecursiveAction**、**RecursiveTask**，前者没有返回值。任务创建以后需要将其添加到**ForkJoinPool**线程池所维护的**双端队列**中执行，会添加到**头部**，当一个工作线程队列没有任务的时候通过**工作窃取算法**从其他工作线程的队列尾部获取一个任务执行。
:::tip 工作窃取算法
该算法指的是从其他线程的队列里面偷一个任务来执行，自己的活干完了帮其他线程干（禁止摸鱼😄），窃取任务是从双端队列的尾部获取的，目的是为了避免竞争，该算法的优点是可以充分利用线程进行并行计算，缺点是当双端队列只有一个任务时还是会存在竞争。
:::

任务提交方式：
- submit： 异步提交，通过get方法等待获取
- invoke：立即返回结果
- execute：批量提交

下面是一个并行求和案例：
```java
/**
 * 求指定范围和
 */
public class CountTask extends RecursiveTask<Integer> {
    /**
     * 进行任务拆分多线程计算的阈值,阈值不是越小越好 （10万采用1w-2w阈值）
     */
    private static final int THRESHOLD = 2_0000;
    private final int start;
    private final int end;
    public CountTask(int start, int end) {
        this.start = start;
        this.end = end;
    }
    @Override
    protected Integer compute() {
        int sum = 0;
        boolean canCompute = (end - start) <= THRESHOLD;
        if (canCompute) {//小于阈值直接计算
            for (int i = start; i <= end; i++) {
                sum += i;
            }
        } else {
            //大于阈值，需要将任务递归拆分并行计算
            int middle = (start + end) / 2;
            CountTask leftTask = new CountTask(start, middle);
            CountTask rightTask = new CountTask(middle + 1, end);
            //执行子任务
            leftTask.fork();
            rightTask.fork();
            //等待子任务执行完，并得到其结果
            int leftResult = leftTask.join();
            int rightResult = rightTask.join();
            //合并子任务
            sum = leftResult + rightResult;
        }
        return sum;
    }
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        ForkJoinPool forkJoinPool = new ForkJoinPool();
        CountTask countTask = new CountTask(1, 10_0000);
        //异步提交
        ForkJoinTask<Integer> result = forkJoinPool.submit(countTask);
        try {
            //等待获取结果
            System.out.println(result.get());
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("耗时：" + (endTime - startTime) + "ms");
    }
}
```
## 应用场景
- Java并行流内部实现
- 大数据处理，MapReduce思想
- 文档处理与索引构建
- 大规模文件遍历

注：该框架主要适用于可以将任务拆分进行递归处理的场景。

## 参考文档
- Java并发编程的艺术
