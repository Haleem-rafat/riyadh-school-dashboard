const api = {
  auth: {
    logIN: "/auth/admin/login",
    refreshToken: "/auth/admin/refresh-token",
  },
  app: {
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
      getmanagers: `/admins/managers/all`,
      getAdmins: `/admins/all`,
      postAdmins: `/admins/add`,
    },
  },
};
export default api;
