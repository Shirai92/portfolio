import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project1 from "./components/projects/project1/project1";
import Project2 from "./components/projects/project2/project2";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project1" component={Project1} />
        <Route path="/project2" component={Project2} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
