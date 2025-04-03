---
title: 解决IDEA配置.gitignore不生效的问题
icon: file
order: 
date: ""
category:
  - 编程知识
tags:
  - 环境配置
---
## 
### 场景再现
>有时候我们会在IDEA GIT提交窗口看到很多我们不想看到的文件，例如`.log`。于是我们修改`.gitignore`文件在其中加入`.log`，但是刷新一看`.log`文件还是存在。  
>这是因为`.gitignore`只能忽略未被track的文件(即未加入到暂存区)。如果某些文件已经被纳入了暂存区中(加入暂存区即该文件被版本管理了)，则修改`.gitignore`是无效的

### 查看文件管理情况
查看当前 Git 仓库中已经被版本管理的文件
```
git ls-files
```

查看当前目录的文件状态
git status 输出解读：
- 已被版本管理的文件：在 Changes not staged for commit 或 Changes to be committed 部分。
- 未被版本管理的文件：显示在 Untracked files 部分。
```
git status
```

### 删除被版本管理文件并重新添加

删除所有已经被纳入版本管理的文件
```
git rm -r --cached .
```

将当前工作目录下的所有**修改过的文件**和**新建的未被追踪的文件**添加到 Git 暂存区（Staging Area）。
```
git add .
```

将暂存区中的更改记录为一次新的提交，将暂存区的更改提交到仓库。
```
git commit -m 'update .gitignore'
```