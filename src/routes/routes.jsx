import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Project1 from "../pages/projects/project1";
import Project2 from "../pages/projects/project2";
import Project3 from "../pages/projects/project3";
import Project4 from "../pages/projects/project4";
import Home from "../pages/home";
import PanelAdmin from "../pages/panelAdmin";
import Contact from "../pages/contact";
import ProtectedRoute from "../routes/protectedRoute";

const Routes = () => {
  const [isAutheticated, setisAutheticated] = useState(
    Boolean(window.localStorage.getItem("isAutheticatedIn"))
  );
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <ProtectedRoute path="/panelAdmin" auth={isAutheticated}>
        <PanelAdmin setisAutheticated={setisAutheticated} />
      </ProtectedRoute>
      <Route path="/project1" component={Project1} />
      <Route path="/project2" component={Project2} />
      <Route path="/project3" component={Project3} />
      <Route path="/project4">
        <Project4 setisAutheticated={setisAutheticated} />
      </Route>
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
