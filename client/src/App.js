// Essential imports
import React from "react";
import { Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cal from "./components/cal";
import Container from "./components/container";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <Container type="about" />
      </Route>
      <Route path="/contact">
        <Container type="contact" />
      </Route>
      <Route path="/contribute">
        <Container type="contribute" />
      </Route>
      <Route path="/resources">
        <Container type="resources" />
      </Route>
      <Route path="/calendar">
        <Cal />
      </Route>
    </div>
  );
}

export default App;
