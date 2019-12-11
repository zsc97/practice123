<template>
  <div class="myquestion fr">
    <div class="title-wrapper">
      <div class="title clearfix">
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
        <span class="tiwen fr">我要提问</span>
      </div>
    </div>
    <div class="question-content">
      <ul class="question-content-ul">
        <li
          v-for="(item,index) in newArrQuestion"
          :key="index"
          class="question-content-list clearfix"
        >
          <div class="question-content-list-l fl">
            <p class="question-detail">{{item.detail}}</p>
            <p class="question-message">
              <span class="send-time">提问时间：{{item.time}}</span>
              <span class="answer">回答{{item.answer}}</span>|
              <span class="see-number">{{item.seen}}人看过</span>
            </p>
          </div>
          <p
            :style="{'color':item.status === '1' ? '#ccc' : '#0af','border':item.status === '1' ? 'none' : '1px solid #ccc'}"
            class="btn fr"
          >{{item.status === '0' ? '查看并处理' : '删除问题'}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "myquestion",
  data() {
    return {
      newArrQuestion: [],
      arrQuestion: [
        {
          detail: "为什么突然之间，大家都不买手机了？",
          time: "2019-12-12",
          answer: "0",
          seen: "99",
          status: "0"
        },
        {
          detail: "为什么突然之间，大家都不买手机了？",
          time: "2019-12-12",
          answer: "0",
          seen: "99",
          status: "1"
        }
      ],
      currentIndex: 0,
      arrTitle: ["全部", "待处理"]
    };
  },
  methods: {
    select(index) {
      this.currentIndex = index;
      if (index === 0) {
        this.newArrQuestion = this.arrQuestion.filter(function(item) {
          return item;
        });
      }
      if (index === 1) {
        this.newArrQuestion = this.arrQuestion.filter(function(item) {
          if (item.status === '0') {
            return item;
          }
        });
      }
    }
  },
   created(index) {
    index = 0;
    window.console.log(index)
    this.select(index)
  }
};
</script>

<style lang="less">
.myquestion {
  width: 900px;
  height: 570px;
  box-sizing: border-box;
  background: #fff;
  .title-wrapper {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .title {
      padding: 30px 20px;
      .title-list {
        margin: 20px 20px;
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
      .tiwen {
        padding: 6px 50px;
        background: #0af;
        border-radius: 4px;
        color: #fff;
      }
    }
  }
  .question-content {
    .question-content-ul {
      .question-content-list {
        padding: 30px 0;
        border-bottom: 1px solid #eee;
        .question-content-list-l {
          width: 600px;
        }
        .question-detail,
        .question-message {
          margin-left: 30px;
        }
        .question-message {
          margin-top: 10px;
          color: #999;
          font-size: 12px;
          .answer {
            margin-left: 30px;
            margin-right: 10px;
          }
          .see-number {
            margin-left: 10px;
          }
        }
        .btn {
          margin-right: 30px;
          padding: 6px 40px;
          border: 1px solid #eee;
          border-radius: 6px;
          margin-top: 6px;
          color: #0af;
        }
      }
    }
  }
}
</style>