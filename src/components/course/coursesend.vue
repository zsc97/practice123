<template>
  <div class="coursesend fr">
    <div class="progress">
      <p class="avname">全民股东-201610251223.mp4</p>
      <p class="progress-bar">
        <span>
          <i class="iconfont icon-duihao"></i>
        </span>
      </p>
      <p class="progress-status">上传成功100%</p>
    </div>
    <div v-show="flag1" class="savemessage">
      <p class="resend">
        <span>重新上传</span>
      </p>
      <p class="s-title">
        <label for="title">标题</label>
        <input id="title" type="text" />
      </p>
      <p class="s-classify">
        <label for="classify">分类</label>
        <span @click="pullDown" class="select" id="classify">{{selected}}<i class="iconfont fr icon-sanjiaoxing"></i></span>
        <span v-show="flag" class="span-wrapper">
          <span @click="Selectitem(index)" v-for="(item,index) in arrSelect" :key="index" class="s-classify1">{{ item }}</span>
        </span>
      </p>
      <p class="s-intro">
        <label for="intro">课程介绍</label>
        <textarea  name id="intro" cols="30" rows="10"></textarea>
      </p>
      <button @click="confirm" class="confirm">保存信息</button>
    </div>
    <div v-show="flag" class="save-finish">
        <p class="save-icon"><i class="iconfont icon-duihao"></i></p>
        <p class="save-status">保存成功，等待审核</p>
        <p class="save-hint">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等候</p>
        <p @click="continueSend" class="continue-send">继续上传</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "coursesend",
  data() {
    return {
      selected:'请选择课程分类',
      arrSelect:['111','222','333'],
      flag:false,
      flag1:true,
    };
  },
  methods: {
    pullDown(){
      this.flag = true;
    },
    Selectitem(index){
     this.selected = this.arrSelect[index]
      this.flag = false;
    },
    confirm(){
      this.flag1 = false;
      this.flag = true;
      
    },
    continueSend(){
      this.$router.push({path:'/course/addcourse'})
    }

  }
};
</script>

<style lang="less">
.coursesend {
  width: 900px;
  height: 570px;
  box-sizing: border-box;
  background: #fff;
  padding: 30px 40px;
  .progress {
    .avname {
      font-size: 14px;
      font-weight: 600;
    }
    .progress-bar {
      margin-top: 10px;
      height: 10px;
      border-radius: 4px;
      background: #0af;
      padding-right: 20px;
      position: relative;
      span {
        width: 16px;
        height: 16px;
        position: absolute;
        text-align: center;
        line-height: 16px;
        right: -20px;
        top: -2px;
        background: #0af;
        border-radius: 50%;
        color: #fff;
      }
    }
    .progress-status {
      margin-top: 12px;
      font-size: 12px;
      color: #aaa;
    }
  }
  .savemessage {
    margin-top: 10px;
    .resend {
      text-align: right;
      font-size: 14px;
      color: #0af;
      span {
        cursor: pointer;
      }
    }
    label {
      width: 70px;
      display: inline-block;
      text-align: right;
      padding-right: 20px;
    }
    .s-classify {
      position: relative;
      label{
        height: 30px;
      }
      .select{
        color: #666;
        display: inline-block;
        width: 725px;
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-indent: 1em;
        i{
         margin-right: 10px;
        }
      }
      .span-wrapper{
        position: absolute;
        left: 90px;
        top: 30px;
        span{
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        display: block;
        width: 725px;
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-indent: 1em;
      }
      }
      
    }

    .s-title,
    .s-classify,
    .s-intro {
      margin-top: 10px;
      input {
        width: 725px;
        height: 30px;
        border-radius: 4px;
        text-indent: 1em;
        border: none;
        outline: none;
        border: 1px solid #ccc;
      }
    }
    .s-intro{
      .intro{
        vertical-align: top;
      }
      textarea{
        resize: none;
        box-sizing: border-box;
        vertical-align: top;
        width: 725px;
        outline: none;
        text-indent: 1em;
        padding: 10px 10px;
        border: 1px solid #ccc;
      }
      
    }
    .confirm{
      margin-top: 10px;
      margin-left: 90px;
      padding: 10px 50px;
      background: #0af; 
      border-radius: 6px;
      color: #fff;
      
    }
  }
  .save-finish{
     margin: 0 auto;
    margin-top: 160px;
    width: 300px;
    // background: #000;
    height: 90px;
    text-align: center;
    .save-icon{
      width: 80px;
      height: 80px;
      background: #0af;
      border-radius: 50%;
      margin: 0 auto;
      line-height: 80px;
      .iconfont{
        font-size: 50px;
        color: #fff;
        font-weight: bold;
      }
    }
    .save-status{
      margin-top: 20px;
      font-weight: bold;
    }
    .save-hint{
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
    .continue-send{
      margin:0 auto;
      margin-top: 20px;
      width: 180px;
      height: 50px;
      line-height: 50px;
      background: #0af;
      border-radius: 6px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>