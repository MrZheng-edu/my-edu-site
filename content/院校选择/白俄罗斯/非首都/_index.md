---
title: "非首都地区"
layout: "list"
---

<style>
  .school-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3列布局 */
    gap: 20px;
    padding: 20px;
  }
  .school-item {
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    padding: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .school-item:hover {
    transform: scale(1.05);
  }
  .school-item img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }
  .school-item h3 {
    font-size: 16px;
    margin: 10px 0;
    height: 50px; /* ✅ 设置固定高度，确保文本对齐 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
  /* ✅ 让蓝色线条对齐 */
  .school-item a {
    display: block;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    padding-bottom: 5px; /* ✅ 统一底部间距 */
    border-bottom: 2px solid #007bff;
    margin-top: auto; /* ✅ 让链接始终对齐到底部 */
  }
  .center-text {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    text-align: center; /* 让文字内容居中 */
    font-size: 24px; /* 调整字体大小 */
    font-weight: bold; /* 让文本加粗 */
    padding: 20px; /* 增加内边距 */
  }
</style>

<!-- 🎯 让文本居中 -->
<div class="center-text">
  🇧🇾 这里是白俄罗斯非首都地区的院校列表
</div>

<div class="school-container">
   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/维捷布斯克国立大学/">
        <img src="/img/维大-1.jpg" alt="维捷布斯克国立大学">
        <h3>维捷布斯克国立大学</h3>
    </a>
  </div>  

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/维捷布斯克国立医科大学/">
        <img src="/img/维医-1.jpg" alt="维捷布斯克国立医科大学">
        <h3>维捷布斯克国立医科大学</h3>
    </a>
  </div>

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/维捷布斯克国立工艺大学/">
        <img src="/img/维工大-1.jpg" alt="维捷布斯克国立工艺大学">
        <h3>维捷布斯克国立工艺大学</h3>
    </a>
  </div>

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/格罗德诺国立大学/">
        <img src="/img/格大-1.jpg" alt="格罗德诺国立大学">
        <h3>格罗德诺国立大学</h3>
    </a>
  </div>

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/格罗德诺国立医科大学/">
        <img src="/img/格医-1.jpg" alt="格罗德诺国立医科大学">
        <h3>格罗德诺国立医科大学</h3>
    </a>
  </div>  

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/戈梅利国立大学/">
        <img src="/img/戈大-1.jpg" alt="戈梅利国立大学">
        <h3>戈梅利国立大学</h3>
    </a>
  </div>

   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/布列斯特国立大学/">
        <img src="/img/布大-1.jpg" alt="布布列斯特国立大学">
        <h3>布列斯特国立大学</h3>
    </a>
  </div>
   <div class="school-item">
    <a href="/院校选择/白俄罗斯/非首都/布列斯特国立技术大学/">
        <img src="/img/布技术-1.jpg" alt="布列斯特国立技术大学">
        <h3>布列斯特国立技术大学</h3>
    </a>
  </div>
</div>