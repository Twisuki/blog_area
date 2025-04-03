---
title: Redis
icon: file
order: 
date: ""
category:
  - 数据库
tags:
  - Redis
---
## 哨兵机制
>哨兵的工作流程包括定时监控、主观下线和客观下线、领导者 Sentinel 节点选举、故障转移等。每个 Sentinel 实例会定期通过 PING 命令向主节点和从节点发送心跳包。如果一个节点长时间没有响应 PING 命令，Sentinel 会将该节点标记为主观下线。当多个 Sentinel 同时认为一个节点不可用时，该节点被标记为客观下线。当主节点被确认下线后，Sentinel 之间会通过类似 Raft 的选举算法进行协商，选出一个领导者 Sentinel 来负责执行故障转移。将某个从节点提升为新的主节点。通知其他从节点重新复制新的主节点的数据。

正确的流程：

1. 当主节点(master)故障时，首先是 sentinel 集群要选出一个 leader sentinel（领导者哨兵）来负责之后的故障转移工作。这个过程使用的是 Raft 算法：
   - 每个 sentinel 都可能成为 leader sentinel
   - 通过投票选出一个 leader sentinel。候选者会给自己先投 1 票，然后向其他 Sentinel 节点发送投票的请求。收到请求的 Sentinel 节点会进行判断，如果候选者的日志与自己的日志一样新，任期号也小于自己，且之前没有投票过，就会同意投票，回复 Y。否则回复 N。
   - 获得超过半数选票的 sentinel 成为 leader sentinel

2. 选出 leader sentinel 后，由这个 leader sentinel 来执行实际的故障转移操作：
   - 从现有的从节点中选择一个升级为新的 master
   - 通知其他从节点改变复制目标
   - 将原来的 master 降级为从节点(如果它重新上线的话)
