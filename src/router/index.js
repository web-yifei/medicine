import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
// import Classify from '@/views/Classify'
import Dignose from '@/views/Dignose'
import My from '@/views/My'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
import Register from '@/views/Register'
import City from '@/views/City'
import Cart from '@/views/Cart'
import Calc from '@/views/Calc'
import Doctors from '@/views/Doctors'
import Docdetail from '@/views/Docdetail'
import Form from '@/views/Form'
import Feedback from '@/views/Feedback'
import Amend from '@/views/Amend'
import Classifydetails from '@/views/children/Classifydetails'
import ChangeHead from '@/views/My/ChangeHead'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/classify',
    redirect: '/classifydetails/0'
  },
  {
    name: 'classifydetails',
    path: '/classifydetails/:myid',
    component: Classifydetails
  },

  {
    path: '/message',
    component: Dignose
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:shopid',
    component: Detail
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cart/:userid',
    component: Cart
  },
  {
    path: '/calc',
    component: Calc
  },
  {
    path: '/changeHead',
    component: ChangeHead
  },
  {
    path: '/doctors',
    component: Doctors
  },
  {
    path: '/docdetail/:doctorId',
    component: Docdetail
  },
  {
    path: '/docdetail/:doctorId/form',
    component: Form
  },
  {
    path: '/feedback/:userId',
    component: Feedback
  },
  {
    path: '/amend/:userId',
    component: Amend
  },
  {
    path: '*',
    redirect: '/index'
  }

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   // console.log(to);
//   if(to.path === "/my"){
//     if(!localStorage.getItem("token")){
//       next("/login")
//     }else{
//       next();
//     }
//   }else{
//     next();
//   }
// })
export default router
