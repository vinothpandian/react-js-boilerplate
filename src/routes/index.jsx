import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOME } from "./path";
import Home from "../screens/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path={HOME} component={Home} />
    </Switch>
  );
};

export default Routes;
