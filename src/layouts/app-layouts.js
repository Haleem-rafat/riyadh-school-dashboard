import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SideBare from "../components/common/side-bare/side-bare";
import NavBare from "../components/common/nave-bare/nav-bare";
import routes from "../routes";
import Reports from "../page/app/reportes/reports";
import Users from "../page/app/users/users";
import GroupsTabs from "../page/app/groups/groups-tabs";
import AdminsTabs from "../page/app/admins/admins-tabs";
import ViewDetails from "../components/common/shared-pages/view-details";
import Notification from "../page/app/notification/notification";
import { BiMenuAltLeft } from "react-icons/bi";
import CheckIn from "../page/mobile/check-in";
import CheckOut from "../page/mobile/check-out";

const AppLayouts = () => {
  const [sid, SetSid] = useState(false);
  return (
    <div className=" w-full mx-auto">
      <div className="flex">
        <SideBare SetSid={SetSid} sid={sid} />
        <NavBare />
        {/* <div className="bg-white w-20 h-screen fixed z-10 right-0"></div> */}
      </div>
      <div className="md:ml-[170px] ml-0 bg-background z-0">
        <div className="pt-5">
          <button
            className="border-[1px] border-gray-dark text-gray-dark rounded-full md:hidden block mx-4 mb-4 "
            onClick={() => SetSid(true)}
          >
            <BiMenuAltLeft size={25} className="m-1" />
          </button>
        </div>
        <Switch>
          {/* <Route path={routes.app.attendances.in} component={CheckIn} />
          <Route path={routes.app.attendances.out} component={CheckOut} /> */}
          <Route
            path={routes.app.reportes.reportesView()}
            component={ViewDetails}
          />
          <Route path={routes.app.reportes.default} component={Reports} />
          <Route path={routes.app.users.usersView()} component={ViewDetails} />
          <Route path={routes.app.users.default} component={Users} />
          <Route path={routes.app.groups.default} component={GroupsTabs} />
          <Route path={routes.app.admins.default} component={AdminsTabs} />
          <Route
            path={routes.app.notification.default}
            component={Notification}
          />
        </Switch>
      </div>
      {/* <div className="bg-white w-full fixed bottom-0 h-20"></div> */}
    </div>
  );
};

export default AppLayouts;
