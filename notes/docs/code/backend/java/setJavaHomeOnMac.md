---
title: Mac配置JAVA_HOME
icon: file
order: 
date: 2024-01-01
category:
  - Java
tags:
  - 环境配置
---
```shell
## wangwenpeng @ AppleBook in ~ [20:38:56]
$ /usr/libexec/java_home
/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

```shell
## wangwenpeng @ AppleBook in ~ [20:39:11]
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (3):
    11.0.21 (arm64) "Oracle Corporation" - "Java SE 11.0.21" /Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
    1.8.381.09 (arm64) "Oracle Corporation" - "Java" /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
    1.8.0_381 (arm64) "Oracle Corporation" - "Java SE 8" /Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

修改 ~/.zshrc 文件，设置 JAVA_HOME 和 PATH

```shell
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

```shell
wangwenpeng @ AppleBook in ~ [20:39:35]
$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
```
## 参考文章
[MacOS设置JAVA\_HOME环境变量-CSDN博客](https://blog.csdn.net/kongxx/article/details/134411739)