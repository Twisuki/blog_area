---
title: 常见的sql应用场景
icon: file
order: 
date: ""
category:
  - 数据库
tags:
  - Mysql
---
## 
### 连续登陆问题

窗口函数是为每行返回一个结果的函数。常见的有
- sum、max、min
- row_number(每行分配唯一序号)、rank(分配排名，相同值排名相同，后续排名跳过)
- lead(获取后续行)、lag(获取前面行)

```mysql
select distinct
    t.num as ConsecutiveNums
from
    (
        select
            num,
            LAG(num, 1) over(order by id) as prev1,
            LAG(num, 2) over(order by id) as prev2
        from
            Logs
    ) as t
where t.num = prev1 and t.num = prev2
```

假设 `Logs` 表中有以下数据：

| id  | num |
| --- | --- |
| 1   | 1   |
| 2   | 1   |
| 3   | 1   |
| 4   | 2   |
| 5   | 1   |
| 6   | 2   |
| 7   | 2   |
| 8   | 2   |

运行子查询后，生成的虚表如下：

|num|prev1|prev2|
|---|---|---|
|1|NULL|NULL|
|1|1|NULL|
|1|1|1|
|2|1|1|
|1|2|1|
|2|1|2|
|2|2|1|
|2|2|2|