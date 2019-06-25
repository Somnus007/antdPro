const routes = [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        {
          path: '/',
          name: 'welcome',
          icon: 'qq',
          component: './Welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ];

export default routes;