<template>
  <div>
    <div class="top-title">
      <span>北京冬伊胜暖通</span>
      <div class="top-title__right">
        <img class="tel-icon" src="/static/images/tel.png" alt>
        <span class="tel-code">130 2113 1923</span>
      </div>
    </div>
    <div class="top-category">
      <span
        :class="categoryActive==item.path?'bgc--red':''"
        @click="handleSwichCategory(item.path)"
        v-for="(item,index) in category"
        :key="index"
      >{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "hand",
  data() {
    return {
      categoryActive: "/",
      category: [
        { name: "工程案例", id: 1, path: "/" },
        { name: "关于我们", id: 0, path: "/workJect" },
        { name: "产品", id: 2, path: "/production" },
        // { name: "使用说明", id: 3, path: "/useInfo" }
      ]
    };
  },
  created() {
    this.handleSwichCategory(this.$route.path);
  },
  mounted() {},
  methods: {
    handleSwichCategory(e) {
      this.categoryActive = e;
      this.$router.push({
        path: e
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.top-title {
  width: 1600px;
  height: 108px;
  margin: 0 auto;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .top-title__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    .tel-icon {
      margin-right: 20px;
    }
    .tel-code {
      color: #f00;
    }
  }
}
.top-category {
  padding: 0 120px;
  height: 50px;
  line-height: 50px;
  background: #333;
  span {
    display: inline-block;
    width: 160px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin-right: 4px;
  }
  span:hover {
    background: #f00;
  }
  .bgc--red {
    background: #f00;
  }
}
</style>
