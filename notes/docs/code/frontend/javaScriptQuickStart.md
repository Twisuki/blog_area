---
date: ""
title: JavaScript基本概念
icon: file
order: 
category:
  - 前端
tags:
  - JavaScript
---
## 在浏览器调试中使用 JQuery
在调试-控制台中执行如下脚本，就可以使用了。
```
var jquery = document.createElement('script');  
jquery.src = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";//若调试页面是https的这里也修改为https.
document.getElementsByTagName('head')[0].appendChild(jquery);  
jQuery.noConflict();
```

## 运行
`01在head中运行JS.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <script>console.log("牛逼JS")</script>  
</head>  
<body>  
  
</body>  
</html>
```
`02在body中运行JS.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
    <script>console.log("牛逼JS")</script>  
</body>  
</html>
```
`03使用引入中运行JS.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <script src="js/inferenceTest.js"></script>  
</head>  
<body>  
</body>  
</html>
```
`inferenceTest.js`
```js
console.log("牛逼JS")  
console.log("牛逼JS")  
console.log("牛逼JS")
```
`04在事件中运行JS.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
<button type="button" onclick="console.log('我是派大星')"></button>  
</body>  
</html>
```
## 变量
`05变量.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <script>  
    /*  
    * 1．定义变量，使用关键字var  
    *    * var 变量名;  
    * var 变量名 = 初始值;  
    * 2． 如果定义Js变量时没有赋初值，那么值是undefined  
    * 3. JS是弱类型的，给变量赋什么类型的值，变量就是什么类型  
    * 4. typeof用来判断变量是什么类型  
    * 5． 标识符的命名规范  
        1）包含字母、数字、_、§  
        2） 不能以数字开头  
        3） 区分大小写  
  */    var a = 10;  
    console.log(typeof a);  
    var b = "666"  
    console.log(typeof b);  
    var bb = '999';  
    console.log(typeof bb);  
    var c = null;  
    console.log(typeof c);  
    var d;  
    console.log(typeof d);  
    var dd = undefined;  
    console.log(typeof dd);  
    var e = true;  
    console.log(typeof e);  
  
  </script>  
</head>  
<body>  
  
</body>  
</html>
```
## 分支
`06分支.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <script>  
    var score = 90;  
    if (score >= 60) {  
        console.log("及格")  
    }  
    console.log("------------------");  
    score = 30;  
    if (score >= 60) {  
        console.log("及格");  
    } else {  
        console.log("不及格...")  
    }  
    score = 75;  
    if(score >= 80){  
        console.log("good");  
    } else if (score >= 70 && score < 80) {  
        console.log("良好")  
    } else if (score >= 60 && score < 70 ) {  
        console.log("及格")  
    } else {  
        console.log("不及格")  
    }  
  
    console.log("++++++++++++++++++++++++");  
    var score2 = 60;  
    console.log(parseInt(score2 / 60));  
    switch (parseInt(score2 / 60)) {  
        case 1:  
            console.log("及格");  
            break;  
        case 0:  
            console.log("不及格");  
            break;  
    }  
  
  </script>  
</head>  
<body>  
  
</body>  
</html>
```
## 循环
`07循环.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <script>  
      for (var i = 1; i < 6; i++) {  
          var s = "";  
          for (var j = 0; j < i; j++) {  
              s = s + "*";  
          }  
          console.log(s);  
      }  
  
  </script>  
</head>  
<body>  
  
</body>  
</html>
```
## 数组
`08数组.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <script>  
      var arr = ["steve", "jobs"];  
      for (var i = 0; i < arr.length; i++) {  
          console.log(arr[i]);  
      }  
      for (var string of arr) {  
          console.log(string);  
      }  
      arr.forEach(item => console.log(item));  
  </script>  
</head>  
<body>  
  
</body>  
</html>
```
## 函数
`09函数.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  <script>  
  
      var add = function (a, b) {  
          return a + b;  
      };  
      var r = add(1, 5);  
      console.log(r);  
  
      var sum2 = function(a, b) {  
          return a + b;  
      }  
      console.log(sum2(3 + 3));  
  
      function add2(a, b){  
        return a + b;  
      }  
      console.log(add2(3 + 3));  
  
      function sum1(a, b) {  
          return a + b;  
      }  
  
  
      var sum = sum1(1, 5);  
      console.log(sum);  
      var sum2 = sum2(1, 5);  
      console.log(sum2)  
  
  
  </script>  
</head>  
<body>  
  
</body>  
</html>
```

