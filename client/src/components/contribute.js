import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

const Contribute = () => {
  return (
    <div>
      <p
        class="f5 lh-copy center fw3"
        style={{ width: "inherit", overflowY: "scroll", height: "425px" }}
      >
        <div class="pa5">
          <p class="f3 fw6">Contribute</p>
          <p class="f4">Add your contribution below!</p>
          <hr
            style={{
              color: "#000000",
              backgroundColor: "#000000",
              height: 0.5,
              borderColor: "#000000",
            }}
          />
          <p> 12/2/2021 | Amy Chen | hello world !!!!!!! hi mom!</p>
        </div>
      </p>
    </div>
  );
};

export default Contribute;
