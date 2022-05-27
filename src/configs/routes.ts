export const appRoutes = {
  home: '/',
  account: '/account',
  extendedAccount: {
    path: '/account/:accountId',
    template: (id: string) => `/account/${id}`,
  },
  search: '/search',
  extended: {
    path: '/request/:requestId',
    template: (id: string) => `/request/${id}`,
  },
};

export const apiRoutes = {};
