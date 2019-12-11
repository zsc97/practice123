<template>
  <div class="efooter">
    <div class="footer container">
      <p class="footer-p1">中国领先大学生成长平台e学聘</p>
      <p class="footer-p2">
        <a href="javascript:;">ICP备1650007号</a>
        <a href="javascript:;">
          联系我们
          <span>exuepin@exuepin.com</span>
        </a>
        <a href="javascript:;">关于我们</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "efooter",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.efooter {
    background: #fff;
  .footer {
    padding: 20px 0;
    p {
        font-size: 14px;
      color: #b4b4b4;
      text-align: center;
      margin-top: 4px;
      &.footer-p2 a {
          color: #b4b4b4;
          padding: 0 8px;
          border-right: 1px solid #ccc;
          &:last-child{
              border-right: none;
          }
          &:hover{
              color: #2fb5f8;
          }
      }
    }
  }
}
</style>