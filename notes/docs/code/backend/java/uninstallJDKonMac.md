---
title: Mac卸载JDK
icon: file
order: 
date: ""
category:
  - Java
tags:
  - 环境配置
---
如下两步即可搞定卸载操作：

1. 列出当前的 jdk 安装列表，如下命令：
    
    ```shell
    demo@Mac ~ $ ls /Library/Java/JavaVirtualMachines/
    jdk-11.0.10.jdk		jdk-11.0.3.jdk		jdk1.7.0_80.jdk		jdk1.8.0_241.jdk
    ```
    
2. 假设要卸载如上的 _jdk-11.0.3.jdk_，如下命令：
    
    ```shell
    demo@Mac ~ $ sudo rm -rf /Library/Java/JavaVirtualMachines/jdk-11.0.3.jdk
    Password:
    ```
    
    输入 root 的密码后，删除成功。


## 参考链接
[Mac OS 如何彻底卸载各版本的 jdk（java 开发环境） | 程序员笔记](https://www.knowledgedict.com/tutorial/java-how-to-uninstall-jdk-on-mac-os.html)