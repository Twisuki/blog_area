---
title: 在github和云服务器上配置git并且免密推送
icon: file
order: 
date: ""
category:
  - 服务器
tags:
  - Git
---
## 概念
`Master` 默认开发分支
`origin` 默认远程版本库
`Head` 默认开发分支
`Head^` `head` 的父提交


## 配置 SSH 进行免密推送

### 全局配置
```bash
git config --global user.Email blueboySalvat@163.com    //配置全局范围的用户名和邮箱
git config --global user.Name blueboySalvat
```

以下为其他相关命令，不用做，仅供参考学习：
```shell
git config --global -l    //查看全局配置

git config -l  //查看所有配置

git config -l   //查看所有配置

git config --global --unset user.name    //删除添加的全局
git config --global --unset user.email
```
### 生成密钥
```bash
ssh-keygen -t rsa -C "your email@example.com" 
//引号里面填写你的邮箱地址，比如我的是 ssh-keygen -t rsa -C "blueboysalvat@163.com" 
```
### 在 Github 上配置免密
将在用户家目录下(macos 在 `/Users/电脑的用户名/.ssh`，windosw 在 c 盘哪里来着) 下生成的 `xxx.pub` 公钥中的内容添加到 github - > 头像 - Setting - SSH and Gpt keys - New SSH Key

#### 测试连通性
```shell
ssh -T git@github.com
```
```shell
Hi blueboySalvat! You've successfully authenticated, but GitHub does not provide shell access.
```

然后就可以直接在本地按照流程，直接 push 了，不用密码。

### 在云服务器上添加免密

#### 在客户端测试




## git 推送流程
git init
git add.
git commit -m ""
git branch -M main
git remote add origin git@github.com:blueboySalvat/blueboySalvat.github.io.git
git push -u origin main -f 

## 一键推送脚本
```shell
##!/bin/bash
## 提示用户，并且记录用户键入的commit_message
read -p "请输入提交的消息： " commit_message

## 切换到指定目录
cd /Users/wangwenpeng/Code/blog/Area

## 添加所有更改
git add .

## 提交更改
git commit -m "$commit_message"

## 推送到远程仓库
## f强制提交，会覆盖远程仓库
git push -u origin main -f

echo "提交成功！"
```
## Fatal: unable to access ‘https:xxx’

报错：fatal: unable to access ' https://github.com/xxx.github.io.git/ ': Failure when receiving data from the peer

I was stuck in this problem until I noticed that I was not logged into my VPN.
If you have configured your proxy for a VPN, you need to login to your VPN to use the proxy.
to use it outside the VPN use the unset command:
```
git config --global --unset http.proxy
```
And remember to set the proxy when within the VPN.

AI关于次命令的解释：
当你在使用 Git 时，有时候可能会设置一个 HTTP 代理来进行网络连接。但是如果你想取消全局的 HTTP 代理设置，可以使用这个命令

这个命令会移除全局 Git 配置中的 http.proxy 设置，这样 Git 将不再使用 HTTP 代理进行网络连接。

- `git config`：这是用于管理Git配置的命令。
- `--global`：这个标志表示应该在全局范围内进行配置更改，即影响系统上所有的仓库。
- `--unset`：这个标志用于取消设置或删除配置值。
- `http.proxy`：这是要取消设置的特定配置键，它代表了 HTTP 代理。

如果你 clone 下来一个别人的仓库，在此基础上完成你的代码，推送到自己的仓库可能遇到如下问题：
Error: remote origin already exists. 表示远程仓库已存在。
因此你要进行以下操作：
1、先输入 git remote rm origin 删除关联的 origin 的远程库
2、关联自己的仓库 git remote add origin https://gitee.com/xxxxxx.git
3、最后 git push origin master，这样就推送到自己的仓库了。

