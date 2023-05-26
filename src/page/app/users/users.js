import React from "react";
import AddUsersModel from "../../../components/users-components/add-users-model";
import UsersTable from "../../../components/users-components/users-table";

const Users = () => {
  return (
    <div className="bg-background h-screen pt-8 ">
      <div className="flex md:flex-nowrap flex-wrap  gap-x-10 gap-y-5 md:gap-y-0 mx-10 ">
        <div className="bg-[#FBFBFE] w-full h-[60px] rounded-t-lg  animate-in ">
          <p className="pt-[15px] pl-[15px] text-2xl">Users</p>
        </div>
        <AddUsersModel />
      </div>
      <div className="bg-white mx-10 rounded-lg animate-in mt-10">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
