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
(JVM栈) ^vYRGoCM6

本地方法栈 ^Zr8F553Y

程序计数器 ^ig8Oxlj0

类装载子系统 ^xiqIIWwz

javac Math.java ^UWuKsUu0

JVM ^nbAShwU5

Math.class ^98fAheWB

010101010
101110101
101010101
101010... ^eXSKfQt8

3 ^e1wQ9B5J

Math类的class对象(唯一)
其中存储着类元信息 ^IRUZnkSF

public class Math {
    public static final double PI = 3.14;
    public int sum = 0;
    public static double sin(double a) {
        ......
    }
    public void sum(){
        ......
    }   
    public void run(){};
} ^BA42GvhD

public 
class Math{


} ^Byj9laiQ

Math.java ^U52jd2Ev

java Math ^AHQJmttY

静态变量:sum ^oMyalJnu

方法区 ^D3vy496W

静态方法:sin() ^nRko9Lxa

2 字节流所代表的静态存储结构转换为方法区的运行时数据结构 ^ch3IrWiC

Math.class ^pzzaC9ey

010101010
101110101
101010101
101010... ^Ug4ExpxB

public 
class Math{


} ^tUYFp6fO

Math.java ^TRaUSreo

1 通过全类名获取定义此类的二进制字节流 ^394KQntV

0 ^W3Sx3XVC

类的字节码信息
(类的描述信息) ^huEAVxqT

注:
- 类的字节码信息属于方法区，存放在堆中了。其实方法区属于逻辑分区，而堆是实际物理上区域，所以这两个说法都是对的
- 类的字节码信息不是对象
- Math类的class对象有静态变量的信息，有指向字节码信息的地址，想要访问字节码信息都需要通过这个对象。 ^cwg0q4lT

类的结构信息： 
包括类名、父类、接口、访问修饰符等。

字段信息： 
描述类中声明的字段，包括字段的名称、类型、访问修饰符等。

方法信息： 
包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。

构造方法信息： 
描述类中声明的构造方法，包括参数列表、访问修饰符等。

注解信息： 
描述类、字段、方法上的注解信息。

其他： 
类加载器信息、类加载时间等。 ^HOpnUbT0

堆 ^fvjRJxh3

类
元
信
息 ^lXi3C9fO

1 ^Pixs8QY0

2 ^hf2Nqai2

栈
(JVM栈) ^WNcL8p6X

本地方法栈 ^9OCtnqwR

程序计数器 ^P5aTP5DB

类装载子系统 ^4GXJlA4E

JVM ^458fVBCV

Math类的class对象(唯一)
其中存储着类元信息 ^8KVoiQPu

0 ^Xo6Uxmws

静态变量:sum ^K5KgoPKk

方法区 ^8jrb0bfK

静态方法:sin() ^JbuHFnFH

类的字节码信息
(类的描述信息) ^R0hC77rV

类的结构信息： 
包括类名、父类、接口、访问修饰符等。

字段信息： 
描述类中声明的字段，包括字段的名称、类型、访问修饰符等。

方法信息： 
包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。

构造方法信息： 
描述类中声明的构造方法，包括参数列表、访问修饰符等。

注解信息： 
描述类、字段、方法上的注解信息。

其他： 
类加载器信息、类加载时间等。 ^Y06791p4

堆 ^6qEHQrmu

类
元
信
息 ^VJgVHAhC

public class MyTest2 {
    public static void main(String[] args) throws Exception {
        //获取Class类的对象
        Class c1 = Class.forName("xxx.xxx.xxxtest.Math");
        //通过默认方法创建Math对象
        Object o = c1.newInstance();
        //获取Method
        Method run = c1.getMethod("run", null);
        //执行run方法
        run.invoke(o, null);
    }
} ^9qByeH7g

实际使用反射中，我们可以理解为class对象是入口，

