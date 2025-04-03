---
title: 命令行配置代理
icon: file
order: 
date: ""
category:
  - 知识
tags:
  - 终端
---

## 方法 1
如果你可以科学上网（**V**irtual **P**rivate **N**etwork）的话，在命令行键以下命令执行：

```shell
## 7890 和 789 需要换成你自己的端口
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:789
```

这个方法不便之处在于，运行完上述的那行命令后，终端当前 session 的所有命令都是翻墙的，解决方法也很简单：**关掉当前的终端会话**（或者暴力点，关掉终端重新打开）即可。




## 方法 2
修改 http_proxy

如果你可以科学上网, 那么只需要在终端输入

> export http_proxy=http://127.0.0.1:{科学上网的端口号}

就可以完美解决. 这也是我的解决方案


## 参考链接
[Failed to connect to raw.githubusercontent.com:443 - 知乎](https://zhuanlan.zhihu.com/p/115450863)

[macOS terminal - 让终端使用代理的方法（以ClashX配合举例） - 毒奶 - 欢迎使用代理访问本站。](https://limbopro.com/archives/MacOS_terminal_proxy_setting.html)