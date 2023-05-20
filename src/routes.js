const routes = {
  auth: {
    default: `/auth`,
    logIn: `/auth/log-in`,
  },
  app: {
    default: `/dashboard`,
    reportes: {
      default: `/dashboard/reportes`,
    },
    users: {
      default: `/dashboard/users`,
    },
    groups: {
      default: `/dashboard/groups`,
    },
    sync: {
      default: `/dashboard/sync`,
    },
    admins: {
      default: `/dashboard/admins`,
    },
  },
};

export default routes;
