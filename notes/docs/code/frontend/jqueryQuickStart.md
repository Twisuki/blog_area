---
title: JQuery基本概念
icon: file
order: 
date: ""
category:
  - 前端
tags:
  - JQuery
---
## 概述
>jQuery 是一个快速、简洁的 JavaScript 代码库。其本质仍然是 JavaScript，它是在其之上做的相关方法的封装，使得更简洁易用。> 提供一种简便的JavaScript操作方式，优化HTML文档操作、事件处理、动画设计和Ajax交互。

## 引入
### 使用本地文件
`01JQueryInference1.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
<div id="div1">牛逼啊666啊</div>  
  
<script src="js/jquery-3.4.1.min.js"></script>  
<script>  
  var txt = $("#div1").text();  
  console.log(txt);  
</script>  
</body>  
</html>
```


### 使用在线文件
>CDN 是一种加速服务，简单来说就是让你文件在引用这个网络上的 JQuery 文件时更快。
```html
<head>
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
```

### 其他注意事项
`01JQueryInference2.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
    <script src="js/jquery-3.4.1.min.js"></script>  
    <script>  
        //匿名函数会在body中元素加载完毕之后运行  
        $(function () {  
            var txt = $("#div1").text();  
            console.log(txt);  
        });  
  
    </script>  
</head>  
<body>  
<div id="div1">牛逼啊666啊</div>  
  
  
</body>  
</html>
```
如果你一定要在 `body` 之前进行相关操作，可以使用匿名函数。
 `$(匿名函数)` 匿名函数即小括号中的函数，可以直接定义使用，没有函数名。并且匿名函数会在文档加载完毕之后运行。

## 使用
> `$(选择器).动作函数()`，使用选择器选择到相应的元素，然后执行相应的动作。

