// Essential imports
import React from "react";
import image from "../img/ubc.jpeg";

const Home = () => {
  return (
    <div>
      <p class="f6 f4-ns lh-copy measure center">
        <img src={image} style={{ borderRadius: "5px" }} />
        <p class="f3 fw6 pa4 tc">Welcome to the BCSSA website!</p>
      </p>
    </div>
  );
};

export default Home;
