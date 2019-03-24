<template>
  <div class="container batbar">
    <div class="text">
      <div>Copyright © 2008-2028冬伊胜（北京）采暖设备有限公司. All rights reserved</div>
      <div>京ICP备15034067号-1</div>
      <div>冬伊胜（北京）采暖设备有限公司 Powered by OpenWBS 建站系统 zhaoGaoShang tel:13716171560</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.batbar {
  height: 100px;
  background-color: #333;
  margin-top: 10px;
  .text {
    height: 80px;
    width: 1600px;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>