import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImportSyntax: {},
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/a': {
      target: 'http://t.weather.sojson.com/api/weather/city/101030100',
      changeOrigin: true,
      pathRewrite: {
        '^/a': '',
      },
    },
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/list',
          component: '@/pages/list/index',
        },
        {
          path: '/detail',
          component: '@/pages/detail/index',
        },
        {
          path: '/user/tom/one',
          component: '@/pages/tom/one/index',
        },
        {
          path: '/user/tom/two',
          component: '@/pages/tom/two/index',
        },
        {
          path: '/user/tom',
          component: '@/pages/tom/index',
        },
        {
          path: '/user/bill',
          component: '@/pages/bill/index',
        },
        {
          path: '/user/alex',
          component: '@/pages/alex/index',
        },
        {
          path: '/team',
          component: '@/pages/team/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
