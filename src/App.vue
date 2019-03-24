<template>
  <div id="app">
    <!-- 头部 -->
    <div class="app-page__top">
      <top-navbar/>
    </div>
    <!-- 中部 -->
    <div class="app-page__middle">
      <router-view/>
    </div>
    <!-- 下部 -->
    <div class="app-page__bottom">
      <bottom-bar/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/base.scss";
</style>
