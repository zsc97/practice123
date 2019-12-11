<template>
  <div class="password fr">
      <h3 class="password-title">登陆密码</h3>
      <div class="password-ipt">
        <form>
          原密码 <input type="password" placeholder="请输入原始密码">
          <br>
          新密码 <input v-model="pwd" type="password" placeholder="请输入新密码">
          <br>
          确认密码 <input v-model="newpwd" type="password" placeholder="请再次输入原始密码">
          <br>
        </form>
        <button  v-show="flag" @click="confirm" class="conform active">确认修改</button>
          <button v-show="flag" @click="cancel" class="exit">取消修改</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
      pwd:'',
      newpwd:'',
      flag:true,
    };
  },
  methods: {
    confirm(){
      if(this.pwd === this.newpwd){
        this.flag = false;
      }
      else{
        alert("确认密码和新密码不一致")
      }
    },
    cancel(){
      this.flag = false;
    }
  },
}
</script>

<style lang="less" scoped>
.password{
    width: 900px;
    height: 570px;
    box-sizing: border-box;
    background: #fff;
    padding: 30px 0;
    .password-title{
      font-weight: normal;
      padding-left: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #ddd;
    }
    .password-ipt{
      margin-top: 30px;
      padding-right:  360px;
      text-align: right;
      input{

        margin-left: 10px;
        margin-top: 6px;
        width: 400px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 5px;
        border: 1px solid #ccc;
        text-indent: 1em;
      }
      .conform,.exit{
        overflow: hidden;
        margin-top: 30px;
        text-align: center;
        width: 160px;
        height: 40px;
        border: 1px solid #ccc;
        margin-right: 20px;
        border-radius: 5px;
        &.active{
          background: #0af;
          color: #fff;
        }
      }
      .exit{
        margin-right: 60px;
      }
    }
}
</style>