## 对象
`10对象.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <script>  
        var student = {  
          sname: '王文鹏',  
          sage: 24,  
          addr: '青岛',  
          study: function (str) {  
              console.log("学习" + str);  
          },  
        };  
  
        console.log(student.sname);  
  
        //可以动态的访问某个属性  
        console.log(student['sage']);  
        var a = "addr";  
        console.log(student[a]);  
        //调用方法  
        student.study("JavaScript");  
  
    </script>  
</head>  
<body>  
  
</body>  
</html>
```
## DOM
>>当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model），DOM 模型被构造为对象的树。我们可以通过操作这个对象来实现创建动态的 HTML 内容。

`11DOM_Write.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  
</head>  
<body>  
<script>  
    document.write("niuBi");  
</script>  
</body>  
</html>
```
### 通过 ID 获取元素
`12DOM_GetElementById1.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  
</head>  
<body>  
  
<p id="n1">欢迎来到地球 Onling</p>  
<p>这是一个基于现实的在线联机游戏</p>  
  
<script>  
    var elementById = document.getElementById("n1");  
    console.log(elementById);  
</script>  
</body>  
</html>
```
`12DOM_GetElementById2.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <script>  
        var init = function () {  
            var elementById = document.getElementById("n1");  
            console.log(elementById);  
        };  
    </script>  
</head>  
<body onload="init()">  
  
<p id="n1">欢迎来到地球 Onling</p>  
<p>这是一个基于现实的在线联机游戏</p>  
<p>获取元素之前，文档模型应该已经被创建。</p>  
<p>代码解释的时候是从上往下，虽然获取元素是在标签之前，但是我们在 body 中使用了事件，当 body 加载完，文档模型创建之后，才会调用 init()，即获取对应id的元素</p>  
  
  
</body>  
</html>
```
### 通过 Class 获取元素
`13DOM_GetElementByClass.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
  
<p class="c1">哈哈哈哈哈</p>  
<p class="c1">和红红火火</p>  
<p class="c2">牛气冲天</p>  
  
<script>  
    var elementsByClassName = document.getElementsByClassName("c1");  
    for (var i = 0; i < elementsByClassName.length; i++) {  
        console.log(elementsByClassName[i]);  
    }  
</script>  
</body>  
</html>
```
### 修改普通元素
`14DOM_AlterCommonElement.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
  
<div id="div1">欢迎来到地球 Onling</div>  
<div id="div2">  
    <p>这是一个基于现实的在线联机游戏</p>  
    <div>  
        <p>啦啦啦啦啦</p>  
    </div>  
</div>  
  
<script>  
   var innerText = document.getElementById("div1").innerText;  
   console.log(innerText);  
   var innerHTML = document.getElementById("div2").innerHTML;  
   console.log(innerHTML);  
  
   document.getElementById("div1").innerText = "我修改了内容～";  
   document.getElementById("div2").innerHTML = "<h1>改改改！</h1>"  
  
</script>  
</body>  
</html>
```
### 修改表单元素
`15DOM_AlterFormElement.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
  
<input type="text" id="t1" value="root"/>  
  
  
<script>  
    //获取值并且打印  
    var value = document.getElementById("t1").value;  
    console.log(value);  
    //修改值  
    var value = document.getElementById("t1").value = "admin";  
</script>  
</body>  
</html>
```
### 操作属性
`16DOM_OperateAttribute.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<style>  
    .c1 {  
        color: blue;  
    }  
    .c2 {  
        color: red;  
    }  
</style>  
<body>  
  
<div id="div1">哈哈哈哈啦</div>  
<button type="button" id="b1" onclick="blue()">按钮</button>  
<button type="button" id="b2" onclick="red()">按钮</button>  
<button type="button" id="b3" onclick="document.getElementById('b3').setAttribute('class', 'c2')">按钮</button>  
<button type="button" id="b4" onclick="document.getElementById('b4').setAttribute('class', 'c1')">按钮</button>  
  
<script>  
    function blue() {  
        document.getElementById("div1").setAttribute("class", "c1");  
    }  
    function red() {  
        document.getElementById("div1").setAttribute("class", "c2");  
    }  
</script>  
</body>  
</html>
```
### 操作CSS
`17DOM_OperateCss.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<style>  
    .c1 {  
        color: blue;  
    }  
    .c2 {  
        color: red;  
    }  
</style>  
<body>  
  
<div id="div1">哈哈哈哈啦</div>  
  
<script>  
    document.getElementById("div1").style.textAlign = "center";  
    document.getElementById("div1").style.backgroundColor = "yellow";  
</script>  
</body>  
</html>
```
### 事件
>简单理解当 HTML 中发生某些事件时所调用的方法。

