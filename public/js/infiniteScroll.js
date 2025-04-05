document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    let isLoading = false; // 避免重复加载
    const listContainer = document.getElementById("success-cases-list");
    const loadingIndicator = document.getElementById("loading");
  
    async function loadMoreCases() {
      if (isLoading) return;
      isLoading = true;
      loadingIndicator.style.display = "block"; // 显示加载动画
  
      try {
        currentPage++;
        const response = await fetch(`/success-cases/page/${currentPage}/index.json`);
        if (!response.ok) throw new Error("数据加载失败");
  
        const data = await response.json();
        if (data.length === 0) {
          window.removeEventListener("scroll", handleScroll); // 没有更多内容时移除监听
          loadingIndicator.innerHTML = "没有更多内容了";
          return;
        }
  
        data.forEach(post => {
          const article = document.createElement("article");
          article.classList.add("post-entry");
          article.innerHTML = `
            <h2><a href="${post.permalink}">${post.title}</a></h2>
            <p>${post.summary}</p>
          `;
          listContainer.appendChild(article);
        });
      } catch (error) {
        console.error("加载失败:", error);
      } finally {
        isLoading = false;
        loadingIndicator.style.display = "none";
      }
    }
  
    function handleScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadMoreCases();
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  