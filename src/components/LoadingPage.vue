<template>
  <div class="loading-page__box" v-if="isShowData">
    <img class="loading-page" src="/static/images/jiazai.gif">
  </div>
</template>
<script>
export default {
  name: "loadingPage",
  props: {
    isShow: true,
    time: Number
  },
  data() {
    return {
      isShowData: this.isShow,
      timeData: this.time ? this.time : 5000
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.isShowData = false;
    }, this.timeData);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.loading-page__box {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: white;
  .loading-page {
    height: 200px;
    width: 200px;
  }
}
</style>

