---
title: JAVA 并发编程
icon: file
order: 
date: ""
category: 
tags:
---
## 同步锁锁住的是个啥

同步(synchronized)实际上锁住的是一个对象的监视器(Monitor)。每个 Java 对象都有一个与之关联的 Monitor，可以把它理解为一个锁。

具体来说：

1. 同步实例方法：
```java
public synchronized void method() { }
```
- 锁住的是当前实例对象(this)的 Monitor

2. 同步静态方法：
```java
public static synchronized void method() { }
```
- 锁住的是当前类的 Class 对象的 Monitor

3. 同步块：
```java
synchronized(lockObject) { }
```
- 锁住的是 lockObject 对象的 Monitor
- lockObject 可以是任何非 null 的对象


实例对象结构里有对象头，对象头里面有一块结构叫 Mark Word，Mark Word 指针指向了monitor。

所谓的 Monitor 其实是一种同步工具，也可以说是一种同步机制。在 Java 虚拟机（HotSpot）中，Monitor 是由 ObjectMonitor 实现的，可以叫做内部锁，或者 Monitor 锁。

```java
ObjectMonitor() {
    _header       = NULL;
    _count        = 0; // 记录线程获取锁的次数
    _waiters      = 0,
    _recursions   = 0;  //锁的重入次数
    _object       = NULL;
    _owner        = NULL;  // 指向持有ObjectMonitor对象的线程
    _WaitSet      = NULL;  // 处于wait状态的线程，会被加入到_WaitSet
    _WaitSetLock  = 0 ;
    _Responsible  = NULL ;
    _succ         = NULL ;
    _cxq          = NULL ;
    FreeNext      = NULL ;
    _EntryList    = NULL ;  // 处于等待锁block状态的线程，会被加入到该列表
    _SpinFreq     = 0 ;
    _SpinClock    = 0 ;
    OwnerIsThread = 0 ;
  }
```