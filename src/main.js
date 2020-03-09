import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import request  from './axios';
//
// request({
//   url:'app/123',
// });
Vue.config.productionTip = false;
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.name) {
    document.title = to.name
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
