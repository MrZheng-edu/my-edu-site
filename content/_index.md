---
title: "首页"
layout: "list"
---

<style>
.hero {
  text-align: center;
  padding: 80px 20px 40px;
  background-image: url("/img/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
}
.hero h1 {
  font-size: 48px;
  font-weight: bold;
}
.hero p {
  font-size: 20px;
  margin-top: 15px;
}
.button-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}
.button-link {
  padding: 15px 30px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.button-link:hover {
  background-color: #0056b3;
}
.section {
  padding: 40px 20px;
  text-align: center;
}
.section h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

  /* 每个板块的内容：4 列横排 */
  .case-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3列布局 */
    gap: 15px;
  }

  /* 每个案例 */
  .case-item {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    background: #fff;
  }

  /* 图片样式 */
  .case-item img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }
.school-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.school-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.school-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.school-card h3 {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 40px 20px;
    max-width: 800px;
  }
  .contact-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .contact-info {
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 1.8;
  }
    .social-title {
    font-size: 22px;
    font-weight: bold;
    margin: 30px 0 15px;
    color: #006666;
  }

  .social-media {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-top: 10px;
  }

  .social-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #007bff;
    border: 2px solid #007bff;
    padding: 8px 14px;
    border-radius: 8px;
    transition: 0.3s;
    background: #f5faff;
  }

  .social-item:hover {
    background: #007bff;
    color: #fff;
  }

  .social-item img {
    width: 28px;
    height: 28px;
  }

  /* 弹出二维码样式 */
  .popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
  }
  .popup-content img {
    width: 200px;
    height: 200px;
  }
  .popup-close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }
.news-section {
  margin: 60px 20px 40px;
  text-align: center;
}

.news-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.news-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.news-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.news-card p {
  font-size: 14px;
  color: #555;
  margin-bottom: 0;
}
</style>

<img src="/img/hero-bg.jpg" alt="俄罗斯留学" style="width: 100%; border-radius: 20px;">

<div style="text-align: center; margin-top: 30px;">
  <h1 style="font-size: 32px; font-weight: bold;">🎓 羽翼飞国际教育</h1>
  <p style="font-size: 22px;"> 亲爱的同学 ｜ 留学路上，我们与你同行 </p>

  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
    <a href="/院校选择/" style="padding: 15px 25px; background-color: #2689ff; color: #fff; border-radius: 10px; text-decoration: none; font-weight: bold;">🎓 院校选择</a>
    <a href="/成功案例/" style="padding: 15px 25px; background-color: #2689ff; color: #fff; border-radius: 10px; text-decoration: none; font-weight: bold;">📄 成功案例</a>
    <a href="/visa-services/" style="padding: 15px 25px; background-color: #2689ff; color: #fff; border-radius: 10px; text-decoration: none; font-weight: bold;">📝 签证+翻译</a>
    <a href="/联系我们/" style="padding: 15px 25px; background-color: #2689ff; color: #fff; border-radius: 10px; text-decoration: none; font-weight: bold;">📞 联系我们</a>
  </div>
</div>

<div class="news-section">
  <h2>📰 近期动态 / 推荐项目</h2>
  <div class="news-cards">
    <div class="news-card">
      <h4>📌 2025 莫斯科暑期研学营</h4>
      <p>7月出发，中俄友谊语言课程 + 名校参访，全程导师陪同，现已开放报名！</p>
    </div>
    <div class="news-card">
      <h4>📢 招生公告：2025 秋季俄罗斯预科</h4>
      <p>莫大/友大/圣大预科招生全面启动，协助办理录取及签证。</p>
    </div>
    <div class="news-card">
      <h4>🔥 热门推荐：白俄罗斯国立大学1年制硕士</h4>
      <p>学费低、英语授课直录，适合考研上岸，英语薄弱的同学。</p>
    </div>
    <div class="news-card">
      <h4>🔥 热烈推荐：白俄罗斯1年制硕士分段出境</h4>
      <p>适合在职人士，护航英语渣渣的同学。</p>
    </div>
  </div>
</div>

<div class="section">
  <h2>🎬 校园实录</h2>
  <div style="max-width: 800px; margin: 0 auto;">
    <video
      controls
      poster="/img/莫斯科国立大学.jpg"
      style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);"
    >
      <source src="/video/莫斯科国立大学.mp4" type="video/mp4">
      抱歉，您的浏览器不支持视频播放。
    </video>
  </div>
    <div style="max-width: 800px; margin: 0 auto;">
    <video
      controls
      poster="/img/圣彼得堡国立大学.jpg"
      style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);"
    >
      <source src="/video/圣彼得堡国立大学.mp4" type="video/mp4">
      抱歉，您的浏览器不支持视频播放。
    </video>
  </div>
</div>

  <div class="social-title"></div>
  <div class="social-media">
    <div class="social-item" onclick="showQR()">
      <img src="/img/wechat_logo.png" alt="微信公众号">
      微信公众号
    </div>
    <a href="https://space.bilibili.com/474434690" class="social-item" target="_blank">
      <img src="/img/bilibili_logo.png" alt="B站"> B站
    </a>
    <a href="https://www.zhihu.com/org/yu-yi-fei-liu-xue" class="social-item" target="_blank">
      <img src="/img/zhihu_logo.png" alt="知乎"> 知乎
    </a>
    <a href="https://www.xiaohongshu.com/" class="social-item" target="_blank">
      <img src="/img/xiaohongshu_logo.png" alt="小红书"> 小红书
    </a>
  </div>
</div>

<div class="popup-overlay" id="qrPopup">
  <div class="popup-content">
    <span class="popup-close" onclick="hideQR()">✖</span>
    <h3>📢 扫码关注我们的公众号</h3>
    <img src="/img/wechat_qr.png" alt="微信公众号二维码">
  </div>
</div>

<!-- ✅ 复制提示 -->
<div class="copy-confirm" id="copyConfirm"></div>

<script>
  function showQR() {
    document.getElementById('qrPopup').style.display = 'flex';
  }
  function hideQR() {
    document.getElementById('qrPopup').style.display = 'none';
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).then(function () {
      const confirm = document.getElementById('copyConfirm');
      confirm.style.display = 'block';
      setTimeout(() => {
        confirm.style.display = 'none';
      }, 1500);
    });
  }
</script>
