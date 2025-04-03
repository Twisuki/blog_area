---
title: 正则表达式
icon: file
order: 
date: ""
category:
  - 知识
tags:
---
1. 任意一个字符表示匹配任意对应的字符，如 `a` 匹配 `a`，`7`匹配`7`，`-`匹配`-`。

2. `[]`代表匹配中括号中其中任一个字符，如`[abc]`匹配 `a` 或 `b` 或 `c`。

3. `-`在中括号里面和外面代表含义不同，如在外时，就匹配`-`，如果在中括号内`[a-b]`表示匹配26个小写字母中的任一个；`[a-zA-Z]`匹配大小写共52个字母中任一个；`[0-9]`匹配十个数字中任一个。

4. `^` 在中括号里面和外面含义不同，如在外时，就表示开头，如 `^7[0-9]` 表示匹配开头是7的，且第二位是任一数字的字符串；如果在中括号里面，表示除了这个字符之外的任意字符(包括数字，特殊字符)，如 `[^abc]` 表示匹配除去 abc 之外的其他任一字符。

5. `.`表示匹配<font color="#de7802">任意的字符</font>。

6. `\d` 表示<font color="#de7802">数字</font>。

7. `\D` 表示<font color="#de7802">非数字</font>。

8. `\s` 表示由<font color="#de7802">空字符</font>组成，`[\t\n\r\x\f]`。

9. `\S` 表示由非空字符组成，`[^\s]`。

10. `\w` 表示<font color="#de7802">字母</font>、<font color="#de7802">数字</font>、<font color="#de7802">下划线</font>，`[a-zA-Z0-9_]`。

11. `\W`表示<font color="#de7802">不是</font>由字母、数字、下划线组成。

12. `?` 表示出现<font color="#de7802">0次</font>或<font color="#de7802">1次</font>。

13. `+`表示出现<font color="#de7802">1次</font>或<font color="#de7802">多次</font>。

14. `*`表示出现<font color="#de7802">0次</font>、<font color="#de7802">1次</font>或<font color="#de7802">多次</font>。

15. `{n}`表示出现<font color="#de7802">n次</font>。

16. `{n,m}`表示出现<font color="#de7802">n~m次</font>。

17. `{n,}`表示出现<font color="#de7802">n次或n次以上</font>。

18. `XY`表示X后面跟着Y，这里X和Y分别是正则表达式的一部分。

19. `X|Y`表示X或Y，比如"food|f"匹配的是foo（d或f），而"(food)|f"匹配的是food或f。

20. `(X)`子表达式，将X看做是<font color="#de7802">一个整体</font>


## 在 JavaScript 中使用

```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>  
  
    </style>  
</head>  
  
<body>  
<script>  
  
    var reg1 = /^[0-9]$/;   //匹配一个数字  
    console.log(reg1.test("1"));; //true  
    console.log(reg1.test("11"));; //false  
  
    var reg2 = /^[0-9][0-9]$/;  //匹配两个数字  
  
    var reg3 = /^[a-zA-Z][0-9][0-9]$/;  //匹配一个字母连个数字  
    console.log(reg3.test("a11"));  //ture  
    console.log(reg3.test("111"));  //false  
  
    var reg4 = /^[0-9]{10}$/;   //匹配数字(10次)  
    console.log(reg4.test("1234567890"));    //true  
    console.log(reg4.test("12345"));    //false  
  
    var reg5 = /^[0-9]{6,10}$/; //匹配数字(6次-10次)  
    console.log(reg5.test("123456"));    //ture  
    console.log(reg5.test("12345"));     //false  
  
    var reg6 = /^[0-9]+$/;   //匹配数字(1次或多次)  
    console.log(reg6.test("")); //false  
    console.log(reg6.test("111"));   //true  
  
    var reg7 = /^[0-9]?$/;   //匹配数字(0次或1次)  
    console.log(reg7.test("")); //true  
    console.log(reg7.test("1"));   //true  
    console.log(reg7.test("1111111111"));   //false  
  
    var reg8 = /^[0-9]*$/;   //匹配数字(0次或多次)  
    console.log(reg8.test("")); //true  
    console.log(reg8.test("11"));   //true  
    console.log(reg8.test("1111111111"));   //true  
  
    var reg9 = /^\d{6,10}$/;   //匹配数字(6次-10次)  
    console.log(reg9.test("12345"));    //false  
    console.log(reg9.test("123456"));   //true  
  
    var reg10 = /^\w{6,10}$/;   //匹配字母数字下划线(6次-10次)  
    console.log(reg9.test("12345"));    //false  
    console.log(reg9.test("123456"));   //true  
  
    var reg11 = /^.{3}$/;   //匹配任意字符3次  
    console.log(reg11.test("---"));  //true  
  
    var reg12 = /^[a-zA-Z]\w{5,9}$/;   //匹配以字母开头，以数字,字母,下划线组成的6-10位的字符串  
    console.log(reg12.test("12345"));    //false  
    console.log(reg12.test("a123456"));   //true  
  
    var reg13 = /^\\\\$/; //匹配2个反斜杠  
    console.log(reg13.test("\\\\")); //true  
  
</script>  
</body>  
</html>
```
  
## 在 Java 中使用
在 java 中使用需要两个反斜杠来表示一个反斜杠
```java
public class TestRegx {  
    @Test  
    public void testRegx() {  
        String regx = "\\d{5}";   //匹配5位数字  
        String str = "12345";  
        System.out.println(str.matches(regx));  //true  
  
        String regx2 = "\\d{5}\\*";   //匹配5位数字和一个星花  
        String str2 = "12345*";  
        System.out.println(str2.matches(regx2));  //true  
  
    }  
}
```