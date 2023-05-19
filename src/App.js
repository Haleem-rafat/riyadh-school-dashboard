import { Toaster } from "react-hot-toast";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import AuthLayouts from "./layouts/auth-layouts";
import AppLayouts from "./layouts/app-layouts";
import LogIn from "./page/auth/log-in";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={routes.auth.default} component={AuthLayouts} />
        <Route path={routes.app.default} component={AppLayouts} />

        <Redirect path={routes.auth.logIn} component={LogIn} />
      </Switch>

      <Toaster position="top-center" reverseOrder={true} gutter={8} />
    </div>
  );
}

export default App;
