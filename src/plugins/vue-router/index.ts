import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type NavigationGuardWithThis,
} from 'vue-router';
import { routers } from './routers';
import VueRouteMiddleware, { GLOBAL_MIDDLEWARE_NAME } from './middleware';
import AuthMiddleware from './authMiddleware';
import { PageName } from '@/common/constants';
const NotFoundPage = () => import('@/features/errors/pages/NotFoundPage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/courses',
  },
  {
    path: '/404',
    name: PageName.NOT_FOUND_PAGE,
    component: NotFoundPage,
    meta: {
      public: true,
    },
  },
  ...routers,
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return from.name
        ? {
            el: to.hash,
            top: 180,
            behavior: 'smooth',
          }
        : new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                el: to.hash,
                top: 180,
                behavior: 'smooth',
              });
            }, 3000);
          });
    }
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

// router.beforeEach(
//   VueRouteMiddleware({
//     [GLOBAL_MIDDLEWARE_NAME]: AuthMiddleware,
//   }) as NavigationGuardWithThis<unknown>,
// );

export default router;
