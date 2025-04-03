---
excalidraw-export-transparent: true
excalidraw-export-dark: false
excalidraw-export-pngscale: 2
excalidraw-export-padding: 10

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
栈
(JVM栈) ^c4NcrbRx

堆 ^AWizQpgU

本地方法栈 ^hGxPzfUo

程序计数器 ^o9AQoDIf

方法区 ^TFjeQztN

在Java8中改名为"元空间"
- 用于存储存放已被虚拟机加载的类信息
- 常量
- 静态变量
- 静态方法
- ...... ^bh6hFWvb

本地方法/栈
用于管理本地方法的调用，
存放用供JVM调用的C语言编写的一些方法。
 ^8TzPERBX

一块很小的内存空间，
主要用来记录各个线程执行的字节码的地址，
例如，分支、循环、线程恢复等都依赖于计数器。 ^JLainbAK

JVM中内存最大的一块，用于存储对象
是线程共有的，可以被所有线程共享。 ^UKsSIT8Z

先进后出规则

- 用于存储基本数据类型的数据
- 存储方法在运行时产生的局部变量
- 存储地址(地址也是基本数类型，
  本质就是int类型的数字)
-  ^y494O5Wt

代表线程私有，每个线程在创建运行的时候都有自己单独的一份内存。 ^Ds2LJi7J

线程全局共享 ^cvlC5Vc6

堆 ^Uev4mz0Z

本地方法栈 ^fpjzSs28

方法区 ^I1KETiF8

程序计数器 ^7K1H7in4

- 用于存储基本数据类型的数据
- 存储方法在运行时产生的局部变量
- 引用类型在堆栈的地址
- ...... ^ZM3wJ54T

.
.
. ^YsM1nrE9

局部变量表 ^Sa9PIGkS

操作栈 ^IJLcJXt5

动态链接 ^id6YihwV

方法出口
(返回地址) ^eoeUwCVl

栈帧：表达方法和方法之间的调用关系 ^33V151zf

- 存着想要调用方法等地址，
  让你在需要调用的时候可以很方便的找到它 ^Gys6v2Of

- 记录方法结束后，
- 应该继续运行的下一个栈帧的
- 哪一行代码，哪一个方法。
  ^YNs9mKHv

局部变量表 ^VnhmfDo5

操作栈 ^4eJ8OdeC

动态链接 ^yTWFQuoH

方法出口
(返回地址) ^XKQylxD4

- 存放过程的中间计算结果，是临时的存储空间 ^g0RuUa6d

可以简单的理解为：每个栈帧就是对应的一个方法，调用方法时，这个方法会转换成栈帧的结构，
栈帧存储了方法的局部变量表、 操作数栈、 动态连接和方法返回地址等信息方法，然后被压入栈中 ^ITLeUqZ8

首页() ^mwnJcfHu

肯德基() ^znso82cE

外卖() ^W9kzRzuj

外卖() ^hJZCaLNZ

必胜客() ^UUElDfJi

void 首页() {
    print("跑腿");
    print("外卖");
    print("买药");
    ......
} ^n6Nzyu89

void 肯德基() {
int 可乐数量 = 100;
int 炸鸡数量 = 100;
    print("可乐");
    print("炸鸡");
    print("汉堡");
    ......
} ^am5VwEqr

void 必胜客() {
    int 雪碧数量 = 100;
    int 披萨数量 = 200;
    print("雪碧");
    print("披萨");
    ......
} ^W6w2bQcX

void 外卖() {
    print("肯德基");
    print("必胜客");
    print("汉堡王");
    ......
} ^OsDy9kJs

外卖() ^DtCEbVzN

想象一下你用美团点外卖点场景：
- 打开美团首页
- 点击外卖板块
- 点击肯德基









- 不想要吃肯德基了，点击返回
  于是按照后入先出的规则，
  肯德基()出栈了






- 点击必胜客
- ...... ^kyitDdO8

对应的方法被压入栈中 ^0DwVj2vV

可以发现，我们操作美团点外卖时，对应的方法调用顺序完美符合栈的结构，
为了更好的操作，我们在方法压入栈时，转换成对应的栈帧结构。 ^NEgObjbW

首页() ^wUDp1lfq

首页() ^u9VEr0pZ

hava a nice day! ^ePveT6FN

常量池 ^GUiXpPm1

方法元信息 ^kCAHGfrJ

