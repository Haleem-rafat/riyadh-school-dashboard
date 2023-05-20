import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBare from "../components/common/side-bare/side-bare";
import NavBare from "../components/common/nave-bare/nav-bare";
import routes from "../routes";
import Reports from "../page/app/reportes/reports";

const AppLayouts = () => {
  return (
    <div className="animate-in w-full mx-auto">
      <div className="flex">
        <NavBare />
        <SideBare />
        {/* <div className="bg-white w-20 h-screen fixed z-10 right-0"></div> */}
      </div>
      <div className="ml-[170px] ">
        <Switch>
          <Route path={routes.app.reportes.default} component={Reports} />
        </Switch>
      </div>
      {/* <div className="bg-white w-full fixed bottom-0 h-20"></div> */}
    </div>
  );
};

export default AppLayouts;
