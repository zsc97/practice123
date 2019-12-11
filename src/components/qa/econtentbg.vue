<template>
  <div class="econtentbg">
    <div class="content container clearfix">
      <contentside></contentside>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import contentside from './contentside'
export default {
  name: "econtentbg",
  components:{
    contentside,
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.econtentbg {
  padding: 20px 0;
  background: #f4f4f4;
}
</style>