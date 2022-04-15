export const appRoutes = {
  home: '/',
  account: '/account',
  search: '/search',
  extended: {
    path: '/request/:requestId',
    template: (id: string) => `/request/${id}`,
  },
};

export const apiRoutes = {};