类元信息 ^uYQbBopz

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.23",
	"elements": [
		{
			"type": "rectangle",
			"version": 796,
			"versionNonce": 1326505410,
			"isDeleted": false,
			"id": "NkX90sQcK5IIA0xxX8GZs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -875.5711862773435,
			"y": -350.7353992653028,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.3567426212769,
			"height": 495.93633108419033,
			"seed": 1390915862,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "c4NcrbRx"
				},
				{
					"id": "hsi6xtoFlH5gfaJZK2NHb",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 297,
			"versionNonce": 222713694,
			"isDeleted": false,
			"id": "c4NcrbRx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -820.0927966561582,
			"y": -127.76723372320765,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 73.39996337890625,
			"height": 50,
			"seed": 107056470,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "栈\n(JVM栈)",
			"rawText": "栈\n(JVM栈)",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "NkX90sQcK5IIA0xxX8GZs",
			"originalText": "栈\n(JVM栈)",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "rectangle",
			"version": 235,
			"versionNonce": 309581186,
			"isDeleted": false,
			"id": "YPzj-yEzmyu9qidqy3eIN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -661.5188595981632,
			"y": -351.44714530060594,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 520.6025307774804,
			"height": 495.3494229412594,
			"seed": 1552540438,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "AWizQpgU"
				},
				{
					"id": "CIJOebHDMqJVwppe4XKOu",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 28,
			"versionNonce": 1602206622,
			"isDeleted": false,
			"id": "AWizQpgU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -411.217594209423,
			"y": -116.27243382997625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 20,
			"height": 25,
			"seed": 146737546,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "堆",
			"rawText": "堆",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YPzj-yEzmyu9qidqy3eIN",
			"originalText": "堆",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 104,
			"versionNonce": 639751490,
			"isDeleted": false,
			"id": "qcciQ2ObYDXHwvjcU9baB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -873.1791956887284,
			"y": 172.94278285141928,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.54194188007705,
			"height": 141.80591323416445,
			"seed": 1160528086,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "hGxPzfUo"
				},
				{
					"id": "WZHTuaeKkIe_qEtVJqNPt",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 42,
			"versionNonce": 629315550,
			"isDeleted": false,
			"id": "hGxPzfUo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -830.9082247486899,
			"y": 231.3457394685015,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 883901014,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "本地方法栈",
			"rawText": "本地方法栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "qcciQ2ObYDXHwvjcU9baB",
			"originalText": "本地方法栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 145,
			"versionNonce": 1534713090,
			"isDeleted": false,
			"id": "mM9pjtJ6copHWYvjr0C51",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -658.8515368736215,
			"y": 174.47163559682485,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 283.6118264683289,
			"height": 137.2733041353556,
			"seed": 1521257738,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "IXArKZyOqMrDVyWizW9XB",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 147,
			"versionNonce": 392162334,
			"isDeleted": false,
			"id": "MjSLUIzQDAzytrM4tMIge",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -351.2816337401597,
			"y": 175.11915118236908,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 219.50778349945983,
			"height": 137.92081972089966,
			"seed": 425154634,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "TFjeQztN"
				},
				{
					"id": "_uIYT1_twKNajKYu0SpO1",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 64,
			"versionNonce": 2147151042,
			"isDeleted": false,
			"id": "TFjeQztN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -271.5277419904298,
			"y": 231.5795610428189,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60,
			"height": 25,
			"seed": 1973634582,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "方法区",
			"rawText": "方法区",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "MjSLUIzQDAzytrM4tMIge",
			"originalText": "方法区",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 40,
			"versionNonce": 1124644958,
			"isDeleted": false,
			"id": "o9AQoDIf",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -563.1774300436493,
			"y": 238.7118040012911,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 1946294090,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "程序计数器",
			"rawText": "程序计数器",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "程序计数器",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "arrow",
			"version": 404,
			"versionNonce": 1497629826,
			"isDeleted": false,
			"id": "_uIYT1_twKNajKYu0SpO1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -245.39921171862306,
			"y": 319.1582573734958,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 142.83909132629907,
			"height": 136.23011956327122,
			"seed": 1480845002,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "MjSLUIzQDAzytrM4tMIge",
				"gap": 6.118286470227076,
				"focus": 0.4536698497582552
			},
			"endBinding": {
				"elementId": "bh6hFWvb",
				"gap": 23.641677004014667,
				"focus": -0.03494881304131465
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					142.83909132629907,
					136.23011956327122
				]
			]
		},
		{
			"type": "text",
			"version": 306,
			"versionNonce": 1347288222,
			"isDeleted": false,
			"id": "bh6hFWvb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -169.2349925983109,
			"y": 479.0300539407818,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 358.219970703125,
			"height": 150,
			"seed": 1042314902,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "_uIYT1_twKNajKYu0SpO1",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "在Java8中改名为\"元空间\"\n- 用于存储存放已被虚拟机加载的类信息\n- 常量\n- 静态变量\n- 静态方法\n- ......",
			"rawText": "在Java8中改名为\"元空间\"\n- 用于存储存放已被虚拟机加载的类信息\n- 常量\n- 静态变量\n- 静态方法\n- ......",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "在Java8中改名为\"元空间\"\n- 用于存储存放已被虚拟机加载的类信息\n- 常量\n- 静态变量\n- 静态方法\n- ......",
			"lineHeight": 1.25,
			"baseline": 142
		},
		{
			"type": "arrow",
			"version": 353,
			"versionNonce": 554968130,
			"isDeleted": false,
			"id": "WZHTuaeKkIe_qEtVJqNPt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -782.7801165581382,
			"y": 318.88396607508196,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 155.04104586188953,
			"height": 138.15464129521712,
			"seed": 185548554,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "qcciQ2ObYDXHwvjcU9baB",
				"gap": 4.1352699894982266,
				"focus": -0.4791550104763354
			},
			"endBinding": {
				"elementId": "8TzPERBX",
				"gap": 15.812624924253726,
				"focus": -0.29388328893372206
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-155.04104586188953,
					138.15464129521712
				]
			]
		},
		{
			"type": "text",
			"version": 327,
			"versionNonce": 1155578078,
			"isDeleted": false,
			"id": "8TzPERBX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1133.3112240494302,
			"y": 472.85123229455274,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 391.219970703125,
			"height": 100,
			"seed": 1869902346,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "WZHTuaeKkIe_qEtVJqNPt",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "本地方法/栈\n用于管理本地方法的调用，\n存放用供JVM调用的C语言编写的一些方法。\n",
			"rawText": "本地方法/栈\n用于管理本地方法的调用，\n存放用供JVM调用的C语言编写的一些方法。\n",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "本地方法/栈\n用于管理本地方法的调用，\n存放用供JVM调用的C语言编写的一些方法。\n",
			"lineHeight": 1.25,
			"baseline": 92
		},
		{
			"type": "arrow",
			"version": 425,
			"versionNonce": 21646338,
			"isDeleted": false,
			"id": "IXArKZyOqMrDVyWizW9XB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -546.9983827675844,
			"y": 324.0219823967307,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 38.00701435264648,
			"height": 139.21585089198788,
			"seed": 1129887946,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "mM9pjtJ6copHWYvjr0C51",
				"focus": 0.32455709408452793,
				"gap": 12.277042664550265
			},
			"endBinding": {
				"elementId": "JLainbAK",
				"focus": -0.19962564717915587,
				"gap": 14.381468317568249
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					38.00701435264648,
					139.21585089198788
				]
			]
		},
		{
			"type": "text",
			"version": 124,
			"versionNonce": 1213328670,
			"isDeleted": false,
			"id": "JLainbAK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -668.8659540545955,
			"y": 477.61930160628685,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 440,
			"height": 75,
			"seed": 1687334538,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "_uIYT1_twKNajKYu0SpO1",
					"type": "arrow"
				},
				{
					"id": "IXArKZyOqMrDVyWizW9XB",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "一块很小的内存空间，\n主要用来记录各个线程执行的字节码的地址，\n例如，分支、循环、线程恢复等都依赖于计数器。",
			"rawText": "一块很小的内存空间，\n主要用来记录各个线程执行的字节码的地址，\n例如，分支、循环、线程恢复等都依赖于计数器。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "一块很小的内存空间，\n主要用来记录各个线程执行的字节码的地址，\n例如，分支、循环、线程恢复等都依赖于计数器。",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "arrow",
			"version": 120,
			"versionNonce": 266697666,
			"isDeleted": false,
			"id": "CIJOebHDMqJVwppe4XKOu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -122.96222873791316,
			"y": -112.08156493846252,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 120.74319090100948,
			"height": 2.644011479584151,
			"seed": 267931274,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "YPzj-yEzmyu9qidqy3eIN",
				"gap": 17.954100082769628,
				"focus": -0.056841950151035
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					120.74319090100948,
					2.644011479584151
				]
			]
		},
		{
			"type": "text",
			"version": 148,
			"versionNonce": 1746049374,
			"isDeleted": false,
			"id": "UKsSIT8Z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 51.16195150470048,
			"y": -119.3475889098197,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 340,
			"height": 50,
			"seed": 420548362,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "JVM中内存最大的一块，用于存储对象\n是线程共有的，可以被所有线程共享。",
			"rawText": "JVM中内存最大的一块，用于存储对象\n是线程共有的，可以被所有线程共享。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "JVM中内存最大的一块，用于存储对象\n是线程共有的，可以被所有线程共享。",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "arrow",
			"version": 157,
			"versionNonce": 1258599298,
			"isDeleted": false,
			"id": "hsi6xtoFlH5gfaJZK2NHb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -885.5392063079746,
			"y": -100.20032241655947,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 85.48970450655418,
			"height": 3.0464056232494414,
			"seed": 1772002902,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "NkX90sQcK5IIA0xxX8GZs",
				"gap": 9.968020030631124,
				"focus": 0.0042708019264666814
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-85.48970450655418,
					3.0464056232494414
				]
			]
		},
		{
			"type": "text",
			"version": 478,
			"versionNonce": 1534311838,
			"isDeleted": false,
			"id": "y494O5Wt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1274.9900790167217,
			"y": -128.9371381208112,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 318.219970703125,
			"height": 175,
			"seed": 1365171542,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "先进后出规则\n\n- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 存储地址(地址也是基本数类型，\n  本质就是int类型的数字)\n- ",
			"rawText": "先进后出规则\n\n- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 存储地址(地址也是基本数类型，\n  本质就是int类型的数字)\n- ",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "先进后出规则\n\n- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 存储地址(地址也是基本数类型，\n  本质就是int类型的数字)\n- ",
			"lineHeight": 1.25,
			"baseline": 167
		},
		{
			"type": "rectangle",
			"version": 102,
			"versionNonce": 350679874,
			"isDeleted": false,
			"id": "-jP6wP6gcpJEiURe3pDbY",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1257.1029407495348,
			"y": -522.3890812314296,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 59.04958971071255,
			"height": 59.04958971071255,
			"seed": 1887772438,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 234,
			"versionNonce": 1202084318,
			"isDeleted": false,
			"id": "Ds2LJi7J",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1167.9076140935638,
			"y": -503.13486884695794,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffc9c9",
			"width": 620,
			"height": 25,
			"seed": 1571361494,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "代表线程私有，每个线程在创建运行的时候都有自己单独的一份内存。",
			"rawText": "代表线程私有，每个线程在创建运行的时候都有自己单独的一份内存。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "代表线程私有，每个线程在创建运行的时候都有自己单独的一份内存。",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 112,
			"versionNonce": 803945218,
			"isDeleted": false,
			"id": "omkFqmMTAV4qK0gZ_ef9K",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1258.4850376593172,
			"y": -443.55447380132847,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 61.693601190296704,
			"height": 59.04958971071261,
			"seed": 410054090,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 69,
			"versionNonce": 62615070,
			"isDeleted": false,
			"id": "cvlC5Vc6",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1167.8475229235728,
			"y": -425.9026926166047,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#b2f2bb",
			"width": 120,
			"height": 25,
			"seed": 1837367946,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "线程全局共享",
			"rawText": "线程全局共享",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "线程全局共享",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 1240,
			"versionNonce": 982551234,
			"isDeleted": false,
			"id": "5NMzPiw-I21ESwGdDcbVU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -877.6607113660518,
			"y": 803.3036598619371,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.3567426212769,
			"height": 568.5924359706604,
			"seed": 127614870,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "MJ51UCxdMtLXINbLZtnCI",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 662,
			"versionNonce": 1554250334,
			"isDeleted": false,
			"id": "06SLG2GbPorG6saCwjs5n",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -663.6083846868717,
			"y": 803.9680627669901,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 520.6025307774804,
			"height": 566.6293788873734,
			"seed": 1844761110,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Uev4mz0Z"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 436,
			"versionNonce": 729145986,
			"isDeleted": false,
			"id": "Uev4mz0Z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -413.30711929813145,
			"y": 1074.7827522106768,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 20,
			"height": 25,
			"seed": 721297238,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "堆",
			"rawText": "堆",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "06SLG2GbPorG6saCwjs5n",
			"originalText": "堆",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 450,
			"versionNonce": 1496383134,
			"isDeleted": false,
			"id": "LvI5QeWvxmCme6UNV2-sK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -875.2687207774368,
			"y": 1399.6379468651294,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.54194188007705,
			"height": 141.80591323416445,
			"seed": 736871574,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "fpjzSs28"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 387,
			"versionNonce": 1297760834,
			"isDeleted": false,
			"id": "fpjzSs28",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -832.9977498373983,
			"y": 1458.0409034822117,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 577946070,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "本地方法栈",
			"rawText": "本地方法栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "LvI5QeWvxmCme6UNV2-sK",
			"originalText": "本地方法栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 490,
			"versionNonce": 2115205854,
			"isDeleted": false,
			"id": "X6QL5LiL1iQsqA-ni6WMg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -660.9410619623297,
			"y": 1401.1667996105346,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 283.6118264683289,
			"height": 137.2733041353556,
			"seed": 1101534998,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 493,
			"versionNonce": 991734274,
			"isDeleted": false,
			"id": "P09L6W0anh6SXebGCZLCT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -353.37115882886815,
			"y": 1401.8143151960785,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 219.50778349945983,
			"height": 137.92081972089966,
			"seed": 302040150,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "I1KETiF8"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 410,
			"versionNonce": 299659038,
			"isDeleted": false,
			"id": "I1KETiF8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -273.61726707913823,
			"y": 1458.2747250565283,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 60,
			"height": 25,
			"seed": 1162987926,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "方法区",
			"rawText": "方法区",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "P09L6W0anh6SXebGCZLCT",
			"originalText": "方法区",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 384,
			"versionNonce": 1539054018,
			"isDeleted": false,
			"id": "7K1H7in4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -565.2669551323577,
			"y": 1465.4069680150008,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 181413590,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "程序计数器",
			"rawText": "程序计数器",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "程序计数器",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "arrow",
			"version": 3055,
			"versionNonce": 1627183966,
			"isDeleted": false,
			"id": "MJ51UCxdMtLXINbLZtnCI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -879.1650258015305,
			"y": 1022.7235789829215,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 297.7634199111561,
			"height": 20.708766935206086,
			"seed": 1409476118,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "arYaAqmiYux1UKtYtIkQk",
				"gap": 10.519184475520888,
				"focus": 0.4013293825724116
			},
			"endBinding": {
				"elementId": "ZM3wJ54T",
				"gap": 13.347759576450699,
				"focus": -0.6392042808282453
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-297.7634199111561,
					-20.708766935206086
				]
			]
		},
		{
			"type": "text",
			"version": 1482,
			"versionNonce": 1582797186,
			"isDeleted": false,
			"id": "ZM3wJ54T",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1508.4961759922624,
			"y": 979.0542494133897,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 318.219970703125,
			"height": 100,
			"seed": 1311355734,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "MJ51UCxdMtLXINbLZtnCI",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 引用类型在堆栈的地址\n- ......",
			"rawText": "- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 引用类型在堆栈的地址\n- ......",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "- 用于存储基本数据类型的数据\n- 存储方法在运行时产生的局部变量\n- 引用类型在堆栈的地址\n- ......",
			"lineHeight": 1.25,
			"baseline": 92
		},
		{
			"type": "rectangle",
			"version": 714,
			"versionNonce": 29736862,
			"isDeleted": false,
			"id": "jbu1ogz8uGBf1_tyR8hW7",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -875.606195016871,
			"y": 811.5796735831152,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 175.50313532422683,
			"height": 185.13370103601616,
			"seed": 17407050,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 516,
			"versionNonce": 908988738,
			"isDeleted": false,
			"id": "tOKmgcA8YWczEAYzj593d",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -876.2446199425557,
			"y": 1236.4695008830704,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 175.50313532422683,
			"height": 128.32487314029493,
			"seed": 1987267594,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 499,
			"versionNonce": 409476062,
			"isDeleted": false,
			"id": "YsM1nrE9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -790.9024639002673,
			"y": 1187.752653346352,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 2.852325439453125,
			"height": 39.05685953439251,
			"seed": 1435375306,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 10.41516254250467,
			"fontFamily": 1,
			"text": ".\n.\n.",
			"rawText": ".\n.\n.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": ".\n.\n.",
			"lineHeight": 1.25,
			"baseline": 35
		},
		{
			"type": "rectangle",
			"version": 439,
			"versionNonce": 379492610,
			"isDeleted": false,
			"id": "0obgubEhPf1lbajtFVFqc",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -868.410799268014,
			"y": 829.4717344174998,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 1595147158,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Sa9PIGkS"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 333,
			"versionNonce": 452259870,
			"isDeleted": false,
			"id": "Sa9PIGkS",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -836.7218436643609,
			"y": 834.4717344174998,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 100,
			"height": 25,
			"seed": 420161686,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "局部变量表",
			"rawText": "局部变量表",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0obgubEhPf1lbajtFVFqc",
			"originalText": "局部变量表",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 510,
			"versionNonce": 1864902850,
			"isDeleted": false,
			"id": "K4soXJ1yK93u3pAxpTJ9j",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -869.126609055753,
			"y": 865.3851719792518,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 303806026,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "IJLcJXt5"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 358431838,
			"isDeleted": false,
			"id": "IJLcJXt5",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -817.4376534520999,
			"y": 870.3851719792518,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 60,
			"height": 25,
			"seed": 1565262934,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "操作栈",
			"rawText": "操作栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "K4soXJ1yK93u3pAxpTJ9j",
			"originalText": "操作栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 653,
			"versionNonce": 1734983810,
			"isDeleted": false,
			"id": "kr6_dqqYGufrCvttzz-Dt",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -870.0266559341181,
			"y": 901.2292955289762,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 1973472842,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "id6YihwV"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 499,
			"versionNonce": 1836187806,
			"isDeleted": false,
			"id": "id6YihwV",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -828.337700330465,
			"y": 906.2292955289762,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 80,
			"height": 25,
			"seed": 163869962,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "动态链接",
			"rawText": "动态链接",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "kr6_dqqYGufrCvttzz-Dt",
			"originalText": "动态链接",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 786,
			"versionNonce": 1528979522,
			"isDeleted": false,
			"id": "wLZ7MhHVdXQtILKSojNXi",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -869.2847018136937,
			"y": 937.6116163833468,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 50,
			"seed": 281365450,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "eoeUwCVl"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 635,
			"versionNonce": 652491998,
			"isDeleted": false,
			"id": "eoeUwCVl",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -825.6197406558414,
			"y": 942.6116163833468,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 76.04798889160156,
			"height": 40,
			"seed": 377307786,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "方法出口\n(返回地址)",
			"rawText": "方法出口\n(返回地址)",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "wLZ7MhHVdXQtILKSojNXi",
			"originalText": "方法出口\n(返回地址)",
			"lineHeight": 1.25,
			"baseline": 34
		},
		{
			"type": "freedraw",
			"version": 310,
			"versionNonce": 1446053890,
			"isDeleted": false,
			"id": "5SP1A-D8yO5xpFFy8Bfat",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -891.6421211955111,
			"y": 829.5631376880634,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#a5d8ff",
			"width": 40.43740486560648,
			"height": 152.34557181926175,
			"seed": 2006107018,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.47020238215827703,
					0
				],
				[
					-0.9404047643164404,
					0
				],
				[
					-1.4106071464746037,
					0
				],
				[
					-2.351011910791158,
					0
				],
				[
					-3.2914166751074845,
					0
				],
				[
					-3.7616190572657615,
					0
				],
				[
					-4.702023821582088,
					0
				],
				[
					-5.172226203740365,
					0
				],
				[
					-6.112630968056806,
					0
				],
				[
					-6.582833350214969,
					0
				],
				[
					-7.523238114531523,
					0
				],
				[
					-7.993440496689686,
					0
				],
				[
					-8.46364287884785,
					0
				],
				[
					-8.933845261006127,
					0
				],
				[
					-9.874250025322453,
					0.47020238215827703
				],
				[
					-10.34445240748073,
					0.9404047643164404
				],
				[
					-11.28485717179717,
					0.9404047643164404
				],
				[
					-11.755059553955334,
					1.4106071464746037
				],
				[
					-13.165666700430052,
					1.8808095286328808
				],
				[
					-14.106071464746492,
					2.821214292949321
				],
				[
					-15.516678611221096,
					3.2914166751074845
				],
				[
					-16.457083375537536,
					3.7616190572657615
				],
				[
					-16.9272857576957,
					4.231821439423925
				],
				[
					-17.397488139853976,
					4.702023821582088
				],
				[
					-17.867690522012253,
					5.172226203740365
				],
				[
					-18.337892904170417,
					5.642428585898642
				],
				[
					-18.337892904170417,
					6.112630968056806
				],
				[
					-18.337892904170417,
					6.582833350214969
				],
				[
					-18.80809528632858,
					7.053035732373246
				],
				[
					-18.80809528632858,
					7.523238114531409
				],
				[
					-19.278297668486857,
					8.46364287884785
				],
				[
					-19.278297668486857,
					9.40404764316429
				],
				[
					-19.278297668486857,
					10.34445240748073
				],
				[
					-19.278297668486857,
					10.814654789639008
				],
				[
					-19.278297668486857,
					12.225261936113611
				],
				[
					-19.278297668486857,
					13.165666700430052
				],
				[
					-19.278297668486857,
					14.576273846904655
				],
				[
					-18.80809528632858,
					15.516678611221096
				],
				[
					-18.337892904170417,
					16.9272857576957
				],
				[
					-17.867690522012253,
					18.337892904170417
				],
				[
					-17.397488139853976,
					19.278297668486857
				],
				[
					-16.457083375537536,
					20.68890481496146
				],
				[
					-15.516678611221096,
					22.099511961436065
				],
				[
					-14.576273846904769,
					23.03991672575262
				],
				[
					-13.635869082588215,
					23.980321490068945
				],
				[
					-12.695464318271888,
					25.390928636543663
				],
				[
					-11.28485717179717,
					26.801535783018267
				],
				[
					-10.814654789639008,
					27.741940547334707
				],
				[
					-9.404047643164404,
					29.15254769380931
				],
				[
					-8.46364287884785,
					30.09295245812575
				],
				[
					-7.523238114531523,
					31.50355960460047
				],
				[
					-7.053035732373246,
					32.443964368916795
				],
				[
					-6.582833350214969,
					33.38436913323335
				],
				[
					-5.642428585898642,
					34.79497627970795
				],
				[
					-5.172226203740365,
					35.73538104402439
				],
				[
					-4.2318214394240385,
					36.675785808340834
				],
				[
					-3.7616190572657615,
					37.61619057265716
				],
				[
					-2.821214292949321,
					38.556595336973714
				],
				[
					-2.351011910791158,
					39.49700010129004
				],
				[
					-1.8808095286328808,
					40.43740486560648
				],
				[
					-1.8808095286328808,
					41.37780962992292
				],
				[
					-1.4106071464746037,
					41.8480120120812
				],
				[
					-0.9404047643164404,
					42.31821439423936
				],
				[
					-0.9404047643164404,
					42.788416776397526
				],
				[
					-0.9404047643164404,
					43.72882154071408
				],
				[
					-0.9404047643164404,
					44.19902392287224
				],
				[
					-0.9404047643164404,
					45.13942868718868
				],
				[
					-0.9404047643164404,
					45.60963106934685
				],
				[
					-0.9404047643164404,
					46.55003583366329
				],
				[
					-1.8808095286328808,
					47.49044059797973
				],
				[
					-2.351011910791158,
					47.96064298013789
				],
				[
					-3.2914166751074845,
					48.901047744454445
				],
				[
					-4.2318214394240385,
					49.84145250877077
				],
				[
					-5.642428585898642,
					50.78185727308721
				],
				[
					-7.053035732373246,
					51.25205965524549
				],
				[
					-8.933845261006127,
					52.19246441956193
				],
				[
					-10.814654789639008,
					52.66266680172009
				],
				[
					-12.695464318271888,
					53.132869183878256
				],
				[
					-14.576273846904769,
					53.60307156603653
				],
				[
					-16.9272857576957,
					54.07327394819481
				],
				[
					-18.337892904170417,
					54.54347633035297
				],
				[
					-20.218702432803298,
					55.01367871251114
				],
				[
					-21.6293095792779,
					55.483881094669414
				],
				[
					-23.03991672575262,
					55.483881094669414
				],
				[
					-24.450523872227222,
					55.95408347682758
				],
				[
					-25.390928636543663,
					55.95408347682758
				],
				[
					-25.861131018701826,
					55.95408347682758
				],
				[
					-26.331333400860103,
					56.424285858985854
				],
				[
					-26.801535783018267,
					56.424285858985854
				],
				[
					-26.801535783018267,
					56.89448824114402
				],
				[
					-26.801535783018267,
					57.364690623302295
				],
				[
					-26.331333400860103,
					58.305095387618735
				],
				[
					-25.861131018701826,
					59.245500151935175
				],
				[
					-24.9207262543855,
					60.65610729840978
				],
				[
					-23.03991672575262,
					62.06671444488438
				],
				[
					-21.159107197119738,
					63.947523973517264
				],
				[
					-19.748500050645134,
					65.35813111999187
				],
				[
					-18.337892904170417,
					66.76873826646658
				],
				[
					-16.9272857576957,
					67.70914303078303
				],
				[
					-15.516678611221096,
					69.11975017725763
				],
				[
					-14.576273846904769,
					69.5899525594159
				],
				[
					-13.635869082588215,
					70.53035732373223
				],
				[
					-12.695464318271888,
					71.47076208804879
				],
				[
					-12.695464318271888,
					71.94096447020695
				],
				[
					-12.225261936113611,
					72.41116685236511
				],
				[
					-12.225261936113611,
					72.88136923452339
				],
				[
					-12.225261936113611,
					73.35157161668155
				],
				[
					-12.225261936113611,
					73.82177399883983
				],
				[
					-11.755059553955334,
					74.291976380998
				],
				[
					-11.755059553955334,
					75.23238114531443
				],
				[
					-11.28485717179717,
					76.64298829178915
				],
				[
					-11.28485717179717,
					77.58339305610548
				],
				[
					-11.28485717179717,
					78.9940002025802
				],
				[
					-11.28485717179717,
					79.93440496689664
				],
				[
					-11.28485717179717,
					81.34501211337124
				],
				[
					-11.28485717179717,
					82.75561925984584
				],
				[
					-11.28485717179717,
					83.69602402416228
				],
				[
					-11.28485717179717,
					85.106631170637
				],
				[
					-10.814654789639008,
					86.98744069926988
				],
				[
					-10.814654789639008,
					88.39804784574449
				],
				[
					-10.814654789639008,
					91.68946452085197
				],
				[
					-10.814654789639008,
					93.10007166732657
				],
				[
					-11.28485717179717,
					94.98088119595945
				],
				[
					-11.28485717179717,
					96.86169072459234
				],
				[
					-11.28485717179717,
					98.27229787106694
				],
				[
					-11.28485717179717,
					100.15310739969982
				],
				[
					-11.28485717179717,
					101.56371454617454
				],
				[
					-11.28485717179717,
					103.4445240748073
				],
				[
					-11.28485717179717,
					104.38492883912386
				],
				[
					-11.28485717179717,
					105.79553598559846
				],
				[
					-11.28485717179717,
					106.7359407499149
				],
				[
					-11.28485717179717,
					108.1465478963895
				],
				[
					-11.28485717179717,
					109.55715504286422
				],
				[
					-11.28485717179717,
					110.96776218933883
				],
				[
					-11.28485717179717,
					112.37836933581343
				],
				[
					-11.28485717179717,
					113.78897648228804
				],
				[
					-11.28485717179717,
					114.72938124660459
				],
				[
					-11.28485717179717,
					115.66978601092092
				],
				[
					-11.28485717179717,
					117.5505955395538
				],
				[
					-11.28485717179717,
					118.9612026860284
				],
				[
					-11.28485717179717,
					120.84201221466128
				],
				[
					-11.28485717179717,
					122.72282174329416
				],
				[
					-11.28485717179717,
					124.60363127192704
				],
				[
					-11.28485717179717,
					126.48444080055992
				],
				[
					-11.28485717179717,
					128.3652503291928
				],
				[
					-11.28485717179717,
					130.71626223998385
				],
				[
					-11.28485717179717,
					132.12686938645857
				],
				[
					-10.814654789639008,
					134.4778812972496
				],
				[
					-10.814654789639008,
					135.8884884437242
				],
				[
					-10.814654789639008,
					137.7692979723571
				],
				[
					-10.34445240748073,
					139.1799051188317
				],
				[
					-9.874250025322453,
					140.12030988314814
				],
				[
					-9.874250025322453,
					141.06071464746458
				],
				[
					-9.404047643164404,
					142.4713217939393
				],
				[
					-8.933845261006127,
					142.94152417609746
				],
				[
					-8.933845261006127,
					143.41172655825562
				],
				[
					-8.46364287884785,
					144.35213132257206
				],
				[
					-7.523238114531523,
					145.2925360868885
				],
				[
					-7.053035732373246,
					146.23294085120494
				],
				[
					-6.112630968056806,
					147.17334561552138
				],
				[
					-5.642428585898642,
					147.64354799767966
				],
				[
					-4.702023821582088,
					148.583952761996
				],
				[
					-3.7616190572657615,
					149.05415514415427
				],
				[
					-2.351011910791158,
					149.9945599084706
				],
				[
					-0.9404047643164404,
					150.46476229062887
				],
				[
					1.4106071464746037,
					151.4051670549453
				],
				[
					5.642428585898642,
					152.34557181926175
				],
				[
					6.112630968056806,
					152.34557181926175
				],
				[
					7.993440496689573,
					152.34557181926175
				],
				[
					9.874250025322453,
					152.34557181926175
				],
				[
					11.755059553955334,
					151.87536943710347
				],
				[
					13.635869082588215,
					150.93496467278715
				],
				[
					13.635869082588215,
					150.93496467278715
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 460,
			"versionNonce": 658829598,
			"isDeleted": false,
			"id": "33V151zf",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1213.787108675566,
			"y": 875.2781674787782,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffec99",
			"width": 272,
			"height": 20,
			"seed": 772329674,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "栈帧：表达方法和方法之间的调用关系",
			"rawText": "栈帧：表达方法和方法之间的调用关系",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "栈帧：表达方法和方法之间的调用关系",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 455,
			"versionNonce": 278181826,
			"isDeleted": false,
			"id": "Gys6v2Of",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1514.1568628758366,
			"y": 1193.4367845288132,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 400,
			"height": 50,
			"seed": 2020696138,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "kQJvF1hQXM5dQ4XFRqUj6",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "- 存着想要调用方法等地址，\n  让你在需要调用的时候可以很方便的找到它",
			"rawText": "- 存着想要调用方法等地址，\n  让你在需要调用的时候可以很方便的找到它",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "- 存着想要调用方法等地址，\n  让你在需要调用的时候可以很方便的找到它",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "text",
			"version": 456,
			"versionNonce": 2047155550,
			"isDeleted": false,
			"id": "YNs9mKHv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1508.1795112232892,
			"y": 1305.7425890631253,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 278.219970703125,
			"height": 100,
			"seed": 710551946,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "z1N57G9G_Jy6qRRTPD5Aw",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "- 记录方法结束后，\n- 应该继续运行的下一个栈帧的\n- 哪一行代码，哪一个方法。\n ",
			"rawText": "- 记录方法结束后，\n- 应该继续运行的下一个栈帧的\n- 哪一行代码，哪一个方法。\n ",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "- 记录方法结束后，\n- 应该继续运行的下一个栈帧的\n- 哪一行代码，哪一个方法。\n ",
			"lineHeight": 1.25,
			"baseline": 92
		},
		{
			"type": "rectangle",
			"version": 795,
			"versionNonce": 1785491330,
			"isDeleted": false,
			"id": "9NrhhhddTtcJLlLAyWXVA",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -875.8412370748666,
			"y": 1003.0477130835181,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 175.50313532422683,
			"height": 185.13370103601616,
			"seed": 1767822166,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 519,
			"versionNonce": 343261598,
			"isDeleted": false,
			"id": "arYaAqmiYux1UKtYtIkQk",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -868.6458413260096,
			"y": 1020.9397739179028,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 1142290582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "VnhmfDo5"
				},
				{
					"id": "MJ51UCxdMtLXINbLZtnCI",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 412,
			"versionNonce": 1744252738,
			"isDeleted": false,
			"id": "VnhmfDo5",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -836.9568857223566,
			"y": 1025.9397739179028,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 100,
			"height": 25,
			"seed": 523662806,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "局部变量表",
			"rawText": "局部变量表",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "arYaAqmiYux1UKtYtIkQk",
			"originalText": "局部变量表",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 595,
			"versionNonce": 432528862,
			"isDeleted": false,
			"id": "L_eSy7YYUhB-iWvN5ovEf",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -869.3616511137487,
			"y": 1056.8532114796546,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 1406487318,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "4eJ8OdeC"
				},
				{
					"id": "Iee-O69jD3EicpTlogM0r",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 410,
			"versionNonce": 764671746,
			"isDeleted": false,
			"id": "4eJ8OdeC",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -817.6726955100957,
			"y": 1061.8532114796546,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 60,
			"height": 25,
			"seed": 1348958294,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434403,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "操作栈",
			"rawText": "操作栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "L_eSy7YYUhB-iWvN5ovEf",
			"originalText": "操作栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 735,
			"versionNonce": 520909342,
			"isDeleted": false,
			"id": "0LsEOaS5Z6L-mp_b3u_kp",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -870.2616979921139,
			"y": 1092.697335029379,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 35,
			"seed": 1824652694,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "yTWFQuoH"
				},
				{
					"id": "kQJvF1hQXM5dQ4XFRqUj6",
					"type": "arrow"
				}
			],
			"updated": 1710286434403,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 580,
			"versionNonce": 2076296898,
			"isDeleted": false,
			"id": "yTWFQuoH",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -828.5727423884608,
			"y": 1097.697335029379,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 80,
			"height": 25,
			"seed": 1041881814,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "动态链接",
			"rawText": "动态链接",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "0LsEOaS5Z6L-mp_b3u_kp",
			"originalText": "动态链接",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 870,
			"versionNonce": 1865711198,
			"isDeleted": false,
			"id": "nr7xca8Oifk0tKEAt5wwY",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -869.5197438716895,
			"y": 1129.0796558837499,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 163.37791120730617,
			"height": 50,
			"seed": 1795428374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "XKQylxD4"
				},
				{
					"id": "z1N57G9G_Jy6qRRTPD5Aw",
					"type": "arrow"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 716,
			"versionNonce": 723492482,
			"isDeleted": false,
			"id": "XKQylxD4",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -825.8547827138372,
			"y": 1134.0796558837499,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 76.04798889160156,
			"height": 40,
			"seed": 2138414422,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "方法出口\n(返回地址)",
			"rawText": "方法出口\n(返回地址)",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nr7xca8Oifk0tKEAt5wwY",
			"originalText": "方法出口\n(返回地址)",
			"lineHeight": 1.25,
			"baseline": 34
		},
		{
			"type": "arrow",
			"version": 1166,
			"versionNonce": 1326514846,
			"isDeleted": false,
			"id": "Iee-O69jD3EicpTlogM0r",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -880.5178250467391,
			"y": 1068.1449602806638,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 203.81310703134682,
			"height": 50.28795298465593,
			"seed": 1709607638,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "L_eSy7YYUhB-iWvN5ovEf",
				"gap": 11.156173932990328,
				"focus": 0.7732308340993975
			},
			"endBinding": {
				"elementId": "g0RuUa6d",
				"gap": 12.208985639330422,
				"focus": 0.8554682754404002
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-203.81310703134682,
					50.28795298465593
				]
			]
		},
		{
			"type": "text",
			"version": 605,
			"versionNonce": 678198850,
			"isDeleted": false,
			"id": "g0RuUa6d",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1514.7598884205413,
			"y": 1105.709048649358,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 418.219970703125,
			"height": 25,
			"seed": 224457686,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "Iee-O69jD3EicpTlogM0r",
					"type": "arrow"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "- 存放过程的中间计算结果，是临时的存储空间",
			"rawText": "- 存放过程的中间计算结果，是临时的存储空间",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "- 存放过程的中间计算结果，是临时的存储空间",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "arrow",
			"version": 451,
			"versionNonce": 1095958238,
			"isDeleted": false,
			"id": "kQJvF1hQXM5dQ4XFRqUj6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -879.1514368632313,
			"y": 1110.6539255813077,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 226.1950297499477,
			"height": 95.85485030372683,
			"seed": 1313319818,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "0LsEOaS5Z6L-mp_b3u_kp",
				"gap": 8.889738871117402,
				"focus": 0.7277419787817522
			},
			"endBinding": {
				"elementId": "Gys6v2Of",
				"gap": 8.810396262657605,
				"focus": 0.6975566166791758
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-226.1950297499477,
					95.85485030372683
				]
			]
		},
		{
			"type": "arrow",
			"version": 462,
			"versionNonce": 1887921666,
			"isDeleted": false,
			"id": "z1N57G9G_Jy6qRRTPD5Aw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -878.2357044130712,
			"y": 1171.4761508636552,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 339.0299141974141,
			"height": 178.19366864365657,
			"seed": 1678530582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "nr7xca8Oifk0tKEAt5wwY",
				"gap": 8.715960541381719,
				"focus": 0.4433640878452864
			},
			"endBinding": {
				"elementId": "YNs9mKHv",
				"gap": 12.69392190967892,
				"focus": 0.598745472426715
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-339.0299141974141,
					178.19366864365657
				]
			]
		},
		{
			"type": "text",
			"version": 625,
			"versionNonce": 1250652958,
			"isDeleted": false,
			"id": "ITLeUqZ8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1426.367870015815,
			"y": 2450.45020391605,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffec99",
			"width": 880,
			"height": 50,
			"seed": 730635990,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "可以简单的理解为：每个栈帧就是对应的一个方法，调用方法时，这个方法会转换成栈帧的结构，\n栈帧存储了方法的局部变量表、 操作数栈、 动态连接和方法返回地址等信息方法，然后被压入栈中",
			"rawText": "可以简单的理解为：每个栈帧就是对应的一个方法，调用方法时，这个方法会转换成栈帧的结构，\n栈帧存储了方法的局部变量表、 操作数栈、 动态连接和方法返回地址等信息方法，然后被压入栈中",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "可以简单的理解为：每个栈帧就是对应的一个方法，调用方法时，这个方法会转换成栈帧的结构，\n栈帧存储了方法的局部变量表、 操作数栈、 动态连接和方法返回地址等信息方法，然后被压入栈中",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "text",
			"version": 523,
			"versionNonce": 208623042,
			"isDeleted": false,
			"id": "kyitDdO8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1459.07917209373,
			"y": 1678.7518087827302,
			"strokeColor": "#1971c2",
			"backgroundColor": "#ffec99",
			"width": 300,
			"height": 600,
			"seed": 2063743510,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "想象一下你用美团点外卖点场景：\n- 打开美团首页\n- 点击外卖板块\n- 点击肯德基\n\n\n\n\n\n\n\n\n\n- 不想要吃肯德基了，点击返回\n  于是按照后入先出的规则，\n  肯德基()出栈了\n\n\n\n\n\n\n- 点击必胜客\n- ......",
			"rawText": "想象一下你用美团点外卖点场景：\n- 打开美团首页\n- 点击外卖板块\n- 点击肯德基\n\n\n\n\n\n\n\n\n\n- 不想要吃肯德基了，点击返回\n  于是按照后入先出的规则，\n  肯德基()出栈了\n\n\n\n\n\n\n- 点击必胜客\n- ......",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "想象一下你用美团点外卖点场景：\n- 打开美团首页\n- 点击外卖板块\n- 点击肯德基\n\n\n\n\n\n\n\n\n\n- 不想要吃肯德基了，点击返回\n  于是按照后入先出的规则，\n  肯德基()出栈了\n\n\n\n\n\n\n- 点击必胜客\n- ......",
			"lineHeight": 1.25,
			"baseline": 592
		},
		{
			"type": "rectangle",
			"version": 754,
			"versionNonce": 892034910,
			"isDeleted": false,
			"id": "uePjLNUyl_5vmGRidOe0_",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1077.7850777704132,
			"y": 1666.511953115348,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 99.43117068506487,
			"height": 179.1238788079774,
			"seed": 1617535254,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 298,
			"versionNonce": 222514562,
			"isDeleted": false,
			"id": "ISCd3qa-t5u-RsG3PSoiY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1076.1024538789225,
			"y": 1805.3382853002188,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 1732131658,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "mwnJcfHu"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 271,
			"versionNonce": 1434698654,
			"isDeleted": false,
			"id": "mwnJcfHu",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1056.2292124929218,
			"y": 1810.3382853002188,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 1579792522,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "首页()",
			"rawText": "首页()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ISCd3qa-t5u-RsG3PSoiY",
			"originalText": "首页()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 450,
			"versionNonce": 138562882,
			"isDeleted": false,
			"id": "-xOHR160WjTxDWAYsxwJq",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1077.2048942432564,
			"y": 1729.6933371363996,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 93.41905338782863,
			"height": 35,
			"seed": 1333238602,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "znso82cE"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 440,
			"versionNonce": 1304797150,
			"isDeleted": false,
			"id": "znso82cE",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1068.0253586992444,
			"y": 1734.6933371363996,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 75.05998229980469,
			"height": 25,
			"seed": 2033820170,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "肯德基()",
			"rawText": "肯德基()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-xOHR160WjTxDWAYsxwJq",
			"originalText": "肯德基()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 841,
			"versionNonce": 315315458,
			"isDeleted": false,
			"id": "tBHf241NnDPN76gXSi6KC",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1078.4332050368841,
			"y": 1960.7798978078713,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 99.43117068506487,
			"height": 137.19131504815033,
			"seed": 1454142550,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 465,
			"versionNonce": 1375859742,
			"isDeleted": false,
			"id": "9EvnepCCaFz9EZMOxp8w8",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1077.1459648684722,
			"y": 2026.3599795841733,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 1493662102,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "W9kzRzuj"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 433,
			"versionNonce": 1046308034,
			"isDeleted": false,
			"id": "W9kzRzuj",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1057.2727234824715,
			"y": 2031.3599795841733,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 2085607126,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "外卖()",
			"rawText": "外卖()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9EvnepCCaFz9EZMOxp8w8",
			"originalText": "外卖()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 903,
			"versionNonce": 1814675550,
			"isDeleted": false,
			"id": "tVNNxTfX7roAFs_8ttW_1",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1078.8607917788274,
			"y": 2140.665174479038,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 99.43117068506487,
			"height": 158.2822424486967,
			"seed": 570637846,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 605,
			"versionNonce": 345472130,
			"isDeleted": false,
			"id": "ODuhXucXqw4yfDS7BhSKY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1074.5450142666705,
			"y": 2219.2138006948094,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 710871894,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "hJZCaLNZ"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 573,
			"versionNonce": 1074660510,
			"isDeleted": false,
			"id": "hJZCaLNZ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1054.6717728806698,
			"y": 2224.2138006948094,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 1750020246,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "外卖()",
			"rawText": "外卖()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ODuhXucXqw4yfDS7BhSKY",
			"originalText": "外卖()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 663,
			"versionNonce": 322477122,
			"isDeleted": false,
			"id": "FGhs_nqC95aFjp7wxhndd",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1077.6351584718955,
			"y": 2180.461176262968,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 454366602,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "UUElDfJi"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 669,
			"versionNonce": 1331675358,
			"isDeleted": false,
			"id": "UUElDfJi",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1067.7619170858948,
			"y": 2185.461176262968,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 75.05998229980469,
			"height": 25,
			"seed": 1605227594,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "必胜客()",
			"rawText": "必胜客()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "FGhs_nqC95aFjp7wxhndd",
			"originalText": "必胜客()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 692,
			"versionNonce": 673170434,
			"isDeleted": false,
			"id": "n6Nzyu89",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -926.4917875292862,
			"y": 1836.027173092393,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 89.46565246582031,
			"height": 85.61596951466895,
			"seed": 968547222,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 11.41546260195586,
			"fontFamily": 1,
			"text": "void 首页() {\n    print(\"跑腿\");\n    print(\"外卖\");\n    print(\"买药\");\n    ......\n}",
			"rawText": "void 首页() {\n    print(\"跑腿\");\n    print(\"外卖\");\n    print(\"买药\");\n    ......\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void 首页() {\n    print(\"跑腿\");\n    print(\"外卖\");\n    print(\"买药\");\n    ......\n}",
			"lineHeight": 1.25,
			"baseline": 81
		},
		{
			"type": "text",
			"version": 887,
			"versionNonce": 1034941726,
			"isDeleted": false,
			"id": "am5VwEqr",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -923.4923452581994,
			"y": 1633.6507595957125,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 100.33372497558594,
			"height": 108.21896407072131,
			"seed": 127811274,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 10.821896407072131,
			"fontFamily": 1,
			"text": "void 肯德基() {\nint 可乐数量 = 100;\nint 炸鸡数量 = 100;\n    print(\"可乐\");\n    print(\"炸鸡\");\n    print(\"汉堡\");\n    ......\n}",
			"rawText": "void 肯德基() {\nint 可乐数量 = 100;\nint 炸鸡数量 = 100;\n    print(\"可乐\");\n    print(\"炸鸡\");\n    print(\"汉堡\");\n    ......\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void 肯德基() {\nint 可乐数量 = 100;\nint 炸鸡数量 = 100;\n    print(\"可乐\");\n    print(\"炸鸡\");\n    print(\"汉堡\");\n    ......\n}",
			"lineHeight": 1.25,
			"baseline": 104
		},
		{
			"type": "text",
			"version": 973,
			"versionNonce": 759952322,
			"isDeleted": false,
			"id": "W6w2bQcX",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -922.1294359957677,
			"y": 2165.7646854185714,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 153.6875762939453,
			"height": 114.87319591537184,
			"seed": 301430282,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 13.128365247471066,
			"fontFamily": 1,
			"text": "void 必胜客() {\n    int 雪碧数量 = 100;\n    int 披萨数量 = 200;\n    print(\"雪碧\");\n    print(\"披萨\");\n    ......\n}",
			"rawText": "void 必胜客() {\n    int 雪碧数量 = 100;\n    int 披萨数量 = 200;\n    print(\"雪碧\");\n    print(\"披萨\");\n    ......\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void 必胜客() {\n    int 雪碧数量 = 100;\n    int 披萨数量 = 200;\n    print(\"雪碧\");\n    print(\"披萨\");\n    ......\n}",
			"lineHeight": 1.25,
			"baseline": 109
		},
		{
			"type": "text",
			"version": 950,
			"versionNonce": 342860126,
			"isDeleted": false,
			"id": "OsDy9kJs",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -926.6062183203121,
			"y": 1742.8694431003582,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 100.87564086914062,
			"height": 85.61596951466895,
			"seed": 868059402,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 11.41546260195586,
			"fontFamily": 1,
			"text": "void 外卖() {\n    print(\"肯德基\");\n    print(\"必胜客\");\n    print(\"汉堡王\");\n    ......\n}",
			"rawText": "void 外卖() {\n    print(\"肯德基\");\n    print(\"必胜客\");\n    print(\"汉堡王\");\n    ......\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "void 外卖() {\n    print(\"肯德基\");\n    print(\"必胜客\");\n    print(\"汉堡王\");\n    ......\n}",
			"lineHeight": 1.25,
			"baseline": 81
		},
		{
			"type": "rectangle",
			"version": 362,
			"versionNonce": 1692150658,
			"isDeleted": false,
			"id": "uwpNADIY4cK4w9MU_3WRx",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1076.7205566048087,
			"y": 1769.0535858995502,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 1250231510,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "DtCEbVzN"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 346,
			"versionNonce": 116376990,
			"isDeleted": false,
			"id": "DtCEbVzN",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1056.847315218808,
			"y": 1774.0535858995502,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 1417280022,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "外卖()",
			"rawText": "外卖()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "uwpNADIY4cK4w9MU_3WRx",
			"originalText": "外卖()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "freedraw",
			"version": 284,
			"versionNonce": 1963944770,
			"isDeleted": false,
			"id": "8LfABn-8sVZCz8Xb_su2D",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1308.2428408917535,
			"y": 1709.4839433723093,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 23.718215478344973,
			"height": 62.05347072822792,
			"seed": 261531606,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.2757932032363897,
					0
				],
				[
					0.8273796097096238,
					0
				],
				[
					1.1031728129462408,
					0.27579320323661705
				],
				[
					1.9305524226558646,
					0.27579320323661705
				],
				[
					2.4821388291290987,
					0.27579320323661705
				],
				[
					3.3095184388387224,
					0.5515864064732341
				],
				[
					4.412691251784963,
					0.5515864064732341
				],
				[
					5.240070861494587,
					0.8273796097098511
				],
				[
					6.343243674441055,
					0.8273796097098511
				],
				[
					6.894830080914062,
					0.8273796097098511
				],
				[
					7.722209690623913,
					1.1031728129462408
				],
				[
					8.27379609709692,
					1.1031728129462408
				],
				[
					8.549589300333537,
					1.1031728129462408
				],
				[
					8.825382503570154,
					1.3789660161828579
				],
				[
					9.101175706806544,
					1.3789660161828579
				],
				[
					9.101175706806544,
					1.654759219419475
				],
				[
					9.101175706806544,
					1.930552422656092
				],
				[
					9.37696891004316,
					2.4821388291290987
				],
				[
					9.37696891004316,
					2.7579320323657157
				],
				[
					9.37696891004316,
					3.0337252356023328
				],
				[
					9.37696891004316,
					3.585311642075567
				],
				[
					9.652762113279778,
					4.412691251785191
				],
				[
					9.652762113279778,
					5.240070861494814
				],
				[
					9.652762113279778,
					5.7916572679680485
				],
				[
					9.652762113279778,
					6.343243674441055
				],
				[
					9.652762113279778,
					6.894830080914289
				],
				[
					9.652762113279778,
					7.446416487387296
				],
				[
					9.652762113279778,
					7.99800289386053
				],
				[
					9.652762113279778,
					8.549589300333764
				],
				[
					9.652762113279778,
					9.376968910043388
				],
				[
					9.652762113279778,
					10.204348519753012
				],
				[
					9.652762113279778,
					10.755934926226246
				],
				[
					9.652762113279778,
					11.307521332699253
				],
				[
					9.652762113279778,
					11.859107739172487
				],
				[
					9.652762113279778,
					12.68648734888211
				],
				[
					9.652762113279778,
					13.238073755355344
				],
				[
					9.652762113279778,
					13.789660161828351
				],
				[
					9.652762113279778,
					14.341246568301585
				],
				[
					9.652762113279778,
					14.89283297477482
				],
				[
					9.652762113279778,
					15.720212584484443
				],
				[
					9.652762113279778,
					16.271798990957677
				],
				[
					9.652762113279778,
					16.823385397430684
				],
				[
					9.652762113279778,
					17.374971803903918
				],
				[
					9.652762113279778,
					17.926558210376925
				],
				[
					9.652762113279778,
					18.47814461685016
				],
				[
					9.652762113279778,
					19.029731023323166
				],
				[
					9.652762113279778,
					19.5813174297964
				],
				[
					9.652762113279778,
					20.132903836269634
				],
				[
					9.652762113279778,
					20.68449024274264
				],
				[
					9.652762113279778,
					20.960283445979258
				],
				[
					9.652762113279778,
					21.511869852452264
				],
				[
					9.652762113279778,
					21.78766305568888
				],
				[
					9.652762113279778,
					22.339249462162115
				],
				[
					9.652762113279778,
					22.615042665398732
				],
				[
					9.652762113279778,
					23.16662907187174
				],
				[
					9.652762113279778,
					23.442422275108356
				],
				[
					9.652762113279778,
					23.99400868158159
				],
				[
					9.652762113279778,
					24.26980188481798
				],
				[
					9.652762113279778,
					24.545595088054597
				],
				[
					9.652762113279778,
					24.821388291291214
				],
				[
					9.652762113279778,
					25.09718149452783
				],
				[
					9.652762113279778,
					25.37297469776422
				],
				[
					9.652762113279778,
					25.648767901000838
				],
				[
					9.928555316516395,
					25.648767901000838
				],
				[
					10.204348519753012,
					25.924561104237455
				],
				[
					10.480141722989401,
					26.200354307474072
				],
				[
					10.755934926226018,
					26.47614751071069
				],
				[
					11.031728129462635,
					26.75194071394708
				],
				[
					11.307521332699253,
					26.75194071394708
				],
				[
					11.583314535935642,
					27.027733917183696
				],
				[
					12.134900942408876,
					27.303527120420313
				],
				[
					12.410694145645493,
					27.57932032365693
				],
				[
					12.9622805521185,
					27.85511352689332
				],
				[
					13.238073755355117,
					28.130906730129936
				],
				[
					13.789660161828351,
					28.130906730129936
				],
				[
					14.065453365064968,
					28.406699933366554
				],
				[
					14.341246568301358,
					28.68249313660317
				],
				[
					14.617039771537975,
					28.68249313660317
				],
				[
					14.892832974774592,
					28.958286339839788
				],
				[
					15.168626178011209,
					28.958286339839788
				],
				[
					15.168626178011209,
					29.234079543076177
				],
				[
					15.444419381247826,
					29.509872746312794
				],
				[
					15.720212584484216,
					29.509872746312794
				],
				[
					15.996005787720833,
					29.78566594954941
				],
				[
					15.996005787720833,
					30.06145915278603
				],
				[
					16.27179899095745,
					30.06145915278603
				],
				[
					16.27179899095745,
					30.337252356022645
				],
				[
					16.27179899095745,
					30.613045559259035
				],
				[
					16.27179899095745,
					30.888838762495652
				],
				[
					16.547592194194067,
					31.16463196573227
				],
				[
					16.547592194194067,
					31.440425168968886
				],
				[
					16.547592194194067,
					31.716218372205503
				],
				[
					16.547592194194067,
					31.992011575441893
				],
				[
					16.547592194194067,
					32.26780477867851
				],
				[
					16.547592194194067,
					32.54359798191513
				],
				[
					16.27179899095745,
					32.819391185151744
				],
				[
					16.27179899095745,
					33.095184388388134
				],
				[
					15.996005787720833,
					33.37097759162475
				],
				[
					15.720212584484216,
					33.64677079486137
				],
				[
					15.444419381247826,
					33.922563998097985
				],
				[
					15.168626178011209,
					34.198357201334375
				],
				[
					14.892832974774592,
					34.198357201334375
				],
				[
					14.617039771537975,
					34.47415040457099
				],
				[
					14.341246568301358,
					34.47415040457099
				],
				[
					14.065453365064968,
					34.74994360780761
				],
				[
					13.789660161828351,
					34.74994360780761
				],
				[
					13.513866958591734,
					35.025736811044226
				],
				[
					13.238073755355117,
					35.025736811044226
				],
				[
					12.9622805521185,
					35.30153001428084
				],
				[
					12.68648734888211,
					35.30153001428084
				],
				[
					12.410694145645493,
					35.57732321751723
				],
				[
					12.134900942408876,
					35.57732321751723
				],
				[
					11.85910773917226,
					35.85311642075385
				],
				[
					11.307521332699253,
					35.85311642075385
				],
				[
					11.031728129462635,
					36.12890962399047
				],
				[
					10.755934926226018,
					36.12890962399047
				],
				[
					10.480141722989401,
					36.404702827227084
				],
				[
					10.204348519753012,
					36.404702827227084
				],
				[
					10.204348519753012,
					36.6804960304637
				],
				[
					10.204348519753012,
					36.95628923370009
				],
				[
					10.204348519753012,
					37.23208243693671
				],
				[
					10.204348519753012,
					37.507875640173324
				],
				[
					10.204348519753012,
					37.78366884340994
				],
				[
					10.204348519753012,
					38.33525524988295
				],
				[
					10.204348519753012,
					38.88684165635618
				],
				[
					10.204348519753012,
					39.438428062829416
				],
				[
					10.204348519753012,
					40.26580767253904
				],
				[
					10.204348519753012,
					40.54160087577566
				],
				[
					10.204348519753012,
					42.196360095194905
				],
				[
					10.480141722989401,
					42.196360095194905
				],
				[
					10.480141722989401,
					42.74794650166814
				],
				[
					10.480141722989401,
					43.299532908141146
				],
				[
					10.480141722989401,
					43.57532611137776
				],
				[
					10.480141722989401,
					44.126912517851
				],
				[
					10.480141722989401,
					44.402705721087614
				],
				[
					10.480141722989401,
					44.95429212756062
				],
				[
					10.480141722989401,
					45.23008533079724
				],
				[
					10.480141722989401,
					45.78167173727047
				],
				[
					10.755934926226018,
					46.33325814374348
				],
				[
					10.755934926226018,
					46.609051346980095
				],
				[
					10.755934926226018,
					47.1606377534531
				],
				[
					10.755934926226018,
					47.712224159926336
				],
				[
					10.755934926226018,
					47.98801736316295
				],
				[
					10.755934926226018,
					48.53960376963596
				],
				[
					10.755934926226018,
					48.81539697287258
				],
				[
					10.755934926226018,
					49.36698337934581
				],
				[
					10.755934926226018,
					49.91856978581882
				],
				[
					10.755934926226018,
					50.194362989055435
				],
				[
					10.755934926226018,
					50.74594939552867
				],
				[
					10.755934926226018,
					51.02174259876506
				],
				[
					10.755934926226018,
					51.297535802001676
				],
				[
					10.755934926226018,
					51.84912220847491
				],
				[
					10.755934926226018,
					52.400708614947916
				],
				[
					10.755934926226018,
					52.67650181818453
				],
				[
					10.755934926226018,
					53.22808822465777
				],
				[
					10.755934926226018,
					53.503881427894385
				],
				[
					10.755934926226018,
					54.05546783436739
				],
				[
					10.755934926226018,
					54.607054240840625
				],
				[
					10.755934926226018,
					55.15864064731363
				],
				[
					10.755934926226018,
					55.710227053786866
				],
				[
					10.480141722989401,
					56.26181346025987
				],
				[
					10.480141722989401,
					56.81339986673311
				],
				[
					10.204348519753012,
					57.364986273206114
				],
				[
					10.204348519753012,
					57.64077947644273
				],
				[
					9.928555316516395,
					58.192365882915965
				],
				[
					9.928555316516395,
					58.46815908615258
				],
				[
					9.928555316516395,
					58.74395228938897
				],
				[
					9.652762113279778,
					59.01974549262559
				],
				[
					9.652762113279778,
					59.295538695862206
				],
				[
					9.652762113279778,
					59.57133189909882
				],
				[
					9.37696891004316,
					59.84712510233544
				],
				[
					9.37696891004316,
					60.12291830557183
				],
				[
					9.101175706806544,
					60.12291830557183
				],
				[
					9.101175706806544,
					60.39871150880845
				],
				[
					8.825382503570154,
					60.39871150880845
				],
				[
					8.825382503570154,
					60.674504712045064
				],
				[
					8.549589300333537,
					60.674504712045064
				],
				[
					8.27379609709692,
					60.95029791528168
				],
				[
					7.998002893860303,
					60.95029791528168
				],
				[
					7.722209690623913,
					61.22609111851807
				],
				[
					7.170623284150679,
					61.22609111851807
				],
				[
					6.894830080914062,
					61.22609111851807
				],
				[
					6.619036877677445,
					61.50188432175469
				],
				[
					6.067450471204438,
					61.50188432175469
				],
				[
					5.791657267967821,
					61.50188432175469
				],
				[
					5.515864064731204,
					61.50188432175469
				],
				[
					4.964277658258197,
					61.777677524991304
				],
				[
					4.136898048548346,
					61.777677524991304
				],
				[
					3.5853116420753395,
					61.777677524991304
				],
				[
					3.3095184388387224,
					61.777677524991304
				],
				[
					2.4821388291290987,
					62.05347072822792
				],
				[
					1.9305524226558646,
					62.05347072822792
				],
				[
					1.1031728129462408,
					62.05347072822792
				],
				[
					0.2757932032363897,
					62.05347072822792
				],
				[
					-0.5515864064732341,
					62.05347072822792
				],
				[
					-1.3789660161828579,
					62.05347072822792
				],
				[
					-2.482138829129326,
					61.777677524991304
				],
				[
					-3.8611048453119565,
					61.777677524991304
				],
				[
					-4.688484455021808,
					61.777677524991304
				],
				[
					-5.515864064731431,
					61.50188432175469
				],
				[
					-6.343243674441055,
					61.50188432175469
				],
				[
					-6.619036877677672,
					61.22609111851807
				],
				[
					-6.894830080914289,
					61.22609111851807
				],
				[
					-6.894830080914289,
					60.95029791528168
				],
				[
					-7.170623284150906,
					60.674504712045064
				],
				[
					-7.170623284150906,
					60.12291830557183
				],
				[
					-7.170623284150906,
					60.12291830557183
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 116,
			"versionNonce": 912351710,
			"isDeleted": false,
			"id": "9IyM0bV3Qzu9LhLCBJnaf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1284.5246254134088,
			"y": 1736.2358840862564,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 179.54137530700586,
			"height": 37.78366884340994,
			"seed": 132954890,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.27579320323661705,
					0.27579320323661705
				],
				[
					0.5515864064732341,
					0.5515864064732341
				],
				[
					1.3789660161828579,
					1.1031728129462408
				],
				[
					3.3095184388387224,
					1.654759219419475
				],
				[
					5.240070861494814,
					2.4821388291290987
				],
				[
					9.101175706806771,
					3.30951843883895
				],
				[
					14.065453365064968,
					4.136898048548574
				],
				[
					19.857110633033017,
					4.964277658258425
				],
				[
					27.579320323656702,
					6.0674504712046655
				],
				[
					36.68049603046347,
					7.446416487387296
				],
				[
					47.1606377534531,
					9.101175706806771
				],
				[
					57.364986273206114,
					10.204348519753012
				],
				[
					68.94830080914198,
					11.58331453593587
				],
				[
					81.91058136126071,
					13.238073755355344
				],
				[
					91.8391366777771,
					14.341246568301585
				],
				[
					103.14665801047636,
					15.720212584484443
				],
				[
					111.97204051404674,
					17.0991786006673
				],
				[
					120.79742301761667,
					18.753937820086776
				],
				[
					128.2438395050042,
					20.408697039506023
				],
				[
					135.41446278915487,
					22.0634562589255
				],
				[
					141.2061200571227,
					23.442422275108356
				],
				[
					147.82515693480036,
					25.372974697764448
				],
				[
					151.96205498334893,
					26.751940713947306
				],
				[
					156.0989530318975,
					28.406699933366554
				],
				[
					159.40847147073623,
					29.509872746312794
				],
				[
					162.44219670633856,
					30.613045559259035
				],
				[
					164.64854233223105,
					31.716218372205503
				],
				[
					167.13068116136014,
					32.819391185151744
				],
				[
					169.33702678725263,
					33.922563998097985
				],
				[
					171.54337241314533,
					34.74994360780761
				],
				[
					173.1981316325648,
					35.30153001428084
				],
				[
					174.85289085198406,
					35.85311642075385
				],
				[
					175.9560636649303,
					36.12890962399047
				],
				[
					176.78344327464015,
					36.404702827227084
				],
				[
					177.61082288434977,
					36.95628923370009
				],
				[
					178.713995697296,
					37.23208243693671
				],
				[
					178.98978890053263,
					37.507875640173324
				],
				[
					179.26558210376925,
					37.507875640173324
				],
				[
					179.54137530700586,
					37.78366884340994
				],
				[
					179.54137530700586,
					37.78366884340994
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 114,
			"versionNonce": 1682223874,
			"isDeleted": false,
			"id": "80yF81TVNG-odbbNn7KpY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1110.2233209678977,
			"y": 1760.781479174311,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 14.617039771537975,
			"height": 18.75393782008655,
			"seed": 673033866,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.27579320323661705
				],
				[
					0.27579320323661705,
					0.5515864064732341
				],
				[
					0.5515864064730067,
					1.1031728129462408
				],
				[
					1.3789660161826305,
					1.654759219419475
				],
				[
					1.9305524226558646,
					2.206345625892709
				],
				[
					2.7579320323654883,
					3.0337252356023328
				],
				[
					3.8611048453119565,
					4.136898048548574
				],
				[
					4.964277658258197,
					4.964277658258197
				],
				[
					6.067450471204438,
					6.067450471204438
				],
				[
					7.446416487387296,
					7.170623284150906
				],
				[
					8.27379609709692,
					7.99800289386053
				],
				[
					9.37696891004316,
					8.825382503570154
				],
				[
					10.204348519753012,
					9.376968910043388
				],
				[
					11.031728129462635,
					10.204348519753012
				],
				[
					11.307521332699253,
					10.755934926226246
				],
				[
					11.85910773917226,
					11.307521332699253
				],
				[
					11.85910773917226,
					11.58331453593587
				],
				[
					11.85910773917226,
					11.859107739172487
				],
				[
					11.85910773917226,
					12.134900942409104
				],
				[
					11.85910773917226,
					12.68648734888211
				],
				[
					11.58331453593587,
					13.238073755355344
				],
				[
					11.307521332699253,
					13.789660161828351
				],
				[
					11.031728129462635,
					14.341246568301585
				],
				[
					10.480141722989401,
					14.89283297477482
				],
				[
					10.204348519753012,
					15.168626178011209
				],
				[
					9.37696891004316,
					15.720212584484443
				],
				[
					8.27379609709692,
					16.27179899095745
				],
				[
					7.170623284150679,
					16.823385397430684
				],
				[
					5.791657267967821,
					17.0991786006673
				],
				[
					4.136898048548346,
					17.374971803903918
				],
				[
					2.7579320323654883,
					17.374971803903918
				],
				[
					1.3789660161826305,
					17.650765007140308
				],
				[
					0.27579320323661705,
					17.926558210376925
				],
				[
					-1.1031728129462408,
					18.202351413613542
				],
				[
					-1.930552422656092,
					18.47814461685016
				],
				[
					-2.4821388291290987,
					18.75393782008655
				],
				[
					-2.7579320323657157,
					18.75393782008655
				],
				[
					-2.7579320323657157,
					18.75393782008655
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 384,
			"versionNonce": 1976923678,
			"isDeleted": false,
			"id": "0DwVj2vV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.14486694853222026,
			"x": -1241.434708248246,
			"y": 1730.6655838723684,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 112.19985961914062,
			"height": 14.036799663995653,
			"seed": 308934486,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 11.229439731196523,
			"fontFamily": 1,
			"text": "对应的方法被压入栈中",
			"rawText": "对应的方法被压入栈中",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "对应的方法被压入栈中",
			"lineHeight": 1.25,
			"baseline": 9
		},
		{
			"type": "text",
			"version": 316,
			"versionNonce": 351994562,
			"isDeleted": false,
			"id": "NEgObjbW",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1427.3907030953064,
			"y": 2377.861253752809,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 680,
			"height": 50,
			"seed": 2016866762,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "可以发现，我们操作美团点外卖时，对应的方法调用顺序完美符合栈的结构，\n为了更好的操作，我们在方法压入栈时，转换成对应的栈帧结构。",
			"rawText": "可以发现，我们操作美团点外卖时，对应的方法调用顺序完美符合栈的结构，\n为了更好的操作，我们在方法压入栈时，转换成对应的栈帧结构。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "可以发现，我们操作美团点外卖时，对应的方法调用顺序完美符合栈的结构，\n为了更好的操作，我们在方法压入栈时，转换成对应的栈帧结构。",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "rectangle",
			"version": 366,
			"versionNonce": 238879326,
			"isDeleted": false,
			"id": "qVd4it57PZdf7TNM-rGyt",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1077.0249207274724,
			"y": 2063.267960137764,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 1800673750,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "wUDp1lfq"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 339,
			"versionNonce": 1104239234,
			"isDeleted": false,
			"id": "wUDp1lfq",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1057.1516793414717,
			"y": 2068.267960137764,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 345927446,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "首页()",
			"rawText": "首页()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "qVd4it57PZdf7TNM-rGyt",
			"originalText": "首页()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 428,
			"versionNonce": 40437406,
			"isDeleted": false,
			"id": "81a48IqdmQSGei6ytvRe1",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1078.3601590087433,
			"y": 2258.087791547589,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.80646507180612,
			"height": 35,
			"seed": 421658058,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "u9VEr0pZ"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 401,
			"versionNonce": 2038872642,
			"isDeleted": false,
			"id": "u9VEr0pZ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1058.4869176227426,
			"y": 2263.087791547589,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.05998229980469,
			"height": 25,
			"seed": 343127178,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "首页()",
			"rawText": "首页()",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "81a48IqdmQSGei6ytvRe1",
			"originalText": "首页()",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 19,
			"versionNonce": 1393197790,
			"isDeleted": false,
			"id": "ePveT6FN",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -2352.730150568299,
			"y": 1390.6345992266945,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 165.0799102783203,
			"height": 25,
			"seed": 1104105558,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "hava a nice day!",
			"rawText": "hava a nice day!",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "hava a nice day!",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 372,
			"versionNonce": 452600322,
			"isDeleted": false,
			"id": "5jLqnHBBrzS-5VQ8tPrdg",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -345.17996767744523,
			"y": 190.31991100919186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 80.27837455173616,
			"height": 35,
			"seed": 1077443658,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "GUiXpPm1"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 318,
			"versionNonce": 1118992158,
			"isDeleted": false,
			"id": "GUiXpPm1",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -329.04078040157714,
			"y": 197.81991100919186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 48,
			"height": 20,
			"seed": 743360714,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "常量池",
			"rawText": "常量池",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5jLqnHBBrzS-5VQ8tPrdg",
			"originalText": "常量池",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 619,
			"versionNonce": 1361744322,
			"isDeleted": false,
			"id": "rJLWvdj2x05lkLmtB7Ko-",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -252.76235323777723,
			"y": 190.4958783385079,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 115.86530931386349,
			"height": 35,
			"seed": 1992214486,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "kCAHGfrJ"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 608,
			"versionNonce": 433185630,
			"isDeleted": false,
			"id": "kCAHGfrJ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -234.8296985808455,
			"y": 197.9958783385079,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 80,
			"height": 20,
			"seed": 1144945558,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "方法元信息",
			"rawText": "方法元信息",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "rJLWvdj2x05lkLmtB7Ko-",
			"originalText": "方法元信息",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 612,
			"versionNonce": 255265154,
			"isDeleted": false,
			"id": "5ou3SZhKrRKhnDedceU1L",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -343.6572048035181,
			"y": 266.5189376517674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 194.3971716068194,
			"height": 35,
			"seed": 1737013654,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "uYQbBopz"
				}
			],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 640,
			"versionNonce": 1790560158,
			"isDeleted": false,
			"id": "uYQbBopz",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -278.4586190001084,
			"y": 274.0189376517674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 64,
			"height": 20,
			"seed": 682170070,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "类元信息",
			"rawText": "类元信息",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "5ou3SZhKrRKhnDedceU1L",
			"originalText": "类元信息",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 146,
			"versionNonce": 207522114,
			"isDeleted": false,
			"id": "CYYdrTPaEHRG8XpXBs3is",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -867.3250148514844,
			"y": -321.44654322141974,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 168.49130543624665,
			"height": 124.74268577911602,
			"seed": 1540744854,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 203,
			"versionNonce": 1436230622,
			"isDeleted": false,
			"id": "fRnF6e1oAasw_TngCn65F",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -867.7635932335019,
			"y": -174.28187310753222,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 168.49130543624665,
			"height": 124.74268577911602,
			"seed": 1324398218,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 269,
			"versionNonce": 1073746178,
			"isDeleted": false,
			"id": "cNJnZ24bQphTGUaWHsH-N",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -869.2699204704553,
			"y": -28.061393538261285,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 168.49130543624665,
			"height": 124.74268577911602,
			"seed": 1107249622,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710286434404,
			"link": null,
			"locked": false
		},
		{
			"id": "m00Hm5n5CA-vaKNOU50BK",
			"type": "freedraw",
			"x": -4.297396284026718,
			"y": 368.2890073960641,
			"width": 0.0001,
			"height": 0.0001,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1389635202,
			"version": 4,
			"versionNonce": 1283913758,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1710286434404,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.0001,
					0.0001
				]
			],
			"pressures": [],
			"simulatePressure": true,
			"lastCommittedPoint": [
				0.0001,
				0.0001
			]
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#4dabf7",
		"currentItemBackgroundColor": "#ffec99",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 0.5,
		"currentItemStrokeStyle": "dashed",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 16,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 546.037753061145,
		"scrollY": -269.7091275136429,
		"zoom": {
			"value": 1.7490088641402357
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%