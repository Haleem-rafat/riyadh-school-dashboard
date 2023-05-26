const api = {
  auth: {
    logIN: "/auth/admin/login",
    refreshToken: "/auth/admin/refresh-token",
  },
  app: {
    attendances: {
      get: `/attendances/admin/report`,
      getById: (employeesId) => `attendances/admin/report/${employeesId}`,
    },
    groups: {
      default: `/groups`,
      edit: (groupId) => `/groups/${groupId}`,
    },
    timeSlots: {
      default: `/time-slots`,
      edit: (timeSlotId) => `/time-slots/${timeSlotId}`,
    },
    employees: {
      default: `/employees`,
      getById: (employeesId) => `/employees/${employeesId}/details`,
      edit: (employeesId) => `/employees/${employeesId}/add-group/`,
    },
    attendance: {
      default: `/attendance/checkin`,
    },
    adminsManagers: {
      postManagers: `/admins/managers/add`,
      getManagers: `/admins/managers/all`,
      deleteManagers: (managersId) => `/admins/managers/${managersId}`,
      getAdmins: `/admins/all`,
      postAdmins: `/admins/add`,
      deleteAdmins: (adminsId) => `/admins/${adminsId}`,
    },
  },
};
export default api;
