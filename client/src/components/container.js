// Essential imports
import React from "react";

// Components
import About from "./about";
import Contribute from "./contribute";
import Resources from "./resources";
import Contact from "./contact";
import Home from "./home";

const Container = (props) => {
  const { type } = props;
  return (
    <div
      style={{
        border: "2px solid gray",
        width: "50%",
        height: "450px",
        margin: "auto",
        backgroundColor: "rgb(248, 248, 248)",
        borderRadius: "5px",
        color: "black",
      }}
    >
      {(() => {
        switch (type) {
          case "about":
            return <About />;
          case "contribute":
            return <Contribute />;
          case "resources":
            return <Resources />;
          case "contact":
            return <Contact />;
          default:
            return <Home />;
        }
      })()}
    </div>
  );
};

export default Container;
