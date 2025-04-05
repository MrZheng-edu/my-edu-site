---
title: "研学&夏令营"
layout: "list"
---

<style>
/* 彩色分割条 */
.divider {
  height: 5px;
  background: linear-gradient(90deg, #ff4b2b, #ff416c, #ff4b2b);
  margin: 40px 0 20px;
  border-radius: 3px;
}
  :root {
    --primary-color: #2689ff;  /* 主蓝色 */
    --secondary-color: #28a745; /* 辅助绿色 */
    --light-bg: #f9f9f9;
    --section-padding: 30px 20px;
    --section-radius: 12px;
  }

  body {
    font-family: "Helvetica Neue", sans-serif;
    color: #222;
    background-color: #ffffff;
    line-height: 1.6;
  }

  h2.section-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 20px;
    text-align: center;
  }

  .section {
    padding: var(--section-padding);
    background: var(--light-bg);
    border-radius: var(--section-radius);
    margin: 30px 0;
  }

  .divider {
    height: 4px;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    border-radius: 3px;
    margin: 20px auto;
    max-width: 150px;
  }

/* 顶部文字 */
.hero-container {
  text-align: center;
  padding: 30px 20px 10px; /* 原来是50px，缩小顶部 */
  margin-bottom: 10px;
  background-color: #f2f6fc;
  border-radius: 15px;
}
.hero-title {
  font-size: 26px;
  font-weight: bold;
  color: #004e89;
  margin-bottom: 10px;
}
.hero-subtitle div {
  font-size: 22px; /* 与上面保持一致 */
  font-weight: bold;
  color: #004e89;
  margin: 6px 0;
}

/* 视频区块 */
.video-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
}
.video-box {
  width: 320px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.video-box:hover {
  transform: translateY(-4px);
}
.video-box h4 {
  text-align: center;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  background-color: #f9f9f9;
}
.video-box video {
  width: 100%;
  height: auto;
}

/* 图片区 */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每行3列 */
    gap: 16px;
    margin-top: 20px;
  }

  .gallery-grid img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
  }

  .gallery-grid img:hover {
    transform: scale(1.03);
  }

  /* 移动端适配：小屏2列 */
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* 更小屏幕：1列展示 */
  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }

/* 标题统一 */
.section-title {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  margin: 20px 0 10px;
}
</style>

<div class="hero-container">
  <div class="hero-title"> 新丝路少年远征 🇷🇺 🇧🇾</div>
  <div class="hero-subtitle">
    <div>📍莫斯科 · 圣彼得堡 · 明斯克 📍</div>
    <div>💰 欧美1/3价格 + 双倍学术快乐浓度！🎉</div>
  </div>
</div>


<div class="section-title">🎬 羽翼飞 · 故事集</div>

<div class="video-gallery">
  <div class="video-box">
    <video controls>
      <source src="/video/2025年冬令营.mp4" type="video/mp4">
      您的浏览器不支持视频播放。
    </video>
    <h4>⛺️ 2025年冬令营</h4>
  </div>

  <div class="video-box">
    <video controls>
      <source src="/video/2024年冬令营.mp4" type="video/mp4">
    </video>
    <h4>⛺️ 2024年冬令营</h4>
  </div>
</div>

<div class="divider"></div>

<div class="section-title">📸 羽翼飞 · 回忆录</div>
<img src="/img/夏令营-1.jpg" alt="夏令营" style="width: 100%; border-radius: 10px; margin: 20px 0;">

<div class="gallery-grid">
  <img src="/img/研学-1.jpg" alt="研学1">
  <img src="/img/研学-2.jpg" alt="研学2">
  <img src="/img/研学-3.jpg" alt="研学3">
  <img src="/img/研学-4.jpg" alt="研学4">
  <img src="/img/研学-5.jpg" alt="研学5">
  <img src="/img/研学-6.jpg" alt="研学6">
  <img src="/img/研学-7.jpg" alt="研学7">
  <img src="/img/研学-8.jpg" alt="研学8">
  <img src="/img/研学-9.jpg" alt="研学9">
  <img src="/img/研学-10.jpg" alt="研学10">
  <img src="/img/研学-11.jpg" alt="研学11">
  <img src="/img/研学-12.jpg" alt="研学12">
</div>

<div class="divider"></div>

<div class="section-title">📚 研学亮点概览</div>

## 🇷🇺 语言与文化沉浸体验

**俄语强化课程**  
- 分级教学：A1- B2  
- 中俄混营日常交流，平均提升50%  
- 使用俄罗斯官方教材《走遍俄罗斯》《小苹果俄语》

**中俄文化双向体验**  

| 中方文化输出          | 俄方文化输入              |
|-----------------------|---------------------------|
| ✂️ 非遗剪纸工作坊      | 🎭 民族舞蹈教学             |
| 🍵 茶艺书法体验        | 🍞 列巴烘焙课堂              |
| 👘 汉服试穿           | 👗 宫廷服饰与套娃彩绘        |

---

## 🇨🇳🤝🇷🇺 青少年深度互动

**跨文化竞技**  
▸ 中俄篮球/足球/电竞对抗赛（配职业裁判）  

**文艺共创**  
▸ 契诃夫戏剧表演、绘画联展、大师公开课体验

**在地探索**  
▸ 亲手做俄式饺子🥟、体验俄罗斯桑拿🧖

▸ 地铁购票、超市任务、景点导览任务 🚇 🗺️

**全程保障**  
- 中俄双语教师1:8陪同  
- 百万境外保险 + 实时家长群直播签到 