---
title: 使用Docker安装Seata(最新版本)
icon: file
order: 
date: ""
category:
  - 编程知识
tags:
  - 环境配置
---
## 教程
- 拉取镜像(可能需要网络支持，如果不行可以自己先下载，然后docker load加载镜像)
```shell
docker pull seataio/seata-server:latest
```

- 创建容器，以生成配置目录和结构
```shell
docker run -d --name seata -p 8099:8099 seataio/seata-server:latest
```

- 拷贝容器内配置目录到本机，以便本地修改配置
```shell
docker cp seata:/seata-server/resources /Users/wangwenpeng/Code/microService/seata/seata
```

执行完之后，会在本地目录`/Users/wangwenpeng/Code/microService/seata/seata`下多出`resources`文件夹，修改其中的`application.yml`。

修改后的完整配置，主要是修改`nacos`和`mysql`的地址。
```yml
server:
  port: 7099

spring:
  application:
    name: seata-server

logging:
  config: classpath:logback-spring.xml
  file:
    path: ${user.home}/logs/seata
  # extend:
  #   logstash-appender:
  #     destination: 127.0.0.1:4560
  #   kafka-appender:
  #     bootstrap-servers: 127.0.0.1:9092
  #     topic: logback_to_logstash

console:
  user:
    username: admin
    password: admin

seata:
  config:
    # support: nacos, consul, apollo, zk, etcd3
    type: file
    # nacos:
    #   server-addr: nacos:8848
    #   group : "DEFAULT_GROUP"
    #   namespace: ""
    #   dataId: "seataServer.properties"
    #   username: "nacos"
    #   password: "nacos"
  registry:
    # support: nacos, eureka, redis, zk, consul, etcd3, sofa
    type: nacos
    nacos:
      application: seata-server
      server-addr: xxx.xxx.xxx.xxx:xxxx # *你的nacos服务器地址*
      group: "DEFAULT_GROUP"
      namespace: ""
      username: "nacos"
      password: "nacos"
  #  server:
  #    service-port: 8091 #If not configured, the default is '${server.port} + 1000'
  security:
    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017
    tokenValidityInMilliseconds: 1800000
    ignore:
      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login
  server:
    # service-port: 8091 #If not configured, the default is '${server.port} + 1000'
    max-commit-retry-timeout: -1
    max-rollback-retry-timeout: -1
    rollback-retry-timeout-unlock-enable: false
    enable-check-auth: true
    enable-parallel-request-handle: true
    retry-dead-threshold: 130000
    xaer-nota-retry-timeout: 60000
    enableParallelRequestHandle: true
    recovery:
      committing-retry-period: 1000
      async-committing-retry-period: 1000
      rollbacking-retry-period: 1000
      timeout-retry-period: 1000
    undo:
      log-save-days: 7
      log-delete-period: 86400000
    session:
      branch-async-queue-size: 5000 #branch async remove queue size
      enable-branch-async-remove: false #enable to asynchronous remove branchSession
  store:
    # support: file 、 db 、 redis
    mode: db
    session:
      mode: db
    lock:
      mode: db
    db:
      datasource: druid
      db-type: mysql
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://xxx.xxx.xxx.xxx:3306/seata?rewriteBatchedStatements=true&serverTimezone=UTC # *你的Mysql服务器地址*
      user: root
      password: 123
      min-conn: 10
      max-conn: 100
      global-table: global_table
      branch-table: branch_table
      lock-table: lock_table
      distributed-lock-table: distributed_lock
      query-limit: 1000
      max-wait: 5000
    # redis:
    #   mode: single
    #   database: 0
    #   min-conn: 10
    #   max-conn: 100
    #   password:
    #   max-total: 100
    #   query-limit: 1000
    #   single:
    #     host: 192.168.150.101
    #     port: 6379
  metrics:
    enabled: false
    registry-type: compact
    exporter-list: prometheus
    exporter-prometheus-port: 9898
  transport:
    rpc-tc-request-timeout: 15000
    enable-tc-server-batch-send-response: false
    shutdown:
      wait: 3
    thread-factory:
      boss-thread-prefix: NettyBoss
      worker-thread-prefix: NettyServerNIOWorker
      boss-thread-size: 1

```

- 删除之前为了获取配置信息而暂时创建出来的seata容器
```shell
docker stop seata
docker rm -f "seata"
```

- 使用自定义配置创建初始化容器
```shell
docker run -d --name seata \
-p 8099:8099 \
-e SEATA_IP=127.0.0.1 \
-v /Users/wangwenpeng/Code/microService/seata/seata/resources:/seata-server/resources \
seataio/seata-server:latest
```


## 拓展：本地开发时局域网IP变动问题

如果你的局域网 IP 容易变动，可以使用以下方法来避免因局域网IP变动而造成的容器失效：

- 使用 `--add-host` 动态解析主机名

在容器启动时添加 `--add-host` 参数，将宿主机名绑定到其动态 IP：   
linux使用这段：
```shell
docker run -d --name seata \
-p 8099:8099 \
-e SEATA_IP=seata-host \
--add-host seata-host:$(hostname -I | awk '{print $1}') \
-v /Users/wangwenpeng/Code/microService/seata/seata/resources:/seata-server/resources \
seataio/seata-server:latest
```
macos使用这段：   
如果你使用 Wi-Fi，en0 是无线网卡的接口。如果是有线网络，可以尝试 en1
```shell
docker run -d --name seata \
-p 8099:8099 \
-e SEATA_IP=seata-host \
--add-host seata-host:$(ipconfig getifaddr en0) \
-v /Users/wangwenpeng/Code/microService/seata/seata/resources:/seata-server/resources \
seataio/seata-server:latest
```

	•	$(hostname -I | awk '{print $1}') 获取宿主机的局域网 IP。
	•	seata-host 是自定义的主机名，容器内将解析为宿主机的 IP。

优点： 不需要每次手动修改 IP。局域网 IP 变化时，只需重启容器更新绑定。


