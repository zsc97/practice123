<template>
  <div class="econtent">
    <div class="content container clearfix">
      <div class="content-left fl">
        <div class="content-left-img clearfix">
          <img class="userimg fl" src="../../assets/images/stu2.png" alt="用户头像" />
          <p class="name">
            罗密欧
            <i class="iconfont icon-jiangshi"></i>
          </p>
          <p class="message-complate">
            信息完整度
            <span></span>
            <em>高</em>
          </p>
          <p class="contact-way">
            <i class="iconfont icon-phone_icon"></i>
            <i class="iconfont icon-cedaohang-kehuguanli"></i>
            <i class="iconfont icon-youxiang"></i>
          </p>
        </div>
        <div class="apply-withdraw clearfix">
          <p class="apply-withdraw-l fl">申请提现</p>
          <div class="apply-withdraw-r fl">
            <p class="balance">账户余额</p>
            <p class="balance-num">
              <span>248</span>元
            </p>
          </div>
        </div>
        <div class="identify clearfix">
          <div class="identify-confirm fl">
            <p class="iconfont icon-cedaohang-kehuguanli"></p>
            <p class="identify-confirm-status">
              实名认证
              <span>【未认证】</span>
            </p>
          </div>
          <div class="aptitude-confirm fl">
            <p class="iconfont icon-zizhizhengshu"></p>
            <p class="aptitude-confirm-status">
              资质认证
              <span>【未认证】</span>
            </p>
          </div>
        </div>
      </div>
      <div class="content-right fl">
        <div class="content-right-top clearfix">
          <div class="course fl">
            <router-link class='course-detail' to='/course'>
            </router-link>

            <p class="mycourse">我上传的课程</p>
            <p class="course-num">
              <span>3</span>个
            </p>
            <p class="detail">
              <a>查看详情 &gt;</a>
            </p>
          </div>
          <div class="qa fl">
            <router-link class='course-detail' to='/course'>
            </router-link>

            <p class="mycourse">我上传的课程</p>
            <p class="course-num">
              <span>3</span>个
            </p>
            <p class="detail">
              <a>查看详情 &gt;</a>
            </p>
          </div>
        </div>
        <div class="content-right-bottom">
          <div class="content-right-bottom-title clearfix">
            <span class="new-stu fl">最新学员</span>
            <span class="new-add-stu fr">一周内新增25位学员</span>
          </div>
          <ul class="stu-ul clearfix">
            <li v-for="(item,index) in arrImg" :key="index" class="stu-list fl">
              <img class="stu-img" :src="item.img" alt />
              <p class="stu-name">{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "econtent",
  data() {
    return {
      arrImg: [
        {
          name: "杨静静",
          img: require("../../assets/images/stu1.png")
        },
        {
          name: "吕子秋",
          img: require("../../assets/images/stu2.png")
        },
        {
          name: "郭晓艺",
          img: require("../../assets/images/stu3.png")
        },
        {
          name: "杨静静",
          img: require("../../assets/images/stu4.png")
        },
        {
          name: "杨静静",
          img: require("../../assets/images/stu1.png")
        }
      ]
    };
  }
};
</script>

<style lang="less">
.econtent {
  padding: 20px 0;
  background: #f4f4f4;
  .content {
    .content-left {
      height: 450px;
      padding-left: 30px;
      background: #fff;
      width: 350px;
      .content-left-img {
        height: 100px;
        padding-top: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .userimg {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 20px;
        }
        .name {
          color: #444;
          .icon-icon-test::before {
            color: #238;
            margin-left: 6px;
          }
        }
        .message-complate {
          font-size: 12px;
          color: #666;
          margin-top: 8px;
          span {
            display: inline-block;
            width: 80px;
            height: 6px;
            margin: 2px 8px;
            border-radius: 6px;
            background: #0af;
          }
          em {
            color: #0af;
          }
        }
        .contact-way {
          margin-top: 6px;
          i {
            &.icon-phone_icon {
              color: #0af;
            }
            margin-right: 4px;
          }
        }
      }

      .apply-withdraw {
        height: 80px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .apply-withdraw-l {
          color: #fff;
          text-align: center;
          width: 160px;
          height: 30px;
          line-height: 30px;
          margin-right: 50px;
          margin-top: 25px;
          background: #0af;
          border-radius: 50px;
        }
        .apply-withdraw-r {
          margin-top: 16px;
          .balance {
            font-size: 12px;
            margin-bottom: 2px;
          }
          .balance-num {
            span {
              font-size: 22px;
              margin-right: 4px;
            }
          }
        }
      }
      .identify {
        margin-top: 50px;
        padding-bottom: 50px;
        .icon-cedaohang-kehuguanli,
        .icon-zizhizhengshu {
          &::before {
            color: #0af;
            font-size: 80px;
            line-height: 120px;
          }
          width: 150px;
          height: 120px;
          margin-right: 20px;
          background: #f8f8f8;
        }
        .identify-confirm-status,
        .aptitude-confirm-status {
          margin-top: 10px;
          font-size: 12px;
          span {
            color: #da4e23;
          }
        }
        .identify-confirm {
          p {
            text-align: center;
          }
        }
        .aptitude-confirm {
          p {
            text-align: center;
          }
        }
      }
    }
    .content-right {
      width: 800px;
      height: 450px;
      padding-left: 20px;
      .content-right-top {
        margin-right: -20px;
        .course,
        .qa {
          position: relative;
          box-sizing: border-box;
          padding: 30px 0 0 40px;
          width: 390px;
          height: 220px;
          margin-right: 20px;
          background: #fff url(../../assets/images/bg.png) no-repeat;
          background-position: bottom right;
          background-size: 50%;
          .course-detail{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .mycourse {
            font-size: 16px;
          }
          .course-num {
            margin-top: 20px;
            font-size: 12px;
            span {
              margin-right: 2px;
              font-size: 22px;
            }
          }
          .detail {
            margin-top: 20px;
            a {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
      .content-right-bottom {
        box-sizing: border-box;
        padding: 30px 0 0 40px;
        margin-top: 20px;
        height: 210px;
        background: #fff;
        .content-right-bottom-title {
          .new-stu {
            font-weight: bold;
            font-size: 16px;
          }
          .new-add-stu {
            font-size: 12px;
            color: #999;
            margin-right: 50px;
          }
        }
        .stu-ul {
          margin-top: 30px;
          .stu-list {
            margin-right: 70px;
            .stu-img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
            .stu-name {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>