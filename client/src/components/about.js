import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p class="f6 f4-ns lh-copy measure center tc">
        <p class="pa4">
          This is the about page for the BCSSA website. <br />
          <br />
          This will be a resource for all activities related to BCS students.
        </p>
      </p>
    </div>
  );
};

export default About;
