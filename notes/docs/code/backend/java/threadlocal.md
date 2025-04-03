---
title: 上下文传递
icon: file
order: 
date: ""
category:
  - Java
tags:
---
## 

### InheritableThreadLocal

InheritableThreadLocal 是 Java 提供的一个类，用于在父线程和子线程之间传递上下文信息。  
当一个新线程被创建时，InheritableThreadLocal 会将父线程中的值复制到子线程中。  
适用场景：适用于父子线程之间的上下文传递  

### TransmittableThreadLocal
> 确保在线程池中的线程复用时，能够正确传递并获取提交任务时的上下文信息，适用于线程池、异步任务执行等场景。

TransmittableThreadLocal 是阿里巴巴开源的工具包，用于解决线程池中上下文传递的问题。  
它不仅支持父子线程之间的上下文传递，还支持在线程池中的线程复用场景下正确传递上下文。  
适用场景：适用于线程池、异步任务、分布式系统等复杂场景下的上下文传递。  

TTL 在任务提交到线程池时，会自动捕获当前线程的上下文信息。  
当线程池中的线程执行任务时，TTL 会将捕获的上下文信息重新设置到目标线程中。  
任务执行完成后，TTL 会清理上下文，避免影响后续任务。  