`18DOM_Event.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<style>  
    .c1 {  
        color: blue;  
    }  
    .c2 {  
        color: red;  
    }  
</style>  
<body>  
<input type="text" onblur="alert('刚刚离开了焦点')">  
<input type="text" onfocus="alert('聚焦焦点')">  
<button type="button" id="b1" onclick="clickEvent()">按钮</button>  
  
<script>  
    function clickEvent() {  
        alert("点击事件");  
    }  
</script>  
</body>  
</html>
```
### 创建元素
`19DOM_CreateDelElement1.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <style>  
        #main {  
            margin: 0 auto;/*设置整个盒子居中,一定要设置宽度*/  
            width: 500px;  
        }  
  
        p {  
            text-align: center;/*设置段落中的内容居中*/  
        }  
  
        table {  
            width: 500px;  
            border-collapse: collapse;/*去除边框中间的空白区域*/  
        }  
  
        table, tr, td {  
            border: 1px solid black;  
        }  
    </style>  
</head>  
  
<body>  
<div id="main">  
    <div id="divform">  
        <form>  
            <p>  
                <label>姓名</label>  
                <input type="text" id="username" />  
            </p>  
            <p>  
                <label>年龄</label>  
                <input type="text" id="age" />  
            </p>  
            <p>  
                <label>电话</label>  
                <input type="text" id="tel"/>  
            </p>  
            <p>  
                <button type="button" onclick="addItem()">添加</button>  
            </p>  
        </form>  
    </div>  
    <hr/>  
    <div id="divtable">  
        <table id="tb1">  
            <tr>  
                <td>姓名</td>  
                <td>年龄</td>  
                <td>电话</td>  
                <td>操作</td>  
            </tr>  
        </table>  
    </div>  
</div>  
</body>  
<script>  
    function addItem() {  
        //创建行  
        var line = document.createElement("tr");  
  
        //创建存放姓名的单元格  
        var tdUsername = document.createElement("td");  
        //从网页上获取姓名的值  
        var usernameValue = document.getElementById("username").value;  //获取值  
        var usernameTxtNode = document.createTextNode(usernameValue);    //使用值创建文本节点  
        tdUsername.appendChild(usernameTxtNode);    //将文本节点放入存放姓名的单元格  
  
        var tdAge = document.createElement("td");  
        var ageValue = document.getElementById("age").value;  //获取值  
        var ageTxtNode = document.createTextNode(ageValue);    //使用值创建文本节点  
        tdAge.appendChild(ageTxtNode);    //将文本节点放入存放姓名的单元格  
  
        var tdTel = document.createElement("td");  
        var telValue = document.getElementById("tel").value;  //获取值  
        var telxtNode = document.createTextNode(telValue);    //使用值创建文本节点  
        tdTel.appendChild(telxtNode);    //将文本节点放入存放姓名的单元格  
  
        //创建删除按钮  
        var tdDel = document.createElement("td");   //创建存储按钮的单元格  
        var button = document.createElement("button");//创建button按钮  
        button.setAttribute("type", "button");  //设置button的类型  
  
        //button.setAttribute("value", "删除");  //这个是设置button的属性的value值  
        button.value = "del";    //这个也是设置属性的 value        console.log(button.value);  //打印 button value属性的值  
  
        button.innerText = "删除";  //设置button按钮中的显示文字  
        //button.textContent = "删除";  //设置button按钮中的显示文字  
        //console.log(button.innerText);  
        //console.log(button.value);  
        button.onclick = delItem; //为这个按钮绑定事件  
        tdDel.appendChild(button);  //把设置了一系列属性的button按钮放到单元格中  
        //把每个单元格都放到一行中  
        line.appendChild(tdUsername);  
        line.appendChild(tdAge);  
        line.appendChild(tdTel);  
        line.appendChild(tdDel);  
  
        //获取到表格  
        var tb = document.getElementById("tb1");  
        tb.appendChild(line);  
  
  
    }  
    function delItem() {  
        var line = this.parentNode.parentNode;  //  获取到按钮所在到行  
        var tb = this.parentNode.parentNode.parentNode; //获取到表格  
        tb.removeChild(line);   //  表格移除这一行  
    }  
</script>  
</body>  
</html>
```
`19DOM_CreateDelElement2.html`
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
<form>  
    <p>  
        你喜欢的运动是?<input id="allOrNot" type="checkbox" onchange="checkAllOrNot()" />全选/全不选  
    </p>  
    <p>  
        <input type="checkbox" class="hobby" />足球  
        <input type="checkbox" class="hobby" />篮球  
        <input type="checkbox" class="hobby" />乒乓球  
        <input type="checkbox" class="hobby" />拳击  
    </p>  
    <p>  
        <button type="button" onclick="checkAllFun()">全选</button>  
        <button type="button" onclick="checkNoFun()">全不选</button>  
        <button type="button" onclick="checkOptFun()">反选</button>  
        <button type="submit">提交</button>  
    </p>  
