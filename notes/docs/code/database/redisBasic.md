---
date: ""
title: Redis基本知识
icon: file
order: 
category:
  - 数据库
tags:
  - Redis
---
## 基本概念
基于内存进行存储，支持 key-value 的存储形式，底层是用 C 语言编写的。
基于 key-value 形式的数据字典，结构非常简单，没有数据表的概念，直接用键值对的形式完成数据的管理。

Redis 支持多种数据类型：这里给出 5 个先
- 字符串类型`string`
- 哈希类型`hash`
- 列表类型`list`
- 集合类型`set`
- 有序集合类型`sortedset`

Redis的应用场景：

- 缓存（数据查询、短连接、新闻内容、商品内容等等）
- 聊天室的在线好友列表
- 任务队列（秒杀、抢购、12306等等）
- 应用排行榜
- 网站访问统计
- 数据过期处理（可以精确到毫秒）
- 分布式集群架构中的 session 分离

`Redis`存储的是`key-value`格式的数据，其中key都是字符串，value有5种不同的数据结构。

`value`的数据结构：
1. 字符串类型`string`；
2. 哈希类型`hash`，可以理解成`Java`中的`Map`结构；
3. 列表类型`list`，可以理解成`LinkedList`格式，支持重复元素；
4. 集合类型`set`，不允许重复元素；
5. 有序集合类型`zset sortedset`，不允许重复元素，且元素有顺序。

## 安装和配置
使用 homebrew 安装： `brew insatll redis`
启动 redis 服务端: `redis-server`
启动 redis 客户端：`redis-cli`

GUI 客户端：`RedisInsightv2`
## 操作
### 全局常用命令
- 查看当前链接数量`CLIENT LIST`

- 关闭某个链接 `CLIENT KILL <ip:port>`

- 查询所有的键：`keys *`

- 查看指定的 key 谁否存在：`exists key`

- 获取键对应的 value 的类型：`type key`
```shell
127.0.0.1:6379> type mysort
zset
127.0.0.1:6379> type username
set
```
- 删除指定的 key-value：`del key`

- 切换数据库：`select index`


redis中默认有16个db，编号0-15
- 将键值对从当前 db 移动到目标 db： `move key index`
- 删除当前数据库中所有的 key：`flushdb`
- 删除所有库所有的 key：`flushall`
- 查看当前 db 中 k-v 个数：`dbsize`
- 清除屏幕：`clear`



### 数据操作
#### 字符串类型的操作
- 存储：`set key value`
    ```
    127.0.0.1:6379> set username Peter
    OK
    ```
    
-  获取：`get key`
    ```
    127.0.0.1:6379> get username
    "Peter"
    ```
    
-  删除：`del key`
    ```
    127.0.0.1:6379> del username
    (integer) 1
    127.0.0.1:6379> get username
    (nil)
    ```
    
- 批量添加：`mset k1 v1 [k2 v2 k3 v3]`
    
    ```
    127.0.0.1:6379> mset username zs age 10 addr qd
    OK
    ```
    
- 批量取值：`mget k1 [k2 k3...]`
    
    ```
    127.0.0.1:6379> mget username age addr
    1) "zs"
    2) "10"
    3) "qd"
    ```


#### 自增操作
>必须对“数值”进行操作
    
- 在 `key` 对应的 `value` 上自增 +1：`incr key`
    
    ```
    127.0.0.1:6379> incr age
    (integer) 11
    ```
    
- 在 key 对应的 value 上自减 -1：`decr key`
    
    ```
    127.0.0.1:6379> decr age
    (integer) 10
    ```
    
- 在 key 对应的 value 上+v：`incrby key v`
    
    ```
    127.0.0.1:6379> incrby age 5
    (integer) 15
    ```
    
- 在 key 对应的 value 上-v：`decrby key v`
    
    ```
    127.0.0.1:6379> decrby age 5
    (integer) 10
    ```
    
- 添加键值对，并设置过期时间(TTL)： `setex key time(seconds) value`
    
    ```
    127.0.0.1:6379> setex age 10 30
    OK
    ```
    
