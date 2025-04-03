---
title: new String("abc")时对象是如何创建的？
icon: file
order: 
date: ""
category:
  - Java
tags:
  - 面经
---
## abc和new

```java
public class StringTest {  
    public static void main(String[] args) {  
        String str1 = "abc";  // 仅在常量池中创建对象  
        String str2 = new String("abc");  // 可能创建1个或2个对象  
        }  
}
```
```
0   ldc #2 <abc>                      // 将常量池中的 "abc" 加载到栈顶
2   astore_1                           // 将栈顶的 "abc" (常量池中的 "abc") 存储到局部变量表中的变量 1 (str1)
3   new #3 <java/lang/String>           // 创建一个新的 String 对象
6   dup                                // 将栈顶元素复制一次（用于后续构造方法调用）
7   ldc #2 <abc>                       // 将常量池中的 "abc" 再次加载到栈顶
9   invokespecial #4 <java/lang/String.<init> : (Ljava/lang/String;)V>  // 调用 String 的构造方法，将常量池中的 "abc" 作为参数传入
12  astore_2                           // 将构造出的新 String 对象存储到局部变量表中的变量 2 (str2)
13  return                             // 方法返回
```

分析字节码文件可以得知：
- 在 Java 1.8 中，`new String("abc")` 会创建一个新的 String 对象（在堆内存中），这个新对象会通过构造方法将常量池中的 "abc" 字符串的内容复制到新对象的 `char[]` 数组中。它并不会通过堆对象的 `char[]` 数组引用常量池中的对象。
- 常量池中的 `"abc"` 与 `new String("abc")` 在堆中的新对象是 **完全独立的**，没有直接的引用关系


## 直接new的情况
```java
public class StringTest {  
    public static void main(String[] args) {  
        String str2 = new String("abc");  // 可能创建1个或2个对象  
  
    }  
}
```

```
 0 new #2 <java/lang/String>
 3 dup
 4 ldc #3 <abc>
 6 invokespecial #4 <java/lang/String.<init> : (Ljava/lang/String;)V>
 9 astore_1
10 return

```

分析字节码文件可以看到`ldc`的操作，这加载了abc，说明abc被放入到了常量池中。然后后续再初始化的String对象。

## 拓展
```java  
public class StringTest {  
    public static void main(String[] args) {  
        String think = new StringBuilder().append("think").append("123").toString();  
    }  
}
```

```
 0 new #2 <java/lang/StringBuilder>
 3 dup
 4 invokespecial #3 <java/lang/StringBuilder.<init> : ()V>
 7 ldc #4 <think>
 9 invokevirtual #5 <java/lang/StringBuilder.append : (Ljava/lang/String;)Ljava/lang/StringBuilder;>
12 ldc #6 <123>
14 invokevirtual #5 <java/lang/StringBuilder.append : (Ljava/lang/String;)Ljava/lang/StringBuilder;>
17 invokevirtual #7 <java/lang/StringBuilder.toString : ()Ljava/lang/String;>
20 astore_1
21 return
```
分析字节码+查看常量池信息可以发现，这段代码执行完之后只是创建了String对象，并没有把think123加入到常量池当中。常量池中有think和123