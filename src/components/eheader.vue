<template>
  <div class="eheader ">
      <div class="header container clearfix">
        <img class="header-logo fl" src="../assets/images/logo.png" alt />
        <div class="header-login fr">
          <img class="login-img" src="../assets/images/stu1.png" alt />
          <a class="login-name" href="javascript:;">
            罗密欧
            <i class="iconfont icon-sanjiaoxing"></i>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "eheader",
  data() {
    return {};
  }
};
</script>

<style scoped>
.eheader{
 background: #333;
}
.header {
  height: 50px;
}
.header .header-logo {
  height: 50px;
}
.header-login{
  height: 50px;
}
.header-login {
  line-height: 50px;
}
.header-login .login-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.header-login .login-name {
  margin-left: 16px;
  text-decoration: none;
  color: #dadada;
}
.header-login .login-name .icon-sanjiaoxing {
  margin-left: 8px;
  color: #999;
}
</style>