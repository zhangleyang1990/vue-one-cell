<template>
  <div class="tabbar-container">
    <div
      class="item-tab"
      v-for="(item,index) in category"
      :key="index"
      @click="handleGoPage(item.mark)"
    >
      <img class="category-icon" :src="activeCategory==item.mark?item.imgActive:item.img">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      activeCategory: "/",
      category: [
        {
          name: "首页",
          id: "index",
          mark: "/",
          img: "/static/images/indexicon@2x.png",
          imgActive: "/static/images/icon-home-active@3x.png"
        },
        {
          name: "购物车",
          id: "cart",
          mark: "/cart",
          img: "/static/images/carticon@3.png",
          imgActive: "/static/images/carticon@3png.png"
        },
        {
          name: "用户",
          id: "user",
          mark: "/user",
          img: "/static/images/my@2x.png",
          imgActive: "/static/images/my@3.png"
        }
      ]
    };
  },
  created() {
    this.getPath();
  },
  methods: {
    // 跳转
    handleGoPage(e) {
      this.$router.push({ path: e });
    },

    // 获取设置当前路径
    getPath() {
      this.activeCategory = this.$route.fullPath;
    }
  }
};
</script>

<style lang="scss" scoped>
.tabbar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  width: 100%;
  border-top: 1px solid #e9e9e9;
  .item-tab {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .category-icon {
      height: 42px;
      width: 42px;
    }
  }
}
</style>