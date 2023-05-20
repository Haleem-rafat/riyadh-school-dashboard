import React from "react";
import UsersTable from "../../../components/common/users-components/users-table";

const Users = () => {
  return (
    <div className="bg-background h-screen pt-[140px] ">
      <div className="flex gap-x-10 mx-10 ">
        <div className="bg-[#FBFBFE] w-full h-[60px] rounded-t-lg  animate-in ">
          <p className="pt-[15px] pl-[15px] text-2xl">Users</p>
        </div>
        <button className="bg-green text-white w-[200px] rounded-full">
          ADD User
        </button>
      </div>
      <div className="bg-white mx-10 rounded-lg animate-in mt-10">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
