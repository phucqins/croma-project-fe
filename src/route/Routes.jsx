import React from "react";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Home from "../pages/Home";
import Login from "../components/Login";
import Admin from "../components/Admin";
// import Products from "../pages/Products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
  );
};

export default Routes;
