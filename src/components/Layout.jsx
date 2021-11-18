import React from "react";

import { BrowserRouter, Link } from "react-router-dom";
import Routes from "../route/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <Link className="active" to="/">
            Home
          </Link>
          <Link className="active" to="/login">
            Login
          </Link>
          <small>(Access without token only)</small>
          <Link className="active" to="/admin">
            Admin
          </Link>
          <small>(Access with token only)</small>
        </div>
        <div className="content">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
