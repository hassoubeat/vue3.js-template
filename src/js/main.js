import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from "./store"
import vue_mixin from './mixin';
import * as COMPORNENTS from "./compornents"
import SubView from "./sub.vue"
import SubChildrenView_1 from "./sub_children1.vue"
import SubChildrenView_2 from "./sub_children2.vue"

// Vue Rooterプラグインの読み込み
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/html',
      name: 'main',
      component: COMPORNENTS.view_main_contents
    },
    {
      path: '/html/sub',
      name: 'sub',
      component: SubView,
      children: [
        {
          // /html/sub/children1
          path: 'children1',
          component: SubChildrenView_1
        },
        {
          // /html/sub/children2
          path: 'children2',
          component: SubChildrenView_2,
          // メタフィールド(ログインが必要であることを表示)
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/html/users/',
      name: 'user_list',
      component: COMPORNENTS.view_users_contents
    },
    {
      path: '/html/users/:id',
      name: 'user_detail',
      component: COMPORNENTS.view_user_detail_contents,
      props: true
    }
  ]
})

// ルーティング時のbefore処理
router.beforeEach((to, from, next) => {
  console.log("before global routing from:" + from.path + " ⇒ to:" + to.path);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // ログインなしだと/htmlページにリダイレクトで戻す
    if (store.state.isLogin) {
      next();
    } else {
      console.log("Not Login");
      next({
        path: '/html',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

// ルーティング時のafter処理
router.afterEach((to, from) => {
  console.log("after global routing");
})

var app = new Vue({
  el: '#main-content',
  store,
  router,
  mixins: [vue_mixin]
})