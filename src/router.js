import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);

import econtent from "./components/personal/econtent.vue";
import econtentbg from "./components/information/econtentbg";

import password from "./components/information/password";
import identify from "./components/information/identifymessage";
import myinfor from "./components/information/myinfor";

import course from './/components/course/econtentbg'
import addcourse from './components/course/addcourse'
import coursesend from './components/course/coursesend'
import myactivity from './components/course/myactivity'
import courselist from './components/course/courselist'

import qa from './components/qa/econtentbg'
import myquestion from './components/qa/myquestion'
import myanswer from './components/qa/myanswer'

import login from './components/login/loginnav'


const router = new vueRouter({
    // mode: "history",
  // 去掉#号
  routes: [
    {
      path: "/econtent",
      component: econtent
    },
    {
      path: "/information",
      component: econtentbg,
    //   redirect:'/information/myinfor',
      children: [
        {
          path: "",
          component: myinfor
        },
        {
          path: "password",
          component: password
        },
        {
          path: "identify",
          component: identify
        }
      ]
    },
    {
      path:'/course',
      component:course,
      children:[
        {
          path:'',
          component:courselist
        },
        {
          path:'addcourse',
          component:addcourse,
        },
        {
          path:'coursesend',
          component:coursesend
        },
        {
          path:'myactivity',
          component:myactivity
        },
        
      ]
    },
    {
      path:'/qa',
      component:qa,
      children:[
        {
          path:'',
          component:myquestion
        },
        {
          path:'myanswer',
          component:myanswer
        }
      ]
    },
    {
      path:'/',
      component:login,
      name:'login'
    }
  ]
});
export default router;