选择器的使用是和 [CSS 选择器](css.md#CSS%20选择器) 通用的。

### 基本使用
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Start</title>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script>
        $(document).ready(function () {
            console.log("hello jquery");
        });

        $(function () {
            console.log("hello jquery");
        });
    </script>
</head>
<body>
</body>
</html>
```

### 选择器
#### 基本选择器
>JQuery 简化了 JavaScript 繁琐的选择元素的操作

ID 选择器
- `$("#id")`，通过id获取jQuery元素
类选择器
- `$(".className")`，通过元素的类名来获取jQuery元素
元素选择器
- `$("elementName")`，通过元素名来获取jQuery元素
通配选择器
- `$("*")`，匹配所有元素
选择器合并
- `$("选择器1,选择器2,选择器3, ....")`，将每个选择器匹配到的元素合并到一起返回


`02JQuerySelector.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  
</head>  
<body>  
<div id="div1">牛逼啊666啊</div>  
<div id="div2">牛逼dddddd</div>  
  
<script src="js/jquery-3.4.1.min.js"></script>  
<script>  
    //注意别用错语法...  
    // $("#div1").innerText = "虎虎生威";  
    // $("#div2").textContent = "乌鸦坐飞机";  
    //这才是正确的JQuery语法  
    var text = $("#div1").text();   //无参获取值  
    console.log(text);  //在控制台打印  
    $("#div2").text("乌鸦坐飞机");   //有参数设定值  
</script>  
</body>  
</html>
```
#### 层次选择器
>通过层次来操作相关元素，常见的层次关系有：后代元素、子元素、相邻元素、同辈元素等。

语法：
- `$("x y")`选取x元素里的所有后代元素y
- `$("parent>child")`选取parent元素下的child子元素
- `$("prev+next")`选取紧接在prev元素后的next元素
- `$("prev~siblings")`选取prev元素之后的所有siblings元素

注意：
- `$("div span")`会选取`div`里所有的`span`元素
- `$("div>span")`只会选取`div`直属的`span`子元素

`04JQueryLevelSelector.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  <meta charset="UTF-8">  
  <title>层次选择器</title>  
</head>  
<body>  
<div>  
  <p>这是段落1</p>  
  <span>  
             <p>这是段落2</p>  
             <span>  
                <p>这是段落3</p>  
             </span>  
          </span>  
  <p>这是段落4</p>  
</div>  
<p>这是段落5</p>  
<h5>这是五级标题</h5>  
<p>这是段落6</p>  
  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
  
  //$("div p").css("color", "red");//div中所有的p元素  
  //$("div>p").css("color", "red");//div中的子代元素p  
  //$("div+p").css("color", "red");//div之后紧挨着的p  
  //$("div~p").css("color", "red");//div之后的所有的p元素  
  
  
  
</script>  
  
</body>  
</html>
```

#### 表单选择器
`04JQueryFormSelector.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  <meta charset="UTF-8">  
  <title>表单选择器</title>  
</head>  
<body>  
<input type="text" value="1">  
<input type="text" value="1">  
<input type="text" value="1">  
<input type="text" value="1">  
<input type="password" value="----------">  
<br>  
<input type="checkbox" name="hobby">爬山  
<input type="checkbox" name="hobby">游泳  
<input type="checkbox" name="hobby">打电动  
<hr>  
<input type="checkbox" name="subject">数学  
<input type="checkbox" name="subject">语文  
<input type="checkbox" name="subject">英语  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
  
$(":text").val("");//清空type是text的表单  
$(":password").val("");//清空type是password的表单  
$("[name='hobby']:checkbox").prop("checked", true);//选中有name属性且等于hobby的checkbox元素，设置选中  
  
  
</script>  
  
</body>  
</html>
```


#### 过滤选择器
> 过滤选择器主要是通过特定的过滤规则来筛选出所需的DOM元素。

##### 基本过滤选择器
`05JQueryFilterSelector1.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  <meta charset="UTF-8">  
  <title>过滤选择器</title>  
    <style>  
        table, tr, td, th{  
            border: 1px solid black;  
        }  
        table {  
            border-collapse: collapse;  
            width: 500px;  
            text-align: center;  
        }  
        td[colspan]{  
            text-align: left;  
        }  
    </style>  
</head>  
<body>  
<table>  
    <tr>  
        <th>姓名</th>  
        <th>性别</th>  
        <th>年龄</th>  
    </tr>  
    <tr class="info">  
        <td>zhangsan</td>  
        <td>男</td>  
        <td>20</td>  
    </tr>  
    <tr class="info">  
        <td>Tom</td>  
        <td>男</td>  
        <td>10</td>  
    </tr>  
    <tr class="info">  
        <td>Lucy</td>  
        <td>女</td>  
        <td>10</td>  
    </tr>  
    <tr class="info">  
        <td>Robin</td>  
        <td>男</td>  
        <td>20</td>  
    </tr>  
    <tr>  
        <td colspan="3">备注：这是一个信息表</td>  
    </tr>  
</table>  
<p>这是段落1</p>  
<p>这是段落2</p>  
<p>这是段落3</p>  
<p>这是段落4</p>  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
    $(".info:odd").css("background-color", "pink");  
    $(".info:even").css("background-color", "grey");  
    $("tr:first").css("background-color", "green");  
    $("p:gt(1)").css("background-color", "green");  
  
</script>  
  
</body>  
</html>
```

##### 可视化过滤选择器
`05JQueryFilterSelector2.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  
    <meta charset="UTF-8">  
    <title>可视化过滤选择器</title>  
    <style>  
        #input_lang {  
            display: none;  
        }  
    </style>  
</head>  
<body>  
<div id="div1">  
    111111111111111111111111111  
</div>  
<button id="btn1">让隐藏的元素显示</button>  
<button id="btn2">让显示的元素隐藏</button>  
  
<hr>  
  
<div>  
    <p>请选择你心目中最好的编程语言</p>  
    <p>Java<input class="lang" type="radio" name="lang" /></p>  
    <p>Python<input class="lang" type="radio" name="lang" /></p>  
    <p>JavaScript<input class="lang" type="radio" name="lang" /></p>  
    <p>PHP<input class="lang" type="radio" name="lang" /></p>  
    <p>Kotlin<input class="lang" type="radio" name="lang" /></p>  
    <p>其他 <input id="ch_other" type="radio" name="lang" /></p>  
    <p id="input_lang"><input type="text" name="input_lang" /></p>  