它提供了访问类字节码信息的接口，真正访问的是类字节码信息 ^6imzKr6F

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
			"version": 982,
			"versionNonce": 565996034,
			"isDeleted": false,
			"id": "TTebVK69LQy_8G6_trR_6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -130.6269364582006,
			"y": 572.4273163711209,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 593.4296018623718,
			"height": 310.44070871330797,
			"seed": 841516310,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795714,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1492,
			"versionNonce": 907587358,
			"isDeleted": false,
			"id": "s6Dx4Us5tpERwCkDrJp-z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -151.63502931066677,
			"y": -673.2788476346482,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 326.30409929627405,
			"height": 215.18614451175807,
			"seed": 1831568470,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795714,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 776,
			"versionNonce": 1482938818,
			"isDeleted": false,
			"id": "qEGEn5IT_sMDfE2t0805P",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -156.48668496178834,
			"y": -425.8032130432619,
			"strokeColor": "#e03131",
			"backgroundColor": "#f08c00",
			"width": 1741.0851017917794,
			"height": 806.3041425003597,
			"seed": 1218013962,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795714,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 943,
			"versionNonce": 867244894,
			"isDeleted": false,
			"id": "hQep1rDm8MbxBNvKbrpkz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -4.128597534312689,
			"y": -358.1830496577917,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.3567426212769,
			"height": 495.93633108419033,
			"seed": 1004321418,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "vYRGoCM6"
				}
			],
			"updated": 1710287795714,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 444,
			"versionNonce": 1879527810,
			"isDeleted": false,
			"id": "vYRGoCM6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 51.34979208687264,
			"y": -135.21488411569652,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 73.39996337890625,
			"height": 50,
			"seed": 842586442,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "栈\n(JVM栈)",
			"rawText": "栈\n(JVM栈)",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "hQep1rDm8MbxBNvKbrpkz",
			"originalText": "栈\n(JVM栈)",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "rectangle",
			"version": 534,
			"versionNonce": 1945239454,
			"isDeleted": false,
			"id": "6wysPfx6iuJo29lboiZh5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 210.07679682266973,
			"y": -359.18729847634444,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 592.871748710042,
			"height": 495.3494229412594,
			"seed": 757276682,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "zmgwF89dBjgENbo-aAw6c",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 250,
			"versionNonce": 2078658882,
			"isDeleted": false,
			"id": "fCE1kX2P8iNnDWXnfQTRo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1.7366069456976447,
			"y": 165.4951324589304,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.54194188007705,
			"height": 141.80591323416445,
			"seed": 1764631946,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Zr8F553Y"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 188,
			"versionNonce": 2064407518,
			"isDeleted": false,
			"id": "Zr8F553Y",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 40.53436399434088,
			"y": 223.89808907601264,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 673506378,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "本地方法栈",
			"rawText": "本地方法栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "fCE1kX2P8iNnDWXnfQTRo",
			"originalText": "本地方法栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 291,
			"versionNonce": 1331583234,
			"isDeleted": false,
			"id": "Gmn4ikn-hH4DAJq5-H3XQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 212.59105186940917,
			"y": 167.023985204336,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 283.6118264683289,
			"height": 137.2733041353556,
			"seed": 1062587146,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 437,
			"versionNonce": 521220126,
			"isDeleted": false,
			"id": "gGjlJDsnBbaGtA7DKy4fo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 521.1485503940089,
			"y": 167.3423023261675,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 284.2163624831231,
			"height": 137.92081972089966,
			"seed": 1966856650,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "J0yJN04NODEy-s7uJfSYJ",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 186,
			"versionNonce": 2045765826,
			"isDeleted": false,
			"id": "ig8Oxlj0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 308.26515869938146,
			"y": 231.26415360880225,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 506687306,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
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
			"version": 521,
			"versionNonce": 1274117214,
			"isDeleted": false,
			"id": "zmgwF89dBjgENbo-aAw6c",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 820.9026456154813,
			"y": -118.1014938826541,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 48.32090529064567,
			"height": 1.21629003128686,
			"seed": 693827082,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "6wysPfx6iuJo29lboiZh5",
				"focus": -0.05684195015103532,
				"gap": 17.954100082769628
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
					48.32090529064567,
					1.21629003128686
				]
			]
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 1127841922,
			"isDeleted": false,
			"id": "QfhXQSW_h7AsNV2EnErOO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1129.5386594345778,
			"y": -184.25634501723846,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 301.8125,
			"height": 162.25,
			"seed": 745783894,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "xiqIIWwz"
				},
				{
					"id": "w0zAWL0KxPzVGz_iibSKK",
					"type": "arrow"
				},
				{
					"id": "J0yJN04NODEy-s7uJfSYJ",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 330,
			"versionNonce": 1199456414,
			"isDeleted": false,
			"id": "xiqIIWwz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1220.4449094345778,
			"y": -115.63134501723846,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 120,
			"height": 25,
			"seed": 1398817558,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "类装载子系统",
			"rawText": "类装载子系统",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "QfhXQSW_h7AsNV2EnErOO",
			"originalText": "类装载子系统",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 1495,
			"versionNonce": 653926466,
			"isDeleted": false,
			"id": "oarx0CduekA57kHoiHU2f",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 187.90236177210778,
			"y": -665.546274837865,
			"strokeColor": "#ffffff",
			"backgroundColor": "#1e1e1e",
			"width": 340.7501042341099,
			"height": 201.14080507901173,
			"seed": 1656500630,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1630,
			"versionNonce": 1357613982,
			"isDeleted": false,
			"id": "UWuKsUu0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 207.56708224366815,
			"y": -623.5630894655386,
			"strokeColor": "#ffffff",
			"backgroundColor": "#1e1e1e",
			"width": 132.1875,
			"height": 18.05049524429551,
			"seed": 491764810,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710290586545,
			"link": null,
			"locked": false,
			"fontSize": 15.042079370246261,
			"fontFamily": 3,
			"text": "javac Math.java",
			"rawText": "javac Math.java",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "javac Math.java",
			"lineHeight": 1.2,
			"baseline": 14
		},
		{
			"type": "ellipse",
			"version": 1458,
			"versionNonce": 1360054274,
			"isDeleted": false,
			"id": "Os33Ti1eZ_I54wVClAtdx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 203.6783783862238,
			"y": -653.131528166301,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 418856522,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1547,
			"versionNonce": 457257246,
			"isDeleted": false,
			"id": "UlWbbNi0U6of9RD1Bp6T8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 225.6753465746234,
			"y": -652.849978524244,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 581406166,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1563,
			"versionNonce": 427587522,
			"isDeleted": false,
			"id": "Xi3lfSAhi95EuQ29v8gZJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 246.77472487851696,
			"y": -652.849978524244,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 1400899018,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 122,
			"versionNonce": 611933534,
			"isDeleted": false,
			"id": "nbAShwU5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -61.4387473495176,
			"y": -400.45866765021015,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 35.15625,
			"height": 24,
			"seed": 1425289098,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "JVM",
			"rawText": "JVM",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "JVM",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "arrow",
			"version": 618,
			"versionNonce": 304807222,
			"isDeleted": false,
			"id": "J0yJN04NODEy-s7uJfSYJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1120.8832824904832,
			"y": -111.93968151980042,
			"strokeColor": "#e03131",
			"backgroundColor": "#f08c00",
			"width": 309.2316405476529,
			"height": 334.97342136867064,
			"seed": 1123416074,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710378457532,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QfhXQSW_h7AsNV2EnErOO",
				"gap": 8.655376944094542,
				"focus": 0.7176137680098829
			},
			"endBinding": {
				"elementId": "gGjlJDsnBbaGtA7DKy4fo",
				"focus": 0.7047864320313373,
				"gap": 6.28672906569841
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
					-193.31081223119338,
					186.29336205167286
				],
				[
					-309.2316405476529,
					334.97342136867064
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1292,
			"versionNonce": 1717698974,
			"isDeleted": false,
			"id": "OqSggimwp0qOCrkAZ4rcY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 546.3022315781948,
			"y": -667.3674622791991,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 332.160297877706,
			"height": 206.03183486648956,
			"seed": 1733258326,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1562,
			"versionNonce": 703524674,
			"isDeleted": false,
			"id": "ehKEPs7w8sUMLMkUHdXM_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 559.3956824593217,
			"y": -653.4857282779983,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 1071673226,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1651,
			"versionNonce": 1680612830,
			"isDeleted": false,
			"id": "B21SxHKLpEXiutKgMEnz4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 581.7482842981755,
			"y": -653.1996267119613,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 1174269514,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1667,
			"versionNonce": 1519630082,
			"isDeleted": false,
			"id": "cKSBQ_ni7RiZHsX6VVHrt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 603.1887845632531,
			"y": -653.1996267119611,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 293442826,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1245,
			"versionNonce": 317239838,
			"isDeleted": false,
			"id": "AC-DHPUfqO3F8YlhYM3P5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 696.7861539118313,
			"y": -624.0624630273885,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 53.09648843917702,
			"height": 53.49873456371637,
			"seed": 1276161610,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "AnC_G0fC75OoxX_uijdie",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1340,
			"versionNonce": 1925809858,
			"isDeleted": false,
			"id": "98fAheWB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 674.8633004715007,
			"y": -564.018086982534,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 101.71875,
			"height": 20.839812328428376,
			"seed": 1760458826,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 17.366510273690313,
			"fontFamily": 3,
			"text": "Math.class",
			"rawText": "Math.class",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math.class",
			"lineHeight": 1.2,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 1583,
			"versionNonce": 495500894,
			"isDeleted": false,
			"id": "eXSKfQt8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 698.2963257696105,
			"y": -620.2950810792455,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 50.888671875,
			"height": 46.36592726665456,
			"seed": 2051501974,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "AnC_G0fC75OoxX_uijdie",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 9.659568180553034,
			"fontFamily": 3,
			"text": "010101010\n101110101\n101010101\n101010...",
			"rawText": "010101010\n101110101\n101010101\n101010...",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "010101010\n101110101\n101010101\n101010...",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "rectangle",
			"version": 1348,
			"versionNonce": 1798266498,
			"isDeleted": false,
			"id": "CDRztXm5F_EecevJzIg2z",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 229.80322170385972,
			"y": -300.3506775730585,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 555.0164367226764,
			"height": 361.0058184966249,
			"seed": 353657750,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 441,
			"versionNonce": 685589150,
			"isDeleted": false,
			"id": "MEuFjYvXbiLxscBy4iKeE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": 226.57913708099824,
			"y": -324.88669727602087,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 36.080062067472575,
			"height": 35,
			"seed": 1154023434,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "e1wQ9B5J"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 348,
			"versionNonce": 1350843970,
			"isDeleted": false,
			"id": "e1wQ9B5J",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 237.80917055614077,
			"y": -319.88669727602087,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.6199951171875,
			"height": 25,
			"seed": 813723338,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "3",
			"rawText": "3",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "MEuFjYvXbiLxscBy4iKeE",
			"originalText": "3",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 504,
			"versionNonce": 395787998,
			"isDeleted": false,
			"id": "IRUZnkSF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 370.8125702924565,
			"y": 65.11201842036354,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 248.90625,
			"height": 48,
			"seed": 221341066,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Math类的class对象(唯一)\n其中存储着类元信息",
			"rawText": "Math类的class对象(唯一)\n其中存储着类元信息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math类的class对象(唯一)\n其中存储着类元信息",
			"lineHeight": 1.2,
			"baseline": 43
		},
		{
			"type": "ellipse",
			"version": 1674,
			"versionNonce": 1067918850,
			"isDeleted": false,
			"id": "MdKY0Eh1q0Ei0o70XqPpt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -139.25781830405364,
			"y": -664.5981959152367,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 16.91148874421689,
			"height": 16.91148874421689,
			"seed": 1831111062,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1763,
			"versionNonce": 1313321758,
			"isDeleted": false,
			"id": "Hd7yMytWu8f7PSOxcoNRM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -117.29930713773467,
			"y": -664.3171385028687,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 16.91148874421689,
			"height": 16.91148874421689,
			"seed": 709551830,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1779,
			"versionNonce": 1637291458,
			"isDeleted": false,
			"id": "QWOKb7vd5ZtB9rAtiAC37",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -96.23681661084623,
			"y": -664.3171385028684,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 16.91148874421689,
			"height": 16.91148874421689,
			"seed": 1161010198,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 1168,
			"versionNonce": 2002755422,
			"isDeleted": false,
			"id": "G5fyXNR4eJHn4jrF2aglD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -149.52571481687966,
			"y": -640.7870441482069,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 319.74112880048904,
			"height": 0,
			"seed": 1750721290,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					319.74112880048904,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 1227,
			"versionNonce": 1735593346,
			"isDeleted": false,
			"id": "7hI0Ax9FyKhuhWkBea_NF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 552.5295449541037,
			"y": -631.6860816373494,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 325.4795413700679,
			"height": 0,
			"seed": 299653514,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					325.4795413700679,
					0
				]
			]
		},
		{
			"type": "text",
			"version": 1303,
			"versionNonce": 1194328990,
			"isDeleted": false,
			"id": "BA42GvhD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -144.30392244750797,
			"y": -631.94724318363,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 307.01953125,
			"height": 168.8198778581036,
			"seed": 551920266,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 12.789384686219972,
			"fontFamily": 3,
			"text": "public class Math {\n    public static final double PI = 3.14;\n    public int sum = 0;\n    public static double sin(double a) {\n        ......\n    }\n    public void sum(){\n        ......\n    }   \n    public void run(){};\n}",
			"rawText": "public class Math {\n    public static final double PI = 3.14;\n    public int sum = 0;\n    public static double sin(double a) {\n        ......\n    }\n    public void sum(){\n        ......\n    }   \n    public void run(){};\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "public class Math {\n    public static final double PI = 3.14;\n    public int sum = 0;\n    public static double sin(double a) {\n        ......\n    }\n    public void sum(){\n        ......\n    }   \n    public void run(){};\n}",
			"lineHeight": 1.2,
			"baseline": 166
		},
		{
			"type": "rectangle",
			"version": 1361,
			"versionNonce": 108662082,
			"isDeleted": false,
			"id": "v1qlEA0l69Zd5wDePibpq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 565.1312332993461,
			"y": -624.5691007503635,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 53.09648843917702,
			"height": 53.49873456371637,
			"seed": 1591166102,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1917,
			"versionNonce": 1072291806,
			"isDeleted": false,
			"id": "Byj9laiQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 567.4023881671669,
			"y": -621.1023577659646,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 49.435546875,
			"height": 46.05594264698197,
			"seed": 523062410,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "AnC_G0fC75OoxX_uijdie",
					"type": "arrow"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 7.675990441163661,
			"fontFamily": 3,
			"text": "public \nclass Math{\n\n\n}",
			"rawText": "public \nclass Math{\n\n\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "public \nclass Math{\n\n\n}",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "text",
			"version": 1422,
			"versionNonce": 1946883330,
			"isDeleted": false,
			"id": "U52jd2Ev",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 551.8181240283868,
			"y": -564.2832445588768,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 91.546875,
			"height": 20.839812328428376,
			"seed": 1622414474,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 17.366510273690313,
			"fontFamily": 3,
			"text": "Math.java",
			"rawText": "Math.java",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math.java",
			"lineHeight": 1.2,
			"baseline": 17
		},
		{
			"type": "arrow",
			"version": 2913,
			"versionNonce": 1973302302,
			"isDeleted": false,
			"id": "AnC_G0fC75OoxX_uijdie",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 621.2044884681567,
			"y": -596.23177708486,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 75.51450319230895,
			"height": 1.5747068291736033,
			"seed": 1696204758,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Byj9laiQ",
				"focus": 0.05250355279229049,
				"gap": 4.366553425989764
			},
			"endBinding": {
				"elementId": "eXSKfQt8",
				"focus": -0.12729137690691392,
				"gap": 1.577334109144772
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
					75.51450319230895,
					1.5747068291736033
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1632,
			"versionNonce": 1638212802,
			"isDeleted": false,
			"id": "h5w7TxbBMlgIMNIRunHjN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 893.0010426068894,
			"y": -664.6519629945527,
			"strokeColor": "#ffffff",
			"backgroundColor": "#1e1e1e",
			"width": 340.7501042341099,
			"height": 201.14080507901173,
			"seed": 727894742,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1807,
			"versionNonce": 1379795038,
			"isDeleted": false,
			"id": "AHQJmttY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 912.6657630784499,
			"y": -623.3288681783778,
			"strokeColor": "#ffffff",
			"backgroundColor": "#1e1e1e",
			"width": 79.3125,
			"height": 18.05049524429551,
			"seed": 565116950,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 15.04207937024626,
			"fontFamily": 3,
			"text": "java Math",
			"rawText": "java Math",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "java Math",
			"lineHeight": 1.2,
			"baseline": 14
		},
		{
			"type": "ellipse",
			"version": 1631,
			"versionNonce": 2028420226,
			"isDeleted": false,
			"id": "zOsquQK45oZ-Q1VPCbvq6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 908.7770592210057,
			"y": -652.8973068791402,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 54693206,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1720,
			"versionNonce": 1503282334,
			"isDeleted": false,
			"id": "cH6txlL374SOVcuGJT6A_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 930.774027409405,
			"y": -652.6157572370832,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 494039702,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1736,
			"versionNonce": 1469078594,
			"isDeleted": false,
			"id": "VwigjRHlTPxh3BkAFQB23",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 951.8734057132989,
			"y": -652.6157572370832,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 16.941106667359644,
			"height": 16.941106667359644,
			"seed": 1257484246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 413,
			"versionNonce": 1835270366,
			"isDeleted": false,
			"id": "BDklIVea83ls8pK4-Lojl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 535.0730822368525,
			"y": 193.10084650459666,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.149612528708076,
			"height": 29.2,
			"seed": 249896470,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "W3Sx3XVC"
				}
			],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 298,
			"versionNonce": 192906242,
			"isDeleted": false,
			"id": "W3Sx3XVC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 558.9603885012066,
			"y": 198.10084650459666,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 9.375,
			"height": 19.2,
			"seed": 1690291146,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "0",
			"rawText": "0",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "BDklIVea83ls8pK4-Lojl",
			"originalText": "0",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "text",
			"version": 344,
			"versionNonce": 288109854,
			"isDeleted": false,
			"id": "oMyalJnu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 528.5163529741524,
			"y": 223.38595922387023,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 101.5,
			"height": 19.2,
			"seed": 971473802,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "静态变量:sum",
			"rawText": "静态变量:sum",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "静态变量:sum",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "text",
			"version": 202,
			"versionNonce": 1084860342,
			"isDeleted": false,
			"id": "D3vy496W",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 530.1262350721394,
			"y": 173.1283710489512,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 48,
			"height": 19.2,
			"seed": 1131027926,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710378792529,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "方法区",
			"rawText": "方法区",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "方法区",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 511,
			"versionNonce": 778297694,
			"isDeleted": false,
			"id": "K86GRzsfLWGvhO8VhcMr_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 534.0020753043256,
			"y": 244.49946289798754,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59.45400177469685,
			"height": 26.487408376731878,
			"seed": 1031471818,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 397,
			"versionNonce": 1129048962,
			"isDeleted": false,
			"id": "nRko9Lxa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 536.269347708127,
			"y": 279.7419188924382,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 120.25,
			"height": 19.2,
			"seed": 1343908822,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "静态方法:sin()",
			"rawText": "静态方法:sin()",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "静态方法:sin()",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "text",
			"version": 857,
			"versionNonce": 1482425758,
			"isDeleted": false,
			"id": "ch3IrWiC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.520240074058496,
			"x": 911.3022831661165,
			"y": -201.4885477613886,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 450.75,
			"height": 19.2,
			"seed": 1797269014,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "2 字节流所代表的静态存储结构转换为方法区的运行时数据结构",
			"rawText": "2 字节流所代表的静态存储结构转换为方法区的运行时数据结构",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2 字节流所代表的静态存储结构转换为方法区的运行时数据结构",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 1411,
			"versionNonce": 1871129410,
			"isDeleted": false,
			"id": "nmWBA9dSbanTZyWFoTKUo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1252.662296914591,
			"y": -670.055423522756,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 332.160297877706,
			"height": 206.03183486648956,
			"seed": 2110482698,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1705,
			"versionNonce": 272998878,
			"isDeleted": false,
			"id": "0KdoKjrlZJhrPtPmAKrGP",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1265.755747795718,
			"y": -656.1736895215552,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 1330493386,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1793,
			"versionNonce": 969175810,
			"isDeleted": false,
			"id": "jG2d-Zg4vCUpIMBRc3biR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1288.1083496345718,
			"y": -655.887587955518,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 1092103818,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1810,
			"versionNonce": 154252830,
			"isDeleted": false,
			"id": "qdvCpyO6vtdA-lSF_Ufx7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1309.5488498996492,
			"y": -655.887587955518,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 17.215000212835808,
			"height": 17.215000212835808,
			"seed": 1743113546,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1388,
			"versionNonce": 612549314,
			"isDeleted": false,
			"id": "aNQyGupI0wLGSwfHc8irr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1403.1462192482277,
			"y": -626.7504242709454,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 53.09648843917702,
			"height": 53.49873456371637,
			"seed": 152146954,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795715,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1483,
			"versionNonce": 1813070430,
			"isDeleted": false,
			"id": "pzzaC9ey",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1381.2233658078972,
			"y": -566.7060482260908,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 101.71875,
			"height": 20.839812328428376,
			"seed": 110527178,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "w0zAWL0KxPzVGz_iibSKK",
					"type": "arrow"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 17.366510273690313,
			"fontFamily": 3,
			"text": "Math.class",
			"rawText": "Math.class",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math.class",
			"lineHeight": 1.2,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 1729,
			"versionNonce": 174135938,
			"isDeleted": false,
			"id": "Ug4ExpxB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1404.6563911060066,
			"y": -622.9830423228025,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 50.888671875,
			"height": 46.36592726665456,
			"seed": 1259313546,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 9.659568180553034,
			"fontFamily": 3,
			"text": "010101010\n101110101\n101010101\n101010...",
			"rawText": "010101010\n101110101\n101010101\n101010...",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "010101010\n101110101\n101010101\n101010...",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "line",
			"version": 1369,
			"versionNonce": 464864926,
			"isDeleted": false,
			"id": "P1KDPFu7Ga5QL8js6XlBO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1258.8896102905,
			"y": -634.3740428809062,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 325.4795413700679,
			"height": 0,
			"seed": 901240906,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					325.4795413700679,
					0
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1503,
			"versionNonce": 438204994,
			"isDeleted": false,
			"id": "jk3DReq_RyGXV4dr9vbzx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1271.4912986357426,
			"y": -627.2570619939203,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 53.09648843917702,
			"height": 53.49873456371637,
			"seed": 107626250,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2060,
			"versionNonce": 2026816222,
			"isDeleted": false,
			"id": "tUYFp6fO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1273.7624535035634,
			"y": -623.7903190095216,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 49.435546875,
			"height": 46.05594264698197,
			"seed": 1235340746,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 7.675990441163661,
			"fontFamily": 3,
			"text": "public \nclass Math{\n\n\n}",
			"rawText": "public \nclass Math{\n\n\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "public \nclass Math{\n\n\n}",
			"lineHeight": 1.2,
			"baseline": 44
		},
		{
			"type": "text",
			"version": 1565,
			"versionNonce": 1385816578,
			"isDeleted": false,
			"id": "TRaUSreo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1258.178189364783,
			"y": -566.9712058024337,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e9ecef",
			"width": 91.546875,
			"height": 20.839812328428376,
			"seed": 1148814474,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 17.366510273690313,
			"fontFamily": 3,
			"text": "Math.java",
			"rawText": "Math.java",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math.java",
			"lineHeight": 1.2,
			"baseline": 17
		},
		{
			"type": "arrow",
			"version": 2538,
			"versionNonce": 1776282614,
			"isDeleted": false,
			"id": "w0zAWL0KxPzVGz_iibSKK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1438.6590083095525,
			"y": -542.073006293393,
			"strokeColor": "#e03131",
			"backgroundColor": "#f08c00",
			"width": 240.4788192950855,
			"height": 356.8166612761545,
			"seed": 709626582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710378457531,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "pzzaC9ey",
				"focus": -0.1502551752174297,
				"gap": 3.793229604269584
			},
			"endBinding": {
				"elementId": "QfhXQSW_h7AsNV2EnErOO",
				"gap": 1,
				"focus": -0.7057111310499893
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
					-10.141842171434746,
					120.37052808133092
				],
				[
					-240.4788192950855,
					356.8166612761545
				]
			]
		},
		{
			"type": "text",
			"version": 483,
			"versionNonce": 2127712706,
			"isDeleted": false,
			"id": "394KQntV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1259.6736454477264,
			"y": -450.55906890667006,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 306.75,
			"height": 19.2,
			"seed": 1421598346,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "1 通过全类名获取定义此类的二进制字节流",
			"rawText": "1 通过全类名获取定义此类的二进制字节流",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "1 通过全类名获取定义此类的二进制字节流",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 196,
			"versionNonce": 1267082078,
			"isDeleted": false,
			"id": "yqhPTqX0m8QKD43QEQ1nq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 661.9975581228696,
			"y": 179.03781427369185,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 96.78434833152797,
			"height": 54.317746512592294,
			"seed": 1194825110,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 198,
			"versionNonce": 837208450,
			"isDeleted": false,
			"id": "huEAVxqT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 660.9097273965334,
			"y": 241.10597091259152,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 114.75,
			"height": 38.4,
			"seed": 1228101334,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类的字节码信息\n(类的描述信息)",
			"rawText": "类的字节码信息\n(类的描述信息)",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类的字节码信息\n(类的描述信息)",
			"lineHeight": 1.2,
			"baseline": 35
		},
		{
			"type": "text",
			"version": 281,
			"versionNonce": 1541801886,
			"isDeleted": false,
			"id": "cwg0q4lT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -148.74914246859862,
			"y": 404.47023567534416,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 1103.4375,
			"height": 96,
			"seed": 708000202,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "注:\n- 类的字节码信息属于方法区，存放在堆中了。其实方法区属于逻辑分区，而堆是实际物理上区域，所以这两个说法都是对的\n- 类的字节码信息不是对象\n- Math类的class对象有静态变量的信息，有指向字节码信息的地址，想要访问字节码信息都需要通过这个对象。",
			"rawText": "注:\n- 类的字节码信息属于方法区，存放在堆中了。其实方法区属于逻辑分区，而堆是实际物理上区域，所以这两个说法都是对的\n- 类的字节码信息不是对象\n- Math类的class对象有静态变量的信息，有指向字节码信息的地址，想要访问字节码信息都需要通过这个对象。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "注:\n- 类的字节码信息属于方法区，存放在堆中了。其实方法区属于逻辑分区，而堆是实际物理上区域，所以这两个说法都是对的\n- 类的字节码信息不是对象\n- Math类的class对象有静态变量的信息，有指向字节码信息的地址，想要访问字节码信息都需要通过这个对象。",
			"lineHeight": 1.2,
			"baseline": 91
		},
		{
			"type": "text",
			"version": 233,
			"versionNonce": 1125534018,
			"isDeleted": false,
			"id": "HOpnUbT0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 256.6299939687736,
			"y": -278.70631145443014,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 480,
			"height": 326.4,
			"seed": 957417226,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"rawText": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"lineHeight": 1.2,
			"baseline": 323
		},
		{
			"type": "text",
			"version": 233,
			"versionNonce": 904812202,
			"isDeleted": false,
			"id": "fvjRJxh3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 225.95925031933558,
			"y": -350.9941809138945,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 16,
			"height": 19.2,
			"seed": 1706307670,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710378792530,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "堆",
			"rawText": "堆",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "堆",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 437,
			"versionNonce": 1237307650,
			"isDeleted": false,
			"id": "7S7LRs_ufLL4ZCD_ZvpzZ",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 251.61638065574994,
			"y": -283.00210586305445,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 1275031510,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 552,
			"versionNonce": 262354974,
			"isDeleted": false,
			"id": "RvjZ5tKYRKx9PStkqpHaB",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 252.8262785319189,
			"y": -223.69218071629533,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 364538122,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 596,
			"versionNonce": 425877698,
			"isDeleted": false,
			"id": "rrtkHhWOX_ULrbS-bGVg2",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 251.65626739892036,
			"y": -166.6807291447305,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 360087050,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 645,
			"versionNonce": 1828881502,
			"isDeleted": false,
			"id": "hs-iywFesLPO9GwVU7FSw",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 248.25259864837915,
			"y": -110.97224451673239,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 671934230,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 719,
			"versionNonce": 1033697410,
			"isDeleted": false,
			"id": "7YU-j5AK1WJy40Aj9lM1J",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 249.26306280869608,
			"y": -54.54579851166699,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 783674698,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 790,
			"versionNonce": 825116830,
			"isDeleted": false,
			"id": "CMS_8b6TsgVI1q1DjOJUb",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 247.0770543717366,
			"y": 1.275408318663878,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 627387978,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 431,
			"versionNonce": 1982765122,
			"isDeleted": false,
			"id": "gJ6IRzFoVdBB6xCiZyRaW",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 726.9735500290457,
			"y": -278.8241753359808,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 55.64901691028399,
			"height": 319.9818472341333,
			"seed": 159047690,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.3974929779305967,
					0
				],
				[
					0.7949859558611934,
					0
				],
				[
					1.19247893379179,
					0.3974929779305967
				],
				[
					1.5899719117223867,
					0.3974929779305967
				],
				[
					2.7824508455141768,
					0.7949859558611934
				],
				[
					3.974929779305967,
					1.5899719117223867
				],
				[
					4.3724227572365635,
					1.5899719117223867
				],
				[
					5.96239466895895,
					1.9874648896529834
				],
				[
					10.334817426195514,
					2.7824508455141768
				],
				[
					10.73231040412611,
					2.7824508455141768
				],
				[
					11.527296359987417,
					3.1799438234447734
				],
				[
					12.32228231584861,
					3.1799438234447734
				],
				[
					13.117268271709804,
					3.1799438234447734
				],
				[
					14.309747205501594,
					3.1799438234447734
				],
				[
					14.70724018343219,
					3.1799438234447734
				],
				[
					15.104733161362788,
					3.1799438234447734
				],
				[
					15.899719117223981,
					3.1799438234447734
				],
				[
					16.297212095154578,
					3.1799438234447734
				],
				[
					16.694705073085174,
					3.577436801375427
				],
				[
					17.09219805101577,
					3.577436801375427
				],
				[
					17.48969102894648,
					3.577436801375427
				],
				[
					17.887184006877078,
					3.577436801375427
				],
				[
					17.887184006877078,
					3.9749297793060236
				],
				[
					18.284676984807675,
					3.9749297793060236
				],
				[
					18.284676984807675,
					4.769915735167217
				],
				[
					18.68216996273827,
					5.167408713097814
				],
				[
					19.079662940668868,
					5.962394668959007
				],
				[
					19.477155918599465,
					6.7573806248202
				],
				[
					19.87464889653006,
					7.552366580681394
				],
				[
					19.87464889653006,
					8.74484551447324
				],
				[
					20.272141874460658,
					10.334817426195627
				],
				[
					20.272141874460658,
					10.732310404126224
				],
				[
					20.272141874460658,
					11.924789337918014
				],
				[
					20.669634852391255,
					13.117268271709804
				],
				[
					20.669634852391255,
					13.912254227570998
				],
				[
					20.669634852391255,
					15.502226139293384
				],
				[
					21.06712783032185,
					17.88718400687702
				],
				[
					21.06712783032185,
					18.284676984807618
				],
				[
					21.06712783032185,
					19.477155918599408
				],
				[
					21.06712783032185,
					21.06712783032185
				],
				[
					21.464620808252448,
					22.657099742044238
				],
				[
					21.464620808252448,
					24.64456463169722
				],
				[
					21.464620808252448,
					26.234536543419637
				],
				[
					21.464620808252448,
					27.824508455142023
				],
				[
					21.464620808252448,
					30.60695930065623
				],
				[
					21.464620808252448,
					32.196931212378644
				],
				[
					21.464620808252448,
					33.78690312410103
				],
				[
					21.464620808252448,
					35.77436801375404
				],
				[
					21.464620808252448,
					38.15932588133765
				],
				[
					21.464620808252448,
					40.146790770990634
				],
				[
					21.464620808252448,
					45.31419948408845
				],
				[
					21.464620808252448,
					45.711692462019045
				],
				[
					21.464620808252448,
					47.30166437374146
				],
				[
					21.464620808252448,
					49.28912926339444
				],
				[
					21.464620808252448,
					52.07158010890865
				],
				[
					21.464620808252448,
					54.45653797649226
				],
				[
					21.464620808252448,
					55.64901691028405
				],
				[
					21.464620808252448,
					58.033974777867655
				],
				[
					21.464620808252448,
					61.611411579243054
				],
				[
					21.464620808252448,
					62.00890455717365
				],
				[
					21.464620808252448,
					63.598876468896066
				],
				[
					21.464620808252448,
					65.18884838061845
				],
				[
					21.464620808252448,
					66.77882029234087
				],
				[
					21.06712783032185,
					68.36879220406325
				],
				[
					21.06712783032185,
					71.54873602750806
				],
				[
					21.06712783032185,
					71.94622900543868
				],
				[
					21.06712783032185,
					73.53620091716107
				],
				[
					20.669634852391255,
					75.12617282888348
				],
				[
					20.669634852391255,
					77.11363771853647
				],
				[
					20.669634852391255,
					79.10110260818948
				],
				[
					20.669634852391255,
					80.69107451991187
				],
				[
					20.272141874460658,
					83.87101834335667
				],
				[
					20.272141874460658,
					84.26851132128729
				],
				[
					20.272141874460658,
					87.05096216680147
				],
				[
					19.87464889653006,
					89.03842705645448
				],
				[
					19.87464889653006,
					91.42338492403809
				],
				[
					19.477155918599465,
					93.01335683576048
				],
				[
					19.079662940668868,
					98.18076554885829
				],
				[
					19.079662940668868,
					100.1682304385113
				],
				[
					18.68216996273827,
					102.15569532816428
				],
				[
					18.68216996273827,
					104.1431602178173
				],
				[
					18.68216996273827,
					105.73313212953971
				],
				[
					18.284676984807675,
					107.7205970191927
				],
				[
					18.284676984807675,
					109.31056893091511
				],
				[
					17.887184006877078,
					112.88800573229051
				],
				[
					17.887184006877078,
					113.2854987102211
				],
				[
					17.887184006877078,
					115.27296359987412
				],
				[
					17.48969102894648,
					116.8629355115965
				],
				[
					17.48969102894648,
					118.85040040124952
				],
				[
					17.48969102894648,
					120.0428793350413
				],
				[
					17.48969102894648,
					121.23535826883312
				],
				[
					17.09219805101577,
					122.42783720262491
				],
				[
					17.09219805101577,
					124.0178091143473
				],
				[
					17.09219805101577,
					124.41530209227793
				],
				[
					17.09219805101577,
					125.60778102606972
				],
				[
					17.09219805101577,
					126.40276698193091
				],
				[
					17.09219805101577,
					127.59524591572273
				],
				[
					16.694705073085174,
					128.39023187158392
				],
				[
					16.694705073085174,
					129.9802037833063
				],
				[
					16.694705073085174,
					131.17268271709813
				],
				[
					16.694705073085174,
					132.36516165088992
				],
				[
					16.297212095154578,
					133.95513356261233
				],
				[
					16.297212095154578,
					134.35262654054293
				],
				[
					16.297212095154578,
					135.14761249640412
				],
				[
					16.297212095154578,
					135.94259845226532
				],
				[
					16.297212095154578,
					136.73758440812654
				],
				[
					16.297212095154578,
					137.13507738605713
				],
				[
					16.297212095154578,
					137.93006334191833
				],
				[
					16.297212095154578,
					138.32755631984892
				],
				[
					16.297212095154578,
					139.12254227571012
				],
				[
					16.297212095154578,
					139.52003525364074
				],
				[
					16.297212095154578,
					139.91752823157134
				],
				[
					16.297212095154578,
					140.31502120950194
				],
				[
					16.297212095154578,
					140.71251418743253
				],
				[
					16.297212095154578,
					141.11000716536313
				],
				[
					16.297212095154578,
					141.50750014329373
				],
				[
					16.694705073085174,
					141.90499312122432
				],
				[
					17.09219805101577,
					141.90499312122432
				],
				[
					17.48969102894648,
					142.69997907708552
				],
				[
					17.887184006877078,
					143.0974720550161
				],
				[
					19.079662940668868,
					143.8924580108773
				],
				[
					19.477155918599465,
					144.28995098880796
				],
				[
					19.87464889653006,
					144.68744396673856
				],
				[
					20.669634852391255,
					145.48242992259975
				],
				[
					21.06712783032185,
					145.87992290053035
				],
				[
					21.464620808252448,
					146.27741587846094
				],
				[
					22.657099742044238,
					147.86738779018333
				],
				[
					23.054592719974835,
					148.26488076811393
				],
				[
					23.054592719974835,
					148.66237374604452
				],
				[
					23.45208569790543,
					149.05986672397512
				],
				[
					23.849578675836028,
					149.05986672397512
				],
				[
					23.849578675836028,
					149.45735970190572
				],
				[
					24.247071653766625,
					149.8548526798363
				],
				[
					24.247071653766625,
					150.25234565776697
				],
				[
					24.64456463169722,
					150.25234565776697
				],
				[
					24.64456463169722,
					150.64983863569756
				],
				[
					24.64456463169722,
					151.04733161362816
				],
				[
					25.04205760962782,
					151.04733161362816
				],
				[
					25.04205760962782,
					151.44482459155876
				],
				[
					25.04205760962782,
					151.84231756948935
				],
				[
					25.04205760962782,
					152.23981054741995
				],
				[
					25.439550587558415,
					152.63730352535055
				],
				[
					25.439550587558415,
					153.03479650328114
				],
				[
					25.439550587558415,
					153.82978245914234
				],
				[
					25.439550587558415,
					154.22727543707293
				],
				[
					25.439550587558415,
					154.62476841500353
				],
				[
					25.439550587558415,
					155.02226139293413
				],
				[
					25.04205760962782,
					155.81724734879532
				],
				[
					25.04205760962782,
					156.21474032672592
				],
				[
					24.64456463169722,
					156.61223330465657
				],
				[
					24.64456463169722,
					157.00972628258717
				],
				[
					24.247071653766625,
					157.80471223844836
				],
				[
					23.849578675836028,
					158.20220521637896
				],
				[
					23.45208569790543,
					158.59969819430955
				],
				[
					22.657099742044238,
					158.99719117224015
				],
				[
					21.862113786183045,
					159.39468415017075
				],
				[
					21.06712783032185,
					160.18967010603194
				],
				[
					20.669634852391255,
					160.58716308396254
				],
				[
					19.477155918599465,
					161.77964201775433
				],
				[
					19.079662940668868,
					161.77964201775433
				],
				[
					18.68216996273827,
					162.17713499568492
				],
				[
					18.284676984807675,
					162.57462797361558
				],
				[
					17.887184006877078,
					162.97212095154617
				],
				[
					17.887184006877078,
					163.36961392947677
				],
				[
					17.48969102894648,
					163.76710690740737
				],
				[
					17.09219805101577,
					164.16459988533796
				],
				[
					16.694705073085174,
					164.56209286326856
				],
				[
					16.694705073085174,
					164.95958584119916
				],
				[
					16.694705073085174,
					165.35707881912975
				],
				[
					16.694705073085174,
					165.75457179706035
				],
				[
					16.297212095154578,
					165.75457179706035
				],
				[
					16.297212095154578,
					166.15206477499095
				],
				[
					16.297212095154578,
					166.54955775292154
				],
				[
					16.297212095154578,
					166.94705073085214
				],
				[
					16.297212095154578,
					167.34454370878274
				],
				[
					16.297212095154578,
					168.13952966464393
				],
				[
					16.297212095154578,
					168.53702264257453
				],
				[
					16.297212095154578,
					169.33200859843578
				],
				[
					16.297212095154578,
					170.12699455429697
				],
				[
					16.297212095154578,
					172.11445944394995
				],
				[
					16.297212095154578,
					173.30693837774174
				],
				[
					16.694705073085174,
					174.49941731153353
				],
				[
					16.694705073085174,
					175.29440326739478
				],
				[
					16.694705073085174,
					176.48688220118657
				],
				[
					16.694705073085174,
					178.07685411290896
				],
				[
					16.694705073085174,
					178.47434709083956
				],
				[
					17.09219805101577,
					182.05178389221498
				],
				[
					17.09219805101577,
					182.44927687014558
				],
				[
					17.48969102894648,
					184.03924878186797
				],
				[
					17.48969102894648,
					186.02671367152095
				],
				[
					17.48969102894648,
					188.014178561174
				],
				[
					17.48969102894648,
					190.00164345082698
				],
				[
					17.48969102894648,
					191.59161536254936
				],
				[
					17.48969102894648,
					193.5790802522024
				],
				[
					17.48969102894648,
					195.96403811978598
				],
				[
					17.48969102894648,
					198.34899598736956
				],
				[
					17.887184006877078,
					202.3239257666756
				],
				[
					17.887184006877078,
					202.72141874460618
				],
				[
					17.887184006877078,
					204.31139065632857
				],
				[
					17.887184006877078,
					207.0938415018428
				],
				[
					18.284676984807675,
					209.0813063914958
				],
				[
					18.284676984807675,
					211.86375723701002
				],
				[
					18.284676984807675,
					213.851222126663
				],
				[
					18.284676984807675,
					216.23617999424658
				],
				[
					18.284676984807675,
					218.22364488389962
				],
				[
					18.284676984807675,
					220.6086027514832
				],
				[
					18.68216996273827,
					223.78854657492798
				],
				[
					18.68216996273827,
					224.98102550871982
				],
				[
					18.68216996273827,
					226.17350444251161
				],
				[
					18.68216996273827,
					228.5584623100952
				],
				[
					19.079662940668868,
					230.14843422181764
				],
				[
					19.079662940668868,
					232.53339208940122
				],
				[
					19.079662940668868,
					234.1233640011236
				],
				[
					19.079662940668868,
					236.1108288907766
				],
				[
					19.079662940668868,
					238.09829378042963
				],
				[
					19.477155918599465,
					241.675730581805
				],
				[
					19.477155918599465,
					242.86820951559685
				],
				[
					19.477155918599465,
					244.06068844938864
				],
				[
					19.477155918599465,
					246.04815333904162
				],
				[
					19.87464889653006,
					248.0356182286946
				],
				[
					19.87464889653006,
					249.62559014041705
				],
				[
					19.87464889653006,
					251.61305503007003
				],
				[
					19.87464889653006,
					252.80553396386182
				],
				[
					20.272141874460658,
					256.78046374316784
				],
				[
					20.272141874460658,
					257.97294267695963
				],
				[
					20.272141874460658,
					259.1654216107514
				],
				[
					20.272141874460658,
					261.15288650040446
				],
				[
					20.272141874460658,
					262.34536543419625
				],
				[
					20.272141874460658,
					263.93533734591864
				],
				[
					20.272141874460658,
					265.9228022355716
				],
				[
					20.669634852391255,
					268.70525308108586
				],
				[
					20.669634852391255,
					269.10274605901645
				],
				[
					20.669634852391255,
					270.29522499280824
				],
				[
					20.669634852391255,
					271.88519690453063
				],
				[
					20.669634852391255,
					273.4751688162531
				],
				[
					20.669634852391255,
					274.66764775004486
				],
				[
					20.669634852391255,
					276.25761966176725
				],
				[
					20.669634852391255,
					277.84759157348964
				],
				[
					20.669634852391255,
					281.02753539693447
				],
				[
					20.669634852391255,
					281.42502837486506
				],
				[
					20.669634852391255,
					282.22001433072626
				],
				[
					20.272141874460658,
					284.20747922037924
				],
				[
					20.272141874460658,
					285.39995815417103
				],
				[
					20.272141874460658,
					286.9899300658935
				],
				[
					19.87464889653006,
					288.57990197761586
				],
				[
					19.87464889653006,
					289.77238091140765
				],
				[
					19.477155918599465,
					291.36235282313004
				],
				[
					19.079662940668868,
					293.7473106907137
				],
				[
					19.079662940668868,
					294.93978962450547
				],
				[
					18.68216996273827,
					296.13226855829726
				],
				[
					18.284676984807675,
					297.32474749208905
				],
				[
					18.284676984807675,
					298.5172264258809
				],
				[
					17.887184006877078,
					299.3122123817421
				],
				[
					17.887184006877078,
					300.1071983376033
				],
				[
					17.48969102894648,
					301.29967727139507
				],
				[
					17.09219805101577,
					302.09466322725626
				],
				[
					17.09219805101577,
					302.88964918311746
				],
				[
					16.694705073085174,
					303.68463513897865
				],
				[
					16.694705073085174,
					304.4796210948399
				],
				[
					16.297212095154578,
					305.2746070507011
				],
				[
					15.899719117223981,
					305.6721000286317
				],
				[
					15.899719117223981,
					306.8645789624235
				],
				[
					15.502226139293384,
					307.2620719403541
				],
				[
					15.104733161362788,
					308.05705789621527
				],
				[
					14.70724018343219,
					308.45455087414587
				],
				[
					14.309747205501594,
					308.85204385207646
				],
				[
					13.912254227570998,
					309.24953683000706
				],
				[
					13.117268271709804,
					310.0445227858683
				],
				[
					10.334817426195514,
					312.0319876755213
				],
				[
					9.937324448264917,
					312.0319876755213
				],
				[
					8.744845514473127,
					312.8269736313825
				],
				[
					6.359887646889547,
					314.4169455431049
				],
				[
					4.3724227572365635,
					315.21193149896607
				],
				[
					1.5899719117223867,
					316.4044104327579
				],
				[
					-0.7949859558611934,
					317.5968893665497
				],
				[
					-3.974929779305967,
					318.3918753224109
				],
				[
					-7.949859558612047,
					319.1868612782721
				],
				[
					-15.104733161362901,
					319.9818472341333
				],
				[
					-15.502226139293498,
					319.9818472341333
				],
				[
					-19.87464889653006,
					319.9818472341333
				],
				[
					-25.439550587558415,
					319.1868612782721
				],
				[
					-30.209466322725575,
					318.7893683003415
				],
				[
					-30.209466322725575,
					318.7893683003415
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 82,
			"versionNonce": 1003979998,
			"isDeleted": false,
			"id": "lXi3C9fO",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 759.3172820813102,
			"y": -158.81234336329754,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16,
			"height": 76.8,
			"seed": 605555350,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类\n元\n信\n息",
			"rawText": "类\n元\n信\n息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类\n元\n信\n息",
			"lineHeight": 1.2,
			"baseline": 73
		},
		{
			"type": "rectangle",
			"version": 255,
			"versionNonce": 854999042,
			"isDeleted": false,
			"id": "pv7ZXVqKjTq7fQryio8g2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": 1245.921882924685,
			"y": -462.1481909686204,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 31.78939557532067,
			"height": 35,
			"seed": 1244722890,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Pixs8QY0"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 159,
			"versionNonce": 1318009118,
			"isDeleted": false,
			"id": "Pixs8QY0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1259.1065816278726,
			"y": -457.1481909686204,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 456887690,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "pv7ZXVqKjTq7fQryio8g2",
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 236,
			"versionNonce": 267579330,
			"isDeleted": false,
			"id": "RV5bJy3zQUJsYCSbFrwVJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 5.5074681644428995,
			"x": 943.0819568476777,
			"y": -51.40341641248072,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 39.1875,
			"height": 39.18749999999997,
			"seed": 465595414,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "hf2Nqai2"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 141,
			"versionNonce": 1355179358,
			"isDeleted": false,
			"id": "hf2Nqai2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.5074681644428995,
			"x": 955.5557117304902,
			"y": -44.30966641248074,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 14.239990234375,
			"height": 25,
			"seed": 273054038,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "RV5bJy3zQUJsYCSbFrwVJ",
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 1126,
			"versionNonce": 1363388290,
			"isDeleted": false,
			"id": "CCly3KfOAoq4KV8z4eIvJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -134.22776359110208,
			"y": 903.7367575461677,
			"strokeColor": "#e03131",
			"backgroundColor": "#f08c00",
			"width": 1230.4281698203922,
			"height": 806.3041425003597,
			"seed": 1701969482,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1247,
			"versionNonce": 964814454,
			"isDeleted": false,
			"id": "tiG5PPrUPOCeZd-K1uCJO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -106.9749378938103,
			"y": 976.6264823905857,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.3567426212769,
			"height": 495.93633108419033,
			"seed": 1206887690,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "WNcL8p6X"
				}
			],
			"updated": 1710378457532,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 746,
			"versionNonce": 1596417858,
			"isDeleted": false,
			"id": "WNcL8p6X",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -51.49654827262498,
			"y": 1199.5946479326808,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 73.39996337890625,
			"height": 50,
			"seed": 1099592650,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "栈\n(JVM栈)",
			"rawText": "栈\n(JVM栈)",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "tiG5PPrUPOCeZd-K1uCJO",
			"originalText": "栈\n(JVM栈)",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "rectangle",
			"version": 835,
			"versionNonce": 383198686,
			"isDeleted": false,
			"id": "dVUBIR2Ce_9xBd78D0wXy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 107.23045646317212,
			"y": 975.622233572033,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 592.871748710042,
			"height": 495.3494229412594,
			"seed": 1146972810,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "vNQpMkptFIKEJw9iRL4t5",
					"type": "arrow"
				},
				{
					"id": "2PHF0WNMO6jdNND_cEULr",
					"type": "arrow"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 551,
			"versionNonce": 1107111682,
			"isDeleted": false,
			"id": "dIqYFMP3Ach8NcAm3ArlK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -104.58294730519526,
			"y": 1500.3046645073077,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 184.54194188007705,
			"height": 141.80591323416445,
			"seed": 1193511242,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "9OCtnqwR"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 490,
			"versionNonce": 1257421342,
			"isDeleted": false,
			"id": "9OCtnqwR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -62.31197636515674,
			"y": 1558.70762112439,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 825741322,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "本地方法栈",
			"rawText": "本地方法栈",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "dIqYFMP3Ach8NcAm3ArlK",
			"originalText": "本地方法栈",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 592,
			"versionNonce": 507772610,
			"isDeleted": false,
			"id": "XzxqdMw57djsEJwirVGEr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 109.74471150991155,
			"y": 1501.8335172527136,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 283.6118264683289,
			"height": 137.2733041353556,
			"seed": 1184186058,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 738,
			"versionNonce": 1460782686,
			"isDeleted": false,
			"id": "bUYbvCNKEkp7-Jec07TIt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 418.3022100345113,
			"y": 1502.1518343745452,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 284.2163624831231,
			"height": 137.92081972089966,
			"seed": 332846474,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 487,
			"versionNonce": 815453826,
			"isDeleted": false,
			"id": "P5aTP5DB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 205.41881833988384,
			"y": 1566.0736856571798,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 1513591882,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
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
			"version": 1123,
			"versionNonce": 1543850654,
			"isDeleted": false,
			"id": "vNQpMkptFIKEJw9iRL4t5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 718.0563052559837,
			"y": 1216.7080381657233,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 48.32090529064567,
			"height": 1.21629003128686,
			"seed": 2073197322,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "dVUBIR2Ce_9xBd78D0wXy",
				"focus": -0.05684195015103648,
				"gap": 17.954100082769628
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
					48.32090529064567,
					1.21629003128686
				]
			]
		},
		{
			"type": "rectangle",
			"version": 944,
			"versionNonce": 1237366338,
			"isDeleted": false,
			"id": "FnTu5QcOPDg1ZNfP1ZiHd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 774.2071544923454,
			"y": 983.3670645371656,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 301.8125,
			"height": 162.25,
			"seed": 1717733834,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "4GXJlA4E"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 921,
			"versionNonce": 947799774,
			"isDeleted": false,
			"id": "4GXJlA4E",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 865.1134044923454,
			"y": 1051.9920645371656,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 120,
			"height": 25,
			"seed": 29540490,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "类装载子系统",
			"rawText": "类装载子系统",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "FnTu5QcOPDg1ZNfP1ZiHd",
			"originalText": "类装载子系统",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 334,
			"versionNonce": 1251253762,
			"isDeleted": false,
			"id": "458fVBCV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -39.17982597883133,
			"y": 929.8015821534333,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#f08c00",
			"width": 35.15625,
			"height": 24,
			"seed": 426647370,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "JVM",
			"rawText": "JVM",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "JVM",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 1648,
			"versionNonce": 1292745502,
			"isDeleted": false,
			"id": "E7sFPfplOZAcRDmDfpZ9w",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 126.95688134436205,
			"y": 1034.4588544753192,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 555.0164367226764,
			"height": 361.0058184966249,
			"seed": 1806849226,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "2PHF0WNMO6jdNND_cEULr",
					"type": "arrow"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 805,
			"versionNonce": 538283458,
			"isDeleted": false,
			"id": "8KVoiQPu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 267.96622993295887,
			"y": 1399.9215504687409,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 248.90625,
			"height": 48,
			"seed": 1585402122,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Math类的class对象(唯一)\n其中存储着类元信息",
			"rawText": "Math类的class对象(唯一)\n其中存储着类元信息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Math类的class对象(唯一)\n其中存储着类元信息",
			"lineHeight": 1.2,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 715,
			"versionNonce": 1076143966,
			"isDeleted": false,
			"id": "amIBIqWnwqfYt1t9WVzo4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 432.2267418773549,
			"y": 1527.9103785529742,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.149612528708076,
			"height": 29.2,
			"seed": 1095016394,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Xo6Uxmws"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 600,
			"versionNonce": 1063421314,
			"isDeleted": false,
			"id": "Xo6Uxmws",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 456.11404814170896,
			"y": 1532.9103785529742,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 9.375,
			"height": 19.2,
			"seed": 603068042,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "0",
			"rawText": "0",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "amIBIqWnwqfYt1t9WVzo4",
			"originalText": "0",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "text",
			"version": 645,
			"versionNonce": 1108609950,
			"isDeleted": false,
			"id": "K5KgoPKk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 425.67001261465475,
			"y": 1558.1954912722476,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 101.5,
			"height": 19.2,
			"seed": 658683210,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "静态变量:sum",
			"rawText": "静态变量:sum",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "静态变量:sum",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "text",
			"version": 503,
			"versionNonce": 667369718,
			"isDeleted": false,
			"id": "8jrb0bfK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 427.27989471264175,
			"y": 1507.9379030973287,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 48,
			"height": 19.2,
			"seed": 479296522,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710378792530,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "方法区",
			"rawText": "方法区",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "方法区",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 812,
			"versionNonce": 1359800286,
			"isDeleted": false,
			"id": "FCcNO5mY4c-htfEo_Jvyw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 431.15573494482794,
			"y": 1579.3089949463651,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 59.45400177469685,
			"height": 26.487408376731878,
			"seed": 1910074058,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 698,
			"versionNonce": 1081904386,
			"isDeleted": false,
			"id": "JbuHFnFH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 433.4230073486294,
			"y": 1614.5514509408158,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 120.25,
			"height": 19.2,
			"seed": 498434442,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "静态方法:sin()",
			"rawText": "静态方法:sin()",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "静态方法:sin()",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 498,
			"versionNonce": 2099264542,
			"isDeleted": false,
			"id": "JTbzVP-zXvM-PJuFItlMw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 559.151217763372,
			"y": 1513.8473463220694,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 96.78434833152797,
			"height": 54.317746512592294,
			"seed": 112600842,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "2PHF0WNMO6jdNND_cEULr",
					"type": "arrow"
				}
			],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 499,
			"versionNonce": 287808706,
			"isDeleted": false,
			"id": "R0hC77rV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 558.0633870370358,
			"y": 1575.9155029609692,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 114.75,
			"height": 38.4,
			"seed": 674280906,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类的字节码信息\n(类的描述信息)",
			"rawText": "类的字节码信息\n(类的描述信息)",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类的字节码信息\n(类的描述信息)",
			"lineHeight": 1.2,
			"baseline": 35
		},
		{
			"type": "text",
			"version": 534,
			"versionNonce": 742328414,
			"isDeleted": false,
			"id": "Y06791p4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 153.78365360927592,
			"y": 1056.1032205939473,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 480,
			"height": 326.4,
			"seed": 1089170570,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"rawText": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类的结构信息： \n包括类名、父类、接口、访问修饰符等。\n\n字段信息： \n描述类中声明的字段，包括字段的名称、类型、访问修饰符等。\n\n方法信息： \n包括方法的名称、参数列表、返回类型、异常信息、访问修饰符等。\n\n构造方法信息： \n描述类中声明的构造方法，包括参数列表、访问修饰符等。\n\n注解信息： \n描述类、字段、方法上的注解信息。\n\n其他： \n类加载器信息、类加载时间等。",
			"lineHeight": 1.2,
			"baseline": 323
		},
		{
			"type": "text",
			"version": 534,
			"versionNonce": 201453930,
			"isDeleted": false,
			"id": "6qEHQrmu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 123.1129099598379,
			"y": 983.815351134483,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 16,
			"height": 19.2,
			"seed": 1184975690,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710378792530,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "堆",
			"rawText": "堆",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "堆",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "rectangle",
			"version": 738,
			"versionNonce": 1580879006,
			"isDeleted": false,
			"id": "PVlDE51u-NOHg5RFRF2K8",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 148.77004029625232,
			"y": 1051.807426185323,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 1068323338,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795716,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 853,
			"versionNonce": 1926550594,
			"isDeleted": false,
			"id": "cvaU0KtPpCDC3kp2zxHDW",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 149.97993817242127,
			"y": 1111.1173513320823,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 789217482,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 897,
			"versionNonce": 1891829982,
			"isDeleted": false,
			"id": "HYHAXQt_BN1ESfrerOxpN",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 148.80992703942275,
			"y": 1168.1288029036468,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 5494666,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 946,
			"versionNonce": 930413570,
			"isDeleted": false,
			"id": "pR0ioReRRIZBTZ2t3Onwd",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 145.40625828888153,
			"y": 1223.837287531645,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 1942246986,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1020,
			"versionNonce": 1667906846,
			"isDeleted": false,
			"id": "E6odp7F41c-SlsR3nbn8L",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 146.41672244919846,
			"y": 1280.2637335367103,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 171375882,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1091,
			"versionNonce": 221916098,
			"isDeleted": false,
			"id": "A276WCeSdK2Ijidp4d9Se",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 144.230714012239,
			"y": 1336.0849403670413,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 484.67711184464065,
			"height": 49.43297036918786,
			"seed": 1898367946,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 732,
			"versionNonce": 463530334,
			"isDeleted": false,
			"id": "8wB2FUdU5jnYT4hMlzKz6",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 624.1272096695482,
			"y": 1055.9853567123969,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 55.64901691028399,
			"height": 319.9818472341333,
			"seed": 1856946826,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.3974929779305967,
					0
				],
				[
					0.7949859558611934,
					0
				],
				[
					1.19247893379179,
					0.3974929779305967
				],
				[
					1.5899719117223867,
					0.3974929779305967
				],
				[
					2.7824508455141768,
					0.7949859558611934
				],
				[
					3.974929779305967,
					1.5899719117223867
				],
				[
					4.3724227572365635,
					1.5899719117223867
				],
				[
					5.96239466895895,
					1.9874648896529834
				],
				[
					10.334817426195514,
					2.7824508455141768
				],
				[
					10.73231040412611,
					2.7824508455141768
				],
				[
					11.527296359987417,
					3.1799438234447734
				],
				[
					12.32228231584861,
					3.1799438234447734
				],
				[
					13.117268271709804,
					3.1799438234447734
				],
				[
					14.309747205501594,
					3.1799438234447734
				],
				[
					14.70724018343219,
					3.1799438234447734
				],
				[
					15.104733161362788,
					3.1799438234447734
				],
				[
					15.899719117223981,
					3.1799438234447734
				],
				[
					16.297212095154578,
					3.1799438234447734
				],
				[
					16.694705073085174,
					3.577436801375427
				],
				[
					17.09219805101577,
					3.577436801375427
				],
				[
					17.48969102894648,
					3.577436801375427
				],
				[
					17.887184006877078,
					3.577436801375427
				],
				[
					17.887184006877078,
					3.9749297793060236
				],
				[
					18.284676984807675,
					3.9749297793060236
				],
				[
					18.284676984807675,
					4.769915735167217
				],
				[
					18.68216996273827,
					5.167408713097814
				],
				[
					19.079662940668868,
					5.962394668959007
				],
				[
					19.477155918599465,
					6.7573806248202
				],
				[
					19.87464889653006,
					7.552366580681394
				],
				[
					19.87464889653006,
					8.74484551447324
				],
				[
					20.272141874460658,
					10.334817426195627
				],
				[
					20.272141874460658,
					10.732310404126224
				],
				[
					20.272141874460658,
					11.924789337918014
				],
				[
					20.669634852391255,
					13.117268271709804
				],
				[
					20.669634852391255,
					13.912254227570998
				],
				[
					20.669634852391255,
					15.502226139293384
				],
				[
					21.06712783032185,
					17.88718400687702
				],
				[
					21.06712783032185,
					18.284676984807618
				],
				[
					21.06712783032185,
					19.477155918599408
				],
				[
					21.06712783032185,
					21.06712783032185
				],
				[
					21.464620808252448,
					22.657099742044238
				],
				[
					21.464620808252448,
					24.64456463169722
				],
				[
					21.464620808252448,
					26.234536543419637
				],
				[
					21.464620808252448,
					27.824508455142023
				],
				[
					21.464620808252448,
					30.60695930065623
				],
				[
					21.464620808252448,
					32.196931212378644
				],
				[
					21.464620808252448,
					33.78690312410103
				],
				[
					21.464620808252448,
					35.77436801375404
				],
				[
					21.464620808252448,
					38.15932588133765
				],
				[
					21.464620808252448,
					40.146790770990634
				],
				[
					21.464620808252448,
					45.31419948408845
				],
				[
					21.464620808252448,
					45.711692462019045
				],
				[
					21.464620808252448,
					47.30166437374146
				],
				[
					21.464620808252448,
					49.28912926339444
				],
				[
					21.464620808252448,
					52.07158010890865
				],
				[
					21.464620808252448,
					54.45653797649226
				],
				[
					21.464620808252448,
					55.64901691028405
				],
				[
					21.464620808252448,
					58.033974777867655
				],
				[
					21.464620808252448,
					61.611411579243054
				],
				[
					21.464620808252448,
					62.00890455717365
				],
				[
					21.464620808252448,
					63.598876468896066
				],
				[
					21.464620808252448,
					65.18884838061845
				],
				[
					21.464620808252448,
					66.77882029234087
				],
				[
					21.06712783032185,
					68.36879220406325
				],
				[
					21.06712783032185,
					71.54873602750806
				],
				[
					21.06712783032185,
					71.94622900543868
				],
				[
					21.06712783032185,
					73.53620091716107
				],
				[
					20.669634852391255,
					75.12617282888348
				],
				[
					20.669634852391255,
					77.11363771853647
				],
				[
					20.669634852391255,
					79.10110260818948
				],
				[
					20.669634852391255,
					80.69107451991187
				],
				[
					20.272141874460658,
					83.87101834335667
				],
				[
					20.272141874460658,
					84.26851132128729
				],
				[
					20.272141874460658,
					87.05096216680147
				],
				[
					19.87464889653006,
					89.03842705645448
				],
				[
					19.87464889653006,
					91.42338492403809
				],
				[
					19.477155918599465,
					93.01335683576048
				],
				[
					19.079662940668868,
					98.18076554885829
				],
				[
					19.079662940668868,
					100.1682304385113
				],
				[
					18.68216996273827,
					102.15569532816428
				],
				[
					18.68216996273827,
					104.1431602178173
				],
				[
					18.68216996273827,
					105.73313212953971
				],
				[
					18.284676984807675,
					107.7205970191927
				],
				[
					18.284676984807675,
					109.31056893091511
				],
				[
					17.887184006877078,
					112.88800573229051
				],
				[
					17.887184006877078,
					113.2854987102211
				],
				[
					17.887184006877078,
					115.27296359987412
				],
				[
					17.48969102894648,
					116.8629355115965
				],
				[
					17.48969102894648,
					118.85040040124952
				],
				[
					17.48969102894648,
					120.0428793350413
				],
				[
					17.48969102894648,
					121.23535826883312
				],
				[
					17.09219805101577,
					122.42783720262491
				],
				[
					17.09219805101577,
					124.0178091143473
				],
				[
					17.09219805101577,
					124.41530209227793
				],
				[
					17.09219805101577,
					125.60778102606972
				],
				[
					17.09219805101577,
					126.40276698193091
				],
				[
					17.09219805101577,
					127.59524591572273
				],
				[
					16.694705073085174,
					128.39023187158392
				],
				[
					16.694705073085174,
					129.9802037833063
				],
				[
					16.694705073085174,
					131.17268271709813
				],
				[
					16.694705073085174,
					132.36516165088992
				],
				[
					16.297212095154578,
					133.95513356261233
				],
				[
					16.297212095154578,
					134.35262654054293
				],
				[
					16.297212095154578,
					135.14761249640412
				],
				[
					16.297212095154578,
					135.94259845226532
				],
				[
					16.297212095154578,
					136.73758440812654
				],
				[
					16.297212095154578,
					137.13507738605713
				],
				[
					16.297212095154578,
					137.93006334191833
				],
				[
					16.297212095154578,
					138.32755631984892
				],
				[
					16.297212095154578,
					139.12254227571012
				],
				[
					16.297212095154578,
					139.52003525364074
				],
				[
					16.297212095154578,
					139.91752823157134
				],
				[
					16.297212095154578,
					140.31502120950194
				],
				[
					16.297212095154578,
					140.71251418743253
				],
				[
					16.297212095154578,
					141.11000716536313
				],
				[
					16.297212095154578,
					141.50750014329373
				],
				[
					16.694705073085174,
					141.90499312122432
				],
				[
					17.09219805101577,
					141.90499312122432
				],
				[
					17.48969102894648,
					142.69997907708552
				],
				[
					17.887184006877078,
					143.0974720550161
				],
				[
					19.079662940668868,
					143.8924580108773
				],
				[
					19.477155918599465,
					144.28995098880796
				],
				[
					19.87464889653006,
					144.68744396673856
				],
				[
					20.669634852391255,
					145.48242992259975
				],
				[
					21.06712783032185,
					145.87992290053035
				],
				[
					21.464620808252448,
					146.27741587846094
				],
				[
					22.657099742044238,
					147.86738779018333
				],
				[
					23.054592719974835,
					148.26488076811393
				],
				[
					23.054592719974835,
					148.66237374604452
				],
				[
					23.45208569790543,
					149.05986672397512
				],
				[
					23.849578675836028,
					149.05986672397512
				],
				[
					23.849578675836028,
					149.45735970190572
				],
				[
					24.247071653766625,
					149.8548526798363
				],
				[
					24.247071653766625,
					150.25234565776697
				],
				[
					24.64456463169722,
					150.25234565776697
				],
				[
					24.64456463169722,
					150.64983863569756
				],
				[
					24.64456463169722,
					151.04733161362816
				],
				[
					25.04205760962782,
					151.04733161362816
				],
				[
					25.04205760962782,
					151.44482459155876
				],
				[
					25.04205760962782,
					151.84231756948935
				],
				[
					25.04205760962782,
					152.23981054741995
				],
				[
					25.439550587558415,
					152.63730352535055
				],
				[
					25.439550587558415,
					153.03479650328114
				],
				[
					25.439550587558415,
					153.82978245914234
				],
				[
					25.439550587558415,
					154.22727543707293
				],
				[
					25.439550587558415,
					154.62476841500353
				],
				[
					25.439550587558415,
					155.02226139293413
				],
				[
					25.04205760962782,
					155.81724734879532
				],
				[
					25.04205760962782,
					156.21474032672592
				],
				[
					24.64456463169722,
					156.61223330465657
				],
				[
					24.64456463169722,
					157.00972628258717
				],
				[
					24.247071653766625,
					157.80471223844836
				],
				[
					23.849578675836028,
					158.20220521637896
				],
				[
					23.45208569790543,
					158.59969819430955
				],
				[
					22.657099742044238,
					158.99719117224015
				],
				[
					21.862113786183045,
					159.39468415017075
				],
				[
					21.06712783032185,
					160.18967010603194
				],
				[
					20.669634852391255,
					160.58716308396254
				],
				[
					19.477155918599465,
					161.77964201775433
				],
				[
					19.079662940668868,
					161.77964201775433
				],
				[
					18.68216996273827,
					162.17713499568492
				],
				[
					18.284676984807675,
					162.57462797361558
				],
				[
					17.887184006877078,
					162.97212095154617
				],
				[
					17.887184006877078,
					163.36961392947677
				],
				[
					17.48969102894648,
					163.76710690740737
				],
				[
					17.09219805101577,
					164.16459988533796
				],
				[
					16.694705073085174,
					164.56209286326856
				],
				[
					16.694705073085174,
					164.95958584119916
				],
				[
					16.694705073085174,
					165.35707881912975
				],
				[
					16.694705073085174,
					165.75457179706035
				],
				[
					16.297212095154578,
					165.75457179706035
				],
				[
					16.297212095154578,
					166.15206477499095
				],
				[
					16.297212095154578,
					166.54955775292154
				],
				[
					16.297212095154578,
					166.94705073085214
				],
				[
					16.297212095154578,
					167.34454370878274
				],
				[
					16.297212095154578,
					168.13952966464393
				],
				[
					16.297212095154578,
					168.53702264257453
				],
				[
					16.297212095154578,
					169.33200859843578
				],
				[
					16.297212095154578,
					170.12699455429697
				],
				[
					16.297212095154578,
					172.11445944394995
				],
				[
					16.297212095154578,
					173.30693837774174
				],
				[
					16.694705073085174,
					174.49941731153353
				],
				[
					16.694705073085174,
					175.29440326739478
				],
				[
					16.694705073085174,
					176.48688220118657
				],
				[
					16.694705073085174,
					178.07685411290896
				],
				[
					16.694705073085174,
					178.47434709083956
				],
				[
					17.09219805101577,
					182.05178389221498
				],
				[
					17.09219805101577,
					182.44927687014558
				],
				[
					17.48969102894648,
					184.03924878186797
				],
				[
					17.48969102894648,
					186.02671367152095
				],
				[
					17.48969102894648,
					188.014178561174
				],
				[
					17.48969102894648,
					190.00164345082698
				],
				[
					17.48969102894648,
					191.59161536254936
				],
				[
					17.48969102894648,
					193.5790802522024
				],
				[
					17.48969102894648,
					195.96403811978598
				],
				[
					17.48969102894648,
					198.34899598736956
				],
				[
					17.887184006877078,
					202.3239257666756
				],
				[
					17.887184006877078,
					202.72141874460618
				],
				[
					17.887184006877078,
					204.31139065632857
				],
				[
					17.887184006877078,
					207.0938415018428
				],
				[
					18.284676984807675,
					209.0813063914958
				],
				[
					18.284676984807675,
					211.86375723701002
				],
				[
					18.284676984807675,
					213.851222126663
				],
				[
					18.284676984807675,
					216.23617999424658
				],
				[
					18.284676984807675,
					218.22364488389962
				],
				[
					18.284676984807675,
					220.6086027514832
				],
				[
					18.68216996273827,
					223.78854657492798
				],
				[
					18.68216996273827,
					224.98102550871982
				],
				[
					18.68216996273827,
					226.17350444251161
				],
				[
					18.68216996273827,
					228.5584623100952
				],
				[
					19.079662940668868,
					230.14843422181764
				],
				[
					19.079662940668868,
					232.53339208940122
				],
				[
					19.079662940668868,
					234.1233640011236
				],
				[
					19.079662940668868,
					236.1108288907766
				],
				[
					19.079662940668868,
					238.09829378042963
				],
				[
					19.477155918599465,
					241.675730581805
				],
				[
					19.477155918599465,
					242.86820951559685
				],
				[
					19.477155918599465,
					244.06068844938864
				],
				[
					19.477155918599465,
					246.04815333904162
				],
				[
					19.87464889653006,
					248.0356182286946
				],
				[
					19.87464889653006,
					249.62559014041705
				],
				[
					19.87464889653006,
					251.61305503007003
				],
				[
					19.87464889653006,
					252.80553396386182
				],
				[
					20.272141874460658,
					256.78046374316784
				],
				[
					20.272141874460658,
					257.97294267695963
				],
				[
					20.272141874460658,
					259.1654216107514
				],
				[
					20.272141874460658,
					261.15288650040446
				],
				[
					20.272141874460658,
					262.34536543419625
				],
				[
					20.272141874460658,
					263.93533734591864
				],
				[
					20.272141874460658,
					265.9228022355716
				],
				[
					20.669634852391255,
					268.70525308108586
				],
				[
					20.669634852391255,
					269.10274605901645
				],
				[
					20.669634852391255,
					270.29522499280824
				],
				[
					20.669634852391255,
					271.88519690453063
				],
				[
					20.669634852391255,
					273.4751688162531
				],
				[
					20.669634852391255,
					274.66764775004486
				],
				[
					20.669634852391255,
					276.25761966176725
				],
				[
					20.669634852391255,
					277.84759157348964
				],
				[
					20.669634852391255,
					281.02753539693447
				],
				[
					20.669634852391255,
					281.42502837486506
				],
				[
					20.669634852391255,
					282.22001433072626
				],
				[
					20.272141874460658,
					284.20747922037924
				],
				[
					20.272141874460658,
					285.39995815417103
				],
				[
					20.272141874460658,
					286.9899300658935
				],
				[
					19.87464889653006,
					288.57990197761586
				],
				[
					19.87464889653006,
					289.77238091140765
				],
				[
					19.477155918599465,
					291.36235282313004
				],
				[
					19.079662940668868,
					293.7473106907137
				],
				[
					19.079662940668868,
					294.93978962450547
				],
				[
					18.68216996273827,
					296.13226855829726
				],
				[
					18.284676984807675,
					297.32474749208905
				],
				[
					18.284676984807675,
					298.5172264258809
				],
				[
					17.887184006877078,
					299.3122123817421
				],
				[
					17.887184006877078,
					300.1071983376033
				],
				[
					17.48969102894648,
					301.29967727139507
				],
				[
					17.09219805101577,
					302.09466322725626
				],
				[
					17.09219805101577,
					302.88964918311746
				],
				[
					16.694705073085174,
					303.68463513897865
				],
				[
					16.694705073085174,
					304.4796210948399
				],
				[
					16.297212095154578,
					305.2746070507011
				],
				[
					15.899719117223981,
					305.6721000286317
				],
				[
					15.899719117223981,
					306.8645789624235
				],
				[
					15.502226139293384,
					307.2620719403541
				],
				[
					15.104733161362788,
					308.05705789621527
				],
				[
					14.70724018343219,
					308.45455087414587
				],
				[
					14.309747205501594,
					308.85204385207646
				],
				[
					13.912254227570998,
					309.24953683000706
				],
				[
					13.117268271709804,
					310.0445227858683
				],
				[
					10.334817426195514,
					312.0319876755213
				],
				[
					9.937324448264917,
					312.0319876755213
				],
				[
					8.744845514473127,
					312.8269736313825
				],
				[
					6.359887646889547,
					314.4169455431049
				],
				[
					4.3724227572365635,
					315.21193149896607
				],
				[
					1.5899719117223867,
					316.4044104327579
				],
				[
					-0.7949859558611934,
					317.5968893665497
				],
				[
					-3.974929779305967,
					318.3918753224109
				],
				[
					-7.949859558612047,
					319.1868612782721
				],
				[
					-15.104733161362901,
					319.9818472341333
				],
				[
					-15.502226139293498,
					319.9818472341333
				],
				[
					-19.87464889653006,
					319.9818472341333
				],
				[
					-25.439550587558415,
					319.1868612782721
				],
				[
					-30.209466322725575,
					318.7893683003415
				],
				[
					-30.209466322725575,
					318.7893683003415
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 383,
			"versionNonce": 440624002,
			"isDeleted": false,
			"id": "VJgVHAhC",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 656.4709417218126,
			"y": 1175.99718868508,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16,
			"height": 76.8,
			"seed": 1300881738,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "类\n元\n信\n息",
			"rawText": "类\n元\n信\n息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "类\n元\n信\n息",
			"lineHeight": 1.2,
			"baseline": 73
		},
		{
			"type": "arrow",
			"version": 1976,
			"versionNonce": 683150750,
			"isDeleted": false,
			"id": "2PHF0WNMO6jdNND_cEULr",
			"fillStyle": "hachure",
			"strokeWidth": 4,
			"strokeStyle": "dotted",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 724.3212676685073,
			"y": 1148.7007439381696,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 104.56366013015395,
			"height": 382.33732387971577,
			"seed": 1052519818,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "dVUBIR2Ce_9xBd78D0wXy",
				"focus": -0.9614103933891834,
				"gap": 24.2190624952932
			},
			"endBinding": {
				"elementId": "JTbzVP-zXvM-PJuFItlMw",
				"focus": 0.7897572669842643,
				"gap": 8.191857613773323
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
					44.36981617031995,
					203.469262921667
				],
				[
					-60.193843959834,
					382.33732387971577
				]
			]
		},
		{
			"type": "text",
			"version": 489,
			"versionNonce": 1758438210,
			"isDeleted": false,
			"id": "9qByeH7g",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -115.5888958620543,
			"y": 640.3226124437533,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 571.875,
			"height": 230.39999999999998,
			"seed": 206035286,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "public class MyTest2 {\n    public static void main(String[] args) throws Exception {\n        //获取Class类的对象\n        Class c1 = Class.forName(\"xxx.xxx.xxxtest.Math\");\n        //通过默认方法创建Math对象\n        Object o = c1.newInstance();\n        //获取Method\n        Method run = c1.getMethod(\"run\", null);\n        //执行run方法\n        run.invoke(o, null);\n    }\n}",
			"rawText": "public class MyTest2 {\n    public static void main(String[] args) throws Exception {\n        //获取Class类的对象\n        Class c1 = Class.forName(\"xxx.xxx.xxxtest.Math\");\n        //通过默认方法创建Math对象\n        Object o = c1.newInstance();\n        //获取Method\n        Method run = c1.getMethod(\"run\", null);\n        //执行run方法\n        run.invoke(o, null);\n    }\n}",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "public class MyTest2 {\n    public static void main(String[] args) throws Exception {\n        //获取Class类的对象\n        Class c1 = Class.forName(\"xxx.xxx.xxxtest.Math\");\n        //通过默认方法创建Math对象\n        Object o = c1.newInstance();\n        //获取Method\n        Method run = c1.getMethod(\"run\", null);\n        //执行run方法\n        run.invoke(o, null);\n    }\n}",
			"lineHeight": 1.2,
			"baseline": 227
		},
		{
			"type": "ellipse",
			"version": 1178,
			"versionNonce": 132164062,
			"isDeleted": false,
			"id": "LpnqAXhwpDm54OlGmWNZD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -113.91737662853453,
			"y": 586.8790448831642,
			"strokeColor": "#ffffff",
			"backgroundColor": "#e03131",
			"width": 25.9388888616927,
			"height": 25.9388888616927,
			"seed": 876835414,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1267,
			"versionNonce": 1665002242,
			"isDeleted": false,
			"id": "b-nPl-sONuvkm2i0QCH_a",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -80.23735062218061,
			"y": 587.3101315304389,
			"strokeColor": "#ffffff",
			"backgroundColor": "#f08c00",
			"width": 25.9388888616927,
			"height": 25.9388888616927,
			"seed": 655275926,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1283,
			"versionNonce": 1747697182,
			"isDeleted": false,
			"id": "QjTnPRhtvYhr6e9-m4JG9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -47.931643585345,
			"y": 587.3101315304393,
			"strokeColor": "#ffffff",
			"backgroundColor": "#099268",
			"width": 25.9388888616927,
			"height": 25.9388888616927,
			"seed": 1119835350,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 831,
			"versionNonce": 1343044290,
			"isDeleted": false,
			"id": "V2IbmDf5bz591T-7Qmvb1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -128.52898453354732,
			"y": 622.2633356771662,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 586.6148738944182,
			"height": 0,
			"seed": 1894402582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					586.6148738944182,
					0
				]
			]
		},
		{
			"type": "text",
			"version": 220,
			"versionNonce": 1854556766,
			"isDeleted": false,
			"id": "6imzKr6F",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 500.1321796214314,
			"y": 679.1423676589338,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 560,
			"height": 72,
			"seed": 927226250,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710287795717,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "实际使用反射中，我们可以理解为class对象是入口，\n\n它提供了访问类字节码信息的接口，真正访问的是类字节码信息",
			"rawText": "实际使用反射中，我们可以理解为class对象是入口，\n\n它提供了访问类字节码信息的接口，真正访问的是类字节码信息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "实际使用反射中，我们可以理解为class对象是入口，\n\n它提供了访问类字节码信息的接口，真正访问的是类字节码信息",
			"lineHeight": 1.2,
			"baseline": 67
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#ffffff",
		"currentItemBackgroundColor": "#1e1e1e",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 4,
		"currentItemStrokeStyle": "dotted",
		"currentItemRoughness": 0,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 1355.5664950600049,
		"scrollY": 774.1189737940604,
		"zoom": {
			"value": 0.4
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