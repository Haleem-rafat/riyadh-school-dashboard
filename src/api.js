const api = {
  auth: {},
  app: {
    groups: {
      default: `/groups`,
      get: `/groups?page=1&perPage=8`,
      edit: (groupId) => `/groups/${groupId}`,
    },
    timeSlots: {
      default: `/time-slots`,
      get: `/time-slots?page=1&perPage=10`,
      edit: (timeSlotId) => `/time-slots/${timeSlotId}`,
    },
    employees: {
      default: `/employees`,
      get: `/employees?page=1&perPage=8`,
      edit: (employeesId) => `/employees/${employeesId}/add-group/`,
    },
    attendance: {
      default: `/attendance/checkin`,
    },
    adminsManagers: {
      post: `/admins/managers/add`,
      get: `/admins/managers/all?page=1&perPage=10`,
    },
  },
};
export default api;
