import { PageName } from '@/common/constants';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { type RouteRecordRaw } from 'vue-router';
import LoginPage from './pages/login/LoginPage.vue';

const authRouters: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: PageName.LOGIN_PAGE,
        component: LoginPage,
        meta: {
          onlyWhenLoggedOut: true,
          public: true,
        },
      },
    ],
  },
];

export default authRouters;
