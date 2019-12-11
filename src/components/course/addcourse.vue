<template>
  <div class="addcourse fr">
    <p class="icon">
      <i @click="send" class="iconfont iconbig icon-shipin">
        <i class="iconfont iconsmall icon-icon-test1"></i>
      </i>
    </p>
    <p class="list">1.不得上传未经授权的他人作品</p>
    <p class="list">2.视频大小限制：不支持断点上传，视频文件最大200M</p>
    <p class="list">3.不得上传未经授权的他人作品</p>
    <p class="list">4.视频大小限制：不支持断点上传，视频文件最大200M</p>
    <p class="list">5.不得上传未经授权的他人作品</p>
    <p class="list">6.视频大小限制：不支持断点上传，视频文件最大200M</p>
    <p class="list">7.不得上传未经授权的他人作品</p>
    <p class="list">8.视频大小限制：不支持断点上传，视频文件最大200M</p>
  </div>
</template>

<script>
export default {
  name: "addcourse",
  data() {
    return {};
  },
  methods: {
    send(){
      this.$router.push({path:'/course/coursesend'})
    }
  }
};
</script>

<style lang="less">
.addcourse {
  width: 900px;
  height: 570px;
  box-sizing: border-box;
  background: #fff;
  padding: 30px 0;
  .icon {
    margin-top: 60px;
    .iconbig {
      position: relative;
    }
    .iconsmall {
      width: 24px;
      height: 24px;
      background: #0af;
      border-radius: 50%;
      position: absolute;
      right: -6px;
      bottom: 6px;
    }
    .icon-icon-test1 {
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
    }
    .icon-shipin {
      font-size: 100px;
      color: #0af;
      margin-left: 150px;
    }
  }
  p {
    margin-top: 20px;
    color: #ccc;
    padding-left: 200px;
  }
}
</style>