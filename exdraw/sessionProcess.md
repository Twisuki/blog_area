---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
浏览器 ^ZX6uQqKG

服务器 ^aAqv7a7w

1 ^ivCAXSY5

服务器对本次会话创建一个session对象，并且创建一个 Cookie对象，这个对象中存储着 JSESSIONID:xxxxxx ^SJHBNdP9

2 ^c7etU5Eq

通过response对象返回cookie信息，
并且浏览器将JSESSIONID:xxxx保存在内存 ^OmYpqv0b

3 ^tkQYSQeQ

返回欢迎页面的html ^HOnNVQW3

首次访问 登入页，填入数据向服务器首次提交时，没有携带相关cookie信息 ^P07tK2QH

再次请求，请求时是也会把保存的cookie信息[JSESSIONID:xxx]一起发送 ^Wv5aGL3W

🧑‍💻 ^UDBOJeAa

打开浏览器 ^mLeNPzAz

4 ^eXRweMtU

5 ^hj2LntSj

再次请求，只要浏览器不关闭，请求时就会携带cookie信息[JSESSIONID:xxx] ^eTCGqZGQ

6 ^IWrcGtMl

返
回
欢
迎
页
面
的
h
t
m
l ^KHtokuNR

🧑‍💻 ^3S7gfNQe

关闭浏览器
 ^ezJT9Q3I

❌ ^GpwuiYx0

打开浏览器 ^RgtSVfd8

因为已经关闭浏览器了，之前在内存中存的JSESSIONID也没了，
这次请求是没写到 JESSIONID:xxx 的 ^hJZQvMJI

返回登入页面 html ^zUJtADND

1 ^9SLWaQBh

2 ^D5pr2ljo

查找是否有对应的session对象 ^8HQ8RdpG

获取JSESSIONID ^wQfJGXCw

是 ^eajefP2m

获取对象中的对应值 ^wqFcw7VU

创建session对象 ^LkTFYJzK

if (对应值 == xxxx) {
    不用登入了;
    输出欢迎页面;
    } else {
    跳转到登入页;
} ^jk9FGKXq

获取到空值或者错误ID ^NFgMHfP7


