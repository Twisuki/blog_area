---
title: html
icon: file
order: 
date: ""
category:
  - 前端
tags:
  - html
---
## 基本知识
### 基本框架
```html
<!DOCTYPE html>    (文档声明)
<html>
	<head>
		<meta charset = "utf-8">
		<title>css_link</title>
	</head>

	
	<body>

	</body>
</html>
```
### 元素和标签的理解
```
<p>是标签，用于定义段落。
<p>This is a paragraph.</p>是元素，包含了开始标签<p>、结束标签</p>以及段落内容"This is a paragraph."
```


## 表格
### table 基本框架
>用于包裹所有表格相关标签

跨行/跨列的 table
```html
<!DOCTYPE html>
<html> 
	<head>
		<meta charset = "utf-8">
		<title>this is a table</title>
	</head>

	
	<body>
		<table border="1">
			<caption>年终工资表</caption>
			<tr>
				<th>区域办</th>
				<th>岗位</th>
				<th>姓名</th>
				<th>工资</th>
			</tr>
			<tr>
				<td rowspan = "3">华东区</td>
				<td rowspan = "2">人事专员</td>
				<td>张民</td>
				<td>1500</td>
			</tr>
			<tr>
				<td>王红</td>
				<td>15000</td>
			</tr>
			<tr>
				<td rowspan = "3">软件开发</td>
				<td>李元凯</td>
				<td>6000</td>
			</tr>
			<tr>
				<td rowspan = "2">中南区</td>
				<td>杨涛</td>
				<td>5000</td>			
			</tr>
			<tr>
				<td>粮草</td>
				<td>5000</td>			
			</tr>
			<tr>
				<td colspan = "3">合计</td>
				<td >19000</td>
			</tr>
		</table>
	</body>
</html>
```
[效果展示](../html/studyproj/table.html)

---
## 表单
>用于提交信息/上传文件等操作
###  form 基本框架
>用于包裹所有表单的基本标签
#### action 属性
>确定传输的服务器地址是哪个
#### method 属性
>规定参数的传输方法
##### Get
会在地址栏显示出来
传输数据有限
##### Post
相对安全
传输量大
适用于密码等敏感信息等传输
可以上传附件
#### entype 属性
>表示是表单提交的类型

默认值：application/x-www-form-urlencoded，普通表单
multipart/form-data：多部分表单(一般用于文件上传)	

### 登入实例练习
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset = "utf-8">
		<title>INFO_INPUT</title>
	</head>
	
	<body>
		<form action = "https://www.baidu.com" method = "GET">
			<table>
				<tr>
					<th></th>
					<th></th>
				</tr>
				<tr>
					<td>name:</td>
					<td><input type = "text" name = "name"></td>
				</tr>			
				<tr>
					<td>pass:</td>
					<td><input type = "text" name = "pass"></td>
				</tr>
				<tr>
					<td>repass:</td>
					<td><input type = "text" name = "repass"></td>
				</tr>
				<tr>
					<td>gender:</td>
					<td>
						男<input type = "radio" name = "gender" value = "man">
						女<input type = "radio" name = "gender" value = "female">
					</td>
				</tr>
				<tr>
					<td>hobby:</td>
					<td>
						学习<input type = "checkbox" name = "hobby" value = "study">
						编程<input type = "checkbox" name = "hobby" value = "debuging">
						工作<input type = "checkbox" name = "hobby" value = "work">
					</td>
				</tr>
				<tr>
					<td>birth:</td>
					<td><input type = "date" name = "birth"></td>
				</tr>
				<tr>
					<td>salary:</td>
					<td><input type = "text" name = "salary"></td>
				</tr>
				<tr>
					<td>学历:</td>
					<td>
						<select name = "edu_bg">
							<option value = "collage">大专</option>
							<option value = "undergradute">本科2</option>
							<option value = "master">硕士</option>
							<option value = "docter">博士</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>info:</td>
					<td><textarea rows="5" cols="30" name = "info">这个家伙很懒，什么都没留下</textarea></td>
				</tr>
				<tr>
					<td><input type = "submit" value = "提交"></td>
					<td></td>
				</tr>
			</table>	
		</form>
	</body>
</html>
```
[效果展示](../html/studyproj/info_input.html)
