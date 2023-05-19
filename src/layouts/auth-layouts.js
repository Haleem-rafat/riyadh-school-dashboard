import React from "react";

import { Route, Switch } from "react-router-dom";
import routes from "../routes";

import LogIn from "../page/auth/log-in";

const AuthLayouts = () => {
  return (
    <div className="h-screen">
      <Switch>
        <Route path={routes.auth.logIn} component={LogIn} />
      </Switch>
    </div>
  );
};

export default AuthLayouts;
