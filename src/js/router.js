import { createRouter, createWebHistory } from 'vue-router';
import store from '~/js/store';
import { ROUTING_PATH } from '~/js/const';

import TopPage from "~/js/components/TopPage/index.vue";
import SubPage from "~/js/components/SubPage/index.vue";
import SubChildPage1 from "~/js/components/SubChildPage1/index.vue";
import SubChildPage2 from "~/js/components/SubChildPage2/index.vue";
import UserListPage from "~/js/components/UserListPage/index.vue";
import UserDetailPage from "~/js/components/UserDetailPage/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTING_PATH.TOP,
      name: 'main',
      component: TopPage
    },
    {
      path: ROUTING_PATH.SUB,
      name: 'sub',
      component: SubPage,
      children: [
        {
          // /html/sub/children1
          path: ROUTING_PATH.SUB_CHILD1,
          component: SubChildPage1
        },
        {
          // /html/sub/children2
          path: ROUTING_PATH.SUB_CHILD2,
          component: SubChildPage2,
          // メタフィールド(ログインが必要であることを表示)
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: ROUTING_PATH.USER_LIST,
      name: 'user_list',
      component: UserListPage
    },
    {
      path: ROUTING_PATH.USER_DETAIL_IN_ID,
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
        path: ROUTING_PATH.TOP,
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

