<template>
  <div class="my-product__list">
    <img v-for="(item,index) in photoList" :key="index" :src="item" alt>
  </div>
</template>
<script>
export default {
  name: "myProduct",
  data() {
    return {
      photoList: [
        "/static/images/1.jpg",
        "/static/images/19.jpg",
        "/static/images/2.jpg",
        "/static/images/15.jpg",
        "/static/images/16.jpg",
        "/static/images/17.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.my-product__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
img {
  width: 500px;
  height: 400px;
  margin-top: 10px;
}
</style>
