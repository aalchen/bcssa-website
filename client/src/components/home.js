import React from "react";
import image from "../img/ubc.jpeg";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p class="f6 f4-ns lh-copy measure center">
        <img src={image} />
        <p class="pa4 tc">Welcome to the BCSSA website!</p>
      </p>
    </div>
  );
};

export default Home;