-  设置值，如果 `key` 不存在则成功添加，如果 `key` 存在则添加失败（不做修改操作）： `setnx key value`
    
    设置 --- 不存在就添加，存在不做任何操作
    
    ```
    127.0.0.1:6379> setnx age 10
    (integer) 1
    127.0.0.1:6379> get age
    "10"
    127.0.0.1:6379> setnx age 20
    (integer) 0
    127.0.0.1:6379> get age
    "10"
    ```
    
-  在指定的 `key` 对应 `value` 拼接字符串：`append key value`
    
    ```
    127.0.0.1:6379> append addr _snq
    (integer) 6
    127.0.0.1:6379> get addr
    "qd_snq"
    ```
    
-  获取 `key` 对应的字符串的长度：`strlen key`
    
    ```
    127.0.0.1:6379> strlen addr
    (integer) 6
    ```

#### hash 类型
 1. 向`key`对应的`hash`中添加键值对：`hset key field value`
    
    ```
    127.0.0.1:6379> hset Person username Peter
    (integer) 1
    127.0.0.1:6379> hset Person age 10
    (integer) 1
    127.0.0.1:6379> hset Person address Beijing
    (integer) 1
    ```
    
2. 获取指定的`field`对应的值：`hget key field`
    
    ```
    127.0.0.1:6379> hget Person age
    "10"
    127.0.0.1:6379> hget Person username
    "Peter"hdel 
    127.0.0.1:6379> hget Person address
    "Beijing"
    ```
    
3. 向`key`对应的`hash`结构中批量添加键值对：`hmset key f1 v1 [f2 v2 ...]`
    
    ```
    127.0.0.1:6379> hmset person name zs age 10 addr bj
    OK
    ```
    
4. 在`key`对应的`hash`中的`field`对应`value`上加v：`hincrby key field v`
    
    ```
    127.0.0.1:6379> hincrby person age 1
    (integer) 11
    ```
    
5. 获取所有的`field`和`value`：`hgetall key`
    
    ```
    127.0.0.1:6379> hgetall Person
    1) "username"
    2) "Peter"
    3) "age"
    4) "10"
    5) "address"
    6) "Beijing"
    ```
    
6. 获取`key`对应的`hash`中所有的`field`：`hkeys key`
    
    ```
    127.0.0.1:6379> hkeys person
    1) "name"
    2) "age"
    3) "addr"
    ```
    
7. 获取`key`对应的`hash`中所有的`value`：`hvals key`
    
    ```
    127.0.0.1:6379> hvals person
    1) "zs"
    2) "11"
    3) "bj"
    ```
    
8. 检查`key`对应的`hash`中是否有指定的`field`：`hexists key field`
    
    ```
    127.0.0.1:6379> hexists person height
    (integer) 0
    127.0.0.1:6379> hexists person name
    (integer) 1
    ```
    
9. 获取`key`对应的`hash`中键值对的个数：`hlen key`
    
    ```
    127.0.0.1:6379> hlen person
    (integer) 3
    ```
    
    1. 向`key`对应的`hash`结构中添加`k-v`，如果`field`在`hash`中已经存在，则添加失败：`hsetnx key field value`
    
    ```
    127.0.0.1:6379> hsetnx person name aaa
    (integer) 0
    127.0.0.1:6379> hgetall person
    1) "name"
    2) "zs"
    3) "age"
    4) "11"
    5) "addr"
    6) "bj"
    127.0.0.1:6379> hsetnx person height 180
    (integer) 1
    127.0.0.1:6379> hgetall person
    1) "name"
    2) "zs"
    3) "age"
    4) "11"
    ```
    
10. 删除单个域：`hdel key field`
    
    ```
    127.0.0.1:6379> hdel Person age
    (integer) 1
    127.0.0.1:6379> hgetall Person
    1) "username"
    2) "Peter"
    3) "address"
    4) "Beijing"
    ```
    
11. 删除多个域：`hdel key field1 field2 field3...`
    
    ```
    127.0.0.1:6379> hdel Person username address
    (integer) 2
    127.0.0.1:6379> hgetall Person
    (empty list or set)
    ```


