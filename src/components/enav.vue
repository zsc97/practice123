<template>
  <div class="enav">
      <div class="nav container  clearfix">
        <h3 class="fl"><router-link class="persolal-center" to='/' >My&nbsp;Center</router-link></h3>
        <ul class="nav-ul fl">
          <li @click="addClass(index)" v-for="(item,index) in arr" :key="index"  class="nav-list">
            <router-link  :to='item.url' class="nav-item" >{{ item.message }}</router-link>
          </li>
        </ul>
        <span class="fr">
          <router-link class="add-course" to='/course/addcourse'>
           <i class="iconfont icon-icon-test1"></i> 添加课程
           </router-link>
         
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: "enav",
  data() {
    return {
      arr:[{message:'基本信息',url:'/information'},{message:'课程管理',url:'/course'},{message:'我的问答',url:'/qa'}],
      activeIndex: '',
    };
  },
  methods: {
    addClass(index) {
       sessionStorage.setItem('cindex',index)
       window.console.log(sessionStorage.getItem('cindex'))
       this.activeIndex = index;
      
     
    },
    toUrl(){
      this.$router.push({path:'/'})
      this.activeIndex = ''
    },
   
  },
  mounted() {
     this.activeIndex = +sessionStorage.getItem('cindex')
      window.console.log(this.activeIndex)
  }
   
  
  
};
</script>

<style lang="less" scoped>
.enav{
  background: #fff;
  box-shadow: 1px 2px 2px 0px #ddd;
  .nav {
    height: 80px;
    .persolal-center {
      cursor: pointer;
      color: #00aaff;
      font-size: 24px;
      line-height: 80px;
    }
    .nav-ul {
      margin-left: 80px;
      line-height: 80px;
      .nav-list {
        height: 80px;
        float: left;
        margin-right: 50px;
        padding: 0 10px;
        .nav-item {
          font-family: Arial, Helvetica, sans-serif;
           &.router-link-active {
          color: #00aaff;
          padding-bottom: 10px;
          border-bottom: 2px solid #00aaff;
        }
          &:hover {
            color: #00aaff;
            padding-bottom: 10px;
            border-bottom: 2px solid #00aaff;
          }
        }
      }
    }
    .add-course {
      cursor: pointer;
      margin-top: 25px;
      color: #00aaff;
      display: inline-block;
      line-height: 30px;
      height: 30px;
      padding: 0 40px;
      border-radius: 20px;
      border: 1px solid #ccc;
      
    }
  }
}
</style>