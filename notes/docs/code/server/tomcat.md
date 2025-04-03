---
title: tomcat基本知识
icon: file
order: 
date: ""
category:
  - 服务器
tags:
  - tomcat
---

JavaWeb开发必看！Tomcat架构及工作原理

在一台电脑上启动tomcat，tomcat即是server，即服务器。服务器只会被实例化一次，tomcat这只猫就是服务器。服务器下包含多个子节点服务，即service，顾名思义就是对外提供服务。服务器通常只有一个服务，默认是卡特琳娜。

核心配置文件是`server.xml`

![](https://i0.hdslb.com/bfs/note/5553fded54d393bcf89eb6df336be7799335fa71.png@700w_!web-note.webp)

一个 `service` 有一个引擎，和按协议划分的几个连接器 `connector`，比如负责 http 协议的连接器、负责 https 的连接器、负责其他协议的连接器。

![](https://i0.hdslb.com/bfs/note/c45117d69860a94b42fd7afa4c43598e2034b0e3.png@700w_!web-note.webp)

不同的连接器负责监听不同的网络端口（可配置端口），处理请求，比如http协议默认的80端口。一个连接器即是一个线程，线程一直在循环运行，接收所有先后到来的网络请求，并将每一个请求都按对应的协议转换为不同的request对象，随后将其作为参数使用引擎对象进行调用。

因为request对象包含完整的URL等信息，所以引擎能够解析到对应的虚拟主机host上（也即域名），进而在虚拟主机上找到对应的应用，如webFirst应用，最终找到应用下对应的servlet（通常就是我们写的业务代码）对请求进行处理。

![](https://i0.hdslb.com/bfs/note/8250208a4118f26f4851e62a6325bafe4d0efe9f.png@700w_!web-note.webp)

当我们编写的servlet完成业务逻辑之后，连接器将从引擎对象的方法调用获得一个返回值responds对象，最后再将responds对象转化为字节流返回给浏览器。

至此，一个请求的完整过程就结束了。这就是tomcat服务器的架构和原理。

![](https://i0.hdslb.com/bfs/note/605781e8f3a9c4b0f68de0573949ba397716f137.png@700w_!web-note.webp)

视频地址：[JavaWeb开发必看！Tomcat架构及工作原理（8分钟）](https://www.bilibili.com/video/BV1J3411k7Xc/)
笔记原文：[Tomcat架构及工作原理](https://www.bilibili.com/read/cv20133701/)
