import React from "react";
import { Route, Switch } from "react-router-dom";
import Project1 from "../pages/projects/project1";
import Project2 from "../pages/projects/project2";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/project1" component={Project1} />
      <Route path="/project2" component={Project2} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
