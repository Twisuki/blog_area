---
title: SpringBoot环境配置的两种方式
icon: file
order: 
date: ""
category:
  - Java
tags:
  - JavaWeb
  - Spring
  - SpringBoot
---
>[!tips]
>spring boot 2.4 之后为了提升对 kubernetes 的支持，整个 spring.profiles 作废了；因此我们可以通过 spring.config.import 来代替它


## 命令行指定
        
- `java -jar your-application.jar --spring.profiles.active=dev,biz` 

右侧的配置会覆盖左侧的配置所以 biz 配置会覆盖 dev 配置两个 profile 的配置都会覆盖默认配置文件中的值

## 外置配置文件

在生产环境中，通常会把配置文件放在 jar 包外部，常见做法是：

1. 目录结构：
```
/app
  ├── your-application.jar
  └── config/
      ├── application.yml
      ├── application-dev.yml
      └── application-prod.yml
```

2. 启动命令示例：
```bash
java -jar your-application.jar --spring.config.location=file:./config/
```

主要好处：

1. 配置灵活性：
   - 无需重新打包就能修改配置
   - 可以针对不同环境快速切换配置
   - 便于运维人员进行配置调整

2. 安全性：
   - 敏感信息（如数据库密码）可以从代码仓库中分离
   - 不同环境的配置可以由不同的人员管理

3. 运维便利：
   - 配置变更不需要重新构建应用
   - 可以实现配置和应用的版本管理分离
   - 便于进行配置备份和回滚

4. 多环境支持：
   - 同一个 jar 包可以在不同环境使用不同的配置
   - 便于在开发、测试、生产环境之间切换

## Spring Boot 查找配置文件的优先级（从高到低）：
1. 命令行参数
2. jar 包外部的配置文件
3. jar 包内部的配置文件

外置配置文件会覆盖 jar 包内的默认配置