---
title: websocket基础
icon: file
order: 
date: ""
category: 
tags:
---
## 
### 1. **WebSocket 基础**
- **WebSocket 协议**：
  - WebSocket 是一种全双工通信协议，允许客户端和服务器之间建立持久连接，进行实时数据传输。
  - 以 WebSocket 被用于实现 AI 助手的实时聊天功能为例

- **STOMP 协议**：
  - STOMP（Simple Text Oriented Messaging Protocol）是基于 WebSocket 的高级消息协议，提供更丰富的消息路由和订阅机制。
  - 通过 `@EnableWebSocketMessageBroker` 和 `WebSocketMessageBrokerConfigurer` 配置了 STOMP 协议的支持。

---

### 2. **WebSocket 实现方式**
#### **STOMP 协议实现**
- **配置 WebSocket 端点**：
  - `WsChatConfig` 类实现了 `WebSocketMessageBrokerConfigurer` 接口，配置了 WebSocket 的端点和消息代理。
    - 注册 2 个端点：`/gpt/{id}/{aiType}` 和 `/notify`，分别用于 AI 聊天和系统通知。
    - 设置握手处理器和拦截器： `AuthHandshakeInterceptor` 和 `AuthHandshakeHandler` 可以用与初始化会话属性、Principal（用户唯一标识）。
    - 允许跨域访问：`setAllowedOriginPatterns("*")`。
    - 配置消息代理（broker）：可以简单理解是一个消息队列，前端订阅这个队列消费，后端生产

- **消息路由与广播**：
  - 使用 `@MessageMapping` 注解定义消息路由。
    - 示例：`ChatRestController` 中的 `chat` 方法，接收客户端发送的消息并处理。
  - 使用 `SimpMessagingTemplate` 发送消息到指定用户或广播消息。

#### (3) **WebSocket 拦截器**
- **入站拦截器**：
  - `configureClientInboundChannel` 方法中添加了 `AuthInChannelInterceptor`，用于拦截和验证客户端发送的消息。
- **出站拦截器**：
  - `configureClientOutboundChannel` 方法中添加了 `AuthOutChannelInterceptor`，用于拦截服务器发送的消息。

---

### 4. **WebSocket 安全性**
- **身份验证**：
  - 在 `AuthHandshakeInterceptor` 和 `AuthHandshakeHandler` 中实现了身份验证逻辑，确保只有合法用户可以建立 WebSocket 连接。
- **会话管理**：
  - 使用 `LoadingCache<Long, Set<String>> wsUserSessionCache` 缓存用户与 WebSocket 会话的关系，便于广播通知。

---

### 5. **WebSocket 性能优化**
- **线程池配置**：
  - 在 `configureClientInboundChannel` 和 `configureClientOutboundChannel` 中配置了线程池参数：
    - 核心线程数：4
    - 最大线程数：10
    - 线程存活时间：60 秒
- **消息序列化**：
  - 使用 `ObjectMapper` 将消息序列化为 JSON 格式，便于传输和解析。

---

### 6. **相关工具类**
- **WebSocketResponseUtil**：
  - 提供了封装 WebSocket 消息的工具方法，简化消息发送逻辑。
- **IdUtil**：
  - 生成唯一标识符，用于区分不同的 WebSocket 会话。

---

### 7. **数据库支持**
- **全局配置**：
  - 在 `global_conf` 表中存储了 AI 助手的相关配置信息，如星球介绍、AI 使用权限等。
- **用户绑定信息**：
  - `UserAiServiceImpl` 中实现了用户与 AI 服务的绑定逻辑，包括初始化和更新绑定信息。


## 消息头消息体和会话属性
### Message 对象
`Message<?>` 包含消息头和消息体。  
#### 消息头
消息头是键值对形式的元数据，用于描述消息的上下文信息。消息头通过 `StompHeaderAccessor` 提取。  
常见的消息头包括：
- `destination`：目标路径，例如 `/app/chat/{session}`。
- `simpSessionId`：WebSocket 会话 ID
- `simpMessageType`：消息类型
- `simpSubscriptionId`：订阅 ID，用于标识客户端订阅的路径。
- `simpUser`：用户标识（Principal），通常在握手阶段生成
- 自定义消息头：例如 `'s-uid': session`。

几种消息头访问器：
-  `MessageHeaderAccessor`：通用的消息头访问器，可以从 `Message<?>`  提取消息头，适用于所有消息传递场景。  
```java
MessageHeaderAccessor.getAccessor(message, MessageHeaderAccessor.class) 
```

