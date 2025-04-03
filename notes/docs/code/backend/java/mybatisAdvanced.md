---
title: mybatis高级
icon: file
order: 
date: ""
category:
  - Java
  - 数据库
tags:
  - Mysql
  - MyBatis
---
## 

MappedStatement 包含了当前查询的详细信息，例如：
- 查询的 SQL 语句。
- 参数映射规则。
- 结果集映射规则（即如何将数据库结果映射到 Java 对象）。

```java
final ResultSetHandler statementHandler = realTarget(invocation.getTarget()); // 获取 ResultSetHandler 真实对象，方便访问 ResultSetHandler 的内部属性或方法  
final MetaObject metaObject = SystemMetaObject.forObject(statementHandler);  
final MappedStatement mappedStatement = (MappedStatement) metaObject.getValue(MAPPED_STATEMENT);
```