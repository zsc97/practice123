<template>
  <div class="course-list fr">
    <div class="title-wrapper">
      <div class="title">
        <span
          @click="select(index)"
          v-for="(item,index) in arrTitle"
          :key="index"
          class="title-list"
        >
          <i
            :class="{'iconfont icon-duihao':currentIndex===index,'active':currentIndex===index}"
            class="title-item"
          ></i>
          {{item}}
        </span>
      </div>
    </div>
    <div class="course-content">
      <ul class="course-content-ul">
        <li v-for="(item,index) in newCourse" :key="index" class="course-content-list clearfix">
          <img class="fl" src="../../assets/images/teacher.png" alt />
          <div class="course-content-intro-wrapper fl">
            <div class="course-content-intro">
              <p class="course-name">
                {{item.title}}
                <span>{{item.titlestatus}}</span>
              </p>
              <p class="course-time">{{item.time}}</p>
              <p v-if="item.stu" class="course-comment">
                <span class="stu">
                  <i class="iconfont" :class="{'icon-wodedangxuan':item.stu}"></i> {{item.stu}}
                </span>
                <span class="comment">
                  <i :class="{'iconfont icon-57':item.stu}"></i>{{item.comment}}
                </span>
                <span></span>
              </p>
              <p class="course-price">{{item.price}}</p>
              <p class="fail-cause">{{item.fail}}</p>
            </div>
          </div>
          <div class="btn-wrapper fr">
            <div v-show="flag" class="btn">
              <p class="change">修改课程</p>
              <p v-show="flag1" class="delete">删除课程</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "courselist",
  data() {
    return {
      flag:false,
      flag1:false,
      newCourse: [],
      course: [
        {
          img: "",
          title: "显示你的实力——面试",
          titlestatus: "进行中",
          time: "上传时间： 3月23日 15:30",
          stu: "128",
          comment: "32",
          price: "199",
          status: 0
        },
        {
          img: "",
          title: "显示你的实力——面试",
          titlestatus: "进行中",
          time: "上传时间： 3月23日 15:30",
          stu: "128",
          comment: "32",
          price: "199",
          status: 0
        },
        {
          img: "",
          title: "显示你的实力——面试",
          time: "上传时间： 3月23日 15:30",
          price: "免费",
          status: 1
        },
        {
          img: "",
          title: "显示你的实力——面试",
          time: "上传时间： 3月23日 15:30",
          price: "199",
          status: 1
        },
        {
          img: "",
          title: "显示你的实力——面试",
          time: "上传时间： 3月23日 15:30",
          fail: "失败原因：内容包含反动性质，请修改",
          status: 2
        },
        {
          img: "",
          title: "显示你的实力——面试",
          time: "上传时间： 3月23日 15:30",
          fail: "失败原因：内容包含反动性质，请修改",
          status: 2
        }
      ],
      currentIndex: 0,
      arrTitle: ["已发布课程", "审核中课程", "未通过审核课程"]
    };
  },
  methods: {
    select(index) {
      this.currentIndex = index;
      if (index === 0) {
        this.flag = false;
        this.newCourse = this.course.filter(function(item) {
          if (item.status === 0) {
            return item;
          }
        });
      }
       if (index === 1) {
         this.flag = true;
         this.flag1 =false;
        this.newCourse = this.course.filter(function(item) {
          if (item.status === 1) {
            return item;
          }
        });
      }
       if (index === 2) {
         this.flag1 = true
         this.flag = true;
        this.newCourse = this.course.filter(function(item) {
          if (item.status === 2) {
            return item;
          }
        });
      }
    }
  },
  created(index) {
    index = 0;
  
    this.select(index)
  }
  
};
</script>

<style lang="less">
.course-list {
  width: 900px;
  height: 570px;
  box-sizing: border-box;
  background: #fff;
  .title-wrapper {
    padding-bottom: 10px;
    // border-bottom: 1px solid #eee;
    .title {
      padding: 30px 20px;
      .title-list {
        margin: 30px 20px;
        .title-item {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #ccc;
          border-radius: 50%;
          vertical-align: middle;
          position: relative;
          margin-right: 10px;
          &.active {
            background: #0af;
          }
          &.icon-duihao::before {
            color: #fff;
            position: absolute;
            text-align: center;
            line-height: 21px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }
      }
    }
  }
  .course-content {
    .course-content-ul {
      .course-content-list {
        height: 140px;

        padding-bottom: 30px;
        border-top: 1px solid #eee;
        img {
          margin-top: 30px;
          width: 180px;
          margin-right: 20px;
        }
        .course-content-intro-wrapper {
          height: 160px;
          display: table;
          .course-content-intro {
            display: table-cell;
            vertical-align: middle;
            margin-top: 30px;
            width: 360px;
            p {
              margin-top: 6px;
            }
            .course-name {
              font-weight: bold;
              span {
                color: #0af;
              }
            }
            .course-time {
              color: #999;
            }
            .course-comment {
              color: #ccc;
              .comment {
                margin-left: 10px;
              }
            }
            .course-price {
              color: #0af;
              font-size: 18px;
            }
            .fail-cause {
              color: #0af;
              font-size: 18px;
            }
          }
        }

        .btn-wrapper {
          margin-top: 30px;
          margin-right: 20px;
          display: table;
          .btn{
            height: 100px;
            display: table-cell;
            vertical-align: middle;
            .change{
              padding: 6px 50px;
              border: 1px solid #ccc;
              border-radius: 50px;
              color: #0af;
            }
            .delete{
              padding: 6px 50px;
            }
          }
        }
      }
    }
  }
}
</style>