import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

import Top from "./components/TopPage/index.vue";
import SubView from "./components/SubPage/index.vue";
import SubChildrenView1 from "./components/SubPage1/index.vue";
import SubChildrenView2 from "./components/SubPage2/index.vue";
import UserListPage from "./components/UserListPage/index.vue";
import UserDetailPage from "./components/UserDetailPage/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/html',
      name: 'main',
      component: Top
    },
    {
      path: '/html/sub',
      name: 'sub',
      component: SubView,
      children: [
        {
          // /html/sub/children1
          path: 'children1',
          component: SubChildrenView1
        },
        {
          // /html/sub/children2
          path: 'children2',
          component: SubChildrenView2,
          // メタフィールド(ログインが必要であることを表示)
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/html/users/',
      name: 'user_list',
      component: UserListPage
    },
    {
      path: '/html/users/:id',
      name: 'user_detail',
      component: UserDetailPage,
      // URLからコンポーネント側に引数を渡すことを明示(idに渡される)
      props: true
    }
  ]
})

// ルーティング時のbefore処理
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

// ルーティング時のafter処理
router.afterEach((to, from) => {
  console.log("after global routing");
})

export default router

