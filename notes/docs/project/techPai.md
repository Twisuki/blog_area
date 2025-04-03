---
title: commu
icon: file
order: 
date: ""
category:
  - 项目
tags:
  - BBS
---
### 日志
>简单来说 MDC 用于在多线程环境中存储每个线程特定的诊断信息，比如 traceId。这样我们就可以追踪每个线程中的行为了

```java
public class MdcUtil {  
    public static final String TRACE_ID_KEY = "traceId";  
  
    public static void add(String key, String val) {  MDC.put(key, val);  }  
  
    public static void addTraceId() {  
        // traceId的生成规则，提供了两种生成策略，可以使用自定义的也可以使用SkyWalking;
        MDC.put(TRACE_ID_KEY, SelfTraceIdGenerator.generate());  
    }  
  
    public static String getTraceId() {   return MDC.get(TRACE_ID_KEY);  }  
  
    public static void reset() {  
        String traceId = MDC.get(TRACE_ID_KEY);  
        MDC.clear();  
        MDC.put(TRACE_ID_KEY, traceId);  
    }  
  
    public static void clear() {  MDC.clear();  }  
}
```

添加过滤器，实现对每个请求都添加 traceId
```java
@WebFilter(urlPatterns = "/*", filterName = "reqRecordFilter", asyncSupported = true)  
public class ReqRecordFilter implements Filter{
	private HttpServletRequest initReqInfo(HttpServletRequest request, HttpServletResponse response) {
		...
		// 给所有请求都添加一个traceId
		MdcUtil.addTraceId();
		...
	}
}
```

在需要的打印日志的地方添加 `@MdcDot` 注解
```java
@RequestMapping(path = "recommend")  
@MdcDot(bizCode = "#articleId")  
public ResVo<NextPageHtmlVo> recommend(...) {  
    ...
}
```

切面:
```java
@Pointcut("@annotation(MdcDot) || @within(MdcDot)")  
public void getLogAnnotation() {  
}  
  
@Around("getLogAnnotation()")  
public Object handle(ProceedingJoinPoint joinPoint) throws Throwable {  
    // 开始计时  
    long start = System.currentTimeMillis();  
    // 判断是否有bizCode，如果有就返回true，并且在Mdc中设置，以便于在后续目标方法执行之中使用  
    boolean hasTag = addMdcCode(joinPoint);  
    try {  
        // 目标方法执行  
        Object ans = joinPoint.proceed();  
        return ans;  
    } finally { // 执行完目标方法，返回结果之前打印一下日志，清空一下除了traceId之外的MDC信息  
        log.info("执行耗时: {}#{} = {}ms",  
                joinPoint.getSignature().getDeclaringType().getSimpleName(),  
                joinPoint.getSignature().getName(),  
                System.currentTimeMillis() - start);  
        if (hasTag) {  
            MdcUtil.reset();  
        }  
    }  
}
```

至此，我们已经实现了在需要打印日志的地方，自动输出带有 `traceId` 的日志信息。  
当请求到达被 `@MdcDot` 注解标记的方法时，AOP 会拦截该请求并执行增强逻辑，从而自动完成 `traceId` 的注入。  
通过引入 `traceId`，可以轻松地将分散在不同模块或服务中的日志关联起来，极大地提升了日志的可追踪性。这种机制在微服务架构中尤为重要，能够帮助我们快速定位问题、分析请求链路以及优化系统性能


## 跨域
通过在同源服务器上设置代理（如 Nginx、Node.js），将请求转发到目标服务器。这样，客户端和代理服务器之间就可以满足同源策略，而代理服务器与目标服务器之间的通信就不再受到同源策略的限制。做法很简单。
