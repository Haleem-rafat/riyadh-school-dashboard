const routes = {
  auth: {
    default: `/auth`,
    logIn: `/auth/log-in`,
  },
  app: {
    default: `/dashboard`,
    reportes: {
      default: `/dashboard/reportes`,
      reportesView: (id = ":id") => `/dashboard/reportes/view/${id}`,
    },
    users: {
      default: `/dashboard/users`,
      usersView: (id = ":id") => `/dashboard/users/view${id}`,
    },
    groups: {
      default: `/dashboard/groups`,
      timeSlote: `/dashboard/groups/time-slote`,
    },
    sync: {
      default: `/dashboard/sync`,
    },
    admins: {
      default: `/dashboard/admins`,
      managers: `/dashboard/admins/managers`,
    },
    notification: {
      default: `/dashboard/notification`,
    },
  },
};

export default routes;
