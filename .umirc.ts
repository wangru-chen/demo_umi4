import { defineConfig } from '@umijs/max';

const base = '/mfe/';
export default defineConfig({
  // base: base,
  // publicPath: base,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home2',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'yarn',
  // mountElementId: 'root',
  // outputPath: '../eshmain/mfe'
});

