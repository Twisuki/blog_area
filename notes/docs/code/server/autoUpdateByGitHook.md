---
title: 在云服务器中使用git hook实现自动部署网站
icon: file
order: 
date: ""
category:
  - 服务器
tags:
  - 博客
---
云服务器中的仓库位置：
/home/git/git_rep/area/area.git

配置git hook的目录
/home/git/git_rep/area/area.git/hooks/
post-receive:`
```shell
##!/bin/bash

## 目标目录和裸仓库路径
TARGET_DIR="/var/web/area"
REPO_DIR="/home/git/git_rep/area/area.git"

## 如果目标目录存在，则删除
if [ -d "$TARGET_DIR" ]; then
    echo "Removing existing target directory: $TARGET_DIR"
    rm -rf "$TARGET_DIR"
fi

## 创建目标目录
echo "Creating target directory: $TARGET_DIR"
mkdir -p "$TARGET_DIR"

## 克隆仓库到目标目录
echo "Cloning repository to target directory: $TARGET_DIR"
git clone "$REPO_DIR" "$TARGET_DIR"

## 进入目标目录
cd "$TARGET_DIR"

## 检出主分支
echo "Checking out main branch"
git checkout -b main origin/main

## 设置目标目录权限
echo "Setting permissions for target directory: $TARGET_DIR"
chmod -R 755 "$TARGET_DIR"

echo "Post-receive script execution completed."
```

本地PC脚本:
```shell
##!/bin/bash

## 提示用户，并且记录用户键入的commit_message
read -p "请输入提交的消息： " commit_message

## 切换到指定目录
cd /Users/wangwenpeng/Code/area

## 执行构建命令
npm run docs:build

## 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "构建成功！"

    # 切换到构建输出目录
    cd /Users/wangwenpeng/Code/area/notes/.vuepress/

    # 添加dist目录
    git add dist/

    # 提交更改
    git commit -m "$commit_message"

    # 推送到远程仓库
    git push -u origin main

    # 检查推送是否成功
    if [ $? -eq 0 ]; then
        echo "构建文件已成功推送到服务器！"
    else
        echo "推送失败，请检查远程仓库设置。"
    fi
else
    echo "构建失败，未推送文件到服务器。"
fi

```
