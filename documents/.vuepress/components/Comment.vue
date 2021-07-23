<template>
  <div id="comment_con">
    <div ref="comment"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute("theme", "github-light"); // theme 설정
    utterances.setAttribute("repo", `kim-eun-ji/TIL-comments`); // 사용할 repository

    if (window.location.pathname === "/TIL/") {
      document.getElementById("comment_con").style.display = "none";
    } else {
      document.getElementById("comment_con").style.display = "block";
    }

    // script tag 삽입
    this.$refs.comment.appendChild(utterances);
  },
};
</script>
