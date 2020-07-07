import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      auth === true ? <>{Component}</> : <Redirect to="/project4" />
    }
  />
);

export default ProtectedRoute;

