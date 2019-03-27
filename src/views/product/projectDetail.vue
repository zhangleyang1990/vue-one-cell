<template>
  <div class="container">
    <div v-for="item in qijia" :key="item" v-if="from=='qijia'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in yancun" :key="item" v-if="from=='yancun'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in xigu" :key="item" v-if="from=='xigu'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in lidu" :key="item" v-if="from=='lidu'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in huanhu" :key="item" v-if="from=='huanhu'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in hongbo" :key="item" v-if="from=='hongbo'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in hualian" :key="item" v-if="from=='hualian'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in bandao" :key="item" v-if="from=='bandao'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in chengse" :key="item" v-if="from=='chengse'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>

    <div v-for="item in guoyuan" :key="item" v-if="from=='guoyuan'">
      <img :src="'/static/images/'+item+'.jpg'">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      from: "",
      qijia: ["qijia-1", "qijia-2", "qijia-3", "qijia-4", "qijia-5"],
      yancun: [
        "yancun-1",
        "yancun-2",
        "yancun-3",
        "yancun-4",
        "yancun-5",
        "yancun-6",
        "yancun-7",
        "yancun-8",
        "yancun-9",
        "yancun-10"
      ],
      xigu: ["xigu-1", "xigu-2", "xigu-3"],
      lidu: [
        "lidu-1",
        "lidu-2",
        "lidu-3",
        "lidu-4",
        "lidu-5",
        "lidu-6",
        "lidu-7",
        "lidu-8",
        "lidu-9"
      ],
      huanhu: [
        "huanhu-1",
        "huanhu-2",
        "huanhu-3",
        "huanhu-4",
        "huanhu-5",
        "huanhu-6",
        "huanhu-7",
        "huanhu-8"
      ],
      hongbo: ["hongbo-1", "hongbo-2", "hongbo-3", "hongbo-4"],
      hualian: [
        "hualian-1",
        "hualian-2",
        "hualian-3",
        "hualian-4",
        "hualian-5",
        "hualian-6",
        "hualian-7"
      ],
      bandao: ["bandao-1", "bandao-2", "bandao-3", "bandao-4"],
      chengse: ["chengse-1", "chengse-2"],
      guoyuan: [
        "guoyuan-1",
        "guoyuan-2",
        "guoyuan-3",
        "guoyuan-4",
        "guoyuan-5",
        "guoyuan-6",
        "guoyuan-7",
        "guoyuan-8"
      ]
    };
  },
  created(e) {
    this.from = this.$route.query.type;
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 30px;
  > div {
    display: inline-block;
    height: 430px;
    width: 430px;
    margin-left: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    > img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>