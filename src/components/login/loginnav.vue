<template>
  <div class="loginnav clearfix">
    <div class="nav container">
      <img class="nav-img fl" src="../../assets/images/logo1.png" alt="123" />
      <p class="nav-login fr">
        <a href>注册</a>|
        <a href>登陆</a>
      </p>
    </div>
    <div class="content">
      <div class="content-right clearfix">
        <div class="identify fl">
          <ul class="identify-ul">
            <li
              :class="{'active': currentIndex === index}"
              @click="big(index)"
              v-for="(item,index) in identify"
              :key="index"
              class="identify-list"
            >
              <div class="p-wrapper">
                <p class="iconfont" :class="item.icon"></p>
                <p class="job">我是{{item.name}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="flag1" class="main fl">
          <span :class="{'active': loginWayIndex === index}" @click="addStyle(index)" v-for='(item,index) in loginWay' :key="index"  class="account-login">账号登录</span>
         
          <div v-show="loginWayIndex===0" class="account-login-content">
            <p class="phone1">
              <input v-model='phone' autofocus placeholder="手机号" type="text" />
            </p>
            <p class="password1">
              <input v-model='password' placeholder="密码" type="password" />
            </p>
            <p class="forget1">忘记密码</p>
            <p @click="loginSuccess" class="login-btn1"> 
              <router-link to=''>
                 登陆了！去首页
              </router-link>
              
               </p>
            <p class="no-account1">
              还没有账号？请
              <a @click="register">注册</a>
            </p>
          </div>
          <div v-show="loginWayIndex===1" class="account-login-wechat">
              <div class="img-er">二维码</div>
              <p class="scan">扫码登录</p>
          </div>
         
        </div>
         <div v-show='flag' class="main fl">
          
           <p class="phone-register">通过手机号注册</p>
          <div v-show="loginWayIndex===0" class="account-login-content">
            <p class="phone1">
              <input placeholder="手机号" type="text" />
            </p>
             <p class="password1 yzm">
              <input placeholder="验证码" type="text" />
              <span>获取验证码</span>
            </p>
            <p class="password1">
              <input placeholder="密码" type="password" />
            </p>
           
            <p @click="loginSuccess" class="login-btn1">提交注册</p>
            
          </div>
         
         
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginnav",
  data() {
    return {
        flag:false,
        flag1:true,
        phone:'',
        password:'',
        loginWay:['账号登录','微信登录'],
        loginWayIndex:0,
      currentIndex: 1,
      identify: [
        {
          name: "学生",
          icon: "icon-xuesheng"
        },
        {
          name: "讲师",
          icon: "icon-jiangshi"
        },
        {
          name: "HR",
          icon: "icon-HR"
        }
      ]
    };
  },
  methods: {
    big(index) {
      this.currentIndex = index;
    },
    addStyle(index){
       this.loginWayIndex = index;
    },
    
    loginSuccess(){
       this.axios.get('/api/getList').then(res => {
         if(this.phone === res.data.phone&&this.password === res.data.password){
           alert('登录成功')
           this.$router.push({path:'/econtent'})
         }
        else{
          alert('账号或密码错误')
        }
       })
    },
   
    register(){
      this.flag = true;
      this.flag1 = false;

      window.console.log( this.flag)
    }
  }
};
</script>

<style lang="less" scoped>
.loginnav {
  .nav {
    height: 60px;
    line-height: 60px;
    // background: #000;
    .nav-login {
      a {
        margin: 0 6px;
        color: #888;
      }
    }
  }
  .content {
    border-top: 1px solid #eee;
    position: relative;
    padding-bottom: 120px;
    height: 640px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 500px, #fff 20%);
    .content-right {
      border-radius: 5px;
      margin-top: 120px;
      width: 560px;
      height: 500px;
      position: absolute;
      background: #fff;
      left: 400px;
      .identify {
        width: 120px;
        text-align: center;
        .identify-list {
          width: 100px;
          height: 130px;
          background: #666;
          display: table;
          color: #fff;
          &.active {
            height: 240px;
            background: aqua;
          }
          .p-wrapper {
            display: table-cell;
            vertical-align: middle;
            .iconfont {
              font-size: 30px;
              margin-bottom: 4px;
            }
          }
        }
      }
      .main {
        box-sizing: border-box;
        padding: 50px 50px 10px;
        height: 500px;
        .account-login
        {
          padding: 6px 50px;
          cursor: pointer;
          border-bottom: 3px solid #aaa;
          margin-right: 2px;
        }
        .active {
          border-bottom: 3px solid aqua;
          color: aqua;
        }
        .phone1,
        .password1 {
          margin-top: 30px;
          input {
            width: 330px;
            padding: 6px 0;
            outline: none;
            border: none;
            border-bottom: 1px solid #ccc;
          }
        }
        .phone1 {
          margin-top: 50px;
        }
        .forget1 {
          margin-top: 10px;
          text-align: right;
          color: #999;
        }
        .login-btn1 {
            cursor: pointer;
          margin-top: 60px;
          background: aqua;
          text-align: center;
          height: 40px;
          line-height: 40px;
          border-radius: 20px;
        }
        .no-account1 {
          margin-top: 20px;
          text-align: center;
          a {
            margin-left: 10px;
            color: aqua;
            cursor: pointer;
          }
        }
        .account-login-wechat{
            .img-er{
                width: 200px;
                height: 200px;
                background: #ccc;
                margin-top: 100px;
                margin-left: 70px;
                text-align: center;
                line-height: 200px;
            }
            .scan{
                text-align: center;
                color: aqua;
                margin-top: 20px;
            }
        }
      }
      .phone-register{
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 3px solid #ccc;
      }
      .yzm{
        width: 330px;
        position: relative;
        span{
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
}
</style>