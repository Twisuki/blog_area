---
title: 设计模式
icon: file
order: 
date: ""
category: 
tags:
---

## 单例设计模式


### 饿汉式
`SingleModel1.java`
```java
public class SingleModel1 {  
    //使用 static ，让类在加载时就直接创建好一个对象。  
    private static SingleModel1 obj = new SingleModel1();  
      
    //构造方法，私有之后，让外不能随便调用这里进行创建对象了。  
    private SingleModel1(){  
          
    }  
    //static 才能访问 static，public公共的供外调用  
    public static SingleModel1 getInstance() {  
        return obj;  
    }  
}
```
### 懒汉式
`SingleModel2.java`
```java
public class SingleModel2 {  
    private static SingleModel2 obj;  
    private SingleModel2() {  
  
    }  
    public static SingleModel2 getInstance() {  
        if(obj == null) {  
            obj = new SingleModel2();  
        }  
        return obj;  
    }  
}
```
## 装饰器模式
> [装饰器模式的由来](https://www.bilibili.com/video/BV1BXWKeNEcV/?share_source=copy_web&vd_source=5903e81d41539e9b3be309b9b3bb014f)
装饰器模式是一种**结构型设计模式**，它允许动态地为对象添加额外的行为，而不会影响其他对象。装饰器模式通过将对象包装在装饰器类中，来扩展对象的功能。
### 装饰器模式的核心角色
1. **Component（组件）**：
    - 定义一个接口，表示被装饰的对象。
2. **ConcreteComponent（具体组件）**：
    - 实现`Component`接口，是被装饰的具体对象。
3. **Decorator（装饰器）**：
    - 实现`Component`接口，并持有一个`Component`对象的引用。
4. **ConcreteDecorator（具体装饰器）**：
    - 实现 `Decorator`，为 `Component` 添加额外的行为。
PS:接口或者抽象类都可以


装饰器模式通常用于需要动态扩展对象功能的场景。比如在一个文本处理系统中，我们可以使用装饰器模式为文本添加加粗、斜体、下划线等样式，而不需要修改原有的文本类。另外，装饰器模式还可以避免子类膨胀的问题，通过组合而非继承来扩展对象的功能。

装饰器模式的优点在于它可以动态扩展对象的功能，避免子类膨胀，并且符合开闭原则。不过，装饰器模式也有一些缺点，比如增加了系统的复杂性，过多的装饰器会导致代码难以理解。
### 引入

```java
// 机器人设计标准  
public interface Robot {  

    void sing();  
  
    void chat();  
}
```

```java
// 按照标准设计的基础款机器人  
public class BasicRobot implements Robot {  
    // 唱歌  
    @Override  
    public void sing() {  
        System.out.println("singing a song.");  
    }  
  
    // 聊天  
    @Override  
    public void chat() {  
        System.out.println("chatting with people.");  
    }  
}
```

```java
public class FlyRobot implements Robot {  
    private BasicRobot basicRobot;  
  
    public FlyRobot(BasicRobot basicRobot) {  
        this.basicRobot = basicRobot;  
    }  
  
    @Override  
    public void sing() {  
        basicRobot.sing();  
    }  
  
    @Override  
    public void chat() {  
        basicRobot.chat();  
    }  
  
    // 新增的功能：飞行  
    public void fly() {  
        System.out.println("flying.");  
    }  
}
```

```java
public class UltraRobot implements Robot {  
    private BasicRobot basicRobot;  
  
    public UltraRobot(BasicRobot basicRobot) {  
        this.basicRobot = basicRobot;  
    }  
  
    @Override  
    public void sing() {  
        basicRobot.sing();  
    }  
  
    @Override  
    public void chat() {  
        basicRobot.chat();  
    }  
  
    // 新增的功能：做饭  
    public void cook() {  
        System.out.println("cooking.");  
    }  
}
```

### 简化改进
```java
// 按照标准设计的基础款机器人  
public class BasicRobot implements Robot {  
    // 唱歌  
    @Override  
    public void sing() {  
        System.out.println("singing a song.");  
    }  
  
    // 聊天  
    @Override  
    public void chat() {  
        System.out.println("chatting with people.");  
    }  
}
```

```java
// 飞行机器人装饰类  
public class FlyRobot extends Wrapper {  
    public FlyRobot(Robot robot) {  
        super(robot);  
    }  
  
    public void fly() {  
        System.out.println("flying.");  
    }  
}
```

```java
// 旗舰机器人装饰类  
public class UltraRobot extends Wrapper {  
    public UltraRobot(Robot robot) {  
        super(robot);  
    }  
  
    public void cook() {  
        System.out.println("cooking.");  
    }  
}
```

```java  
// 装饰者基础类，用于扩展功能  
public abstract class Wrapper implements Robot {  
	// 使用protected，体现出此成员不仅仅是Wrapper类的实现细节，更是为子类提供的一个设计API
    protected Robot robot;  
  
    public Wrapper(Robot robot) {  
        this.robot = robot;  
    }  
  
    @Override  
    public void sing() {  
        robot.sing();  
    }  
  
    @Override  
    public void chat() {  
        robot.chat();  
    }  
}
```

## 代理模式(Proxy Pattern)

### 简单代理
```java
// 定义接口
interface Foo {
    void foo();
}

// 调用处理器接口
interface InvocationHandler {
    void invoke();
}

// 目标类
class Target implements Foo {
    @Override
    public void foo() {
        System.out.println("Target's foo method");
    }
}

// 代理类
class $Proxy implements Foo {
    private InvocationHandler h;
    
    public $Proxy(InvocationHandler h) {
        this.h = h;
    }
    
    @Override
    public void foo() {
        h.invoke();
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        // 创建动态代理
        Foo proxy = new $Proxy(new InvocationHandler() {
            @Override
            public void invoke() {
                // 1. 增强功能
                System.out.println("before...");
                // 2. 调用目标方法
                new Target().foo();
                // 3. 后置增强（可选）
                System.out.println("after...");
            }
        });
        
        // 调用代理对象的方法
        proxy.foo();
    }
}
```

这是一个代理模式的实现，具体来说也是动态代理的简化版本。

5. 代理模式的核心组件：
   - 接口(Foo)：定义了代理类和目标类共同的接口
   - 目标类(Target)：实现了接口的真实对象
   - 代理类($Proxy)：同样实现了接口，包含对目标类的引用
   - 调用处理器(InvocationHandler)：处理实际的方法调用，可以在调用前后添加额外的逻辑

6. 工作流程：
   - 客户端通过代理对象调用方法
   - 代理类将调用委托给 InvocationHandler
   - InvocationHandler 在调用实际方法前后可以添加额外的处理逻辑
   - 最后调用目标对象的实际方法

7. 代理模式的优点：
   - 可以在不修改目标类的情况下添加功能
   - 实现了关注点分离
   - 提供了额外的间接层，可以用于控制对象访问

### 方法的动态调用
>之前版本的代码有个问题，就是我们只能调用固定的方法。我们需要改进一下

```java
// 定义接口
interface Foo {
    void foo();
    // 新增的方法
    void bar();
}

// 增强版调用处理器接口
interface InvocationHandler {
    void invoke(Method method, Object[] args) throws Throwable;
}

// 目标类
class Target implements Foo {
    @Override
    public void foo() {
        System.out.println("Target's foo method");
    }
    
    @Override
    public void bar() {
        System.out.println("Target's bar method");
    }
}

// 代理类
class $Proxy implements Foo {
    private InvocationHandler h;
    
    public $Proxy(InvocationHandler h) {
        this.h = h;
    }
    
    @Override
    public void foo() {
        try {
            Method foo = Foo.class.getMethod("foo");
            h.invoke(foo, new Object[0]);
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }
    
    @Override
    public void bar() {
        try {
            Method bar = Foo.class.getMethod("bar");
            h.invoke(bar, new Object[0]);
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }
}

public class ProxyDemo {
    public static void main(String[] args) {
        Foo proxy = new $Proxy(new InvocationHandler() {
            @Override
            public void invoke(Method method, Object[] args) throws Throwable {
                // 1. 前置增强
                System.out.println("before...");
                // 2. 调用目标方法
                method.invoke(new Target(), args);
            }
        });
        
        // 测试两个方法
        proxy.foo();
        proxy.bar();
    }
}

```

8. InvocationHandler 的增强：
   - 新增了对 Method 对象的支持，能够处理任意方法调用

9. 代理类的主要改进：
   - 使用反射获取方法对象（getMethod），将方法对象传递给 `InvocationHandler`

10. 方法调用的变化：
   - 从直接调用目标对象演进为使用反射调用（method.invoke）

## 策略模式


```java
// 文件类型枚举
public enum FileTypeResolveEnum {
    FILE_A_RESOLVE,
    FILE_B_RESOLVE,
    FILE_C_RESOLVE
}

// 策略接口
public interface IFileStrategy {
    // 获取文件解析类型
    FileTypeResolveEnum getFileType();
    
    // 文件解析方法
    void resolve(Object objectParam);
}

// A类型文件解析策略
@Component
@Slf4j
public class AFileResolve implements IFileStrategy {
    @Override
    public FileTypeResolveEnum getFileType() {
        return FileTypeResolveEnum.FILE_A_RESOLVE;
    }
    
    @Override
    public void resolve(Object objectParam) {
        log.info("A类型文件解析开始，参数：{}", objectParam);
        // A类型具体解析逻辑
        try {
            // 示例：处理Excel文件
            if (objectParam instanceof File) {
                File file = (File) objectParam;
                // 实现具体的Excel解析逻辑
                log.info("正在解析Excel文件：{}", file.getName());
            }
        } catch (Exception e) {
            log.error("A类型文件解析失败", e);
            throw new RuntimeException("A类型文件解析失败", e);
        }
    }
}

// B类型文件解析策略
@Component
@Slf4j
public class BFileResolve implements IFileStrategy {
    @Override
    public FileTypeResolveEnum getFileType() {
        return FileTypeResolveEnum.FILE_B_RESOLVE;
    }
    
    @Override
    public void resolve(Object objectParam) {
        log.info("B类型文件解析开始，参数：{}", objectParam);
        // B类型具体解析逻辑
        try {
            // 示例：处理CSV文件
            if (objectParam instanceof File) {
                File file = (File) objectParam;
                // 实现具体的CSV解析逻辑
                log.info("正在解析CSV文件：{}", file.getName());
            }
        } catch (Exception e) {
            log.error("B类型文件解析失败", e);
            throw new RuntimeException("B类型文件解析失败", e);
        }
    }
}

// 策略上下文服务类
@Component
@Slf4j
public class StrategyContext implements ApplicationContextAware {
    // 使用线程安全的ConcurrentHashMap存储策略
    private final Map<FileTypeResolveEnum, IFileStrategy> strategyMap = new ConcurrentHashMap<>();
    
    // 执行文件解析
    public void resolveFile(FileTypeResolveEnum fileType, Object param) {
        IFileStrategy strategy = strategyMap.get(fileType);
        if (strategy == null) {
            throw new IllegalArgumentException("未找到对应的文件解析策略: " + fileType);
        }
        try {
            strategy.resolve(param);
        } catch (Exception e) {
            log.error("文件解析失败", e);
            throw new RuntimeException("文件解析失败", e);
        }
    }
    
    // 初始化策略Map
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        Map<String, IFileStrategy> strategyBeans = applicationContext.getBeansOfType(IFileStrategy.class);
        strategyBeans.values().forEach(strategy -> 
            strategyMap.put(strategy.getFileType(), strategy)
        );
        log.info("文件解析策略初始化完成，共加载{}个策略", strategyMap.size());
    }
}

// 使用示例
@Service
@Slf4j
public class FileProcessService {
    @Autowired
    private StrategyContext strategyContext;
    
    public void processFile(File file, FileTypeResolveEnum fileType) {
        log.info("开始处理文件：{}", file.getName());
        strategyContext.resolveFile(fileType, file);
        log.info("文件处理完成：{}", file.getName());
    }
}
```

## 责任链模式
责任链模式是一种**行为型设计模式**，它允许多个对象有机会处理请求，从而避免请求的发送者与接收者之间的耦合。责任链模式将这些处理对象连成一条链，并沿着这条链传递请求，直到有对象处理它为止。

#### **责任链模式的核心角色**
- **Handler**：定义一个处理请求的接口，通常包含一个处理方法和一个设置下一个处理者的方法。
- **ConcreteHandler**：实现`Handler`接口，负责处理它能够处理的请求。如果不能处理，则将请求传递给下一个处理者。
- **Client**：创建责任链，并向链上的第一个处理者提交请求。

责任链模式通常用于多级审批系统、异常处理和过滤器链等场景。比如在一个请假审批系统中，我们可以使用责任链模式将不同级别的审批人（如组长、经理、总监）连成一条链，请假请求会沿着这条链传递，直到有审批人处理它为止。

责任链模式的优点在于它能够解耦请求的发送者和接收者，动态调整责任链，并且符合单一职责原则和开闭原则。不过，责任链模式也有一些缺点，比如请求可能未被处理，责任链过长会影响性能。

```java
// 请求对象
@Data
@AllArgsConstructor
public class Request {
    private String requestData;
    private String requestType;
}

// 响应对象
@Data
@AllArgsConstructor
public class Response {
    private String responseData;
    private boolean success;
}

// 抽象处理器
public abstract class AbstractHandler {
    // 责任链中的下一个处理器
    private AbstractHandler nextHandler;

    public void setNextHandler(AbstractHandler nextHandler) {
        this.nextHandler = nextHandler;
    }

    public AbstractHandler getNextHandler() {
        return nextHandler;
    }

    // 过滤器方法，定义处理流程
    public void filter(Request request, Response response) {
        // 执行当前处理器的处理逻辑
        doFilter(request, response);
        
        // 如果还有下一个处理器，则继续执行
        if (getNextHandler() != null) {
            getNextHandler().filter(request, response);
        }
    }

    // 具体的处理逻辑，由子类实现
    protected abstract void doFilter(Request request, Response response);
}

// 参数校验处理器
@Component
@Order(1)
@Slf4j
public class CheckParamHandler extends AbstractHandler {
    @Override
    protected void doFilter(Request request, Response response) {
        log.info("执行参数校验处理器");
        if (request.getRequestData() == null || request.getRequestData().isEmpty()) {
            response.setSuccess(false);
            response.setResponseData("请求参数不能为空");
            return;
        }
        log.info("参数校验通过");
    }
}

// 安全校验处理器
@Component
@Order(2)
@Slf4j
public class SecurityCheckHandler extends AbstractHandler {
    @Override
    protected void doFilter(Request request, Response response) {
        log.info("执行安全校验处理器");
        if (!"allowed".equals(request.getRequestType())) {
            response.setSuccess(false);
            response.setResponseData("安全校验不通过");
            return;
        }
        log.info("安全校验通过");
    }
}

// 业务处理器
@Component
@Order(3)
@Slf4j
public class BusinessHandler extends AbstractHandler {
    @Override
    protected void doFilter(Request request, Response response) {
        log.info("执行业务处理器");
        // 具体业务逻辑
        response.setSuccess(true);
        response.setResponseData("业务处理成功：" + request.getRequestData());
        log.info("业务处理完成");
    }
}

// 责任链管理器
@Component
@Slf4j
public class ChainManager {
    @Autowired
    private List<AbstractHandler> handlers;
    
    private AbstractHandler firstHandler;

    @PostConstruct
    public void initializeChain() {
        // 根据@Order注解排序
        handlers.sort(Comparator.comparing(handler -> 
            handler.getClass().getAnnotation(Order.class).value()));
            
        // 构建责任链
        for (int i = 0; i < handlers.size(); i++) {
            if (i == 0) {
                firstHandler = handlers.get(0);
            } else {
                handlers.get(i-1).setNextHandler(handlers.get(i));
            }
        }
        log.info("责任链初始化完成，处理器数量：{}", handlers.size());
    }

    // 执行责任链
    public Response process(Request request) {
        Response response = new Response(null, false);
        firstHandler.filter(request, response);
        return response;
    }
}

// 使用示例
@Service
public class RequestProcessor {
    @Autowired
    private ChainManager chainManager;

    public Response processRequest(String data, String type) {
        Request request = new Request(data, type);
        return chainManager.process(request);
    }
}
```


### 模板方法
定义一个操作中的算法的骨架流程，而将一些步骤延迟到子类中，使得子类可以不改变一个算
法的结构即可重定义该算法的某些特定步骤。它的核心思想就是：定义一个操作的一系列步
骤，对于某些暂时确定不下来的步骤，就留给子类去实现，这样不同的子类就可以定义出不同
的步骤。

11. 简单定义： "模板方法模式是一种行为型设计模式，它定义了一个算法的骨架，将一些步骤延迟到子类中实现。模板方法使得子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。"
12. 生活例子： "就像我们泡饮品，无论是泡茶还是泡咖啡，基本步骤都是：烧水、准备杯子、放入主料（茶叶/咖啡粉）、加调料。这些步骤的顺序是固定的，但具体加什么原料和调料则由具体的饮品决定。"
13. 核心组成：

- 抽象类：定义了算法的骨架和公共方法
- 具体实现类：实现抽象类中的抽象方法
- 模板方法：定义了算法的步骤顺序
- 钩子方法：子类可以选择性覆盖的方法

14. 实际应用： "比如我们项目中的文件处理，无论是处理 Excel 还是 CSV 文件，都需要经过打开文件、读取数据、处理数据、保存结果这几个步骤，但具体每个步骤的实现方式会根据文件类型不同而不同。"不同。"

15. 主要优点：

- 提高代码复用性
- 易于扩展
- 符合开闭原则

```java
// 抽象类，定义模板方法
public abstract class BeverageTemplate {
    
    // 模板方法，声明为final防止子类重写
    public final void makeBeverage() {
        // 1. 烧水
        boilWater();
        // 2. 准备容器
        prepareContainer();
        // 3. 加入主料
        addMainIngredient();
        // 4. 可选步骤：加入调料
        if (customerWantsCondiments()) {
            addCondiments();
        }
        // 5. 包装
        packageBeverage();
    }
    
    // 具体方法，共用步骤
    private void boilWater() {
        System.out.println("将水煮到100度");
    }
    
    private void prepareContainer() {
        System.out.println("准备干净的杯子");
    }
    
    private void packageBeverage() {
        System.out.println("包装饮品");
    }
    
    // 抽象方法，子类必须实现的步骤
    protected abstract void addMainIngredient();
    protected abstract void addCondiments();
    
    // 钩子方法，子类可以选择是否重写
    protected boolean customerWantsCondiments() {
        return true;
    }
}

// 具体类：咖啡
public class Coffee extends BeverageTemplate {
    private boolean needCondiments;
    
    public Coffee(boolean needCondiments) {
        this.needCondiments = needCondiments;
    }
    
    @Override
    protected void addMainIngredient() {
        System.out.println("加入咖啡粉");
    }
    
    @Override
    protected void addCondiments() {
        System.out.println("加入糖和牛奶");
    }
    
    @Override
    protected boolean customerWantsCondiments() {
        return needCondiments;
    }
}

// 具体类：茶
public class Tea extends BeverageTemplate {
    @Override
    protected void addMainIngredient() {
        System.out.println("加入茶叶");
    }
    
    @Override
    protected void addCondiments() {
        System.out.println("加入柠檬");
    }
}

// 使用示例
public class Client {
    public static void main(String[] args) {
        // 制作不需要调料的咖啡
        BeverageTemplate coffee = new Coffee(false);
        System.out.println("=== 制作咖啡 ===");
        coffee.makeBeverage();
        
        // 制作茶
        BeverageTemplate tea = new Tea();
        System.out.println("\n=== 制作茶 ===");
        tea.makeBeverage();
    }
}

```

## 观察者模式
### 观察者模式（Observer Pattern）

观察者模式是一种**行为型设计模式**，它定义了对象之间的一对多依赖关系。当一个对象（称为**主题**或**被观察者**）的状态发生改变时，所有依赖它的对象（称为**观察者**）都会收到通知并自动更新。

#### 核心角色
16. **Subject（主题/被观察者）**：
   - 维护一个观察者列表。
   - 提供注册、移除和通知观察者的方法。
17. **ConcreteSubject（具体主题）**：
   - 实现主题接口，存储具体状态，并在状态改变时通知观察者。
18. **Observer（观察者）**：
   - 定义一个更新接口，用于在主题状态改变时接收通知。
19. **ConcreteObserver（具体观察者）**：
   - 实现观察者接口，定义在接收到通知时的具体行为。

---

#### 用户注册的例子

假设我们有一个用户注册系统，当用户注册成功后，需要执行以下操作：
20. 发送短信通知。
21. 发送电子邮件通知。
22. 发送系统通知。

我们可以使用观察者模式来实现这个需求。
##### 代码实现

23. 定义观察者接口（Observer）
```java
public interface Observer {
    void update(String message);  // 更新方法，用于接收通知
}
```

24. 定义具体观察者（ConcreteObserver）
```java
// 短信观察者
public class SmsObserver implements Observer {
    @Override
    public void update(String message) {
        System.out.println("发送短信通知：" + message);
    }
}

// 邮件观察者
public class EmailObserver implements Observer {
    @Override
    public void update(String message) {
        System.out.println("发送电子邮件通知：" + message);
    }
}

// 系统通知观察者
public class NotificationObserver implements Observer {
    @Override
    public void update(String message) {
        System.out.println("发送系统通知：" + message);
    }
}
```

25. 定义主题接口（Subject）
```java
import java.util.ArrayList;
import java.util.List;

public class Subject {
    private List<Observer> observers = new ArrayList<>();  // 观察者列表

    // 注册观察者
    public void attach(Observer observer) {
        observers.add(observer);
    }

    // 移除观察者
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    // 通知所有观察者
    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}
```

26. 定义具体主题（ConcreteSubject）
```java
public class UserRegistration extends Subject {
    public void registerUser(String username) {
        System.out.println("用户 " + username + " 注册成功！");
        // 通知所有观察者
        notifyObservers("用户 " + username + " 已注册");
    }
}
```

27. 客户端代码
```java
public class Client {
    public static void main(String[] args) {
        // 创建主题
        UserRegistration userRegistration = new UserRegistration();

        // 创建观察者
        Observer smsObserver = new SmsObserver();
        Observer emailObserver = new EmailObserver();
        Observer notificationObserver = new NotificationObserver();

        // 注册观察者
        userRegistration.attach(smsObserver);
        userRegistration.attach(emailObserver);
        userRegistration.attach(notificationObserver);

        // 用户注册
        userRegistration.registerUser("张三");

        // 输出结果：
        // 用户 张三 注册成功！
        // 发送短信通知：用户 张三 已注册
        // 发送电子邮件通知：用户 张三 已注册
        // 发送系统通知：用户 张三 已注册
    }
}
```
#### 观察者模式的优点
28. **解耦**：主题和观察者之间是松耦合的，主题不需要知道观察者的具体实现。
29. **扩展性**：可以动态添加或移除观察者，符合开闭原则。
30. **灵活性**：观察者可以定义自己的行为，主题只需要负责通知。
#### 观察者模式的适用场景
31. **事件驱动系统**：如 GUI 事件处理、消息队列等。
32. **发布-订阅系统**：如消息中间件、通知系统等。
33. **状态变化通知**：如监控系统、数据同步等。


## 工厂模式
工厂模式是一种创建型设计模式，它通过封装对象的创建逻辑，使得客户端代码不需要直接依赖具体的类。它的核心思想是将对象的创建与使用分离，从而降低代码的耦合度，提高系统的灵活性和可维护性。

工厂模式主要分为三种：简单工厂模式、工厂方法模式和抽象工厂模式。简单工厂模式通过一个工厂类根据传入的参数创建不同的对象；工厂方法模式将对象的创建延迟到子类中，每个子类负责创建一种具体的对象；抽象工厂模式则用于创建一组相关或依赖的对象。

抽象工厂模式的主要角色如下：
- 抽象工厂（Abstract Factory）：提供了创建产品的接口，它包含多个创建产品的方法，可以创建多个不同等级的产品。
- 具体工厂（Concrete Factory）：主要是实现抽象工厂中的多个抽象方法，完成具体产品的创建。
- 抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能，抽象工厂模式有多个抽象产品。
- 具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它 同具体工厂之间是多对一的关系。
