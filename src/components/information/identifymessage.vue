<template>
  <div class="identify fr clearfix">
    <div class="identify-conform fl">
      <div class="idcard-conform clearfix">
        <div class="img-wrapper">
          <div class="img fl">
            <img class="img" src="../../assets/images/idcard.jpg" alt />
            <p class="name">
              身份证（正面）
              <span class="identify-status">未认证</span>
            </p>
          </div>
          <div class="img reverse-side fl">
            <img class="img" src="../../assets/images/idcard.jpg" alt />
            <p class="name">
              身份证（反面）
              <span class="identify-status">未认证</span>
            </p>
          </div>
        </div>
      </div>
      <p class="reminder1">请传真实</p>
      <p class="reminder">请上传真实的身份证信息请上传真实的身份证信息</p>
      <div class="aptitude-conform">
        <div class="img">
          <img class="img" src="../../assets/images/idcard.jpg" alt />
          <p class="name">
            身份证（正面）
            <span class="identify-status">未认证</span>
          </p>
        </div>
        <p class="reminder1">请传真实</p>
        <p class="reminder">请上传真实的身份证信息请上传真实的身份证信息</p>
      </div>
    </div>
    <div class="personal-introduce fr">
      <div class="title clearfix">
        <span class="title-intro fl">个人简介</span>
        <span @click="edit" v-show="flag" class="title-edit fr">
          <i class="iconfont icon-bianji"></i> 编辑
        </span>
      </div>
      <textarea v-model="data" :class="{'border':btn}" class="edit-content" :readonly="flag"></textarea>
      <button @click="confirmChange" v-show="btn" class="active conform-change">确定修改</button>
      <button @click="cancelChange" v-show="btn" class="cancel-change">取消修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "identify",
  data() {
    return {
      data:" 汉皇重色思倾国，御宇多年求不得杨家有女初长成，养在深闺人未识。天生丽质难自弃，一朝选在君王侧。回眸一笑百媚生，六宫粉黛无颜色。春寒赐浴华清池，温泉水滑洗凝脂。侍儿扶起娇无力，始是新承恩泽时。云鬓花颜金步摇，芙蓉帐暖度春宵。春宵苦短日高起，从此君王不早朝。承欢侍宴无闲暇，春从春游夜专夜。",
      newData:'',
      flag:true,
      btn:false,
    };
  },
  methods: {
    edit(){
      this.flag = false;
      this.btn = true;
    },
    confirmChange(){
      this.btn = false;
       this.flag = true;
       this.newData = this.data;
    },
    cancelChange(){
      this.btn = false;
       this.flag = true;
      
    },

    post(){
      if(this.newData === ''){
        alert('请输入内容');
      }
      else{
        this.$axios({
          url:'',
          method:'post',
          
        })
      }
    }

  },
};
</script>

<style lang="less" scoped>
.identify {
  width: 900px;
  height: 570px;
  background: #fff;
  box-sizing: border-box;

  .identify-conform {
    box-sizing: border-box;
    padding-top: 30px;
    width: 450px;
    height: 570px;
    background: #fff;
    border-right: 1px solid #ccc;
    .img-wrapper {
      margin-left: 30px;
    }
    .img {
      width: 180px;
      margin-right: 26px;
      &.reverse-side {
        margin-right: 0;
      }
      img {
        height: 120px;
        background: #f8f8f8;
      }
      .name {
        margin-top: 20px;
        color: #666;
        text-align: center;
        .identify-status {
          &.green {
            color: #009900;
          }
          &.red {
            color: #da4e23;
          }
          margin-left: 10px;
        }
      }
    }
    .reminder1 {
      margin-top: 20px;
      text-align: center;
      color: #999;
      line-height: 24px;
    }
    .reminder {
      padding: 0 30px 30px 30px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      color: #999;
      line-height: 24px;
    }
    .aptitude-conform {
      margin-top: 30px;
      .img {
        margin: 0 auto;
      }
      .reminder {
        border: none;
      }
    }
  }
  .personal-introduce {
    box-sizing: border-box;
    padding: 30px;
    width: 450px;
    height: 570px;
    background: #fff;
    .title {
      .title-intro {
        font-weight: bold;
      }
      .title-edit {
        font-weight: bold;
        color: #0af;
        font-size: 18px;
        cursor: pointer;
        .iconfont {
          font-size: 22px;
        }
      }
    }
    .edit-content {
      box-sizing: border-box;
      margin-top: 40px;
      line-height: 20px;
      padding: 10px 30px 20px 20px;
      width: 100%;
      height: 350px;
      resize: none;
      outline: none;
      border: none;
      font-size: 14px;
    }
    .border {
      border: 1px solid #ccc;
    }
    .conform-change,
    .cancel-change {
      margin-top: 30px;
      width: 160px;
      height: 50px;
      margin-left: 20px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    .active {
      background: #0af;
      color: #fff;
    }
  }
}
</style>