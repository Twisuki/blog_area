---
title: 数据结构详解
icon: file
order: 
date: ""
category:
  - 知识
tags:
  - 数据结构
---
### Java 语言数组结构教程

在 **[Java 语言](https://haicoder.net/java/java-development.html)** 中，虚拟机的内存空间分为堆内存空间和栈内存空间。Java 的数组就需要用到这两个空间，我们定义的数组的名字，它是保存在 Java 栈上面，然后记录的数据指向堆里面具体数据的地址。

### Java 语言数组结构详解

#### 堆栈内存解释

数组的操作中，在栈内存中保存的永远是数组的名称，只开辟了栈内存空间的数组是永远没有办法被使用的，必须有指向的堆堆内存数组才可以被使用，要开辟新的堆内存，需要使用 new 关键字。然后就可以将此堆堆使用权交给栈。一个堆内存空间可以被多个栈内存空间同时指向。

生活中的场景就是一个人，它可以有多个名字，而名字我们可以理解为栈，而人就相当于一个堆。

![01 java堆栈解释.png](https://haicoder.net/uploads/pic/server/java/java-array/01%20java%E5%A0%86%E6%A0%88%E8%A7%A3%E9%87%8A.png)

#### 数组堆栈

我们以一个代码为例子：

```java
package com.haicoder.net.array;
public class ArrayTest {     
	public static void main(String[] args) {
		int[] scores = null; //定义一个数组         
		scores = new int[3]; //为每个数组分配内存空间    
	} 
}
```

具体的内存分配图如下：

![02 java数组堆栈.png](https://haicoder.net/uploads/pic/server/java/java-array/02%20java%E6%95%B0%E7%BB%84%E5%A0%86%E6%A0%88.png)

我们可以看到，`scores` 这个名词指向了堆里面的一块内存空间，它被分了三个连续的空间，里面的值都是 `0` ，因为我们定义了 `int` 类型的数组，并且给它分配了空间，而 `int` 类型的默认值是 `0` ，所以我们刚初始化的时候，数组就是这样的分配模型。

在后面对数组进行操作的时候，其实是对堆里面的数据进行操作。

### Java 语言数组总结

和普通类型不一样，数组类型是引用数据类型，它的名字存放在栈中，具体的数据，存放在堆中。

因为堆是可以被栈里面多个名字指向的，所以我们在实际工作中如果发现自己的数组值不是自己期望的数据，可以看下是不是被别的地方引用给修改了。


原文链接：
[Java数组内存-Java数组内存分配-Java数组内存空间-嗨客网](https://haicoder.net/java/java-array-memory.html)