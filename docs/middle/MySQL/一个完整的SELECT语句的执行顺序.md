## 介绍
一个完整的SQL语句的执行并不是按照关键字的顺序执行的，每一个关键字的执行之间存在逻辑依赖关系。
## 执行顺序分析
先来看一个完整的SQL语句
:::tip
从部门中查询'2020-01-01'年以后入职的员工并查出平均薪资大于1万的部门，返回平均薪资排名前5的部门
:::
```sql
SELECT d.dept_name, AVG(e.salary) as avg_salary
FROM employees e
         JOIN departments d ON e.dept_id = d.dept_id
WHERE e.hire_date > '2020-01-01'
GROUP BY d.dept_name
HAVING AVG(e.salary) > 10000
ORDER BY avg_salary DESC LIMIT 5;
```
SQL执行顺序

1、**FROM + JOIN（数据准备）**

   首先会执行进行连接查询，生成一张临时表，包含ON条件的所有记录，所有的列根据指定的别名进行命名，这一步相当于是进行数据准备的工作，因为只有有了数据才可以进行一系列的操作。

2、**WHERE（初步过滤）**

   从上一步临时表中筛选符合where条件`e.hire_date > '2020-01-01'`的记录，进一步缩小结果集。

3、**GROUP BY（分组）**

   根据部门名进行分组，分组后每个部门会存在很多的员工，如果需要过滤需要后面执行HAVING，这里需要和WHERE区别一下，HAVING只能搭配GROUP
   BY使用。

4、**HAVING（过滤分组）**

   对GROUP分组后的数据进行过滤，只保留符合平均薪资`AVG(e.salary) > 10000`的**分组**

5、**SELECT（选择返回列）**

   这一步目的是从上一步的分组列表`d.dept_name, AVG(e.salary) as avg_salary`中选择返回列和定义别名，为什么这一步需要在ORDER前面执行，后面讲。

6、**ORDER BY（对分组进行排序）**

执行排序操作，这一步可以使用聚合函数`AVG(e.salary)`，也可以使用select中定义的别名avg_salary进行排序，如果ORDER在SELECT前面执行就会导致无法使用别名，这也是这个顺序出现的原因之一。

7、**LIMIT（限制最终结果返回条数，也就是分组行数）**

   从排序后的分组中选择5行返回。
