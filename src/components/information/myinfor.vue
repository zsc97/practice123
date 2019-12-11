<template>
  <div class="myinfor fr">
    <form>
      <div class="allipt">
        <p class="clearfix editp">
          <label for="name">姓名</label>
          <input v-model="arrIpt.username" :style="{border:edit?'1px solid #ccc':'none'}" v-bind:readonly="flag" type="text" id="name" name="username" />
          <span @click="editipt" v-show="flag" class="edit fr">
            <i class="iconfont icon-bianji"></i> 编辑
          </span>
        </p>
        <p>
          <label for="birth">出生日期</label>
          <input v-model="arrIpt.birth" :style="{border:edit?'1px solid #ccc':'none'}" placeholder="本项不可输入，填写完身份证后自动同步" :readonly="1" type="text" id="birth" name="birth" />
        </p>
        <p>
          <label for="gender">性别</label>
          <select  v-model="arrIpt.gender" :style="{border:edit?'1px solid #ccc':'none'}" :disabled="flag" name="gender" id="gender">
            <option value>男</option>
            <option value>女</option>
          </select>
        </p>
        <p>
          <label for="phone">手机号</label>
          <input v-model="arrIpt.phone" :class="{'active':edit}" :readonly="flag" type="text" id="phone" name="phone" />
          <span :class="{'active':edit}"  class="status">
            <i class="iconfont icon-duihao"></i> 已验证
          </span>
          <span @click="getauthcode" :class="{'active':edit}" v-show="edit" class="authcode">{{authcode}}</span>
        </p>
        <p>
          <label for="email">邮箱</label>
          <input v-model="arrIpt.email" :style="{border:edit?'1px solid #ccc':'none'}" :readonly="flag" type="text" id="email" name="email" />
        </p>
        <p>
          <label for="idcard">身份证</label>
          <input @blur="getBirthDate" v-model="arrIpt.idcard" :style="{border:edit?'1px solid #ccc':'none'}" :readonly="flag" type="text" id="idcard" name="idcard" />
        </p>
        <p>
          <label for="wechat">微信号</label>
          <input  v-model="arrIpt.wechat" :style="{border:edit?'1px solid #ccc':'none'}" :readonly="flag" type="text" id="wechat" name="wechat" />
        </p>
        <p>
          <label for="qq">QQ号</label>
          <input v-model="arrIpt.qq" :style="{border:edit?'1px solid #ccc':'none'}" :readonly="flag" type="text" id="qq" name="qq" />
        </p>
      </div>
    </form>
    <transition name="btn-fade">
      <p class="btn" v-show="edit">
        <button @click="confirm" class="confirm-change">确认修改</button>
        <button @click="cancel" class="cancel-change">取消修改</button>
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "myinfor",
  data() {
    return {
      timer:null,
      flag: true,
      edit: false,
      authcode:'获取验证码',
      arrIpt:{
        username:'张帅成',
        birth:'',
        gender:'',
        phone:'',
        idcarrd:'',
        email:'',
        wechat:'',
        qq:'123'
      }
    };
  },
  methods: {
    editipt() {
      this.edit = true;
      this.flag = false;
    },
    getBirthDate(){
      let id = this.arrIpt.idcard.toString();
      if(id.length !== 18){
        alert('请输入正确的身份证号')
      }
      else{
        let birthDay = id.substr(6,8);
        if(birthDay.length === 8){
          let arrBirth = birthDay.split('');
          arrBirth.splice(4,0,'年')
          arrBirth.splice(7,0,'月')
          arrBirth.splice(10,0,'日')
          this.arrIpt.birth = arrBirth.join('')
        }
        else{
          alert("获取出生日期错误");
        } 
      }
    },
    getauthcode(){
      clearInterval(this.timer)
      this.authcode = 60;
      this.timer = setInterval(()=>{
        if(this.authcode>0){
          
          this.authcode --;
          if(this.authcode === 0){
            this.authcode = '重新获取验证码'
          }
        }
       
      },1000)
        
     
    },
    confirm(){
      this.flag = true;
      this.edit = false;
      this.$axios({
        method:'post',
        url:'/',
        data:this.arrIpt,
      }).then(function(res){
        window.console.log(res)
      })
    window.console.log(this.arrIpt)
    },
    cancel(){
      this.flag = true;
      this.edit = false;
    }
  },
  mounted() {
    this.axios({
      method:'get',
      url:'/api/getList',
    }).then(res=>{
      window.console.log(res)
    })
  },
 
};
</script>

<style lang="less" scoped>
.myinfor {
  width: 900px;
  height: 570px;
  background: #fff;
  box-sizing: border-box;
  padding: 30px 20px;
  .allipt {
    p {
      margin-bottom: 10px;
    }
    label {
      cursor: pointer;
      display: inline-block;
      padding: 0px 6px;
      text-align: right;
      width: 70px;
      vertical-align: center;
    }
    input {
      width: 400px;
      height: 40px;
      border-radius: 10px;
      outline: none;
      border: none;
      text-indent: 1em;
      margin-left: 10px;
      color: #666;
      font-size: 14px;
    }
    #phone {
      width: 180px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      &.active{
        border: 1px solid #ccc;
        border-right: none;
      }
  }
    .status {
      display: inline-block;
      width: 80px;
      height: 40px;
      vertical-align: middle;
      background: #fff;
      line-height: 40px;
      &.active{
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
    .authcode {
      &.active{
        border: 1px solid #ccc;
      }
      cursor: pointer;
      color: #0af;
      display: inline-block;
      width: 140px;
      height: 40px;
      background: #fff;
      text-align: center;
      line-height: 40px;
      vertical-align: middle;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    #gender {
      text-indent: 1em;
      width: 400px;
      margin-left: 10px;
      height: 40px;
      outline: none;
      border: none;
      border-radius: 10px;
      appearance: none;
    }
    .edit {
      color: #0af;
      font-size: 16px;
      cursor: pointer;
      .iconfont {
        font-size: 20px;
      }
      option{
        font-size: 50px;
        color: red;
      }
    }
  }
  .btn {
    width: 460px;
    margin-top: 20px;
    text-align: center;
    button {
      width: 140px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 6px;
      margin-left: 20px;
      &.confirm-change {
        color: #fff;
        background: #0af;
      }
    }
  }
  .btn-fade-enter,
  .btn-fade-leave-to {
    opacity: 0;
    transform: translateX(140px);
  }

  .btn-fade-enter-active,
  .btn-fade-leave-active {
    transition: all 0.3s ease;
  }
}
</style>