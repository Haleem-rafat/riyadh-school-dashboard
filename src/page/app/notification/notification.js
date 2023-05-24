import React from "react";
import CreatenewNotificationModel from "../../../components/notification-components/create-new-notification-model";

const Notification = () => {
  return (
    <div className="bg-background h-screen pt-8 ">
      <div className="flex md:flex-nowrap flex-wrap md:gap-y-0 gap-y-5 gap-x-10 mx-10 ">
        <div className="bg-[#FBFBFE] w-full h-[60px] rounded-t-lg  animate-in ">
          <p className="pt-[15px] pl-[15px] text-2xl">Notification</p>
        </div>
        <CreatenewNotificationModel />
      </div>
      <div className="bg-white mx-10 rounded-lg animate-in mt-10">
        {/* <UsersTable /> */}
      </div>
    </div>
  );
};

export default Notification;
