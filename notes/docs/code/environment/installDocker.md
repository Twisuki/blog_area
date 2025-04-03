---
title: Docker的安装(Linux和Macos平台)
icon: file
order: 
date: ""
category:
  - 编程知识
tags:
  - 环境配置
---
## 安装
### Linux(centos)
#### 卸载旧版

首先如果系统中已经存在旧的Docker，则先卸载：

```Shell
yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine \
    docker-selinux 
```

  

#### 配置Docker的yum库

首先要安装一个yum工具

```Bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

安装成功后，执行命令，配置Docker的yum源（已更新为阿里云源）：

```Bash
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

更新yum，建立缓存

```Bash
sudo yum makecache fast
```

  

#### 安装Docker

最后，执行命令，安装Docker

```Bash
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

  

#### 启动和校验

```Bash
# 启动Docker
systemctl start docker

# 停止Docker
systemctl stop docker

# 重启
systemctl restart docker

# 设置开机自启
systemctl enable docker

# 执行docker ps命令，如果不报错，说明安装启动成功
docker ps
```

#### 配置镜像加速

镜像地址可能会变更，如果失效可以百度找最新的docker镜像。

配置镜像步骤如下：

```Bash
# 创建目录
mkdir -p /etc/docker

# 复制内容
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "http://hub-mirror.c.163.com",
        "https://mirrors.tuna.tsinghua.edu.cn",
        "http://mirrors.sohu.com",
        "https://ustc-edu-cn.mirror.aliyuncs.com",
        "https://ccr.ccs.tencentyun.com",
        "https://docker.m.daocloud.io",
        "https://docker.awsl9527.cn"
    ]
}
EOF

# 重新加载配置
systemctl daemon-reload

# 重启Docker
systemctl restart docker
```

### Macos

访问官网，按需下载即可。
[Docker: Accelerated Container Application Development](https://www.docker.com/)

## 常见命令
| **命令**         | **说明**              |
| -------------- | ------------------- |
| docker pull    | 拉取镜像                |
| docker push    | 推送镜像到DockerRegistry |
| docker images  | 查看本地镜像              |
| docker rmi     | 删除本地镜像              |
| docker run     | 创建并运行容器（不能重复创建）     |
| docker stop    | 停止指定容器              |
| docker start   | 启动指定容器              |
| docker restart | 重新启动容器              |
| docker rm      | 删除指定容器              |
| docker ps      | 查看容器                |
| docker logs    | 查看容器运行日志            |
| docker exec    | 进入容器                |
| docker save    | 保存镜像到本地压缩文件         |
| docker load    | 加载本地压缩文件到镜像         |
| docker inspect | 查看容器详细信息            |

