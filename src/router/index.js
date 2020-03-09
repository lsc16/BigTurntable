import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    redirect:'/game/dzp',
  },
  {
    path: "/:type/login",
    name: "登录",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/game",
    redirect:'/game/dzp',
    component: () => import("../layouts/DivLayouts.vue"),
    children:[
      {
        path: "dzp",
        name: "大转盘",
        component: () => import("../views/game/Dzp.vue")
      },
      {
        path: "myPrize",
        name: "我的奖品",
        component: () => import("../views/game/MyPrize.vue")
      },
    ],
  },
  {
    path: "/backstage",
    redirect:'/backstage/dzp',
    component: () => import("../layouts/BackstageLayouts.vue"),
    children:[
      {
        path: "dzp",
        name: "大转盘",
        component: () => import("../views/game/Dzp.vue")
      },
      {
        path: "myPrize",
        name: "我的奖品",
        component: () => import("../views/game/MyPrize.vue")
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
