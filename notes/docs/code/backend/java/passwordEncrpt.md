---
title: 使用SpingSecurity实现更为安全的密码加密
icon: file
order: 
date: ""
category:
  - 安全
tags:
  - 框架
---
## 

`pom.xml`
```xml
<!--加密-->  
<dependency>  
    <groupId>org.springframework.security</groupId>  
    <artifactId>spring-security-crypto</artifactId>  
</dependency>  
<dependency>  
    <groupId>org.springframework.security</groupId>  
    <artifactId>spring-security-rsa</artifactId>  
    <version>1.0.9.RELEASE</version>  
</dependency>
```

`SecurityConfig.java`
配置`PasswordEncoder`，以及`KeyPair`
```java  
// 表示这是一个配置类
@Configuration
// 开启属性配置绑定,使 JwtProperties 配置类生效。
@EnableConfigurationProperties(JwtProperties.class)
public class SecurityConfig {

    /*
    *   定义了一个 PasswordEncoder Bean，具体实现为 BCryptPasswordEncoder。
	•	Spring Security 的密码加密和校验工具。
	•	BCryptPasswordEncoder 的特性：
	•	 - 使用 BCrypt 算法对密码进行不可逆加密。
	•	 - 自动生成盐值，每次加密结果不同，提升安全性。
	•	 - 适合存储用户密码，在验证密码时，可以通过 matches 方法进行校验。
    *
    * */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    /*
    * 定义了一个 KeyPair Bean，生成加密用的密钥对（包含公钥和私钥），用于 JWT 签名和验证。
	• 依赖 JwtProperties 中的配置（location、password、alias）来加载 KeyStore 文件并解析密钥。
	*
	* 返回的KeyPair 包含了公钥和私钥
	* 私钥（PrivateKey）会用来对 JWT 的数据进行签名，确保数据完整性和真实性。
	* 公钥（PublicKey）会在验证 JWT 时使用，用于验证签名的有效性。
    * */
    @Bean
    public KeyPair keyPair(JwtProperties properties){
        // 获取秘钥工厂
        KeyStoreKeyFactory keyStoreKeyFactory =
                new KeyStoreKeyFactory(
                        properties.getLocation(),
                        properties.getPassword().toCharArray());
        //读取钥匙对
        return keyStoreKeyFactory.getKeyPair(
                properties.getAlias(),
                properties.getPassword().toCharArray());
    }
}
```


`application.yml`
```yml
  
hm:  
  jwt:  
    location: classpath:hmall.jks  
    alias: hmall  
    password: hmall123  
    tokenTTL: 30m
```

`JwtProperties.java`
Spring 会自动将这些配置值注入到 JwtProperties 类的相应字段中。操作更加简单方便。
```java
@Data  
@ConfigurationProperties(prefix = "hm.jwt")  
public class JwtProperties {  
    private Resource location;  
    private String password;  
    private String alias;  
    private Duration tokenTTL = Duration.ofMinutes(10);  
}
```
生成jks文件
.jks 文件（Java KeyStore）是一个二进制文件，用于存储加密密钥、公钥证书和其他加密信息。以下是生成 .jks 文件的常用方法：

使用 keytool 工具生成 .jks 文件

keytool 是 Java 自带的工具，用于管理密钥和证书。

步骤 1：生成 KeyStore

执行以下命令创建 .jks 文件并生成一个密钥对（包含公钥和私钥）：

keytool -genkeypair \
  -alias hmall \
  -keyalg RSA \
  -keysize 2048 \
  -validity 3650 \
  -keystore hmall.jks \
  -storepass hmall123

	•	命令解释：
	•	-genkeypair：生成密钥对。
	•	-alias hmall：指定密钥别名为 hmall。
	•	-keyalg RSA：指定密钥算法为 RSA。
	•	-keysize 2048：密钥大小为 2048 位。
	•	-validity 3650：密钥有效期为 3650 天（10 年）。
	•	-keystore hmall.jks：指定生成的 .jks 文件名为 hmall.jks。
	•	-storepass hmall123：指定 KeyStore 的密码为 hmall123。

