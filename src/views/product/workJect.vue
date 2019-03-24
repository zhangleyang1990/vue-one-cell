<template>
  <div class="project-page">
    <div v-for="(item,index) in projectList" :key="index">
      <div class="project-top">
        <div class="project-top__text">{{item.name}}项目</div>
      </div>
      <div class="peoject-photo">
        <img
          v-for="(only,index) in item.photo"
          :key="index"
          :src="only"
          :alt="item.name"
          ref="projectPhoto"
        >
      </div>
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
          name: "海淀区军事基地",
          photo: ["/static/images/13.jpg"]
        },
        {
          name: "海淀西二旗领袖新硅谷",
          photo: ["/static/images/6.jpg", "/static/images/8.jpg"]
        },
        {
          name: "朝阳望京国风上观",
          photo: [ "/static/images/3.jpg"]
        },
        {
          name: "丰台宋家庄地区",
          photo: ["/static/images/4.jpg", "/static/images/20.jpg"]
        },
        {
          name: "大兴小红门地区",
          photo: ["/static/images/7.jpg", "/static/images/9.jpg"]
        },
        {
          name: "顺义孙河地区",
          photo: ["/static/images/10.jpg", "/static/images/11.jpg"]
        }
      ]
    };
  },
  mounted() {
    this.$refs.projectPhoto.forEach(item => {
      item.style =
        "width:" + (item.naturalWidth * 500) / item.naturalHeight + "px";
    });
  }
};
</script>
<style lang="scss" scoped>
.project-page{
  margin-top: 10px;
}
.project-top {
  height: 50px;
  background-color: rgb(74, 81, 173);
  color: white;
  line-height: 50px;
  margin-bottom: 10px;
  .project-top__text {
    width: 1620px;
    margin: 0 auto;
    font-size: 18px;
  }
}
.peoject-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 10px;
  }
}
</style>

