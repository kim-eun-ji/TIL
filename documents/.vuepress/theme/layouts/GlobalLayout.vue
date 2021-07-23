<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <Comment />
  </div>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import Comment from "../../components/Comment.vue";
export default {
  updated() {
    if (document.getElementById("comment_con")) {
      if (window.location.pathname === "/TIL/") {
        document.getElementById("comment_con").style.display = "none";
      } else {
        document.getElementById("comment_con").style.display = "block";

        if (document.querySelector("iframe.utterances-frame")) {
          const f = document.querySelector("iframe.utterances-frame");
          let srcList = f.src.split("&");

          srcList[5] = "url=" + encodeURIComponent(location.href);
          srcList[7] = "pathname=" + encodeURIComponent(location.pathname.substr(1).replace(".html", ""));
          srcList[8] = "title=" + encodeURIComponent(document.getElementsByTagName("title")[0].text);
          srcList = srcList.join("&");
          f.setAttribute("src", srcList);
        }
      }
    }
  },
  components: {
    ParentLayout,
    Comment,
  },
};
</script>
