<template>
  <div class="content-sidel clearfix fl">
    <div class="content-sidebar container">
      <div class="user-img">
        <img class src="../../assets/images/stu3.png" alt />
        <span class="edit-user-img">编辑</span>
      </div>
      <p
        v-for="(item,index) in arrMessage"
        :key="index"
        @click="addClass(index)"
        class="my-message"
      >
      <router-link :to="item.url">
        <i :class="item.icon" class="iconfont"></i>
        {{ item.message }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentside",
  data() {
    return {
      arrMessage: [
        {
          icon: "icon-kecheng",
          message: "我的课程",
          url:'/course/',
        },
        {
          icon: "icon-laba",
          message: "我的活动",
          url:'/course/myactivity',
        },
      ],
      currentIndex: 0
    };
  },
  methods: {
    addClass(index) {
      this.currentIndex = index;
      window.console.log(this.$router)
    }
  }
};
</script>

<style lang="less" scoped>
.content-sidebar {
  width: 280px;
  height: 540px;
  background: #fff;
  text-align: center;
  padding-top: 30px;
  .user-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: relative;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 80px;
      height: 80px;
       border-radius: 50%;
    }
    .edit-user-img {
        cursor: pointer;
      position: absolute;
        bottom: 0px;
        left: 0px;
        top: 60px;
        right: 0;
        line-height: 16px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5)
    }
  }
  .my-message {
      margin-top: 40px;
    cursor: pointer;
    margin-bottom: 30px;
    .iconfont {
      color: #666;
      margin-right: 4px;
    }
    .router-link-exact-active{
      .iconfont{
        color: #0af;
      }
      color: #0af;
    }
  }
}
</style>