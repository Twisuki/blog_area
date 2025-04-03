---
title: 在Mac中使用Jenv切换JDK版本
icon: file
order: 
date: ""
category:
  - Java
tags:
  - 环境配置
---
## 什么是 jenv
>jEnv is a command line tool to help you forget how to set the JAVA_HOME environment variable

jenv 是一个好用到帮助你忘记如何设置 JAVA_HOME 环境变量的命令行工具，
## 安装
```shell
## 安装 jenv
brew instal jenv
```
## 配置 jenv 的环境
```shell
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```


## 基本命令

### 查看当前 Java 版本
```shell
jenv version
```
### 添加 JavaHome 路径
```shell
jenv add /Library/Java/JavaVirtualMachines/jdk-20.jdk/Contents/Home/
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home/
```
### 查看可管理的版本
```shell
jenv versions
  system
  1.8
* 1.8.0.381 (set by /Users/wangwenpeng/Code/JavaDeveloper/.java-version)
  11.0
  11.0.21
  oracle64-1.8.0.381
  oracle64-11.0.21
```

## 移除不要的版本
```shell
jenv remove 1.8
jenv remove 11.0
jenv remove oracle64-1.8.0.381
jenv remove oracle64-11.0.21

```
```shell
jenv versions
  system
* 1.8.0.381 (set by /Users/wangwenpeng/Code/JavaDeveloper/.java-version)
  11.0.21
```


```shell
##global 全局设置 一般不建议改变全局设置
➜ jenv global <java 版本>

## shell 会话设置 只影响当前的shell会话
➜ jenv shell <java 版本>
## 取消 shell 会话的设置
➜ jenv shell --unset

## local 本地设置 只影响所在文件夹
➜ jenv local <java 版本>
```


## 参考链接
[jEnv - Manage your Java environment](https://www.jenv.be/)
[JEnv工具使用](https://segmentfault.com/a/1190000042724793#item-3)
[国光的 macOS Ventura 13 优化配置（基于 ARM 平台） | 国光](https://www.sqlsec.com/2023/07/ventura.html#Java)

