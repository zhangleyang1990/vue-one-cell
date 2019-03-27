<template>
  <div class="project-page">
    <div
      class="project-page__item"
      v-for="(item,index) in projectList"
      :key="index"
      @click="handleGoProjectDetail(item.type)"
    >
      <img :src="item.photo" :alt="item.photo">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "workJect",
  data() {
    return {
      projectList: [
        {
          name: "北七家土沟",
          photo: "/static/images/qijia-1.jpg",
          type: "qijia"
        },
        {
          name: "阎村",
          photo: "/static/images/yancun-1.jpg",
          type: "yancun"
        },
        {
          name: "首奕溪谷",
          photo: "/static/images/xigu-1.jpg",
          type: "xigu"
        },
        {
          name: "丽都壹号",
          photo: "/static/images/lidu-1.jpg",
          type: "lidu"
        },
        {
          name: "环湖小镇",
          photo: "/static/images/huanhu-1.jpg",
          type: "huanhu"
        },
        {
          name: "鸿博家园",
          photo: "/static/images/hongbo-1.jpg",
          type: "hongbo"
        },
        {
          name: "新华联北区32号",
          photo: "/static/images/hualian-1.jpg",
          type: "hualian"
        },
        {
          name: "半岛国际",
          photo: "/static/images/bandao-1.jpg",
          type: "bandao"
        },
        {
          name: "橙色时代",
          photo: "/static/images/chengse-1.jpg",
          type: "chengse"
        },
        {
          name: "果园小区",
          photo: "/static/images/guoyuan-1.jpg",
          type: "guoyuan"
        }
      ]
    };
  },
  methods: {
    handleGoProjectDetail(e) {
      this.$router.push({
        path: "/project/detail",
        query: {
          type: e
        }
      });
    }
  },
  mounted() {
    // this.$refs.projectPhoto.forEach(item => {
    //   item.style =
    //     "width:" + (item.naturalWidth * 500) / item.naturalHeight + "px";
    // });
  }
};
</script>
<style lang="scss" scoped>
.project-page {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.project-page__item {
  padding: 10px;
  height: 230px;
  width: 180px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin-left: 30px;
  margin-bottom: 30px;
  img {
    height: 180px;
    width: 180px;
  }
}
</style>

