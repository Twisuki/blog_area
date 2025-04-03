---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
<mappers>  
        <mapper resource="com/blueboy/mapper/UserMapper.xml"/>  
</mappers>   ^FLA1sHsE

UserMapper接口 ^rFwoiTNR

public interface UserMapper {  
    List<User> selectAll();  
} ^H97FQndR

UserMapper.xml ^7DNl4mGD

<mapper namespace="com.blueboy.mapper.UserMapper">   
    <select id="selectAll" resultType="com.blueboy.pojo.User">  
        select * from tb_user;  
    </select>  
</mapper> ^niYaZ8Tm

可以定位到接口的全类名 ^2G0urIy9

id与接口方法名一致 ^MVh19Mqx

  结果封装成什么类型，
也要和接口中的类型一致
注意：
    写封装成User类型，
    不写List ^oklYP9qu

1 ^mOwkO7nm

2 ^a5LBINKN

3 ^jzmkiyzG

- 大致流程为 1 2 3，加载核心文件就会根据 2  3 之间的对应关系实现UserMapper.xml和UserMapper的绑定。

- 使用时使用 sqlSession.getMapper(UserMapper.class)获取一个UserMapper类型的mapper对象，
  这个对象中实现了 UserMapper接口中的方法 和 UserMapper.xml 中方法名和statement id一致之间的绑定。
  使用时只需要用 mapper对象中的方法即可实现相关sql操作。


- 实际编写时建议使用 3 2 1 顺序进行编写 ^fuFJedDM