</div>  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
    $("#btn1").click(function () {  
        $("#div1").hide();  
    });  
    $("#btn2").click(function () {  
        $("#div1").show();  
    });  
  
  
    $(".lang").click(function () {  
        $("#input_lang").hide();  
    });  
    $("#ch_other").click(function () {  
        $("#input_lang").show();  
    });  
  
</script>  
  
</body>  
</html>
```

##### 属性过滤选择器
`05JQueryAttributeFilterSelector3.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  
    <meta charset="UTF-8">  
    <title>属性过滤选择器</title>  
</head>  
<body>  
你是男还是女?  
<input type="radio" name="gender" value="man" checked>男  
<input type="radio" name="gender" value="femal">女  
你喜欢学习吗？  
<input type="radio" name="study" value="like" checked>喜欢学习  
<input type="radio" name="study" value="dontLike">不喜欢  
  
  
  
<input type="checkbox" name="hobby" value="football" checked />足球  
<input type="checkbox" name="hobby" value="basketball"/>篮球  
<input type="checkbox" name="hobby" checked  value="tableTennis"/>乒乓球  
<input type="checkbox" name="hobby" value="punch"/>拳击  
  
  
<button id="bt1" type="button">获取输入结果</button>  
  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
    $("#bt1").click(function () {  
        var v1 = $("input[name='gender']:checked").val();  
        var v2 = $("input[name='study']:checked").val();  
  
        var arr = new Array();  
        $("input[name='hobby']:checked").each(function () {  
            var v = $(this).val();  
            console.log(v);  
            arr.push(v);  
        });  
        console.log(arr);  
        alert("你说你是" + v1 + "并且你还说你" + v2 + "学习" + "你还喜欢" + arr);  
  
    });  
  
  
</script>  
  
</body>  
</html>
```



### 事件

常见的 DOM 事件：

|鼠标事件|键盘事件|表单事件|文档/窗口事件|
|---|---|---|---|
|`click`|`keypress`|`submit`|`load`|
|`dblclick`|`keydown`|`change`|`resize`|
|`mouseenter`|`keyup`|`focus`|`scroll`|
|`mouseleave`||`blur`|`unload`|

`03JQueryOperate_Event.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
  
<input type="text" id="username">  
  
<script src="js/jquery-3.4.1.min.js"></script>  
<script>  
    //使用链式语法减少重复。  
    $("#username").blur(function () {//这是第一个事件的开始  
        var val = $("#username").val();  
        if (val == "") {  
            alert("你啥也没输就想走？");  
        } else {  
            alert("我知道你输入了:" + val);  
        }  
    }).focus(function () {  //这是第二个事件的开始  
        $("#username").css("background-color", "grey");  
    });  
</script>  
</body>  
</html>
```
`03JQueryOperate_Event2.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
  
<span id="s1">你过来呀～</span>  
  
<script src="js/jquery-3.4.1.min.js"></script>  
<script>  
    $("#s1").mouseenter(function () {  
        var floatPropertyValue = $("#s1").css("float");  
        if (floatPropertyValue === "right"){  
            $("#s1").css("float", "left");  
        } else {  
            $("#s1").css("float", "right");  
        }  
    });  
</script>  
</body>  
</html>
```

### 遍历
`06JQueryEach.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  
    <meta charset="UTF-8">  
    <title>遍历</title>  
</head>  
<body>  
  
<p class="c1">mysql</p>  
<p class="c1">java</p>  
<p>python</p>  
<p>cpp</p>  
  
  
<button id="bt1" type="button">获取</button>  
<button id="bt2" type="button">篡改</button>  
  
  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
    $("#bt1").click(function () {  
        $("p").each(function () {  
            var v = $(this).text();  
            console.log(v);  
        });  
    });  
  
    $("#bt2").click(function () {  
        $("p[class='c1']").each(function () {  
            var v = $(this).text("java");  
            console.log(v);  
        });  
    });  
  
  
