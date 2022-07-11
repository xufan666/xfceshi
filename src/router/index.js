import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import JiaLe from '../views/JiaLe.vue';
import FeiFan from '../views/FeiFan.vue'

// 下面两个改成懒加载
// import YuFei from '../views/YuFei.vue'
// import YuMeng from '../views/YuMeng.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pro',
    name: 'products',
    component: () => import('../views/Prouducts.vue'),
  },
  {
    path: '/dy/:type/:id',
    name: 'dy',
    props: true,
    component: () => import('../views/DY.vue'),
  },
  {
    path: '/douyu',
    name: 'douyu',
    component: () => import('../views/DouYu.vue'),
  },
  {
    path: "/yumeng",
    name: '雨萌',
    // 懒加载 在被调用是才会引入
    component: ()=> import("../views/YuMeng.vue")
  },
  {
    path: "/yufei",
    name: '宇飞',
    component: ()=> import("../views/YuFei.vue"),
    meta: {title: '宇飞'}

  },
  {
    path: "/feifan",
    name: '非凡',
    component: FeiFan,
    meta: {title: '非凡'}

  },
  {
    path: "/jiale",
    name: '家乐',
    component: JiaLe,
    //meta: 固定的属性, 称为元数据 可以存放各种自定义的内容
    meta:{
      x: '12111',
      y:433,
      suibian: true,
      title: "家乐"


    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: '首页'}
  },
  {
    meta: {title: 'about'},

    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) =>{

  console.log('to:', to);
  console.log('from:', from);
  document.title = to.meta.title
  next()
})

export default router
