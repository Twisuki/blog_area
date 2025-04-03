---
title: MyBatis-Plus在Service层的两种实现方式对比：继承与组合模式的选择
icon: file
order: 
date: ""
category:
  - Java
tags:
  - MyBatisPlus
  - MyBatis
---
## 继承 or 组合

```java
// 共用的实体类和Mapper
@Data
public class UserFoot {
    ...
}

public interface UserFootMapper extends BaseMapper<UserFoot> {
}

// 方式1：直接继承IService方式
public interface UserFootService extends IService<UserFoot> {
    // 自定义业务方法
    List<UserFoot> getUserFootprints(Long userId);
}

@Service
public class UserFootServiceImpl extends ServiceImpl<UserFootMapper, UserFoot> 
        implements UserFootService {
    
    // 可以注入其他Mapper或Service
    @Autowired
    private UserMapper userMapper;
    
    @Override
    public List<UserFoot> getUserFootprints(Long userId) {
        // 直接使用继承的方法
        return this.list(new LambdaQueryWrapper<UserFoot>()
                .eq(UserFoot::getUserId, userId)
                .orderByDesc(UserFoot::getCreateTime));
    }
}

// 方式2：组合Dao方式
public class UserFootDao extends ServiceImpl<UserFootMapper, UserFoot> {
    // 在Dao层封装数据库操作
    public List<UserFoot> findByUserId(Long userId) {
        return list(new LambdaQueryWrapper<UserFoot>()
                .eq(UserFoot::getUserId, userId)
                .orderByDesc(UserFoot::getCreateTime));
    }
}

public interface UserFootService {
    // 定义业务方法
    List<UserFoot> getUserFootprints(Long userId);
}

@Service
public class UserFootServiceImpl implements UserFootService {
    private final UserFootDao userFootDao;
    private final UserMapper userMapper;  // 同样可以注入其他依赖
    
    @Autowired
    public UserFootServiceImpl(UserFootDao userFootDao, UserMapper userMapper) {
        this.userFootDao = userFootDao;
        this.userMapper = userMapper;
    }
    
    @Override
    public List<UserFoot> getUserFootprints(Long userId) {
        // 通过dao进行数据操作
        return userFootDao.findByUserId(userId);
    }
}
```

## 优缺点
方式 1 代码更简单，但封装性和清晰度不如方式 2。

方式 2 在层次结构上更清晰，适合更加复杂的场景。

1. **职责划分更明确**
   - Dao 层专注于数据访问操作
   - Service 层专注于业务逻辑

2. **依赖关系更清晰**
   - Service 明确声明了它依赖哪些 Dao
   - 相比继承 IService 的方式，更容易看出 Service 使用了哪些数据操作

3. **更好的封装性**
   - 可以在 Dao 层控制暴露哪些数据库操作方法
   - 避免了 Service 层继承过多不需要的方法

4. **更灵活的组合**
   - 一个 Service 可以方便地组合多个 Dao
   - 更符合"组合优于继承"的设计原则

5. 更灵活的拓展和维护
	- 对数据库层面的修改不需要改动 Service 层

6. 事务管理
	- 事务控制：在 Dao 层可以更方便地管理事务。如果多个数据库操作需要在同一个事务中执行，可以在 Dao 层进行事务控制，而不需要在 Service 层处理事务逻辑。

7. 测试与Mock
	- 单元测试：在单元测试中，可以通过 Mock Dao 层来测试 Service 层的业务逻辑，而不需要真正访问数据库。这样可以提高测试的效率和可靠性。
	- Mock 数据：在开发过程中，可以通过 Mock Dao 层来模拟数据库操作，方便前端开发和调试

8. 代码可读性
	- 代码可读性：通过引入 Dao 层，Service 层的代码会更加简洁，业务逻辑更加清晰。Service 层只需要调用 Dao 层的方法，而不需要关心具体的数据库操作细节。

9. 异常处理
	- 统一异常处理：可以在 Dao 层统一处理数据库操作中的异常，避免在 Service 层重复处理相同的异常逻辑。


