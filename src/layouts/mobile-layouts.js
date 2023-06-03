import React from "react";

import { Route, Switch } from "react-router-dom";
import routes from "../routes";

import CheckIn from "../page/mobile/check-in";
import CheckOut from "../page/mobile/check-out";

const MobileLayout = () => {
  return (
    <div className="h-screen">
      <Switch>
        <Route path={routes.attendances.in} component={CheckIn} />
        <Route path={routes.attendances.out} component={CheckOut} />
      </Switch>
    </div>
  );
};

export default MobileLayout;