# Embedded files
726e91458d86668b487653134389c58c3caa6506: [[GoogleChromeIcon.png]]

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
			"version": 785,
			"versionNonce": 2014893725,
			"isDeleted": false,
			"id": "-4zifm8x2Zvmq5EWQvHQu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 236.95571357197935,
			"y": -442.24529440645233,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 485.7884206103186,
			"height": 834.3269195556641,
			"seed": 1844376925,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "_Y8oj2eylSK-Ey___-XxZ",
					"type": "arrow"
				},
				{
					"id": "BacT1dwfSBXr3X-L793sh",
					"type": "arrow"
				},
				{
					"id": "R_bftR5YBBpL6RYB_usx4",
					"type": "arrow"
				},
				{
					"id": "iuT5SPZP9KMODuNFeBzYn",
					"type": "arrow"
				}
			],
			"updated": 1709899203539,
			"link": null,
			"locked": false
		},
		{
			"type": "image",
			"version": 626,
			"versionNonce": 2135184189,
			"isDeleted": false,
			"id": "jamsT7uLDCT6g2WDABLAD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -700.9575369972724,
			"y": -52.060538339167465,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"width": 133.63107299804688,
			"height": 133.63107299804688,
			"seed": 310526397,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "_Y8oj2eylSK-Ey___-XxZ",
					"type": "arrow"
				},
				{
					"id": "BacT1dwfSBXr3X-L793sh",
					"type": "arrow"
				},
				{
					"id": "R_bftR5YBBpL6RYB_usx4",
					"type": "arrow"
				},
				{
					"id": "1C6NBpZ9tBYYfKeJYDGR6",
					"type": "arrow"
				},
				{
					"id": "iuT5SPZP9KMODuNFeBzYn",
					"type": "arrow"
				},
				{
					"id": "1-sRoEPeTd-QRFk5XwW8K",
					"type": "arrow"
				}
			],
			"updated": 1709898235021,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "726e91458d86668b487653134389c58c3caa6506",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "text",
			"version": 388,
			"versionNonce": 1459976083,
			"isDeleted": false,
			"id": "ZX6uQqKG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -663.441969048273,
			"y": 98.91233561112722,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 60,
			"height": 24,
			"seed": 1940718109,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "sc61H9bkmJzUpDs4VfF1A",
					"type": "arrow"
				}
			],
			"updated": 1709898333864,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "浏览器",
			"rawText": "浏览器",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "浏览器",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 351,
			"versionNonce": 350133789,
			"isDeleted": false,
			"id": "aAqv7a7w",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 442.37072657501676,
			"y": 414.78300465290613,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 60,
			"height": 24,
			"seed": 1986049661,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709900101297,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "服务器",
			"rawText": "服务器",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "服务器",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "arrow",
			"version": 2022,
			"versionNonce": 16699155,
			"isDeleted": false,
			"id": "_Y8oj2eylSK-Ey___-XxZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -555.1947804879114,
			"y": -67.39302105221361,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 811.111489204205,
			"height": 310.21867313850294,
			"seed": 1700716253,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ivCAXSY5"
				}
			],
			"updated": 1709899596038,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"gap": 19.551541396129096,
				"focus": -0.5623786343805669
			},
			"endBinding": {
				"elementId": "cpXGW7Zq7YkrHp2JFKZpl",
				"gap": 4.1586761474609375,
				"focus": 0.7223233206125445
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
					811.111489204205,
					-310.21867313850294
				]
			]
		},
		{
			"type": "text",
			"version": 9,
			"versionNonce": 967705459,
			"isDeleted": false,
			"id": "ivCAXSY5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -476.0917791981756,
			"y": -213.3898114818732,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 11.71875,
			"height": 24,
			"seed": 926481213,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709896451043,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "1",
			"rawText": "1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_Y8oj2eylSK-Ey___-XxZ",
			"originalText": "1",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 1157,
			"versionNonce": 568930451,
			"isDeleted": false,
			"id": "cpXGW7Zq7YkrHp2JFKZpl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 260.0753848637545,
			"y": -422.41752035860077,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 434.7196575613873,
			"height": 145,
			"seed": 340822941,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "SJHBNdP9"
				},
				{
					"id": "BacT1dwfSBXr3X-L793sh",
					"type": "arrow"
				},
				{
					"id": "_Y8oj2eylSK-Ey___-XxZ",
					"type": "arrow"
				}
			],
			"updated": 1709899596038,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1151,
			"versionNonce": 1790190579,
			"isDeleted": false,
			"id": "SJHBNdP9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 266.41958864444814,
			"y": -385.91752035860077,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 422.03125,
			"height": 72,
			"seed": 483856381,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709899596038,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "服务器对本次会话创建一个session对象，并且\n创建一个 Cookie对象，这个对象中存储着\nJSESSIONID:xxxxxx",
			"rawText": "服务器对本次会话创建一个session对象，并且创建一个 Cookie对象，这个对象中存储着 JSESSIONID:xxxxxx",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "cpXGW7Zq7YkrHp2JFKZpl",
			"originalText": "服务器对本次会话创建一个session对象，并且创建一个 Cookie对象，这个对象中存储着 JSESSIONID:xxxxxx",
			"lineHeight": 1.2,
			"baseline": 67
		},
		{
			"type": "arrow",
			"version": 1615,
			"versionNonce": 1039034323,
			"isDeleted": false,
			"id": "BacT1dwfSBXr3X-L793sh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 255.2884494389497,
			"y": -326.9258849650901,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 805.0833521588785,
			"height": 299.5833527011993,
			"seed": 1858996317,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "c7etU5Eq"
				}
			],
			"updated": 1709899596038,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cpXGW7Zq7YkrHp2JFKZpl",
				"gap": 4.786935424804767,
				"focus": 0.3890317120532446
			},
			"endBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"gap": 17.53156127929674,
				"focus": -0.11682919998725083
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
					-805.0833521588785,
					299.5833527011993
				]
			]
		},
		{
			"type": "text",
			"version": 8,
			"versionNonce": 1587748115,
			"isDeleted": false,
			"id": "c7etU5Eq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -477.41589889526375,
			"y": -174.88413352872888,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 11.71875,
			"height": 24,
			"seed": 1812395197,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709896451044,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "2",
			"rawText": "2",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "BacT1dwfSBXr3X-L793sh",
			"originalText": "2",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 642,
			"versionNonce": 697137587,
			"isDeleted": false,
			"id": "OmYpqv0b",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.910931832400766,
			"x": -308.3926803066266,
			"y": -175.08048119251308,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 395.78125,
			"height": 48,
			"seed": 1076057373,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709897128383,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "通过response对象返回cookie信息，\n并且浏览器将JSESSIONID:xxxx保存在内存",
			"rawText": "通过response对象返回cookie信息，\n并且浏览器将JSESSIONID:xxxx保存在内存",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "通过response对象返回cookie信息，\n并且浏览器将JSESSIONID:xxxx保存在内存",
			"lineHeight": 1.2,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 1438,
			"versionNonce": 1086218835,
			"isDeleted": false,
			"id": "R_bftR5YBBpL6RYB_usx4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -545.8024358580936,
			"y": 37.31178725978968,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 804.9440881279461,
			"height": 5.35316392731626,
			"seed": 647276925,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "tkQYSQeQ"
				}
			],
			"updated": 1709899207413,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"gap": 21.524028141131907,
				"focus": 0.3266293928758535
			},
			"endBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"gap": 1,
				"focus": -0.028853470257174687
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
					804.9440881279461,
					5.35316392731626
				]
			]
		},
		{
			"type": "text",
			"version": 8,
			"versionNonce": 84148915,
			"isDeleted": false,
			"id": "tkQYSQeQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -473.2044188823148,
			"y": -25.71425085589047,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 11.71875,
			"height": 24,
			"seed": 1889300957,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709896451044,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "3",
			"rawText": "3",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "R_bftR5YBBpL6RYB_usx4",
			"originalText": "3",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 678,
			"versionNonce": 2750547,
			"isDeleted": false,
			"id": "HOnNVQW3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -223.39212103631064,
			"y": 109.82002134875609,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 186.875,
			"height": 24,
			"seed": 1263283773,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "R_bftR5YBBpL6RYB_usx4",
					"type": "arrow"
				}
			],
			"updated": 1709898462581,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "返回欢迎页面的html",
			"rawText": "返回欢迎页面的html",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "返回欢迎页面的html",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 661,
			"versionNonce": 1350728083,
			"isDeleted": false,
			"id": "P07tK2QH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 5.912859218702465,
			"x": -473.5060467164228,
			"y": -272.2021953221778,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 682.03125,
			"height": 24,
			"seed": 1166368413,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709899931989,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "首次访问 登入页，填入数据向服务器首次提交时，没有携带相关cookie信息",
			"rawText": "首次访问 登入页，填入数据向服务器首次提交时，没有携带相关cookie信息",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "首次访问 登入页，填入数据向服务器首次提交时，没有携带相关cookie信息",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 904,
			"versionNonce": 1654422013,
			"isDeleted": false,
			"id": "Wv5aGL3W",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 6.279599596838812,
			"x": -483.0544780719098,
			"y": -0.6235625358993404,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 677.8125,
			"height": 24,
			"seed": 368673533,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709898284342,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "再次请求，请求时是也会把保存的cookie信息[JSESSIONID:xxx]一起发送",
			"rawText": "再次请求，请求时是也会把保存的cookie信息[JSESSIONID:xxx]一起发送",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "再次请求，请求时是也会把保存的cookie信息[JSESSIONID:xxx]一起发送",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "rectangle",
			"version": 1507,
			"versionNonce": 813983987,
			"isDeleted": false,
			"id": "kmI_MaUYdKHhhOxw_f81v",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 260.14165226985233,
			"y": -248.66369698313997,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 437.7219684564326,
			"height": 569.0777431497339,
			"seed": 556407645,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "R_bftR5YBBpL6RYB_usx4",
					"type": "arrow"
				},
				{
					"id": "iuT5SPZP9KMODuNFeBzYn",
					"type": "arrow"
				},
				{
					"id": "sc61H9bkmJzUpDs4VfF1A",
					"type": "arrow"
				},
				{
					"id": "2fmvIT1ByNR-DNoOV4jkh",
					"type": "arrow"
				},
				{
					"id": "ZHPJrqx5_n96rMPdn9LRG",
					"type": "arrow"
				},
				{
					"id": "1-sRoEPeTd-QRFk5XwW8K",
					"type": "arrow"
				}
			],
			"updated": 1709899519997,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1225,
			"versionNonce": 787622291,
			"isDeleted": false,
			"id": "iuT5SPZP9KMODuNFeBzYn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 250.14448376023503,
			"y": 99.90245597346635,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 805.9482376911557,
			"height": 3.106034333614005,
			"seed": 1121363997,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "eXRweMtU"
				}
			],
			"updated": 1709899207413,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"gap": 9.997168509617353,
				"focus": -0.22744660440502237
			},
			"endBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"gap": 19.094514439377008,
				"focus": 1.2186643306209937
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
					-805.9482376911557,
					-3.106034333614005
				]
			]
		},
		{
			"id": "eXRweMtU",
			"type": "text",
			"x": -135.82922100229962,
			"y": 108.57343331393304,
			"width": 12.79998779296875,
			"height": 25,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2104704915,
			"version": 2,
			"versionNonce": 1126765533,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898137463,
			"link": null,
			"locked": false,
			"text": "4",
			"rawText": "4",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "iuT5SPZP9KMODuNFeBzYn",
			"originalText": "4",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 676,
			"versionNonce": 1214367005,
			"isDeleted": false,
			"id": "UDBOJeAa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1117.6401752895786,
			"y": -66.14669552889745,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 148,
			"height": 178.18241388494346,
			"seed": 996239059,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "1C6NBpZ9tBYYfKeJYDGR6",
					"type": "arrow"
				}
			],
			"updated": 1709896690048,
			"link": null,
			"locked": false,
			"fontSize": 148.48534490411956,
			"fontFamily": 3,
			"text": "🧑‍💻",
			"rawText": "🧑‍💻",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "🧑‍💻",
			"lineHeight": 1.2,
			"baseline": 143
		},
		{
			"id": "1C6NBpZ9tBYYfKeJYDGR6",
			"type": "arrow",
			"x": -952.3040864292747,
			"y": 1.5448324870525205,
			"width": 242.20084296332436,
			"height": 0.48681352696771363,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1277819923,
			"version": 349,
			"versionNonce": 1878974941,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "mLeNPzAz"
				}
			],
			"updated": 1709896690048,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					242.20084296332436,
					0.48681352696771363
				]
			],
			"lastCommittedPoint": [
				133.05094401041663,
				-2.5103759765625
			],
			"startBinding": {
				"elementId": "UDBOJeAa",
				"focus": -0.2415424663282278,
				"gap": 17.336088860303903
			},
			"endBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"focus": 0.1877625781502204,
				"gap": 9.145706468677872
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "mLeNPzAz",
			"type": "text",
			"x": -910.4678352763885,
			"y": -12.58433619795842,
			"width": 100,
			"height": 25,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2038325523,
			"version": 46,
			"versionNonce": 1690040541,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709896688239,
			"link": null,
			"locked": false,
			"text": "打开浏览器",
			"rawText": "打开浏览器",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "1C6NBpZ9tBYYfKeJYDGR6",
			"originalText": "打开浏览器",
			"lineHeight": 1.25
		},
		{
			"id": "1-sRoEPeTd-QRFk5XwW8K",
			"type": "arrow",
			"x": -560.5252676629982,
			"y": 109.09465111626588,
			"width": 810.6604969042459,
			"height": 227.9751925998264,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 542846451,
			"version": 540,
			"versionNonce": 960710675,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "hj2LntSj"
				}
			],
			"updated": 1709899207413,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					73.81422254774316,
					227.9751925998264
				],
				[
					810.6604969042459,
					68.12792135049816
				]
			],
			"lastCommittedPoint": [
				846.0031127929689,
				71.96465386284729
			],
			"startBinding": {
				"elementId": "jamsT7uLDCT6g2WDABLAD",
				"focus": -0.4869605612725013,
				"gap": 27.52411645738647
			},
			"endBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"gap": 10.006423028604672,
				"focus": -0.2761849578461832
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "hj2LntSj",
			"type": "text",
			"x": -401.13325919945646,
			"y": 342.29953935411305,
			"width": 12.3599853515625,
			"height": 25,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 786851549,
			"version": 6,
			"versionNonce": 1522061107,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898242481,
			"link": null,
			"locked": false,
			"text": "5",
			"rawText": "5",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "1-sRoEPeTd-QRFk5XwW8K",
			"originalText": "5",
			"lineHeight": 1.25
		},
		{
			"id": "eTCGqZGQ",
			"type": "text",
			"x": -477.1843727519739,
			"y": 295.54783036973794,
			"width": 683.3984375,
			"height": 23,
			"angle": 6.060675662640788,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 616752797,
			"version": 261,
			"versionNonce": 188326909,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898472135,
			"link": null,
			"locked": false,
			"text": "再次请求，只要浏览器不关闭，请求时就会携带cookie信息[JSESSIONID:xxx]",
			"rawText": "再次请求，只要浏览器不关闭，请求时就会携带cookie信息[JSESSIONID:xxx]",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 18,
			"containerId": null,
			"originalText": "再次请求，只要浏览器不关闭，请求时就会携带cookie信息[JSESSIONID:xxx]",
			"lineHeight": 1.15
		},
		{
			"id": "sc61H9bkmJzUpDs4VfF1A",
			"type": "arrow",
			"x": 255.1545453716758,
			"y": 259.4755320645578,
			"width": 862.0793491674865,
			"height": 339.91289763619005,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1366068605,
			"version": 604,
			"versionNonce": 196088467,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "IWrcGtMl"
				}
			],
			"updated": 1709899705901,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-776.1269086649068,
					207.47085946133558
				],
				[
					-862.0793491674865,
					-132.44203817485447
				]
			],
			"lastCommittedPoint": [
				-1220.051981608073,
				-51.044718424479186
			],
			"startBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"focus": -0.47737998907696144,
				"gap": 4.987106898176535
			},
			"endBinding": {
				"elementId": "ZX6uQqKG",
				"focus": -0.6793123544066233,
				"gap": 4.121158278576104
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "IWrcGtMl",
			"type": "text",
			"x": -561.4432872756286,
			"y": 528.7486495971685,
			"width": 12.79998779296875,
			"height": 25,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 775919123,
			"version": 2,
			"versionNonce": 1888290141,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898337018,
			"link": null,
			"locked": false,
			"text": "6",
			"rawText": "6",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "sc61H9bkmJzUpDs4VfF1A",
			"originalText": "6",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 783,
			"versionNonce": 267776797,
			"isDeleted": false,
			"id": "KHtokuNR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0.0809628335657413,
			"x": -652.4621959827613,
			"y": 168.80010576331233,
			"strokeColor": "#4dabf7",
			"backgroundColor": "#ffffff",
			"width": 20,
			"height": 264,
			"seed": 574288563,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709899711964,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "返\n回\n欢\n迎\n页\n面\n的\nh\nt\nm\nl",
			"rawText": "返\n回\n欢\n迎\n页\n面\n的\nh\nt\nm\nl",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "返\n回\n欢\n迎\n页\n面\n的\nh\nt\nm\nl",
			"lineHeight": 1.2,
			"baseline": 259
		},
		{
			"type": "image",
			"version": 775,
			"versionNonce": 448077213,
			"isDeleted": false,
			"id": "h51TBQY7TEyITF-me-MCv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -712.282033223953,
			"y": 648.0164555728185,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"width": 133.63107299804688,
			"height": 133.63107299804688,
			"seed": 1015343283,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "9PNBT4Yhr4mmNpuzEJ-in",
					"type": "arrow"
				},
				{
					"id": "I-2fz6MvltGkbLcW1F1S0",
					"type": "arrow"
				}
			],
			"updated": 1709898630863,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "726e91458d86668b487653134389c58c3caa6506",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "text",
			"version": 777,
			"versionNonce": 1109964157,
			"isDeleted": false,
			"id": "3S7gfNQe",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -1110.3996080396967,
			"y": 636.1614821163477,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 148,
			"height": 178.18241388494346,
			"seed": 1206606419,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "9PNBT4Yhr4mmNpuzEJ-in",
					"type": "arrow"
				}
			],
			"updated": 1709898621458,
			"link": null,
			"locked": false,
			"fontSize": 148.48534490411956,
			"fontFamily": 3,
			"text": "🧑‍💻",
			"rawText": "🧑‍💻",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "🧑‍💻",
			"lineHeight": 1.2,
			"baseline": 143
		},
		{
			"type": "arrow",
			"version": 751,
			"versionNonce": 1912534333,
			"isDeleted": false,
			"id": "9PNBT4Yhr4mmNpuzEJ-in",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -945.0635191793929,
			"y": 703.2923236853385,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 223.63577948676186,
			"height": 0.7835888598679048,
			"seed": 751998963,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ezJT9Q3I"
				}
			],
			"updated": 1709898660408,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "3S7gfNQe",
				"focus": -0.2418565017317777,
				"gap": 17.33608886030379
			},
			"endBinding": {
				"elementId": "h51TBQY7TEyITF-me-MCv",
				"focus": 0.18776257815022068,
				"gap": 9.145706468677986
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
					223.63577948676186,
					-0.7835888598679048
				]
			]
		},
		{
			"type": "text",
			"version": 94,
			"versionNonce": 1770244371,
			"isDeleted": false,
			"id": "ezJT9Q3I",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -899.0874350303202,
			"y": 684.4269658634153,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 50,
			"seed": 423698835,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709898660408,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "关闭浏览器\n",
			"rawText": "关闭浏览器\n",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9PNBT4Yhr4mmNpuzEJ-in",
			"originalText": "关闭浏览器\n",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"id": "GpwuiYx0",
			"type": "text",
			"x": -683.227458728225,
			"y": 773.1242623707608,
			"width": 66,
			"height": 76.30903684938102,
			"angle": 0,
			"strokeColor": "#4dabf7",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1369552861,
			"version": 260,
			"versionNonce": 316664669,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898636780,
			"link": null,
			"locked": false,
			"text": "❌",
			"rawText": "❌",
			"fontSize": 66.35568421685306,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 61,
			"containerId": null,
			"originalText": "❌",
			"lineHeight": 1.15
		},
		{
			"type": "arrow",
			"version": 988,
			"versionNonce": 1495064659,
			"isDeleted": false,
			"id": "I-2fz6MvltGkbLcW1F1S0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -557.1649784306367,
			"y": 705.9467819343099,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 214.33184184725326,
			"height": 3.2238467528856063,
			"seed": 490659645,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "RgtSVfd8"
				}
			],
			"updated": 1709898662261,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "h51TBQY7TEyITF-me-MCv",
				"focus": -0.15514710363293568,
				"gap": 21.48598179526948
			},
			"endBinding": {
				"elementId": "qn-Xy_NZmy1l0dnpuNnbH",
				"focus": -0.09162565114054004,
				"gap": 8.571216969974216
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
					214.33184184725326,
					3.2238467528856063
				]
			]
		},
		{
			"type": "text",
			"version": 112,
			"versionNonce": 2078163549,
			"isDeleted": false,
			"id": "RgtSVfd8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -492.62383080500143,
			"y": 700.4798706296899,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 100,
			"height": 25,
			"seed": 133820317,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709898662261,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "打开浏览器",
			"rawText": "打开浏览器",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "I-2fz6MvltGkbLcW1F1S0",
			"originalText": "打开浏览器",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "image",
			"version": 809,
			"versionNonce": 922754675,
			"isDeleted": false,
			"id": "qn-Xy_NZmy1l0dnpuNnbH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -334.2619196134092,
			"y": 637.2749123951751,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"width": 133.63107299804688,
			"height": 133.63107299804688,
			"seed": 739539357,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "I-2fz6MvltGkbLcW1F1S0",
					"type": "arrow"
				},
				{
					"id": "2fmvIT1ByNR-DNoOV4jkh",
					"type": "arrow"
				},
				{
					"id": "ZHPJrqx5_n96rMPdn9LRG",
					"type": "arrow"
				}
			],
			"updated": 1709898873348,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "726e91458d86668b487653134389c58c3caa6506",
			"scale": [
				1,
				1
			]
		},
		{
			"id": "2fmvIT1ByNR-DNoOV4jkh",
			"type": "arrow",
			"x": -177.94669700947554,
			"y": 700.3547485593772,
			"width": 996.3536498514937,
			"height": 552.3792888669536,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1853410077,
			"version": 968,
			"versionNonce": 1439506643,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "9SLWaQBh"
				}
			],
			"updated": 1709899207413,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					881.1486816406251,
					-54.870082310267776
				],
				[
					996.3536498514937,
					-365.4734982042438
				],
				[
					895.4980866818015,
					-552.3792888669536
				]
			],
			"lastCommittedPoint": [
				855.571986607143,
				-667.0356532505581
			],
			"startBinding": {
				"elementId": "qn-Xy_NZmy1l0dnpuNnbH",
				"focus": 0.025889547346573706,
				"gap": 22.684149605886773
			},
			"endBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"gap": 19.687768946041047,
				"focus": -0.4781383678273493
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "9SLWaQBh",
			"type": "text",
			"x": 816.5835732753793,
			"y": 503.76778931452804,
			"width": 11.71875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1492195357,
			"version": 4,
			"versionNonce": 1059994707,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899206157,
			"link": null,
			"locked": false,
			"text": "1",
			"rawText": "1",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "2fmvIT1ByNR-DNoOV4jkh",
			"originalText": "1",
			"lineHeight": 1.15
		},
		{
			"id": "hJZQvMJI",
			"type": "text",
			"x": -144.40917460209545,
			"y": 645.6655319745066,
			"width": 578.916015625,
			"height": 46,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 693350675,
			"version": 288,
			"versionNonce": 1408735165,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898823634,
			"link": null,
			"locked": false,
			"text": "因为已经关闭浏览器了，之前在内存中存的JSESSIONID也没了，\n这次请求是没写到 JESSIONID:xxx 的",
			"rawText": "因为已经关闭浏览器了，之前在内存中存的JSESSIONID也没了，\n这次请求是没写到 JESSIONID:xxx 的",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 41,
			"containerId": null,
			"originalText": "因为已经关闭浏览器了，之前在内存中存的JSESSIONID也没了，\n这次请求是没写到 JESSIONID:xxx 的",
			"lineHeight": 1.15
		},
		{
			"id": "ZHPJrqx5_n96rMPdn9LRG",
			"type": "arrow",
			"x": 725.0638478010751,
			"y": 56.524308099864925,
			"width": 1069.2811890025391,
			"height": 724.3903703318858,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1399751837,
			"version": 455,
			"versionNonce": 1471647347,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "D5pr2ljo"
				}
			],
			"updated": 1709899207413,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					163.13224892363883,
					228.46034094540113
				],
				[
					125.71752964685902,
					625.3789561654062
				],
				[
					-229.03769924319704,
					724.3903703318858
				],
				[
					-906.1489400789003,
					698.9048713953055
				]
			],
			"lastCommittedPoint": [
				-861.5061340395034,
				684.662801508221
			],
			"startBinding": {
				"elementId": "kmI_MaUYdKHhhOxw_f81v",
				"gap": 27.200227074790178,
				"focus": -0.5480968597720638
			},
			"endBinding": {
				"elementId": "qn-Xy_NZmy1l0dnpuNnbH",
				"focus": 0.6936095929918731,
				"gap": 19.545754337537176
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "D5pr2ljo",
			"type": "text",
			"x": 845.2198540104341,
			"y": 670.4032642652701,
			"width": 11.71875,
			"height": 24,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 864656989,
			"version": 4,
			"versionNonce": 1655931795,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899206157,
			"link": null,
			"locked": false,
			"text": "2",
			"rawText": "2",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 19,
			"containerId": "ZHPJrqx5_n96rMPdn9LRG",
			"originalText": "2",
			"lineHeight": 1.15
		},
		{
			"id": "zUJtADND",
			"type": "text",
			"x": 588.5808785501963,
			"y": 719.5736856585044,
			"width": 163.33984375,
			"height": 23,
			"angle": 6.1667598341379435,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 614854589,
			"version": 93,
			"versionNonce": 703582909,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709898896438,
			"link": null,
			"locked": false,
			"text": "返回登入页面 html",
			"rawText": "返回登入页面 html",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 18,
			"containerId": null,
			"originalText": "返回登入页面 html",
			"lineHeight": 1.15
		},
		{
			"type": "rectangle",
			"version": 2073,
			"versionNonce": 1810089341,
			"isDeleted": false,
			"id": "5n2ZPpLlELxkmCk4x-dUU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 439.9834151950971,
			"y": -222.37129587388236,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 193.2611543274023,
			"height": 44.24976761457111,
			"seed": 822493053,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "wQfJGXCw"
				}
			],
			"updated": 1709899435202,
			"link": null,
			"locked": false
		},
		{
			"id": "wQfJGXCw",
			"type": "text",
			"x": 473.04758610879827,
			"y": -209.4464120665968,
			"width": 127.1328125,
			"height": 18.4,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 158155795,
			"version": 72,
			"versionNonce": 1973947869,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899435202,
			"link": null,
			"locked": false,
			"text": "获取JSESSIONID",
			"rawText": "获取JSESSIONID",
			"fontSize": 16,
			"fontFamily": 2,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 14,
			"containerId": "5n2ZPpLlELxkmCk4x-dUU",
			"originalText": "获取JSESSIONID",
			"lineHeight": 1.15
		},
		{
			"id": "sbYcrbqh9Styv1eJunpaJ",
			"type": "diamond",
			"x": 393.5634971134655,
			"y": -135.21395036710368,
			"width": 277.36767278098677,
			"height": 94,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1430176819,
			"version": 820,
			"versionNonce": 1686391357,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "8HQ8RdpG"
				},
				{
					"id": "F2Guibx3FUpUV8XXWImkE",
					"type": "arrow"
				},
				{
					"id": "xWVOdzLx1_gqDXkgD7zsG",
					"type": "arrow"
				},
				{
					"id": "rI_KEJjTBqhdyA7wocOiC",
					"type": "arrow"
				}
			],
			"updated": 1709899435202,
			"link": null,
			"locked": false
		},
		{
			"id": "8HQ8RdpG",
			"type": "text",
			"x": 468.4054153087122,
			"y": -106.61395036710368,
			"width": 128,
			"height": 36.8,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1058788787,
			"version": 120,
			"versionNonce": 962198173,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899435202,
			"link": null,
			"locked": false,
			"text": "查找是否有对应的\nsession对象",
			"rawText": "查找是否有对应的session对象",
			"fontSize": 16,
			"fontFamily": 2,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 33,
			"containerId": "sbYcrbqh9Styv1eJunpaJ",
			"originalText": "查找是否有对应的session对象",
			"lineHeight": 1.15
		},
		{
			"id": "rI_KEJjTBqhdyA7wocOiC",
			"type": "arrow",
			"x": 393.1591407450756,
			"y": -87.8616226114188,
			"width": 48.7175955431245,
			"height": 46.265337443079034,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 734865555,
			"version": 1163,
			"versionNonce": 1659570941,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1709899971295,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-47.271420127138924,
					4.247892489993035
				],
				[
					-48.7175955431245,
					46.265337443079034
				]
			],
			"lastCommittedPoint": [
				-32.075373283701026,
				253.26182693821818
			],
			"startBinding": {
				"elementId": "sbYcrbqh9Styv1eJunpaJ",
				"focus": 0.25843362786938323,
				"gap": 1
			},
			"endBinding": {
				"elementId": "RZhQIg1chObdsMqqlLsyk",
				"focus": -0.055369350616792115,
				"gap": 13.67204111096865
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "F2Guibx3FUpUV8XXWImkE",
			"type": "arrow",
			"x": 535.2904448512284,
			"y": -178.2772131106263,
			"width": 2.26680528740809,
			"height": 39.823583383353025,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1535745299,
			"version": 166,
			"versionNonce": 450248211,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899435335,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.26680528740809,
					39.823583383353025
				]
			],
			"lastCommittedPoint": [
				2.0047497549136324,
				45.440118921419696
			],
			"startBinding": null,
			"endBinding": {
				"elementId": "sbYcrbqh9Styv1eJunpaJ",
				"focus": 0.058908223122771525,
				"gap": 4.77258568703278
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "xWVOdzLx1_gqDXkgD7zsG",
			"type": "arrow",
			"x": 529.4588799399353,
			"y": -41.103092036527485,
			"width": 1.1735328324917873,
			"height": 62.89067627030648,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 403318493,
			"version": 292,
			"versionNonce": 1686121619,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "eajefP2m"
				}
			],
			"updated": 1709899469676,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.1735328324917873,
					62.89067627030648
				]
			],
			"lastCommittedPoint": [
				1.3364637325558988,
				70.83311938626139
			],
			"startBinding": {
				"elementId": "sbYcrbqh9Styv1eJunpaJ",
				"focus": 0.02506222945498048,
				"gap": 1.0000000000000284
			},
			"endBinding": {
				"elementId": "qRF3WjkdOQbfz13RqWWK7",
				"focus": 0.023029776542507294,
				"gap": 3.388397310364528
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "eajefP2m",
			"type": "text",
			"x": 454.6956281953323,
			"y": -15.053083081056014,
			"width": 16,
			"height": 18.4,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 610394077,
			"version": 16,
			"versionNonce": 1419350643,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899339147,
			"link": null,
			"locked": false,
			"text": "是",
			"rawText": "是",
			"fontSize": 16,
			"fontFamily": 2,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 14,
			"containerId": "xWVOdzLx1_gqDXkgD7zsG",
			"originalText": "是",
			"lineHeight": 1.15
		},
		{
			"type": "rectangle",
			"version": 2142,
			"versionNonce": 800735603,
			"isDeleted": false,
			"id": "qRF3WjkdOQbfz13RqWWK7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 432.243022126984,
			"y": 25.175981544143525,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 193.2611543274023,
			"height": 44.24976761457111,
			"seed": 1442627357,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "wqFcw7VU"
				},
				{
					"id": "xWVOdzLx1_gqDXkgD7zsG",
					"type": "arrow"
				},
				{
					"id": "bOLd7To9nwbnxodtkqk3d",
					"type": "arrow"
				},
				{
					"id": "YMOH0BmNcK-TbWPADWnyN",
					"type": "arrow"
				}
			],
			"updated": 1709899513146,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 189,
			"versionNonce": 65086803,
			"isDeleted": false,
			"id": "wqFcw7VU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 456.87359929068515,
			"y": 38.10086535142908,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 144,
			"height": 18.4,
			"seed": 1370542973,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709899469676,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 2,
			"text": "获取对象中的对应值",
			"rawText": "获取对象中的对应值",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "qRF3WjkdOQbfz13RqWWK7",
			"originalText": "获取对象中的对应值",
			"lineHeight": 1.15,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 2403,
			"versionNonce": 2057700669,
			"isDeleted": false,
			"id": "RZhQIg1chObdsMqqlLsyk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 292.99122385160615,
			"y": -27.924244057371112,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 106.3181717841935,
			"height": 47,
			"seed": 903349821,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "LkTFYJzK"
				},
				{
					"id": "rI_KEJjTBqhdyA7wocOiC",
					"type": "arrow"
				},
				{
					"id": "bOLd7To9nwbnxodtkqk3d",
					"type": "arrow"
				}
			],
			"updated": 1709899476598,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 523,
			"versionNonce": 746169117,
			"isDeleted": false,
			"id": "LkTFYJzK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 303.0253097437029,
			"y": -22.82424405737111,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 86.25,
			"height": 36.8,
			"seed": 550909597,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1709899462605,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 2,
			"text": "创建session\n对象",
			"rawText": "创建session对象",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "RZhQIg1chObdsMqqlLsyk",
			"originalText": "创建session对象",
			"lineHeight": 1.15,
			"baseline": 33
		},
		{
			"id": "bOLd7To9nwbnxodtkqk3d",
			"type": "arrow",
			"x": 345.7920943551383,
			"y": 27.64228968799563,
			"width": 83.51067852983937,
			"height": 24.333680469677518,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1274438611,
			"version": 97,
			"versionNonce": 1171865171,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899483243,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.979009637008005,
					22.02901434589711
				],
				[
					83.51067852983937,
					24.333680469677518
				]
			],
			"lastCommittedPoint": [
				87.53907851144953,
				36.75302342568665
			],
			"startBinding": {
				"elementId": "RZhQIg1chObdsMqqlLsyk",
				"focus": 0.10714031608692481,
				"gap": 8.56653374536674
			},
			"endBinding": {
				"elementId": "qRF3WjkdOQbfz13RqWWK7",
				"focus": -0.3033280797001215,
				"gap": 2.9402492420063595
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YMOH0BmNcK-TbWPADWnyN",
			"type": "arrow",
			"x": 530.7219622045357,
			"y": 76.86020133264134,
			"width": 0.2724325662643423,
			"height": 45.43962917931428,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1507864765,
			"version": 65,
			"versionNonce": 1100285149,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709899570829,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.2724325662643423,
					45.43962917931428
				]
			],
			"lastCommittedPoint": [
				0,
				46.10837786573751
			],
			"startBinding": {
				"elementId": "qRF3WjkdOQbfz13RqWWK7",
				"gap": 7.434452173926701,
				"focus": -0.020395137345197416
			},
			"endBinding": {
				"elementId": "jk9FGKXq",
				"focus": -0.03071336817647942,
				"gap": 12.345584712972538
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "jk9FGKXq",
			"type": "text",
			"x": 463.3322870671991,
			"y": 134.64541522492817,
			"width": 140.46875,
			"height": 110.39999999999999,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 135032243,
			"version": 124,
			"versionNonce": 1964288029,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "YMOH0BmNcK-TbWPADWnyN",
					"type": "arrow"
				}
			],
			"updated": 1709899570828,
			"link": null,
			"locked": false,
			"text": "if (对应值 == xxxx) {\n    不用登入了;\n    输出欢迎页面;\n    } else {\n    跳转到登入页;\n}",
			"rawText": "if (对应值 == xxxx) {\n    不用登入了;\n    输出欢迎页面;\n    } else {\n    跳转到登入页;\n}",
			"fontSize": 16,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 106,
			"containerId": null,
			"originalText": "if (对应值 == xxxx) {\n    不用登入了;\n    输出欢迎页面;\n    } else {\n    跳转到登入页;\n}",
			"lineHeight": 1.15
		},
		{
			"id": "NFgMHfP7",
			"type": "text",
			"x": 273.1707654587997,
			"y": -102.60162929104114,
			"width": 131.89987182617188,
			"height": 15.171423360567122,
			"angle": 5.770498052435574,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1831908531,
			"version": 144,
			"versionNonce": 1760253459,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1709900007868,
			"link": null,
			"locked": false,
			"text": "获取到空值或者错误ID",
			"rawText": "获取到空值或者错误ID",
			"fontSize": 13.192542052667063,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 12,
			"containerId": null,
			"originalText": "获取到空值或者错误ID",
			"lineHeight": 1.15
		},
		{
			"id": "TWfNZbBp",
			"type": "text",
			"x": 740.3058660568812,
			"y": -210.6784164472863,
			"width": 1914.541015625,
			"height": 46,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1731793693,
			"version": 63,
			"versionNonce": 1990523261,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1709900096246,
			"link": null,
			"locked": false,
			"text": "服务器查看发过来的JSESSIONID在我这里有没有对应的session对象，如果找得到，那我们就可以获取到session对象中的值，比如可以获取到之前登入成功设置过的用户名等，那我就知道啊原来你之前已经登入过了。\n",
			"rawText": "服务器查看发过来的JSESSIONID在我这里有没有对应的session对象，如果找得到，那我们就可以获取到session对象中的值，比如可以获取到之前登入成功设置过的用户名等，那我就知道啊原来你之前已经登入过了。\n",
			"fontSize": 20,
			"fontFamily": 2,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 41,
			"containerId": null,
			"originalText": "服务器查看发过来的JSESSIONID在我这里有没有对应的session对象，如果找得到，那我们就可以获取到session对象中的值，比如可以获取到之前登入成功设置过的用户名等，那我就知道啊原来你之前已经登入过了。\n",
			"lineHeight": 1.15
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 2,
		"currentItemFontSize": 16,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 1478.724808213315,
		"scrollY": 641.7628768247732,
		"zoom": {
			"value": 0.5488513167141347
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