步骤 2：填写生成过程中的信息

执行命令后，keytool 会要求填写一些信息，例如：

What is your first and last name?
  [Unknown]: Your Name
What is the name of your organizational unit?
  [Unknown]: Your Unit
What is the name of your organization?
  [Unknown]: Your Organization
What is the name of your City or Locality?
  [Unknown]: Your City
What is the name of your State or Province?
  [Unknown]: Your State
What is the two-letter country code for this unit?
  [Unknown]: CN

这些信息将嵌入到自签名证书中。

检查生成的 KeyStore 内容

使用以下命令查看 .jks 文件中的内容：

keytool -list -v -keystore hmall.jks -storepass hmall123

导出公钥证书（可选）

如果需要导出 .jks 文件中的公钥证书以供其他系统使用，可以执行以下命令：

keytool -exportcert \
  -alias hmall \
  -file hmall.cer \
  -keystore hmall.jks \
  -storepass hmall123

	•	导出的 hmall.cer 是公钥证书，可以分享给其他系统用于验证签名。

生成 .jks 的常见场景

	1.	JWT 签名：
	•	私钥用于生成签名。
	•	公钥用于验证签名。
	2.	HTTPS（SSL/TLS）：
	•	使用 .jks 文件为服务器配置 HTTPS。
	•	将 .jks 文件导出为 .p12 格式，配置到 web 服务器（如 Tomcat、Spring Boot）。
	3.	其他加密需求：
	•	管理和保护敏感的加密密钥。

额外工具

如果需要更加方便地管理 .jks 文件，也可以使用图形化工具或库，如：
	•	Portecle：一个 GUI 密钥库管理工具。
	•	Bouncy Castle：提供丰富的 Java 密钥库操作 API。

使用
```java
    @Override
    public UserLoginVO login(LoginFormDTO loginDTO) {
        // 1.数据校验
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        // 2.根据用户名或手机号查询
        User user = lambdaQuery().eq(User::getUsername, username).one();
        Assert.notNull(user, "用户名错误");
        // 3.校验是否禁用
        if (user.getStatus() == UserStatus.FROZEN) {
            throw new ForbiddenException("用户被冻结");
        }
        // 4.校验密码
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadRequestException("用户名或密码错误");
        }
        // 5.生成TOKEN
        String token = jwtTool.createToken(user.getId(), jwtProperties.getTokenTTL());
        // 6.封装VO返回
        UserLoginVO vo = new UserLoginVO();
        vo.setUserId(user.getId());
        vo.setUsername(user.getUsername());
        vo.setBalance(user.getBalance());
        vo.setToken(token);
        return vo;
    }
```


BCryptPasswordEncoder 自动生成盐值，并将其嵌入到加密后的密码中。具体来说，BCrypt 算法会在加密结果中包含盐值。  
工作原理：
	1.	盐值生成：在加密过程中，BCrypt 会为每次密码加密生成一个随机盐值，这个盐值是唯一的。
	2.	密码加密：盐值与密码一起被传入 BCrypt 算法进行加密。
	3.	加密结果：加密后的密码存储在数据库中时，实际存储的是包含盐值的字符串。这个字符串的格式通常是：

`$2a$10$<salt><hashed_password>`
- `$2a$`：表示使用 BCrypt 算法。
- `10`：表示加密强度（即盐的复杂度，通常是一个数字）。
- `<salt>`：随机生成的盐值。
- `<hashed_password>`：加密后的密码。

使用`BCryptPasswordEncoder`的好处：  
不需要在数据库中为盐值单独预留字段，因为盐值已经包含在存储的加密密码中。当你使用 BCrypt 验证密码时，BCryptPasswordEncoder 会自动从加密后的密码中提取盐值并进行校验