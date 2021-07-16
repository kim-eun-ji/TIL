<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <Comment />
  </div>
</template>

<script>
export default {
  updated(){
    if(window.location.pathname === "/TIL/"){
      document.getElementsByClassName('utterances')[0].style.display = 'none';
    } else {
      document.getElementsByClassName('utterances')[0].style.display = 'block';
    }
  },
}
</script>
