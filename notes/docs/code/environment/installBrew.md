---
title: Brew的安装和使用
icon: file
order: 
date: ""
category:
  - 知识
tags:
  - 终端
---
## 使用国内源安装
```shell
sh -c "$(curl -fsSL gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

## 基本命令
```shell
## 更新 Homebrew
➜ brew update

##  搜索相关的包
➜ brew search [关键词] 

## 查看包的信息
➜ rew info [软件名]
 
## 查看已安装的包
➜ brew list

## 更新某个软件
➜ brew upgrade [软件名]

## 清理所有软件的旧版
➜ brew cleanup

## 卸载某个软件
➜ brew uninstall [软件名]
```


## 参考链接
[国光的 macOS Ventura 13 优化配置（基于 ARM 平台） | 国光](https://www.sqlsec.com/2023/07/ventura.html#Homebrew)