</form>  
<script>  
    function checkAllFun() {  
        var hobbys = document.getElementsByClassName("hobby");  
        for (let i = 0; i < hobbys.length; i++) {  
            hobbys[i].checked = true;  
        }  
    }  
    function checkNoFun() {  
        var hobbys = document.getElementsByClassName("hobby");  
        for (let i = 0; i < hobbys.length; i++) {  
            hobbys[i].checked = false;  
        }  
    }  
    function checkOptFun() {  
        var hobbys = document.getElementsByClassName("hobby");  
        for (let i = 0; i < hobbys.length; i++) {  
            hobbys[i].checked = !hobbys[i].checked;  
        }  
    }  
    function checkAllOrNot() {  
        var flag = document.getElementById("allOrNot").checked;  
        var hobbys = document.getElementsByClassName("hobby");  
        for (let i = 0; i < hobbys.length; i++) {  
            hobbys[i].checked = flag;  
        }  
    }  
  
</script>  
</body>  
</html>
```
## 校验
### 手搓校验
`19DOM_Verify1.html`
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
<form action="http://www.baidu.com" method="post" onsubmit="return checkAll();">  
    <table>  
        <tr>  
            <td>  
                <!--使用for属性，使得点击“账号”两个字时实现点击输入框的效果-->  
                <label for="username">账号</label>  
            </td>  
            <td>  
                <!--placeholder是输入框中灰色的提示信息-->  
                <input type="text" id="username" placeholder="请输入账号" onblur="judgeUserName()" onfocus="clearInfo('usernameInfo')" />  
            </td>  
            <td>  
                <span id="usernameInfo"></span>  
            </td>  
        </tr>  
        <tr>  
            <td>  
                <label for="password">密码</label>  
            </td>  
            <td>  
                <input type="password" id="password" placeholder="请输入密码" onblur="judgePassword()" onfocus="clearInfo('passwordInfo')" />  
            </td>  
            <td>  
                <span id="passwordInfo"></span>  
            </td>  
        </tr>  
        <tr>  
            <td colspan="3">  
                <button type="submit">登录</button>  
            </td>  
        </tr>  
    </table>  
</form>  
<script>  
    function judgeUserName() {  
        var username = document.getElementById("username").value;  
        if (username == "") {  
            document.getElementById("usernameInfo").innerText = "账户不允许为空～";  
            document.getElementById("usernameInfo").style.color = "red";  
            return false;  
        }  
        return true;  
    }  
  
    function judgePassword() {  
        var username = document.getElementById("password").value;  
        if (username == "") {  
            document.getElementById("passwordInfo").innerText = "密码不允许为空～";  
            document.getElementById("passwordInfo").style.color = "red";  
            return false;  
        }  
        return true;  
    }  
  
    function clearInfo(key) {  
        document.getElementById(key).innerText = "";  
    }  
  
    function checkAll() {  
        if (judgeUserName() & judgePassword()) {  
            return true;  
        }  
        return false;  
    }  
</script>  
</body>  
</html>
```
### 使用正则表达式进行校验
`20DOM_RegEx.html`
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
## BOM
### window 对象
实现了获取浏览器窗口的相关信息，并且可以进行前进后退重定向等相关操作。

### 定时器
`21定时器.html`
```js
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
<div id="div1"></div>  
<button type="button" onclick="stopPrintTime()">点击我停止</button>  
<button type="button" onclick="startPrintTime()">点击我开始</button>  
<span id="s1"></span>  
  
<script>  
    var printTime;  
  
    var startPrintTime = function () {  
        //每隔1000ms执行一次  
        printTime = setInterval(function () {  
            var date = new Date();  
            var time = date.toLocaleTimeString();  
            document.getElementById("div1").innerText = time;  
        }, 1000);  
    };  
  
    var stopPrintTime = function () {  
        clearInterval(printTime);  
    };  
  
    //5000ms = 5秒，到时间之后自动执行  
    setTimeout(function () {  
        document.getElementById("s1").textContent = "我是在第五秒之后出现的";  
    },5000);  
</script>  
</body>  
</html>
```