</script>  
  
</body>  
</html>
```

## JQueryDOM

### 获取和设置
HTML的操作方法

- `html()`：获取元素的HTML
- `html(val)`：设置元素的HTML

文本内容的操作方法

- `text()`：获取元素的文本内容
- `text(txt)`：设置元素的文本内容

value的操作方法

- `val()`：获取元素的value内容
- `val(val)`：设置元素的value内容

`07JQueryEmptyCheck.html`
```html
<!DOCTYPE html>  
<html>  
<head>  
  
    <meta charset="UTF-8">  
    <title>遍历</title>  
</head>  
<body>  
  
<form action="http://www.baidu.com" method="post" id="fm">  
    <table>  
        <tr>  
            <td>  
                <!--使用for属性，使得点击“账号”两个字时实现点击输入框的效果-->  
                <label for="username">账号</label>  
            </td>  
            <td>  
                <!--placeholder是输入框中灰色的提示信息-->  
                <input type="text" id="username" placeholder="请输入账号" />  
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
                <input type="password" id="password" placeholder="请输入密码") />  
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
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
  
    function checkInfo(inputId, infoId, message) {  
        if ($(inputId).val() == '') {  
            $(infoId).text(message);  
            return false;  
        } else {  
            return true;  
        }  
  
    }  
  
    function clearInfo(infoId) {  
        $(infoId).text('');  
    }  
    //绑定事件  
    $("#username").blur(function () {  
        checkInfo("#username", "#usernameInfo", "账号不允许为空");  
    }).focus(function () {  
        clearInfo("#usernameInfo");  
    });  
    //绑定事件  
    $("#password").blur(function () {  
        checkInfo("#password", "#passwordInfo", "密码不允许为空");  
    }).focus(function () {  
        clearInfo("#passwordInfo");  
    });  
  
    //为表单提交事件绑定操作  
    $("#fm").submit(function (e) {  
        if (!checkInfo("#username", "#usernameInfo", "账号不允许为空") & !checkInfo("#password", "#passwordInfo", "密码不允许为空")) {  
            console.log("666");  
            e.preventDefault();//阻止跳转  
        } else {  
            console.log("111");  
        }  
    });  
  
    // $("#fm").submit(function (e) {  
    //     var flag = true;    //默认假设通过  
    //     if (!checkInfo("#username", "#usernameInfo", "账号不允许为空")) {  
    //         flag = false;    //     }    //     if (!checkInfo("#password", "#passwordInfo", "密码不允许为空")) {  
    //         flag = false;    //     }    //     if (!flag) {    //         e.preventDefault();//阻止跳转  
    //     }  
    // });  
</script>  
  
</body>  
</html>
```

### 节点操作
创建节点

- `$(html)`，该方法会根据传入的html字符串返回一个DOM对象

插入节点

- `append()`向每个匹配的元素内部追加内容
- `appendTo()`将所有匹配的元素追加到指定的元素中
    - 使用该方法是颠倒了常规的`$(A).append(B)`的操作，即不是将B追加到A中，而是将A追加到B中
- `prepend()`每个匹配的元素内部前置内容
- `prependTo()`将所有匹配的元素前置到指定的元素中
    - 使用该方法是颠倒了常规的`$(A).prepend(B)`的操作，即不是将B前置到A中，而是将A前置到B中
- `after()`在每个匹配的元素之后插入内容
- `insertAfter()`将所有匹配的元素插入到指定元素的后面
    - 使用该方法是颠倒了常规的`$(A).after(B)`的操作，即不是将B插入到A后面，而是将A插入到B后面
- `before()`在每个匹配元素之前插入内容
- `insertBefore()`将所有匹配的元素插入到指定的元素的前面
    - 使用该方法是颠倒了常规的`$(A).before(B)`的操作，即不是将B插入到A前面，而是将A插入到B前面

查找结点

- 通过选择器查找

删除节点

- `remove()`从DOM中删除所有匹配的元素
    - 当某个节点用`remove()`方法删除后，该节点所包含的所有后代节点将同时被删除
- `empty()`该方法不删除节点，而是清空节点，它能清空元素中的所有后代节点

`08JQueryCreateTable.html`
```html
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
                <button type="button" id="addButton">添加</button>  
            </p>  
        </form>  
    </div>  
    <hr/>  
    <div id="divtable">  
        <table id="tb1">  
            <tr>  
                <td>姓名</td>  
                <td>年龄</td>  
                <td>操作</td>  
            </tr>  
        </table>  
    </div>  
