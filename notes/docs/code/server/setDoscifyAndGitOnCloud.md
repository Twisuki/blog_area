---
title: 在云服务器上部署轻量级博客docsify以及git
icon: file
order: 
date: ""
category:
  - 服务器
tags:
  - 博客
---
## 服务器的 ssh 配置
```shell
##vim /etc/ssh/sshd_config
ClientAliveInterval 30
ClientAliveCountMax 86400
```

**修改这两行的数据,这两行的意思分别是:**
1. 客户端每隔多少秒向服务发送一个心跳数据
2. 客户端多少秒没有相应，服务器自动断掉连接

```shell
##systemctl status sshd.service
systemctl start sshd.service
systemctl restart sshd.service
systemctl enable sshd.service
```

## 查看用户和踢用户
查看在线用户以及踢出用户
只需要在 SHELL 终端中输入命令：w

```shell
16:16:06 up 12 min,  1 user,  load average: 0.14, 0.18, 0.13  
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT  
root    pts/0    192.168.2.45     16:15    6.00s  0.02s  0.00s sshd: root [priv]

pkill -KILL -t pts/0 （pts/0为 w 指令看到的用户终端号）```

踢下去： `pkill -KILL -t pts/0`

## 安装 npm
```shell
yum install nodejs  npm -y
```

## 安装和配置 docsify

```shell
npm i docsify-cli -g
```
```shell
docsify init ./docs //初始化
```
```shell
docsify serve docs --port 80 //使用80端口启动服务
```

更多配置见官方网站： https://docsify.js.org/
## 安装 git
```shell
yum install git
```
### 配置仓库
#### 在云服务器上创建远程仓库
```shell
cd ~
## 存放所有git项目仓库的文件夹
mkdir git_rep
## 创建一个用于存放笔记的git仓库
cd git_rep
mkdir area
## 进入该仓库，创建远程git根项目
cd area
git init --bare note.git
```
#### 在本地初始化/关联远程仓库/推送
```shell
git init

git add -A
git commit -m "firstcommit"

git remote add origin git@xxx.xxx.xx.xxx:/home/git/git_rep/area/area.git

git push -u origin main
```

### 在云服务器上的远程仓库克隆代码到本地 
```shell
git clone git@127.0.0.1:/home/git/git_rep/area/area.git
cd area 
git checkout main
```

## 使用更新脚本更新





`docsify` 配置参考链接：
[ETS' NoteBook - By Mr.Wu - 微信公众号：码客趣分享 🌹](https://notebook.js.org/#/README)


