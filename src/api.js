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
      edit: (employeesId) => `/employees/${employeesId}/add-group`,
      list: "/employees/drop-list",
      GenerateQrCode: (employeesId) => `/employees/${employeesId}/qrcode`,
    },
    attendance: {
      default: `/attendance/checkin`,
    },
    adminsManagers: {
      // manger
      postManagers: `/admins/managers/add`,
      getManagers: `/admins/managers/all`,
      editManagers: (managersId) => `/admins/managers/${managersId}`,
      deleteManagers: (managersId) => `/admins/managers/${managersId}`,
      // admin
      getAdmins: `/admins/all`,
      postAdmins: `/admins/add`,
      edit: (adminsId) => `/admins/${adminsId}`,
      deleteAdmins: (adminsId) => `/admins/${adminsId}`,
    },
  },
  attendances: {
    in: (employeeId) => `/attendances/check-in/${employeeId}`,
    out: (employeeId) => `/attendances/check-out/${employeeId}`,
  },
};
export default api;
