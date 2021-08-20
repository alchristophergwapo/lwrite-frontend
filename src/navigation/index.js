import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import { DefaultAppBar } from "../components";
import routes from "./routes";

export default (props) => {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
};

function RouteSwitch() {
  let location = useLocation();
  let history = useHistory();

  return (
    <Switch location={location}>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      {routes.map(({ exact, path, component: Component, options }) => {
        return (
          <Route
            key={path}
            exact={exact}
            path={path}
            children={
              options?.drawerShown ? (
                <DefaultAppBar navigation={history} children={<Component navigation={history} />} />
              ) : (
                <Component navigation={history} />
              )
            }
          />
        );
      })}
      )
    </Switch>
  );
}