核心配置文件：mybatis-config.xml ^jivHO9Ap

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
			"version": 829,
			"versionNonce": 646749496,
			"isDeleted": false,
			"id": "8K-DpoNG1mO4zEzabUTuT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 904.7399393757421,
			"y": 930.7933791381384,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 828.6721847037362,
			"height": 220.86406209055144,
			"seed": 528765752,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "FLA1sHsE"
				},
				{
					"id": "pBesqoNGsGrQW-0lO21lA",
					"type": "arrow"
				}
			],
			"updated": 1711024533263,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1456,
			"versionNonce": 1939212344,
			"isDeleted": false,
			"id": "FLA1sHsE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 909.7399393757421,
			"y": 1005.2254101834142,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 750,
			"height": 72,
			"seed": 1220024392,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024533264,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "<mappers>  \n        <mapper resource=\"com/blueboy/mapper/UserMapper.xml\"/>  \n</mappers>  ",
			"rawText": "<mappers>  \n        <mapper resource=\"com/blueboy/mapper/UserMapper.xml\"/>  \n</mappers>  ",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "8K-DpoNG1mO4zEzabUTuT",
			"originalText": "<mappers>  \n        <mapper resource=\"com/blueboy/mapper/UserMapper.xml\"/>  \n</mappers>  ",
			"lineHeight": 1.2,
			"baseline": 67
		},
		{
			"type": "rectangle",
			"version": 535,
			"versionNonce": 1135596360,
			"isDeleted": false,
			"id": "RdqBiyEifE84GRbMMxiV-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 907.5711531089246,
			"y": 534.2045585416195,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 780.3344696580502,
			"height": 264.00062155711856,
			"seed": 1095963448,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "pBesqoNGsGrQW-0lO21lA",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "niYaZ8Tm"
				}
			],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 436,
			"versionNonce": 1851778360,
			"isDeleted": false,
			"id": "niYaZ8Tm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 912.5711531089246,
			"y": 606.2048693201788,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 750,
			"height": 120,
			"seed": 144035675,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "<mapper namespace=\"com.blueboy.mapper.UserMapper\">   \n    <select id=\"selectAll\" resultType=\"com.blueboy.pojo.User\">  \n        select * from tb_user;  \n    </select>  \n</mapper>",
			"rawText": "<mapper namespace=\"com.blueboy.mapper.UserMapper\">   \n    <select id=\"selectAll\" resultType=\"com.blueboy.pojo.User\">  \n        select * from tb_user;  \n    </select>  \n</mapper>",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "RdqBiyEifE84GRbMMxiV-",
			"originalText": "<mapper namespace=\"com.blueboy.mapper.UserMapper\">   \n    <select id=\"selectAll\" resultType=\"com.blueboy.pojo.User\">  \n        select * from tb_user;  \n    </select>  \n</mapper>",
			"lineHeight": 1.2,
			"baseline": 115
		},
		{
			"type": "arrow",
			"version": 1948,
			"versionNonce": 2079021624,
			"isDeleted": false,
			"id": "pBesqoNGsGrQW-0lO21lA",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1361.4548006773207,
			"y": 918.5771839316485,
			"strokeColor": "#c2255c",
			"backgroundColor": "#ffffff",
			"width": 2.844044291480941,
			"height": 111.13310106040785,
			"seed": 782021749,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1711024533265,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "8K-DpoNG1mO4zEzabUTuT",
				"gap": 12.216195206489942,
				"focus": 0.1092356933328986
			},
			"endBinding": {
				"elementId": "RdqBiyEifE84GRbMMxiV-",
				"gap": 9.23890277250257,
				"focus": -0.14549244711544188
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
					-2.844044291480941,
					-111.13310106040785
				]
			]
		},
		{
			"type": "rectangle",
			"version": 712,
			"versionNonce": 614366776,
			"isDeleted": false,
			"id": "Bg0fSQr4m-Al2RJuEIqlt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 906.1086799708369,
			"y": 38.10004053180285,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 784.5343157259257,
			"height": 221.00477765300036,
			"seed": 153415157,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "H97FQndR"
				}
			],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 427,
			"versionNonce": 1496949064,
			"isDeleted": false,
			"id": "H97FQndR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 911.1086799708369,
			"y": 112.60242935830303,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 363.28125,
			"height": 72,
			"seed": 1218518139,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "public interface UserMapper {  \n    List<User> selectAll();  \n}",
			"rawText": "public interface UserMapper {  \n    List<User> selectAll();  \n}",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "Bg0fSQr4m-Al2RJuEIqlt",
			"originalText": "public interface UserMapper {  \n    List<User> selectAll();  \n}",
			"lineHeight": 1.2,
			"baseline": 67
		},
		{
			"type": "text",
			"version": 136,
			"versionNonce": 698480440,
			"isDeleted": false,
			"id": "rFwoiTNR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 919.3504527846998,
			"y": -3.76768302888712,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffffff",
			"width": 157.1875,
			"height": 24,
			"seed": 813581883,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "UserMapper接口",
			"rawText": "UserMapper接口",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "UserMapper接口",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 127,
			"versionNonce": 856045640,
			"isDeleted": false,
			"id": "7DNl4mGD",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 925.2659111221569,
			"y": 496.38197064820883,
			"strokeColor": "#f08c00",
			"backgroundColor": "#ffffff",
			"width": 164.0625,
			"height": 24,
			"seed": 408419509,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "UserMapper.xml",
			"rawText": "UserMapper.xml",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "UserMapper.xml",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 213,
			"versionNonce": 298733624,
			"isDeleted": false,
			"id": "5HjvXzesUPc_a5Ir2v0RB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1131.5070975737476,
			"y": 602.6273430269324,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 352.0850194429473,
			"height": 28.213801374757153,
			"seed": 539874875,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 67,
			"versionNonce": 709905736,
			"isDeleted": false,
			"id": "wX6cs8Y86e4uwWcpSlsn8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 894.6026240478781,
			"y": -11.98309980324759,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 228.47429676844206,
			"height": 37.10265354569942,
			"seed": 1257023931,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711024530289,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 116,
			"versionNonce": 402310728,
			"isDeleted": false,
			"id": "2G0urIy9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1883.1688645408385,
			"y": 327.8348640802432,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 220,
			"height": 24,
			"seed": 1076987477,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "可以定位到接口的全类名",
			"rawText": "可以定位到接口的全类名",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "可以定位到接口的全类名",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 90,
			"versionNonce": 246522424,
			"isDeleted": false,
			"id": "6uxWNeJo-Xfdc-v1zZ3MW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1094.4863216668614,
			"y": 632.7950168522748,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 115.80450449264208,
			"height": 22.526365601321004,
			"seed": 1090507797,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 54,
			"versionNonce": 677035336,
			"isDeleted": false,
			"id": "XBnAodk_R8l9T4_S3Wrr8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1077.4452887535017,
			"y": 137.53303070555114,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 149.90253611976232,
			"height": 24.54156457758677,
			"seed": 1230878363,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 207,
			"versionNonce": 1855410232,
			"isDeleted": false,
			"id": "MVh19Mqx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1112.6739151613908,
			"y": 374.04905237289506,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 183.4375,
			"height": 24,
			"seed": 887833179,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024473123,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "id与接口方法名一致",
			"rawText": "id与接口方法名一致",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "id与接口方法名一致",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 715,
			"versionNonce": 349996088,
			"isDeleted": false,
			"id": "oklYP9qu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 573.119538531314,
			"y": 307.8299256785773,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 233.75,
			"height": 120,
			"seed": 1859405205,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024649061,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "  结果封装成什么类型，\n也要和接口中的类型一致\n注意：\n    写封装成User类型，\n    不写List",
			"rawText": "  结果封装成什么类型，\n也要和接口中的类型一致\n注意：\n    写封装成User类型，\n    不写List",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "  结果封装成什么类型，\n也要和接口中的类型一致\n注意：\n    写封装成User类型，\n    不写List",
			"lineHeight": 1.2,
			"baseline": 115
		},
		{
			"type": "rectangle",
			"version": 311,
			"versionNonce": 1269959496,
			"isDeleted": false,
			"id": "YrI0O1rxnuGd8wX03oRMW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": 924.4985059639004,
			"y": 883.414490746738,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 39.1875,
			"height": 39.1875,
			"seed": 1105283605,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "mOwkO7nm",
					"type": "text"
				}
			],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 215,
			"versionNonce": 146615608,
			"isDeleted": false,
			"id": "mOwkO7nm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 941.3822568794277,
			"y": 890.508240746738,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 5.4199981689453125,
			"height": 25,
			"seed": 800669557,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "1",
			"rawText": "1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YrI0O1rxnuGd8wX03oRMW",
			"originalText": "1",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 186,
			"versionNonce": 1323393608,
			"isDeleted": false,
			"id": "lUIXyV2hMP_82XES2kZvm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": 914.5070217076503,
			"y": 441.8051975249438,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 39.1875,
			"height": 39.1875,
			"seed": 888435349,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "a5LBINKN"
				}
			],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 92,
			"versionNonce": 336774712,
			"isDeleted": false,
			"id": "a5LBINKN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 926.9807765904628,
			"y": 448.8989475249438,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 14.239990234375,
			"height": 25,
			"seed": 391337973,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "2",
			"rawText": "2",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "lUIXyV2hMP_82XES2kZvm",
			"originalText": "2",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "rectangle",
			"version": 204,
			"versionNonce": 907592,
			"isDeleted": false,
			"id": "nSeFIzMw-plIXQfSGr1mR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 2,
			"opacity": 100,
			"angle": 0,
			"x": 902.4894930767233,
			"y": -71.2476790274718,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 39.1875,
			"height": 39.1875,
			"seed": 1625213019,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jzmkiyzG"
				}
			],
			"updated": 1711024466926,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 112,
			"versionNonce": 860700472,
			"isDeleted": false,
			"id": "jzmkiyzG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 915.2732455181296,
			"y": -64.1539290274718,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 13.6199951171875,
			"height": 25,
			"seed": 1211827451,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "3",
			"rawText": "3",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nSeFIzMw-plIXQfSGr1mR",
			"originalText": "3",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 1178,
			"versionNonce": 1785596728,
			"isDeleted": false,
			"id": "fuFJedDM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 851.4407989921265,
			"y": 1279.0591880821644,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 1052.1875,
			"height": 192,
			"seed": 416314805,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024657995,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "- 大致流程为 1 2 3，加载核心文件就会根据 2  3 之间的对应关系实现UserMapper.xml和UserMapper的绑定。\n\n- 使用时使用 sqlSession.getMapper(UserMapper.class)获取一个UserMapper类型的mapper对象，\n  这个对象中实现了 UserMapper接口中的方法 和 UserMapper.xml 中方法名和statement id一致之间的绑定。\n  使用时只需要用 mapper对象中的方法即可实现相关sql操作。\n\n\n- 实际编写时建议使用 3 2 1 顺序进行编写",
			"rawText": "- 大致流程为 1 2 3，加载核心文件就会根据 2  3 之间的对应关系实现UserMapper.xml和UserMapper的绑定。\n\n- 使用时使用 sqlSession.getMapper(UserMapper.class)获取一个UserMapper类型的mapper对象，\n  这个对象中实现了 UserMapper接口中的方法 和 UserMapper.xml 中方法名和statement id一致之间的绑定。\n  使用时只需要用 mapper对象中的方法即可实现相关sql操作。\n\n\n- 实际编写时建议使用 3 2 1 顺序进行编写",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "- 大致流程为 1 2 3，加载核心文件就会根据 2  3 之间的对应关系实现UserMapper.xml和UserMapper的绑定。\n\n- 使用时使用 sqlSession.getMapper(UserMapper.class)获取一个UserMapper类型的mapper对象，\n  这个对象中实现了 UserMapper接口中的方法 和 UserMapper.xml 中方法名和statement id一致之间的绑定。\n  使用时只需要用 mapper对象中的方法即可实现相关sql操作。\n\n\n- 实际编写时建议使用 3 2 1 顺序进行编写",
			"lineHeight": 1.2,
			"baseline": 187
		},
		{
			"type": "text",
			"version": 265,
			"versionNonce": 1456511032,
			"isDeleted": false,
			"id": "jivHO9Ap",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 985.6192754485136,
			"y": 893.6333655221201,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 350.9375,
			"height": 24,
			"seed": 1711585096,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466926,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "核心配置文件：mybatis-config.xml",
			"rawText": "核心配置文件：mybatis-config.xml",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "核心配置文件：mybatis-config.xml",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "freedraw",
			"version": 73,
			"versionNonce": 862973496,
			"isDeleted": false,
			"id": "ES4CDS2vPMC2zKFsDMYRe",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1371.5819815926484,
			"y": 655.4849777480874,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 6.124964372614841,
			"height": 115.60840004811064,
			"seed": 221590328,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024524674,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					1.5312255811027171
				],
				[
					0,
					2.2968383716540757
				],
				[
					0,
					3.828063952756793
				],
				[
					0,
					5.359351582063596
				],
				[
					0,
					7.656189953717558
				],
				[
					0,
					10.718641115922992
				],
				[
					0,
					13.781154326332398
				],
				[
					0,
					18.37483106964055
				],
				[
					0,
					22.202957070601315
				],
				[
					0,
					26.031021023358107
				],
				[
					0,
					32.15598539597295
				],
				[
					0,
					36.74972418748507
				],
				[
					0,
					42.10901372134458
				],
				[
					0,
					47.46836530340806
				],
				[
					0,
					52.0620420467161
				],
				[
					0.7656127905513586,
					56.65578083822834
				],
				[
					0.7656127905513586,
					60.48384479098502
				],
				[
					0.7656127905513586,
					65.07758358249725
				],
				[
					0.7656127905513586,
					68.14003474470258
				],
				[
					0.7656127905513586,
					71.2025479551121
				],
				[
					1.5312876293069166,
					74.26499911731742
				],
				[
					1.5312876293069166,
					76.56183748897149
				],
				[
					1.5312876293069166,
					78.0931251182783
				],
				[
					1.5312876293069166,
					80.38996348993237
				],
				[
					1.5312876293069166,
					81.92118907103497
				],
				[
					1.5312876293069166,
					82.68680186158633
				],
				[
					1.5312876293069166,
					84.21802744268905
				],
				[
					1.5312876293069166,
					84.98364023324041
				],
				[
					2.296900419858275,
					85.74931507199585
				],
				[
					2.296900419858275,
					86.51492786254721
				],
				[
					2.296900419858275,
					88.04615344364993
				],
				[
					2.296900419858275,
					88.81176623420117
				],
				[
					3.0625132104094064,
					89.57737902475253
				],
				[
					3.0625132104094064,
					90.34299181530389
				],
				[
					3.0625132104094064,
					91.10860460585525
				],
				[
					3.0625132104094064,
					91.8742173964066
				],
				[
					3.0625132104094064,
					92.63983018695797
				],
				[
					3.0625132104094064,
					93.40550502571341
				],
				[
					3.828126000960765,
					94.17111781626477
				],
				[
					3.828126000960765,
					94.93673060681613
				],
				[
					3.828126000960765,
					95.70234339736749
				],
				[
					4.5937387915121235,
					97.23356897847009
				],
				[
					4.5937387915121235,
					98.7647945595728
				],
				[
					5.359351582063482,
					100.29602014067552
				],
				[
					5.359351582063482,
					101.82730776998233
				],
				[
					5.359351582063482,
					102.59292056053368
				],
				[
					6.124964372614841,
					103.35853335108504
				],
				[
					6.124964372614841,
					104.12414614163629
				],
				[
					6.124964372614841,
					104.88975893218765
				],
				[
					6.124964372614841,
					105.655371722739
				],
				[
					6.124964372614841,
					106.42098451329036
				],
				[
					6.124964372614841,
					107.18659730384172
				],
				[
					6.124964372614841,
					107.95221009439308
				],
				[
					6.124964372614841,
					108.71782288494444
				],
				[
					6.124964372614841,
					109.4834356754958
				],
				[
					6.124964372614841,
					110.24911051425124
				],
				[
					6.124964372614841,
					111.0147233048026
				],
				[
					6.124964372614841,
					111.78033609535385
				],
				[
					6.124964372614841,
					112.5459488859052
				],
				[
					6.124964372614841,
					113.31156167645656
				],
				[
					6.124964372614841,
					114.07717446700792
				],
				[
					6.124964372614841,
					114.84278725755928
				],
				[
					6.124964372614841,
					115.60840004811064
				],
				[
					6.124964372614841,
					115.60840004811064
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 113,
			"versionNonce": 575991864,
			"isDeleted": false,
			"id": "huA7UYLUigl3iqePgyQ6D",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1374.6444948030578,
			"y": 771.0933777961981,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 545.1204951263348,
			"height": 13.781154326332398,
			"seed": 1007027512,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024511426,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.7656127905511312,
					0
				],
				[
					-3.0625132104094064,
					0.7656127905513586
				],
				[
					-6.124964372614841,
					1.5312255811027171
				],
				[
					-9.187415534820047,
					2.2969004198581615
				],
				[
					-13.01554153578104,
					3.8281260009608786
				],
				[
					-16.843605488537605,
					5.359351582063482
				],
				[
					-24.499795442255163,
					6.890577163166199
				],
				[
					-29.859147024318872,
					8.421802744268916
				],
				[
					-38.28094976858779,
					9.953028325371633
				],
				[
					-45.937139722305346,
					11.484315954678436
				],
				[
					-49.76520367506191,
					11.484315954678436
				],
				[
					-64.31197079194567,
					13.01554153578104
				],
				[
					-73.49938632676594,
					13.781154326332398
				],
				[
					-83.45247670034178,
					13.781154326332398
				],
				[
					-94.17111781626454,
					13.781154326332398
				],
				[
					-105.65537172273889,
					13.01554153578104
				],
				[
					-117.13968767741721,
					13.01554153578104
				],
				[
					-127.09271600278885,
					12.249928745229681
				],
				[
					-140.87387032912125,
					12.249928745229681
				],
				[
					-150.82689865449288,
					11.484315954678436
				],
				[
					-165.37366577137664,
					11.484315954678436
				],
				[
					-176.09230688729963,
					10.718703164127078
				],
				[
					-186.81094800322262,
					10.718703164127078
				],
				[
					-202.8889407012091,
					9.953028325371633
				],
				[
					-214.37325665588742,
					9.187415534820275
				],
				[
					-226.62312335291313,
					8.421802744268916
				],
				[
					-239.63866488869417,
					7.656189953717558
				],
				[
					-248.82608042351444,
					7.656189953717558
				],
				[
					-259.5447215394372,
					6.890577163166199
				],
				[
					-269.49774986480884,
					6.890577163166199
				],
				[
					-279.45084023838467,
					6.890577163166199
				],
				[
					-287.8726429826536,
					6.890577163166199
				],
				[
					-297.8256713080252,
					6.124964372614841
				],
				[
					-306.2474740522939,
					6.124964372614841
				],
				[
					-314.6692767965628,
					6.124964372614841
				],
				[
					-323.09107954083174,
					5.359351582063482
				],
				[
					-331.51288228510066,
					5.359351582063482
				],
				[
					-337.6378466577155,
					5.359351582063482
				],
				[
					-344.5284238208817,
					5.359351582063482
				],
				[
					-349.8877133547412,
					5.359351582063482
				],
				[
					-356.01267772735605,
					5.359351582063482
				],
				[
					-360.6064165188682,
					5.359351582063482
				],
				[
					-365.9657060527277,
					5.359351582063482
				],
				[
					-370.5594448442398,
					5.359351582063482
				],
				[
					-376.68440921685465,
					5.359351582063482
				],
				[
					-381.2780859601628,
					4.5937387915121235
				],
				[
					-386.6374375422263,
					4.5937387915121235
				],
				[
					-391.23111428553443,
					4.5937387915121235
				],
				[
					-396.5904658675979,
					4.5937387915121235
				],
				[
					-400.4185918685587,
					4.5937387915121235
				],
				[
					-405.7778814024182,
					4.5937387915121235
				],
				[
					-409.60600740337895,
					3.8281260009608786
				],
				[
					-414.1996841466871,
					3.8281260009608786
				],
				[
					-418.02781014764787,
					3.8281260009608786
				],
				[
					-422.621486890956,
					3.06251321040952
				],
				[
					-426.4495818678147,
					3.06251321040952
				],
				[
					-431.8089334498783,
					3.06251321040952
				],
				[
					-434.8714156361857,
					3.06251321040952
				],
				[
					-440.99634898469844,
					2.2969004198581615
				],
				[
					-444.82444396155734,
					2.2969004198581615
				],
				[
					-450.9494083341722,
					2.2969004198581615
				],
				[
					-456.30872889213356,
					1.5312255811027171
				],
				[
					-461.66804945009517,
					1.5312255811027171
				],
				[
					-465.49614442695383,
					1.5312255811027171
				],
				[
					-469.3242394038127,
					1.5312255811027171
				],
				[
					-472.38672159012003,
					0.7656127905513586
				],
				[
					-475.44920377642757,
					0.7656127905513586
				],
				[
					-477.74604214808164,
					0.7656127905513586
				],
				[
					-480.0429115438376,
					0.7656127905513586
				],
				[
					-482.33974991549167,
					0.7656127905513586
				],
				[
					-484.63661931124784,
					0.7656127905513586
				],
				[
					-486.16784489235044,
					0.7656127905513586
				],
				[
					-488.4647142881065,
					0.7656127905513586
				],
				[
					-489.9959398692092,
					0.7656127905513586
				],
				[
					-491.52719647441404,
					0.7656127905513586
				],
				[
					-493.05842205551676,
					0.7656127905513586
				],
				[
					-495.3552604271707,
					0
				],
				[
					-497.6521298229268,
					0
				],
				[
					-499.94899921868296,
					0
				],
				[
					-501.48022479978556,
					0
				],
				[
					-503.7770941955416,
					0
				],
				[
					-506.0739325671957,
					0
				],
				[
					-509.1364147535031,
					0
				],
				[
					-510.66764033460584,
					0
				],
				[
					-512.9645097303619,
					0
				],
				[
					-514.4957353114646,
					0
				],
				[
					-516.7926047072207,
					0
				],
				[
					-519.0894430788748,
					0
				],
				[
					-520.6206996840795,
					0
				],
				[
					-522.1519252651822,
					0
				],
				[
					-523.6831508462849,
					0
				],
				[
					-525.2144074514896,
					0
				],
				[
					-527.5112458231437,
					0
				],
				[
					-529.0425024283484,
					0
				],
				[
					-531.3393408000024,
					0
				],
				[
					-532.1049846146559,
					0
				],
				[
					-533.6362101957585,
					0
				],
				[
					-535.1674357768612,
					0
				],
				[
					-536.6986923820659,
					0
				],
				[
					-537.4643051726173,
					0
				],
				[
					-539.7611435442714,
					0
				],
				[
					-540.5267873589247,
					0
				],
				[
					-545.1204951263348,
					0
				],
				[
					-545.1204951263348,
					0
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 52,
			"versionNonce": 893714760,
			"isDeleted": false,
			"id": "E3-KPC-VW7oW7fjSswbKN",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 950.4917823309991,
			"y": 146.34857850663525,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 123.26462102593018,
			"height": 8.421818256319966,
			"seed": 1901216584,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024509855,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.7656748387553307,
					0
				],
				[
					-2.296869395755948,
					0
				],
				[
					-3.828126000960765,
					0
				],
				[
					-6.890608187268185,
					0.7656283026024084
				],
				[
					-9.187446558922147,
					0.7656283026024084
				],
				[
					-11.484315954678323,
					0.7656283026024084
				],
				[
					-14.546798140985743,
					1.5312410931537386
				],
				[
					-17.609249303191064,
					1.5312410931537386
				],
				[
					-21.437344280049956,
					1.5312410931537386
				],
				[
					-22.202957070601315,
					1.5312410931537386
				],
				[
					-28.327921443216155,
					2.2968693957561186
				],
				[
					-31.390403629523576,
					2.2968693957561186
				],
				[
					-35.98411139693371,
					3.0624821863074487
				],
				[
					-39.04659358324113,
					3.0624821863074487
				],
				[
					-43.64030135065127,
					3.0624821863074487
				],
				[
					-48.234009118061294,
					3.828094976858779
				],
				[
					-52.827716885471546,
					3.828094976858779
				],
				[
					-57.42142465288157,
					3.828094976858779
				],
				[
					-62.01513242029171,
					3.828094976858779
				],
				[
					-68.14009679290666,
					4.593723279461187
				],
				[
					-73.49941735086804,
					5.359336070012489
				],
				[
					-76.56189953717558,
					5.359336070012489
				],
				[
					-81.1556073045856,
					6.124948860563848
				],
				[
					-84.98370228144438,
					6.890577163166256
				],
				[
					-88.81179725830316,
					6.890577163166256
				],
				[
					-92.63989223516194,
					7.656189953717558
				],
				[
					-96.46798721202072,
					7.656189953717558
				],
				[
					-99.53043837422615,
					7.656189953717558
				],
				[
					-102.59292056053357,
					7.656189953717558
				],
				[
					-106.42101553739235,
					7.656189953717558
				],
				[
					-109.48349772369977,
					7.656189953717558
				],
				[
					-111.01472330480249,
					8.421818256319966
				],
				[
					-113.31159270055855,
					8.421818256319966
				],
				[
					-115.60843107221262,
					8.421818256319966
				],
				[
					-116.37407488686597,
					8.421818256319966
				],
				[
					-117.90530046796869,
					8.421818256319966
				],
				[
					-118.67091325852005,
					8.421818256319966
				],
				[
					-119.43652604907129,
					8.421818256319966
				],
				[
					-120.20216986372475,
					8.421818256319966
				],
				[
					-120.9677826542761,
					8.421818256319966
				],
				[
					-121.73339544482747,
					8.421818256319966
				],
				[
					-122.49900823537882,
					8.421818256319966
				],
				[
					-123.26462102593018,
					8.421818256319966
				],
				[
					-123.26462102593018,
					8.421818256319966
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 165,
			"versionNonce": 1533183288,
			"isDeleted": false,
			"id": "fmEjgLeY1grNXx614LT5m",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 817.2741019555953,
			"y": 161.66095841407036,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 18.374862093742536,
			"height": 605.6043554293709,
			"seed": 937575752,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024508300,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					1.5312410931537102
				],
				[
					0,
					5.359336070012489
				],
				[
					0,
					12.249897721127695
				],
				[
					0,
					19.906087674845253
				],
				[
					0.7656127905513586,
					30.624744302819238
				],
				[
					0.7656127905513586,
					42.109029233395574
				],
				[
					0.7656127905513586,
					58.18702193138205
				],
				[
					0,
					71.9681452336124
				],
				[
					0,
					88.04613793159888
				],
				[
					0,
					104.1241306295853
				],
				[
					0,
					120.20212332757177
				],
				[
					0,
					134.74889044445558
				],
				[
					0.7656127905513586,
					152.35810872354472
				],
				[
					0.7656127905513586,
					166.13923202577507
				],
				[
					1.5312566052047032,
					179.92038635210753
				],
				[
					1.5312566052047032,
					191.40467128268386
				],
				[
					1.5312566052047032,
					201.35769960805544
				],
				[
					2.2968693957560617,
					209.77950235232436
				],
				[
					2.2968693957560617,
					219.73256170179798
				],
				[
					3.0624821863074203,
					228.1543644460669
				],
				[
					3.0624821863074203,
					236.5761671903358
				],
				[
					3.828094976858779,
					244.99796993460473
				],
				[
					3.828094976858779,
					251.88851607366888
				],
				[
					3.828094976858779,
					258.0134804462837
				],
				[
					4.593707767410137,
					264.1384448188986
				],
				[
					4.593707767410137,
					267.96650877165536
				],
				[
					4.593707767410137,
					271.79460374851413
				],
				[
					4.593707767410137,
					274.85708593482155
				],
				[
					4.593707767410137,
					277.919568121129
				],
				[
					4.593707767410137,
					280.216406492783
				],
				[
					4.593707767410137,
					283.27888867909047
				],
				[
					4.593707767410137,
					286.3413708653979
				],
				[
					4.593707767410137,
					289.4038530517053
				],
				[
					4.593707767410137,
					293.2319480285641
				],
				[
					4.593707767410137,
					297.06004300542287
				],
				[
					4.593707767410137,
					300.8881069581796
				],
				[
					4.593707767410137,
					305.4818457496918
				],
				[
					4.593707767410137,
					308.54429691189716
				],
				[
					4.593707767410137,
					312.372422912858
				],
				[
					4.593707767410137,
					316.2004868656147
				],
				[
					4.593707767410137,
					320.02861286657554
				],
				[
					5.359351582063596,
					323.0910640287809
				],
				[
					5.359351582063596,
					328.45041561084446
				],
				[
					5.359351582063596,
					332.2784795636012
				],
				[
					5.359351582063596,
					336.8722183551134
				],
				[
					5.359351582063596,
					341.4658950984214
				],
				[
					6.124964372614954,
					346.0596338899336
				],
				[
					6.124964372614954,
					349.88769784269033
				],
				[
					6.124964372614954,
					354.4814366342025
				],
				[
					6.124964372614954,
					357.54388779640783
				],
				[
					6.124964372614954,
					360.60640100681735
				],
				[
					6.124964372614954,
					362.9032393784714
				],
				[
					6.124964372614954,
					365.96569054067675
				],
				[
					6.890577163166199,
					368.2625909605349
				],
				[
					6.890577163166199,
					372.0906549132916
				],
				[
					6.890577163166199,
					375.153106075497
				],
				[
					6.890577163166199,
					379.74684486700914
				],
				[
					7.656189953717558,
					383.57490881976594
				],
				[
					7.656189953717558,
					388.16864761127806
				],
				[
					7.656189953717558,
					391.2310987734835
				],
				[
					8.421802744268916,
					395.05922477444426
				],
				[
					8.421802744268916,
					398.1216759366497
				],
				[
					8.421802744268916,
					401.94980193761046
				],
				[
					9.187446558922261,
					405.0122530998159
				],
				[
					9.187446558922261,
					408.0747042620212
				],
				[
					9.187446558922261,
					410.3716046818794
				],
				[
					9.187446558922261,
					414.19966863463617
				],
				[
					9.95305934947362,
					417.2621818450456
				],
				[
					9.95305934947362,
					420.324633007251
				],
				[
					10.718672140024978,
					423.38708416945633
				],
				[
					10.718672140024978,
					427.2152101704172
				],
				[
					10.718672140024978,
					429.5120485420713
				],
				[
					10.718672140024978,
					432.5744997042766
				],
				[
					11.484284930576337,
					434.87140012413477
				],
				[
					11.484284930576337,
					437.16823849578884
				],
				[
					11.484284930576337,
					440.23068965799416
				],
				[
					11.484284930576337,
					442.5275900778523
				],
				[
					11.484284930576337,
					444.8244284495064
				],
				[
					12.249897721127695,
					447.8868796117117
				],
				[
					12.249897721127695,
					450.94939282212124
				],
				[
					12.249897721127695,
					453.2462311937752
				],
				[
					12.249897721127695,
					455.5430695654293
				],
				[
					13.015510511679054,
					457.83996998528744
				],
				[
					13.015510511679054,
					460.1368083569415
				],
				[
					13.015510511679054,
					463.19925951914684
				],
				[
					13.015510511679054,
					465.496159939005
				],
				[
					13.781154326332512,
					469.3242238917617
				],
				[
					13.781154326332512,
					472.3866750539671
				],
				[
					13.781154326332512,
					475.44918826437663
				],
				[
					13.781154326332512,
					478.51163942658195
				],
				[
					14.546767116883757,
					481.57415263699147
				],
				[
					14.546767116883757,
					484.6366037991968
				],
				[
					14.546767116883757,
					486.93344217085087
				],
				[
					14.546767116883757,
					490.76156817181175
				],
				[
					14.546767116883757,
					493.82401933401707
				],
				[
					15.312379907435115,
					496.8864704962225
				],
				[
					15.312379907435115,
					500.71459649718327
				],
				[
					16.077992697986474,
					504.54266044994006
				],
				[
					16.077992697986474,
					508.3707864509008
				],
				[
					16.077992697986474,
					512.1988504036576
				],
				[
					16.077992697986474,
					515.261363614067
				],
				[
					16.077992697986474,
					519.0894275668238
				],
				[
					16.077992697986474,
					521.3862659384778
				],
				[
					16.077992697986474,
					525.2143919394387
				],
				[
					16.843605488537833,
					528.2768431016441
				],
				[
					16.843605488537833,
					532.1049691026049
				],
				[
					16.843605488537833,
					535.1674202648103
				],
				[
					16.843605488537833,
					538.995546265771
				],
				[
					17.609249303191177,
					542.8236102185278
				],
				[
					17.609249303191177,
					545.8860613807332
				],
				[
					17.609249303191177,
					548.9485745911427
				],
				[
					17.609249303191177,
					552.011025753348
				],
				[
					17.609249303191177,
					553.5422513344507
				],
				[
					17.609249303191177,
					555.8391517543089
				],
				[
					17.609249303191177,
					558.135990125963
				],
				[
					17.609249303191177,
					559.6672157070656
				],
				[
					18.374862093742536,
					561.9640540787196
				],
				[
					18.374862093742536,
					564.2609544985778
				],
				[
					18.374862093742536,
					565.7921800796805
				],
				[
					18.374862093742536,
					567.3234056607831
				],
				[
					18.374862093742536,
					569.6202440324372
				],
				[
					18.374862093742536,
					571.151531661744
				],
				[
					18.374862093742536,
					574.9795956145007
				],
				[
					18.374862093742536,
					575.745208405052
				],
				[
					18.374862093742536,
					577.2764339861548
				],
				[
					18.374862093742536,
					578.8076595672575
				],
				[
					18.374862093742536,
					579.5733344060129
				],
				[
					18.374862093742536,
					581.1045599871156
				],
				[
					18.374862093742536,
					581.870172777667
				],
				[
					18.374862093742536,
					583.4013983587696
				],
				[
					18.374862093742536,
					584.167011149321
				],
				[
					18.374862093742536,
					585.6982367304237
				],
				[
					18.374862093742536,
					586.463849520975
				],
				[
					18.374862093742536,
					587.9951371502818
				],
				[
					18.374862093742536,
					588.7607499408332
				],
				[
					18.374862093742536,
					589.5263627313846
				],
				[
					18.374862093742536,
					590.2919755219358
				],
				[
					18.374862093742536,
					591.0575883124872
				],
				[
					18.374862093742536,
					591.8232011030385
				],
				[
					18.374862093742536,
					592.5888138935899
				],
				[
					18.374862093742536,
					593.3544266841412
				],
				[
					18.374862093742536,
					594.1200394746926
				],
				[
					18.374862093742536,
					594.885652265244
				],
				[
					18.374862093742536,
					595.6513271039994
				],
				[
					18.374862093742536,
					596.4169398945508
				],
				[
					18.374862093742536,
					597.1825526851021
				],
				[
					18.374862093742536,
					597.9481654756534
				],
				[
					18.374862093742536,
					598.7137782662047
				],
				[
					18.374862093742536,
					599.4793910567561
				],
				[
					18.374862093742536,
					600.2450038473074
				],
				[
					18.374862093742536,
					601.0106166378588
				],
				[
					18.374862093742536,
					601.7762294284101
				],
				[
					18.374862093742536,
					602.5418422189615
				],
				[
					18.374862093742536,
					604.0731298482683
				],
				[
					18.374862093742536,
					604.8387426388197
				],
				[
					18.374862093742536,
					605.6043554293709
				],
				[
					18.374862093742536,
					605.6043554293709
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 132,
			"versionNonce": 1009916216,
			"isDeleted": false,
			"id": "1mwDUKh_k9JHxN0EE82JO",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1131.3169711075361,
			"y": 6.771127842201594,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 692.8848805704185,
			"height": 10.71865662797397,
			"seed": 332557128,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466927,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7656127905515859,
					0
				],
				[
					2.2968383716540757,
					-0.7656127905513586
				],
				[
					6.124933348512968,
					-0.7656127905513586
				],
				[
					9.953028325371633,
					-0.7656127905513586
				],
				[
					17.60924930319129,
					-1.531225581102703
				],
				[
					22.9685388370508,
					-1.531225581102703
				],
				[
					31.390341581319717,
					-2.2968538837050687
				],
				[
					40.577757116139765,
					-2.2968538837050687
				],
				[
					49.76517265096027,
					-3.062466674256413
				],
				[
					62.01510139618995,
					-3.828094976858793
				],
				[
					73.4993553026643,
					-3.828094976858793
				],
				[
					84.21805846679126,
					-3.828094976858793
				],
				[
					97.23353795436833,
					-4.593707767410137
				],
				[
					107.9522411184953,
					-4.593707767410137
				],
				[
					120.20210781552078,
					-4.593707767410137
				],
				[
					130.92074893144377,
					-4.593707767410137
				],
				[
					142.4050648861221,
					-4.593707767410137
				],
				[
					154.6549315831478,
					-4.593707767410137
				],
				[
					165.373634747275,
					-4.593707767410137
				],
				[
					176.85788865374911,
					-4.593707767410137
				],
				[
					189.87343018953015,
					-4.593707767410137
				],
				[
					198.29523293379907,
					-4.593707767410137
				],
				[
					207.48264846861935,
					-4.593707767410137
				],
				[
					221.26380279495174,
					-3.828094976858793
				],
				[
					231.21683112032338,
					-3.828094976858793
				],
				[
					238.10740828348958,
					-3.062466674256413
				],
				[
					248.0604366088612,
					-3.062466674256413
				],
				[
					256.4822393531301,
					-3.062466674256413
				],
				[
					264.90404209739904,
					-2.2968538837050687
				],
				[
					272.5602320511166,
					-2.2968538837050687
				],
				[
					279.4508092142828,
					-1.531225581102703
				],
				[
					286.341386377449,
					-1.531225581102703
				],
				[
					293.99757633116656,
					-0.7656127905513586
				],
				[
					300.8880914461288,
					-0.7656127905513586
				],
				[
					307.778668609295,
					-0.7656127905513586
				],
				[
					314.6692457724612,
					0
				],
				[
					322.3254357261785,
					0
				],
				[
					328.4504000987936,
					0
				],
				[
					336.1065900525109,
					0.7656283026023658
				],
				[
					342.2314923769218,
					0.7656283026023658
				],
				[
					349.88768233063934,
					1.5312410931537102
				],
				[
					355.24703391270305,
					1.5312410931537102
				],
				[
					362.13761107586924,
					2.2968538837050545
				],
				[
					367.4969626579327,
					2.2968538837050545
				],
				[
					374.3874777728947,
					3.0624821863074345
				],
				[
					380.51244214550957,
					3.0624821863074345
				],
				[
					387.403019308676,
					3.828094976858779
				],
				[
					395.0592092623933,
					3.828094976858779
				],
				[
					401.1841736350084,
					4.593723279461145
				],
				[
					408.0747507981746,
					4.593723279461145
				],
				[
					414.9652659131366,
					5.359336070012489
				],
				[
					421.09023028575143,
					5.359336070012489
				],
				[
					425.68396907726355,
					5.359336070012489
				],
				[
					431.8089334498786,
					5.359336070012489
				],
				[
					437.93383577428926,
					6.124948860563833
				],
				[
					444.82441293745546,
					6.124948860563833
				],
				[
					450.18376451951895,
					6.124948860563833
				],
				[
					457.07434168268514,
					6.124948860563833
				],
				[
					463.1992440070958,
					6.124948860563833
				],
				[
					470.85543396081357,
					6.124948860563833
				],
				[
					476.9803983334284,
					6.124948860563833
				],
				[
					482.3397499154919,
					6.124948860563833
				],
				[
					489.99593986920945,
					6.124948860563833
				],
				[
					493.824003821966,
					6.124948860563833
				],
				[
					499.1833554040297,
					6.124948860563833
				],
				[
					503.77703214733765,
					6.124948860563833
				],
				[
					508.37077093885,
					6.124948860563833
				],
				[
					513.7301225209135,
					6.124948860563833
				],
				[
					518.3237992642216,
					6.124948860563833
				],
				[
					523.6831508462851,
					6.124948860563833
				],
				[
					527.5112147990417,
					6.124948860563833
				],
				[
					532.104953590554,
					6.124948860563833
				],
				[
					535.9330175433106,
					6.124948860563833
				],
				[
					539.7610814960674,
					6.124948860563833
				],
				[
					545.1204330781311,
					6.124948860563833
				],
				[
					548.9485590790919,
					6.124948860563833
				],
				[
					552.0110102412973,
					5.359336070012489
				],
				[
					555.8391362422581,
					5.359336070012489
				],
				[
					559.6672622432188,
					5.359336070012489
				],
				[
					562.7297134054243,
					4.593723279461145
				],
				[
					566.557839406385,
					4.593723279461145
				],
				[
					569.6202905685905,
					4.593723279461145
				],
				[
					573.448292473143,
					4.593723279461145
				],
				[
					577.2764184741038,
					3.828094976858779
				],
				[
					581.1045444750648,
					3.828094976858779
				],
				[
					584.9326704760256,
					3.0624821863074345
				],
				[
					589.5263472193335,
					3.0624821863074345
				],
				[
					593.3544732202945,
					3.0624821863074345
				],
				[
					597.1824751248471,
					2.2968538837050545
				],
				[
					600.2450503834607,
					2.2968538837050545
				],
				[
					603.3075015456661,
					2.2968538837050545
				],
				[
					606.3699527078713,
					2.2968538837050545
				],
				[
					609.4324038700768,
					2.2968538837050545
				],
				[
					612.4948550322822,
					2.2968538837050545
				],
				[
					614.7917554521403,
					2.2968538837050545
				],
				[
					618.6198814531012,
					2.2968538837050545
				],
				[
					621.6823326153064,
					1.5312410931537102
				],
				[
					624.7447837775119,
					1.5312410931537102
				],
				[
					627.0416841973702,
					1.5312410931537102
				],
				[
					629.33846052082,
					0.7656283026023658
				],
				[
					632.4010357794336,
					0.7656283026023658
				],
				[
					635.4634869416391,
					0.7656283026023658
				],
				[
					637.760263265089,
					0
				],
				[
					640.8228385237026,
					0
				],
				[
					643.1196148471524,
					0
				],
				[
					646.1820660093579,
					0
				],
				[
					649.2446412679715,
					0
				],
				[
					652.3070924301767,
					0
				],
				[
					654.6038687536268,
					0
				],
				[
					656.9007691734848,
					-0.7656127905513586
				],
				[
					659.9632203356903,
					-0.7656127905513586
				],
				[
					662.2601207555483,
					-0.7656127905513586
				],
				[
					663.791346336651,
					-0.7656127905513586
				],
				[
					666.0882467565093,
					-1.531225581102703
				],
				[
					668.3850230799592,
					-1.531225581102703
				],
				[
					669.9162486610619,
					-1.531225581102703
				],
				[
					672.21314908092,
					-1.531225581102703
				],
				[
					673.7443746620227,
					-1.531225581102703
				],
				[
					675.2756002431254,
					-1.531225581102703
				],
				[
					676.0412750818807,
					-1.531225581102703
				],
				[
					677.5725006629834,
					-1.531225581102703
				],
				[
					679.8694010828417,
					-1.531225581102703
				],
				[
					682.1661774062916,
					-1.531225581102703
				],
				[
					689.8224294082131,
					-2.2968538837050687
				],
				[
					691.3536549893158,
					-2.2968538837050687
				],
				[
					692.1192057316632,
					-2.2968538837050687
				],
				[
					692.8848805704185,
					-2.2968538837050687
				],
				[
					692.8848805704185,
					-2.2968538837050687
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 136,
			"versionNonce": 1644835384,
			"isDeleted": false,
			"id": "vjiBxouaAx9d9g2NU7uoW",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1826.4986280014045,
			"y": -0.11943380891359823,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 15.312379907435115,
			"height": 594.1200704987947,
			"seed": 1322618440,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466927,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7656748387555581,
					3.062466674256399
				],
				[
					0.7656748387555581,
					3.828094976858779
				],
				[
					0.7656748387555581,
					6.124948860563833
				],
				[
					0.7656748387555581,
					10.71865662797397
				],
				[
					0.7656748387555581,
					16.07799269798646
				],
				[
					1.5313496775111162,
					21.437313255947927
				],
				[
					1.5313496775111162,
					27.562262116511775
				],
				[
					2.296900419858275,
					33.68721097707562
				],
				[
					2.296900419858275,
					41.34340093079318
				],
				[
					3.062575258613606,
					46.70273700080567
				],
				[
					3.8281260009609923,
					54.35892695452323
				],
				[
					4.593800839716323,
					60.483875815087075
				],
				[
					6.12502642081904,
					68.90567855935596
				],
				[
					6.890577163166199,
					75.79624021047117
				],
				[
					8.421802744268916,
					84.98365574529141
				],
				[
					9.187477583024474,
					93.4054584895603
				],
				[
					9.187477583024474,
					101.82729225793126
				],
				[
					9.953152421779805,
					111.78032058330287
				],
				[
					10.718703164127191,
					120.96773611812311
				],
				[
					11.484378002882522,
					127.85831328128931
				],
				[
					11.484378002882522,
					134.74889044445553
				],
				[
					11.484378002882522,
					142.40504937407104
				],
				[
					12.249928745229909,
					148.53001374668588
				],
				[
					12.249928745229909,
					156.9518164909548
				],
				[
					13.01560358398524,
					163.84239365412105
				],
				[
					13.01560358398524,
					172.2641963983899
				],
				[
					13.01560358398524,
					182.21722472376155
				],
				[
					13.781154326332626,
					192.17028407323517
				],
				[
					13.781154326332626,
					201.35769960805544
				],
				[
					13.781154326332626,
					212.84198453863178
				],
				[
					13.781154326332626,
					223.5606256545547
				],
				[
					13.781154326332626,
					234.2792977945797
				],
				[
					13.781154326332626,
					244.23235714405337
				],
				[
					13.781154326332626,
					252.65415988832223
				],
				[
					13.01560358398524,
					260.3103498420398
				],
				[
					13.01560358398524,
					267.96650877165524
				],
				[
					13.01560358398524,
					274.85708593482144
				],
				[
					12.249928745229909,
					281.74766309798775
				],
				[
					12.249928745229909,
					289.4038530517053
				],
				[
					12.249928745229909,
					296.2943991907694
				],
				[
					11.484378002882522,
					303.1849763539356
				],
				[
					10.718703164127191,
					313.13803570340934
				],
				[
					10.718703164127191,
					320.7941946330248
				],
				[
					9.953152421779805,
					329.2159973772937
				],
				[
					9.953152421779805,
					336.1065745404599
				],
				[
					9.953152421779805,
					342.9971517036261
				],
				[
					9.187477583024474,
					348.3565032856896
				],
				[
					9.187477583024474,
					355.2470184006517
				],
				[
					9.187477583024474,
					359.84075719216395
				],
				[
					9.187477583024474,
					365.20010877422743
				],
				[
					9.187477583024474,
					370.5593983080868
				],
				[
					9.187477583024474,
					375.15313709959906
				],
				[
					9.187477583024474,
					379.7468138429071
				],
				[
					9.187477583024474,
					385.87177821552194
				],
				[
					9.187477583024474,
					391.23112979758554
				],
				[
					8.421802744268916,
					397.3560941702004
				],
				[
					8.421802744268916,
					403.48099649461113
				],
				[
					8.421802744268916,
					409.605960867226
				],
				[
					8.421802744268916,
					414.1996996587381
				],
				[
					8.421802744268916,
					419.5589891925976
				],
				[
					8.421802744268916,
					437.1682695198909
				],
				[
					8.421802744268916,
					438.6994951009935
				],
				[
					8.421802744268916,
					443.29317184430164
				],
				[
					8.421802744268916,
					448.6525234263651
				],
				[
					8.421802744268916,
					452.4805873791218
				],
				[
					8.421802744268916,
					457.07432617063404
				],
				[
					8.421802744268916,
					460.9023901233907
				],
				[
					9.187477583024474,
					465.49612891490295
				],
				[
					9.187477583024474,
					468.5585800771083
				],
				[
					9.187477583024474,
					471.6210932875178
				],
				[
					9.187477583024474,
					474.6835444497231
				],
				[
					9.187477583024474,
					476.9803828213772
				],
				[
					9.187477583024474,
					480.0428960317867
				],
				[
					9.187477583024474,
					483.10534719399203
				],
				[
					9.953152421779805,
					486.16786040440155
				],
				[
					9.953152421779805,
					489.99592435715823
				],
				[
					9.953152421779805,
					492.2927627288123
				],
				[
					9.953152421779805,
					495.3552759392218
				],
				[
					9.953152421779805,
					497.6521143108758
				],
				[
					9.953152421779805,
					499.94895268252986
				],
				[
					9.953152421779805,
					502.245853102388
				],
				[
					10.718703164127191,
					504.5426914740421
				],
				[
					10.718703164127191,
					506.83952984569606
				],
				[
					10.718703164127191,
					509.13636821735014
				],
				[
					10.718703164127191,
					512.1988814277597
				],
				[
					10.718703164127191,
					514.4957197994137
				],
				[
					10.718703164127191,
					516.7925581710678
				],
				[
					10.718703164127191,
					519.8550713814773
				],
				[
					10.718703164127191,
					522.9175225436826
				],
				[
					11.484378002882522,
					525.2143609153367
				],
				[
					11.484378002882522,
					527.5112613351948
				],
				[
					11.484378002882522,
					530.5737124974002
				],
				[
					11.484378002882522,
					532.1049380785029
				],
				[
					11.484378002882522,
					534.401776450157
				],
				[
					12.249928745229909,
					535.9330640794637
				],
				[
					12.249928745229909,
					538.2299024511177
				],
				[
					12.249928745229909,
					539.7611280322204
				],
				[
					12.249928745229909,
					542.82364124263
				],
				[
					12.249928745229909,
					544.3548668237326
				],
				[
					12.249928745229909,
					547.417317985938
				],
				[
					13.01560358398524,
					548.9485435670407
				],
				[
					13.01560358398524,
					551.2454439868989
				],
				[
					13.01560358398524,
					552.7766695680015
				],
				[
					13.01560358398524,
					555.0735079396555
				],
				[
					13.01560358398524,
					556.6047335207583
				],
				[
					13.781154326332626,
					558.1359591018609
				],
				[
					13.781154326332626,
					560.432859521719
				],
				[
					13.781154326332626,
					562.7296978933731
				],
				[
					13.781154326332626,
					564.2609234744758
				],
				[
					13.781154326332626,
					567.3234366848852
				],
				[
					13.781154326332626,
					568.8546622659879
				],
				[
					14.546829165087956,
					571.151500637642
				],
				[
					14.546829165087956,
					572.6827262187447
				],
				[
					14.546829165087956,
					574.9795645903987
				],
				[
					14.546829165087956,
					576.5108522197055
				],
				[
					14.546829165087956,
					578.8076905913596
				],
				[
					14.546829165087956,
					580.3389161724623
				],
				[
					14.546829165087956,
					582.6357545441163
				],
				[
					14.546829165087956,
					584.167042173423
				],
				[
					15.312379907435115,
					585.6982677545258
				],
				[
					15.312379907435115,
					587.2294933356285
				],
				[
					15.312379907435115,
					587.9951061261798
				],
				[
					15.312379907435115,
					588.7607189167311
				],
				[
					15.312379907435115,
					589.5263317072825
				],
				[
					15.312379907435115,
					590.2919444978338
				],
				[
					15.312379907435115,
					591.8232321271406
				],
				[
					15.312379907435115,
					592.588844917692
				],
				[
					15.312379907435115,
					593.3544577082433
				],
				[
					15.312379907435115,
					594.1200704987947
				],
				[
					14.546829165087956,
					594.1200704987947
				],
				[
					12.249928745229909,
					592.588844917692
				],
				[
					11.484378002882522,
					591.8232321271406
				],
				[
					11.484378002882522,
					591.8232321271406
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 149,
			"versionNonce": 1083387208,
			"isDeleted": false,
			"id": "z6UBiPHHpL_xI-UMgv7v6",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1494.985807764508,
			"y": 617.7348193415851,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 352.1845517263953,
			"height": 7.656189953717558,
			"seed": 683503432,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024466927,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					-0.7656127905513586
				],
				[
					1.5312255811024897,
					-0.7656127905513586
				],
				[
					3.062513210409179,
					-1.5312255811027171
				],
				[
					4.593738791511896,
					-1.5312255811027171
				],
				[
					6.890577163166199,
					-2.2969004198581615
				],
				[
					9.187415534820047,
					-2.2969004198581615
				],
				[
					12.249928745229681,
					-3.06251321040952
				],
				[
					14.54676711688353,
					-3.06251321040952
				],
				[
					17.609218279088964,
					-3.06251321040952
				],
				[
					20.671731489498598,
					-3.8281260009608786
				],
				[
					22.968569861152446,
					-3.8281260009608786
				],
				[
					26.03102102335788,
					-3.8281260009608786
				],
				[
					29.093534233767514,
					-3.8281260009608786
				],
				[
					31.390372605421362,
					-4.593738791512237
				],
				[
					35.218436558178155,
					-4.593738791512237
				],
				[
					37.51533697803643,
					-4.593738791512237
				],
				[
					40.57778814024164,
					-4.593738791512237
				],
				[
					43.64030135065104,
					-4.593738791512237
				],
				[
					46.70275251285648,
					-4.593738791512237
				],
				[
					49.76520367506191,
					-4.593738791512237
				],
				[
					52.827716885471546,
					-4.593738791512237
				],
				[
					55.89016804767675,
					-4.593738791512237
				],
				[
					58.95261920988219,
					-5.359351582063596
				],
				[
					62.01513242029159,
					-5.359351582063596
				],
				[
					65.07758358249703,
					-5.359351582063596
				],
				[
					68.14009679290666,
					-5.359351582063596
				],
				[
					70.43693516456051,
					-5.359351582063596
				],
				[
					72.73377353621458,
					-6.124964372614954
				],
				[
					75.79622469842002,
					-6.124964372614954
				],
				[
					78.85873790882943,
					-6.124964372614954
				],
				[
					81.1555762804835,
					-6.124964372614954
				],
				[
					84.21802744268871,
					-6.890577163166199
				],
				[
					88.0461534436497,
					-6.890577163166199
				],
				[
					90.34299181530378,
					-6.890577163166199
				],
				[
					93.40550502571318,
					-6.890577163166199
				],
				[
					95.70234339736726,
					-6.890577163166199
				],
				[
					98.76479455957269,
					-6.890577163166199
				],
				[
					101.06169497943074,
					-6.890577163166199
				],
				[
					104.88975893218753,
					-6.890577163166199
				],
				[
					107.95221009439274,
					-6.890577163166199
				],
				[
					111.01472330480237,
					-6.890577163166199
				],
				[
					114.84278725755894,
					-6.890577163166199
				],
				[
					117.90530046796857,
					-6.890577163166199
				],
				[
					129.38955437444292,
					-6.890577163166199
				],
				[
					131.68639274609677,
					-6.890577163166199
				],
				[
					134.7489059565064,
					-6.890577163166199
				],
				[
					137.81135711871184,
					-6.890577163166199
				],
				[
					140.87380828091727,
					-6.890577163166199
				],
				[
					143.93632149132668,
					-6.890577163166199
				],
				[
					146.9987726535319,
					-7.656189953717558
				],
				[
					150.06128586394152,
					-7.656189953717558
				],
				[
					153.8893498166981,
					-7.656189953717558
				],
				[
					156.95180097890352,
					-7.656189953717558
				],
				[
					160.01431418931315,
					-7.656189953717558
				],
				[
					163.0767653515186,
					-7.656189953717558
				],
				[
					165.37360372317244,
					-7.656189953717558
				],
				[
					167.6705041430307,
					-7.656189953717558
				],
				[
					170.73295530523592,
					-7.656189953717558
				],
				[
					173.02979367689022,
					-7.656189953717558
				],
				[
					176.09224483909543,
					-7.656189953717558
				],
				[
					179.15482009770903,
					-7.656189953717558
				],
				[
					182.21727125991447,
					-7.656189953717558
				],
				[
					185.2797224221199,
					-7.656189953717558
				],
				[
					189.10784842308067,
					-7.656189953717558
				],
				[
					192.1702995852861,
					-7.656189953717558
				],
				[
					195.23275074749154,
					-7.656189953717558
				],
				[
					198.29520190969674,
					-7.656189953717558
				],
				[
					200.59210232955502,
					-7.656189953717558
				],
				[
					203.65455349176023,
					-7.656189953717558
				],
				[
					205.9514539116185,
					-7.656189953717558
				],
				[
					209.01390507382393,
					-7.656189953717558
				],
				[
					210.54513065492642,
					-7.656189953717558
				],
				[
					213.60758181713186,
					-7.656189953717558
				],
				[
					215.90448223699013,
					-7.656189953717558
				],
				[
					218.96693339919534,
					-7.656189953717558
				],
				[
					222.02938456140078,
					-7.656189953717558
				],
				[
					224.32628498125905,
					-7.656189953717558
				],
				[
					227.38873614346426,
					-7.656189953717558
				],
				[
					229.68563656332253,
					-7.656189953717558
				],
				[
					231.9824128867724,
					-7.656189953717558
				],
				[
					234.27931330663046,
					-7.656189953717558
				],
				[
					236.57621372648873,
					-7.656189953717558
				],
				[
					238.8729900499386,
					-7.656189953717558
				],
				[
					241.16989046979666,
					-7.656189953717558
				],
				[
					243.46679088965493,
					-7.656189953717558
				],
				[
					245.7635672131048,
					-7.656189953717558
				],
				[
					248.82601837531024,
					-7.656189953717558
				],
				[
					251.1229187951683,
					-7.656189953717558
				],
				[
					253.41981921502656,
					-7.656189953717558
				],
				[
					255.71659553847644,
					-7.656189953717558
				],
				[
					258.0134959583345,
					-7.656189953717558
				],
				[
					259.5447215394372,
					-7.656189953717558
				],
				[
					261.8416219592955,
					-7.656189953717558
				],
				[
					264.13839828274536,
					-7.656189953717558
				],
				[
					266.4352987026034,
					-6.890577163166199
				],
				[
					268.7321991224617,
					-6.890577163166199
				],
				[
					271.7946502846671,
					-6.890577163166199
				],
				[
					274.8571014468723,
					-6.890577163166199
				],
				[
					277.91955260907775,
					-6.890577163166199
				],
				[
					281.7476786100385,
					-6.890577163166199
				],
				[
					284.81012977224395,
					-6.890577163166199
				],
				[
					286.34135535334667,
					-6.890577163166199
				],
				[
					288.6382557732047,
					-6.890577163166199
				],
				[
					290.9350320966548,
					-6.890577163166199
				],
				[
					292.4663817741657,
					-6.890577163166199
				],
				[
					294.7631580976156,
					-6.890577163166199
				],
				[
					297.06005851747364,
					-6.890577163166199
				],
				[
					298.59128409857635,
					-6.890577163166199
				],
				[
					300.8881845184346,
					-6.890577163166199
				],
				[
					303.1849608418845,
					-6.890577163166199
				],
				[
					305.48186126174255,
					-6.890577163166199
				],
				[
					307.7787616816008,
					-6.890577163166199
				],
				[
					310.0755380050507,
					-6.890577163166199
				],
				[
					312.37243842490875,
					-6.890577163166199
				],
				[
					314.66921474835885,
					-6.890577163166199
				],
				[
					316.9661151682169,
					-6.890577163166199
				],
				[
					318.4973407493196,
					-6.890577163166199
				],
				[
					320.02856633042234,
					-6.890577163166199
				],
				[
					320.79424116917767,
					-6.890577163166199
				],
				[
					322.3254667502804,
					-6.890577163166199
				],
				[
					323.8566923313831,
					-6.890577163166199
				],
				[
					325.3879179124858,
					-6.890577163166199
				],
				[
					327.68481833234387,
					-6.890577163166199
				],
				[
					329.2160439134466,
					-6.890577163166199
				],
				[
					331.51282023689646,
					-6.890577163166199
				],
				[
					332.278495075652,
					-6.890577163166199
				],
				[
					334.57539549551007,
					-6.890577163166199
				],
				[
					335.34094623785745,
					-6.890577163166199
				],
				[
					336.1066210766128,
					-6.890577163166199
				],
				[
					337.6378466577155,
					-6.890577163166199
				],
				[
					338.40339740006266,
					-6.890577163166199
				],
				[
					339.1690722388182,
					-6.890577163166199
				],
				[
					340.70029781992093,
					-6.890577163166199
				],
				[
					342.23152340102365,
					-6.890577163166199
				],
				[
					343.76274898212637,
					-6.890577163166199
				],
				[
					345.2939745632291,
					-6.890577163166199
				],
				[
					346.0596494019844,
					-6.890577163166199
				],
				[
					346.8252001443316,
					-6.890577163166199
				],
				[
					347.59087498308713,
					-6.890577163166199
				],
				[
					348.3565498218427,
					-6.890577163166199
				],
				[
					349.12210056418985,
					-6.890577163166199
				],
				[
					349.8877754029452,
					-6.890577163166199
				],
				[
					350.65332614529257,
					-6.890577163166199
				],
				[
					351.4190009840479,
					-6.890577163166199
				],
				[
					352.1845517263953,
					-6.890577163166199
				],
				[
					352.1845517263953,
					-6.890577163166199
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 218,
			"versionNonce": 1581933384,
			"isDeleted": false,
			"id": "xu-HDOrx4ubi2z4u6HGDe",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1096.9336723526176,
			"y": 165.2062842127348,
			"strokeColor": "#e03131",
			"backgroundColor": "#a5d8ff",
			"width": 12.249928745229681,
			"height": 460.9024366595439,
			"seed": 115147832,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1711024470087,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					1.53125660520476
				],
				[
					0,
					3.828094976858779
				],
				[
					0,
					6.124964372614869
				],
				[
					0,
					9.953059349473648
				],
				[
					0.7656127905515859,
					15.312379907435115
				],
				[
					0.7656127905515859,
					19.140474884293894
				],
				[
					1.5312255811027171,
					23.734182651704003
				],
				[
					1.5312255811027171,
					29.0935032096655
				],
				[
					2.296838371654303,
					33.68724200117768
				],
				[
					2.296838371654303,
					39.04656255913912
				],
				[
					3.0624511622054342,
					43.640270326549256
				],
				[
					3.8281260009609923,
					48.233978093959394
				],
				[
					3.8281260009609923,
					52.06207307081817
				],
				[
					3.8281260009609923,
					56.65578083822831
				],
				[
					4.593738791512351,
					59.71826302453573
				],
				[
					4.593738791512351,
					63.54635800139451
				],
				[
					4.593738791512351,
					67.37445297825329
				],
				[
					4.593738791512351,
					71.20254795511207
				],
				[
					4.593738791512351,
					73.49938632676609
				],
				[
					4.593738791512351,
					76.56186851307356
				],
				[
					4.593738791512351,
					78.85873790882962
				],
				[
					4.593738791512351,
					81.921189071035
				],
				[
					4.593738791512351,
					84.98367125734242
				],
				[
					4.593738791512351,
					88.0461534436499
				],
				[
					4.593738791512351,
					91.10863562995732
				],
				[
					4.593738791512351,
					94.1710867921627
				],
				[
					4.593738791512351,
					95.70234339736746
				],
				[
					4.593738791512351,
					97.99918176902148
				],
				[
					4.593738791512351,
					100.29605116477754
				],
				[
					4.593738791512351,
					101.82727674588025
				],
				[
					4.593738791512351,
					104.12414614163632
				],
				[
					4.593738791512351,
					105.65537172273903
				],
				[
					4.593738791512351,
					107.9522411184951
				],
				[
					4.593738791512351,
					110.24907949014917
				],
				[
					4.593738791512351,
					112.54594888590523
				],
				[
					4.593738791512351,
					115.60843107221265
				],
				[
					5.359351582063482,
					117.13965665331537
				],
				[
					5.359351582063482,
					120.20213883962279
				],
				[
					5.359351582063482,
					122.49897721127681
				],
				[
					5.359351582063482,
					124.79584660703293
				],
				[
					5.359351582063482,
					127.09271600278899
				],
				[
					5.359351582063482,
					129.38955437444307
				],
				[
					5.359351582063482,
					131.68642377019913
				],
				[
					5.359351582063482,
					133.98326214185315
				],
				[
					5.359351582063482,
					136.28013153760926
				],
				[
					5.359351582063482,
					139.34261372391668
				],
				[
					5.359351582063482,
					141.6394520955707
				],
				[
					5.359351582063482,
					143.93632149132682
				],
				[
					5.359351582063482,
					146.23315986298084
				],
				[
					5.359351582063482,
					148.53002925873696
				],
				[
					5.359351582063482,
					150.82686763039098
				],
				[
					5.359351582063482,
					153.12373702614704
				],
				[
					5.359351582063482,
					155.42057539780112
				],
				[
					5.359351582063482,
					158.48305758410854
				],
				[
					5.359351582063482,
					161.54553977041596
				],
				[
					5.359351582063482,
					164.60802195672343
				],
				[
					5.359351582063482,
					167.67050414303085
				],
				[
					5.359351582063482,
					170.73295530523623
				],
				[
					5.359351582063482,
					173.79543749154365
				],
				[
					5.359351582063482,
					176.09230688729977
				],
				[
					5.359351582063482,
					178.3891452589538
				],
				[
					5.359351582063482,
					181.4516274452612
				],
				[
					6.124964372615068,
					183.74846581691523
				],
				[
					6.124964372615068,
					186.04533521267135
				],
				[
					6.124964372615068,
					189.10781739897877
				],
				[
					6.124964372615068,
					192.93591237583755
				],
				[
					6.890577163166199,
					195.23275074749156
				],
				[
					6.890577163166199,
					199.06084572435034
				],
				[
					6.890577163166199,
					201.35771512010646
				],
				[
					6.890577163166199,
					203.65455349176048
				],
				[
					7.656189953717785,
					206.71706670217
				],
				[
					7.656189953717785,
					209.01390507382402
				],
				[
					7.656189953717785,
					210.54513065492668
				],
				[
					7.656189953717785,
					213.60758181713206
				],
				[
					7.656189953717785,
					215.90448223699022
				],
				[
					7.656189953717785,
					218.20132060864424
				],
				[
					8.421802744268916,
					221.26377177084962
				],
				[
					8.421802744268916,
					224.32628498125914
				],
				[
					8.421802744268916,
					226.62312335291315
				],
				[
					9.187415534820502,
					229.68557451511853
				],
				[
					9.187415534820502,
					231.21686214442533
				],
				[
					9.187415534820502,
					234.2793133066307
				],
				[
					9.187415534820502,
					236.57615167828473
				],
				[
					9.187415534820502,
					238.8730520981429
				],
				[
					9.187415534820502,
					241.1698904697969
				],
				[
					9.187415534820502,
					244.2323416320023
				],
				[
					9.953028325371633,
					246.52918000365636
				],
				[
					9.953028325371633,
					249.59169321406583
				],
				[
					9.953028325371633,
					252.6541443762712
				],
				[
					9.953028325371633,
					255.71665758668072
				],
				[
					9.953028325371633,
					258.7791087488861
				],
				[
					10.718641115922992,
					270.2633626553603
				],
				[
					10.718641115922992,
					272.5602630752185
				],
				[
					10.718641115922992,
					274.85710144687255
				],
				[
					10.718641115922992,
					277.919552609078
				],
				[
					10.718641115922992,
					280.9820658194874
				],
				[
					10.718641115922992,
					284.0445169816928
				],
				[
					10.718641115922992,
					286.3413553533469
				],
				[
					10.718641115922992,
					289.4038685637563
				],
				[
					10.718641115922992,
					292.46631972596174
				],
				[
					10.718641115922992,
					295.52877088816706
				],
				[
					10.718641115922992,
					297.8256713080252
				],
				[
					10.718641115922992,
					300.1225096796793
				],
				[
					11.48431595467855,
					302.4193480513334
				],
				[
					11.48431595467855,
					304.7162484711914
				],
				[
					11.48431595467855,
					307.77869963339685
				],
				[
					11.48431595467855,
					310.07553800505093
				],
				[
					11.48431595467855,
					312.372438424909
				],
				[
					11.48431595467855,
					314.66927679656305
				],
				[
					11.48431595467855,
					317.7317279587685
				],
				[
					11.48431595467855,
					320.02862837862654
				],
				[
					11.48431595467855,
					321.55985395972925
				],
				[
					11.48431595467855,
					323.85669233138333
				],
				[
					11.48431595467855,
					326.1535307030373
				],
				[
					11.48431595467855,
					328.45043112289545
				],
				[
					11.48431595467855,
					330.7472694945495
				],
				[
					11.48431595467855,
					333.0441078662036
				],
				[
					11.48431595467855,
					334.5753334473062
				],
				[
					11.48431595467855,
					336.87223386716437
				],
				[
					11.48431595467855,
					339.16907223881844
				],
				[
					11.48431595467855,
					341.4659106104724
				],
				[
					11.48431595467855,
					342.9971361915751
				],
				[
					11.48431595467855,
					345.2940366114333
				],
				[
					11.48431595467855,
					346.825262192536
				],
				[
					11.48431595467855,
					349.12210056418996
				],
				[
					11.48431595467855,
					350.6533261452927
				],
				[
					11.48431595467855,
					352.95022656515084
				],
				[
					11.48431595467855,
					354.48145214625356
				],
				[
					11.48431595467855,
					356.0126777273563
				],
				[
					11.48431595467855,
					358.30951609901024
				],
				[
					11.48431595467855,
					360.6064165188684
				],
				[
					11.48431595467855,
					362.1376420999711
				],
				[
					11.48431595467855,
					364.4344804716251
				],
				[
					11.48431595467855,
					366.73131884327915
				],
				[
					11.48431595467855,
					368.2625444243819
				],
				[
					11.48431595467855,
					370.55944484424003
				],
				[
					11.48431595467855,
					372.856283215894
				],
				[
					11.48431595467855,
					374.3875087969967
				],
				[
					11.48431595467855,
					376.6843471686508
				],
				[
					11.48431595467855,
					378.2156347979576
				],
				[
					11.48431595467855,
					380.51247316961155
				],
				[
					11.48431595467855,
					382.04369875071427
				],
				[
					11.48431595467855,
					384.34053712236835
				],
				[
					11.48431595467855,
					385.87182475167515
				],
				[
					11.48431595467855,
					388.1686631233291
				],
				[
					11.48431595467855,
					389.6998887044318
				],
				[
					11.48431595467855,
					391.23111428553455
				],
				[
					11.48431595467855,
					392.76233986663726
				],
				[
					11.48431595467855,
					395.0592402864953
				],
				[
					11.48431595467855,
					396.590465867598
				],
				[
					11.48431595467855,
					398.8873042392521
				],
				[
					11.48431595467855,
					401.1841426109062
				],
				[
					11.48431595467855,
					402.715430240213
				],
				[
					11.48431595467855,
					404.2466558213156
				],
				[
					11.48431595467855,
					406.54349419296966
				],
				[
					11.48431595467855,
					408.0747197740724
				],
				[
					11.48431595467855,
					409.6060074033792
				],
				[
					11.48431595467855,
					411.1372329844818
				],
				[
					11.48431595467855,
					411.90284577503314
				],
				[
					11.48431595467855,
					413.43407135613586
				],
				[
					11.48431595467855,
					414.9652969372386
				],
				[
					11.48431595467855,
					415.73090972778994
				],
				[
					11.48431595467855,
					417.26213530889254
				],
				[
					11.48431595467855,
					418.0278101476481
				],
				[
					11.48431595467855,
					418.79342293819934
				],
				[
					11.48431595467855,
					419.5590357287507
				],
				[
					11.48431595467855,
					421.0902613098534
				],
				[
					11.48431595467855,
					421.8558741004048
				],
				[
					11.48431595467855,
					422.62148689095613
				],
				[
					11.48431595467855,
					424.15271247205885
				],
				[
					11.48431595467855,
					424.9183252626101
				],
				[
					11.48431595467855,
					426.4496128919169
				],
				[
					11.48431595467855,
					427.21522568246826
				],
				[
					11.48431595467855,
					427.9808384730196
				],
				[
					11.48431595467855,
					428.746451263571
				],
				[
					11.48431595467855,
					429.51206405412233
				],
				[
					11.48431595467855,
					430.2776768446737
				],
				[
					11.48431595467855,
					431.04328963522505
				],
				[
					11.48431595467855,
					431.8089024257764
				],
				[
					11.48431595467855,
					432.57451521632765
				],
				[
					11.48431595467855,
					434.10580284563446
				],
				[
					11.48431595467855,
					434.8714156361858
				],
				[
					11.48431595467855,
					435.6370284267372
				],
				[
					11.48431595467855,
					437.1682540078399
				],
				[
					11.48431595467855,
					437.93386679839125
				],
				[
					11.48431595467855,
					438.6994795889426
				],
				[
					11.48431595467855,
					439.46509237949397
				],
				[
					11.48431595467855,
					440.2307051700452
				],
				[
					11.48431595467855,
					440.99631796059657
				],
				[
					11.48431595467855,
					441.76193075114793
				],
				[
					11.48431595467855,
					442.5276055899034
				],
				[
					11.48431595467855,
					443.29321838045473
				],
				[
					11.48431595467855,
					444.0588311710061
				],
				[
					11.48431595467855,
					444.82444396155745
				],
				[
					11.48431595467855,
					445.5900567521088
				],
				[
					11.48431595467855,
					446.35566954266017
				],
				[
					11.48431595467855,
					447.1212823332115
				],
				[
					11.48431595467855,
					447.88689512376277
				],
				[
					11.48431595467855,
					449.4181207048655
				],
				[
					12.249928745229681,
					449.4181207048655
				],
				[
					12.249928745229681,
					450.18379554362093
				],
				[
					12.249928745229681,
					450.9494083341723
				],
				[
					12.249928745229681,
					451.71502112472365
				],
				[
					12.249928745229681,
					452.480633915275
				],
				[
					12.249928745229681,
					453.24624670582637
				],
				[
					12.249928745229681,
					454.0118594963777
				],
				[
					12.249928745229681,
					454.7774722869291
				],
				[
					12.249928745229681,
					455.5430850774803
				],
				[
					12.249928745229681,
					456.3086978680317
				],
				[
					12.249928745229681,
					457.07431065858304
				],
				[
					12.249928745229681,
					457.8399234491344
				],
				[
					12.249928745229681,
					458.60559828788985
				],
				[
					12.249928745229681,
					459.3712110784412
				],
				[
					12.249928745229681,
					460.13682386899256
				],
				[
					12.249928745229681,
					460.9024366595439
				],
				[
					12.249928745229681,
					460.9024366595439
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "rectangle",
			"version": 74,
			"versionNonce": 225418296,
			"isDeleted": false,
			"id": "_p4A46c-SVAmFNNfbc0sO",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1355.9667615857065,
			"y": 633.0560513705465,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 298.7538300614298,
			"height": 24.361927361749622,
			"seed": 54666824,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1711024522622,
			"link": null,
			"locked": false
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#2f9e44",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "dashed",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": -340.9817078619716,
		"scrollY": 64.42367065928613,
		"zoom": {
			"value": 0.6638949856111255
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