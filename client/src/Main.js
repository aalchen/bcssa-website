import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

import Home from "./components/home";
import About from "./components/about";
import Cal from "./components/cal";
import Connect from "./components/connect";
import Contact from "./components/contact";
import Contribute from "./components/contribute";

function Main() {
  return (
    <div>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/calendar">
        <Cal />
      </Route>
      <Route path="/connect">
        <Connect />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Contribute">
        <Contribute />
      </Route>
    </div>
  );
}

export default Main;
