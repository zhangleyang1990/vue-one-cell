<template>
  <div class="container">
    <div class="mobile-input">
      <div>+86</div>
      <div>
        <el-input v-model="mobileCode" placeholder="请输入手机号码"></el-input>
      </div>
    </div>
    <div class="mobile-input">
      <div>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </div>
    </div>
    <div class="handle-btn">
      <el-button type="primary">注册</el-button>
      <el-button type="success" @click="handleGoLogin">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobileCode: "",
      password: ""
    };
  },
  methods: {
    handleGoLogin() {
      // this.$axios.()
    }
  },
  watch: {
    password: res => {}
  }
};
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  padding: 40px;
  .mobile-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 28px 0;
    border-bottom: 1px solid #e9e9e9;
    .el-input {
      flex: 1;
      input {
        border: none;
      }
    }
  }
  .handle-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
}
</style>
