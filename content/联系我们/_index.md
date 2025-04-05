---
title: "联系我们"
layout: "single"
---

<style>
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 20px;
    line-height: 1.6;
    font-size: 17px;
    color: #333;
  }

  .contact-title {
    font-size: 26px;
    font-weight: 700;
    color: #004080;
    margin-bottom: 15px;
  }

  .contact-info p {
    margin: 6px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .copy-button {
    margin-left: 10px;
    font-size: 14px;
    padding: 2px 8px;
    border: none;
    border-radius: 6px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }

  .copy-button:hover {
    background-color: #0056b3;
  }

  .copy-confirm {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #4caf50;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    display: none;
    font-size: 14px;
    z-index: 9999;
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
    justify-content: flex-start;
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
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    position: relative;
  }

  .popup-content img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  .popup-close {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 20px;
    cursor: pointer;
    color: #888;
  }
</style>

<div class="contact-container">
  <div class="contact-title">📞 联系我们</div>
  <div class="contact-info">
    <p>📍 <strong>公司地址</strong>：内蒙古自治区包头市青山区草原道呼得木林大街11号</p>
    <p>📞 <strong>电话</strong>：138-4739-9221 / 158-4721-3830</p>
    <p>
      📱 <strong>微信</strong>：伊娅老师：yyfjylx
      <button class="copy-button" onclick="copyText('yyfjylx')">📋 复制</button>
       / 米老师：cherish__snow
      <button class="copy-button" onclick="copyText('cherish__snow')">📋 复制</button>
    </p>
    <p>
      📮 <strong>咨询邮箱</strong>：yiya@yyflx.com
      <button class="copy-button" onclick="copyText('yiya@yyflx.com')">📋 复制</button>
    </p>
    <p>
      📮 <strong>合作邮箱</strong>：sasa@yyflx.com
      <button class="copy-button" onclick="copyText('sasa@yyflx.com')">📋 复制</button>
    </p>
    <p>⏰ <strong>工作时间</strong>：周一至周五 9:00–17:00 / 周六 10:00–16:00</p>
  </div>

  <div class="social-title">📲 官方社交媒体</div>
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
<div class="copy-confirm" id="copyConfirm">✅ 已复制到剪贴板</div>

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
