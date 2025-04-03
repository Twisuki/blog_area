---
title: VuePress使用自定义组件实现请求接口并放入md
icon: file
order: 
date: ""
category: 
tags:
---
## 

自定义组件：
```vue
<template>
  <div>
    <p id="custom-text">{{ hitokoto }}</p>
    <p v-if="author">— {{ author }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hitokoto: '', // 存储获取的文字
      author: ''    // 存储来源
    };
  },
  async mounted() {
    // 异步请求数据
    await this.getHitokoto();
  },
  methods: {
    async getHitokoto() {
      try {
        const response = await fetch('https://v1.hitokoto.cn');
        const data = await response.json();
        this.hitokoto = data.hitokoto;
        this.author = data.from;
      } catch (error) {
        console.error('Failed to fetch hitokoto:', error);
      }
    }
  }
}
</script>
```


组件放的位置：
```
memo(docsDir)
├── appends
│   ├── img
│   └── js
├── components
│   └── CustomContent.vue
├── docs
└── templater
```

在MD中使用：
```md
---
title: 日记首页
icon: file
order: 
date: 2024-08-17
category:
  - 日记
tags:
---
这里是我的日记本，记录一些我的点滴。

我本身是一个及其不爱写日记的人，但是我发现有时候写写日记的感觉，挺好。

偶尔在日记里记录下感恩和祝福，我祝福一切，祝福家人，祝福朋友，也祝福陌生人，也祝福意见不一致的人，也祝福对我有敌意的人。

也祝愿你身体安康、平安喜乐。

<CustomContent />

<script setup>
import CustomContent from "@source/components/CustomContent.vue";
</script>
```


参考链接：[Markdown 到 Vue SFC | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/guide/component/sfc.html)