-  `StompHeaderAccessor`：专门针对 `STOMP` 协议设计，继承自 `MessageHeaderAccessor`，增加了对 `STOMP` 特有字段的支持。适用于拦截器中处理原始消息对象
```java
 StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
```

- SimpMessageHeaderAccessor `：提供了更高的抽象层次和更便捷的会话属性访问能力。` 专门为 ` Spring WebSocket ` 框架设计的，它不仅支持 ` STOMP ` 协议，还集成了 ` WebSocket ` 的其他特性，如会话属性 ` simpSessionAttributes `。在 ` @MessageMapping ` 方法中，` Spring ` 自动将消息封装为 ` SimpMessageHeaderAccessor `，以便开发者更方便地访问消息头和会话属性。
```java
@MessageMapping("/chat/{session}")
    public void chat(String msg,
                     @DestinationVariable("session") String session, // 获取路径变量
                     @Header("simpSessionAttributes") Map<String, Object> attrs, // 获取 WebSocket会话的属性
                     SimpMessageHeaderAccessor accessor)
```

#### 消息体
消息体通过 `message.getPayload()` 提取。

### 会话属性
会话属性是 `WebSocket` 会话中保存的上下文信息。在握手阶段通过 `attributes` 设置。
在消息处理阶段可以通过 `SimpMessageHeaderAccessor.getSessionAttributes()` 获取。

### 关系
`Message<?>` 的消息头中包含会话属性的引用（`simpSessionAttributes`）。

 ---
## 关于订阅时user

`stompClient.subscribe('/user/chat/rsp', function (message) {...})` 中的 `/user` 前缀是 STOMP 协议的一个内置特性，用于实现**用户级别的消息订阅**。以下是详细解释：

---

### 1. **STOMP 协议中的 `/user` 前缀**
- 在 Spring 的 WebSocket 和 STOMP 实现中，`/user` 是一个特殊的前缀，用于支持**用户专属的消息通道**。
- 当客户端订阅路径以 `/user` 开头时，Spring 会自动将该路径映射到当前用户的专属队列。
- 这种机制允许服务器向特定用户发送消息，而不会影响其他用户。

---

### 2. **为什么需要 `/user` 前缀？**
在你的场景中，`/user/chat/rsp` 的作用是：
- 确保只有当前用户能够接收到服务器发送到 `/chat/rsp` 的消息。
- Spring 会在后台为每个用户生成一个唯一的队列，并将消息路由到该队列。

例如：
- 用户 A 订阅了 `/user/chat/rsp`。
- 用户 B 也订阅了 `/user/chat/rsp`。
- 当服务器向 `/user/chat/rsp` 发送消息时，Spring 会根据用户的会话信息（如 `session` 或 `Principal`），将消息分别路由到用户 A 和用户 B 的专属队列。

---

### 3. **`/user` 前缀的自动处理**
 Spring 的 `@EnableWebSocketMessageBroker` 和 `SimpleBroker` 已经内置了对 `/user` 的支持，不需要显式定义 `/user` 前缀。

#### 相关配置：
在 `WsChatConfig` 中：
```java
@Override
public void configureMessageBroker(MessageBrokerRegistry config) {
    // 启用简单消息代理，支持 /chat 和 /msg 路径
    config.enableSimpleBroker("/chat", "/msg");

    // 设置应用前缀为 /app
    config.setApplicationDestinationPrefixes("/app");
}
```


- `enableSimpleBroker("/chat", "/msg")`：启用了 `/chat` 和 `/msg` 作为消息代理的目标路径。
- `/user` 前缀由 Spring 自动处理，无需额外配置。

#### 消息路由逻辑：
当客户端订阅 `/user/chat/rsp` 时：
1. Spring 会将 `/user/chat/rsp` 转换为类似 `/user/{sessionId}/chat/rsp` 的路径。
2. `{sessionId}` 是当前用户的会话标识，确保消息只发送给特定用户。

---

### 4. **服务器端如何发送消息？**
在服务器端，你可以通过 `SimpMessagingTemplate` 向特定用户发送消息。例如：
```java
@Autowired
private SimpMessagingTemplate messagingTemplate;

public void sendMessageToUser(String userId, String message) {
    // 向指定用户发送消息
    messagingTemplate.convertAndSendToUser(userId, "/chat/rsp", message);
}
```


- `convertAndSendToUser` 方法会自动将消息发送到 `/user/{userId}/chat/rsp`。
- 客户端订阅 `/user/chat/rsp` 后，就能接收到该消息。

---

