import React from "react";
import { Switch } from "react-router-dom";
import SideBare from "../components/common/side-bare/side-bare";

const AppLayouts = () => {
  return (
    <div>
      <SideBare />
      <Switch>
        {/* <Route path={routes.auth.logIn} component={LogIn} /> */}
      </Switch>
    </div>
  );
};

export default AppLayouts;