</div>  
</body>  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
  
    $("#addButton").click(function () {  
        addIem();  
    });  
  
    function addIem() {  
        //创建存储名字的单元格  
        var $tdName = $("<td></td>");  
        //把从表单元素中获取到的用户输入放到表格中  
        $tdName.text($("#username").val());  
  
        //创建存储年龄的单元格  
        var $tdAge = $("<td></td>");  
        //把从表单元素中获取到的用户输入放到表格中  
        $tdAge.text($("#age").val());  
  
  
        //创建按钮  
        var $button = $("<button type='button'>删除</button>");  
        //为按钮绑定事件  
        $button.click(function () {  
            $(this).parent().parent().remove();//获取到当前行并且删除  
        });  
        //创建删除按钮的单元格  
        var $tdDel = $("<td></td>");  
        $tdDel.html($button);  
        //$tdDel.append($button);  
  
        //创建行  
        var $line = $("<tr></tr>");  
        $line.append($tdName);  
        $line.append($tdAge);  
        $line.append($tdDel);  
  
        //添加到表格中  
        $("#tb1").append($line);  
  
  
  
    }  
  
</script>  
</body>  
</html>
```
[演示](../html/studyproj/08JQueryCreateTable.html)



### 属性操作
`attr(name)`读取指定属性的值

`attr(name, value)`设置指定属性的值

`removeAttr(name)`删除指定属性

`prop()`

- 如果有相应的属性，返回指定属性值
- 如果没有相应的属性，返回值是空字符串
- 处理元素本来就有的属性

`attr()`

- 如果有相应的属性，返回指定属性值
- 如果没有相应的属性，返回值是undefined
- 处理自定义属性

`09JQuerySelectOrNot.html`
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
  
</head>  
  
<body>  
<form>  
    <p>  
        你喜欢的运动是?<input id="allOrNot" type="checkbox" />全选/全不选  
    </p>  
    <p>  
        <input type="checkbox" class="hobby" />足球  
        <input type="checkbox" class="hobby" />篮球  
        <input type="checkbox" class="hobby" />乒乓球  
        <input type="checkbox" class="hobby" />拳击  
    </p>  
    <p>  
        <button type="button" id="selectAll">全选</button>  
        <button type="button " id="selectNone">全不选</button>  
        <button type="button" id="selectOpt">反选</button>  
        <button type="submit">提交</button>  
    </p>  
</form>  
</body>  
<script type="text/javascript" src="js/jquery-3.4.1.min.js" ></script>  
<script>  
  
    //给id为allOrNot的按钮绑定change事件，检测到变化时会触发匿名函数  
    $("#allOrNot").change(function () {  
        $(".hobby").prop("checked", $("#allOrNot").prop("checked"));  
    });  
    //全选  
    $("#selectAll").click(function () {  
        $(".hobby").prop("checked", true);  
    });  
    //全不选  
    $("#selectNone").click(function () {  
        $(".hobby").prop("checked", false);  
    });  
    //反选  
    $("#selectOpt").click(function () {  
        $(".hobby").each(function () {  
            $(this).prop("checked", !$(this).prop("checked"));  
        });  
    });  
  
</script>  
</body>  
</html>
```

### CSS 操作
`$(选择器).css()`

`css(name)`获取指定名称的样式值

`css(name,value)`设置指定名称的样式值

## 动画效果
`$(selector).hide(speed,callback);`

`$(selector).show(speed,callback);`

可选的speed参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。

可选的callback参数是隐藏或显示完成后所执行的函数名称。


## 调试
在代码中合适的位置使用 `debugger` 关键字，
并且在浏览器打开控制台。