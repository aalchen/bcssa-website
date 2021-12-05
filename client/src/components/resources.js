// Essential imports
import React, { useState } from "react";
import Edit from "./edit";
import ResourceList from "./resourceList";
import Create from "./create";

const Resources = () => {
  const [index, setIndex] = useState(0);
  const components = [<ResourceList />, <Create />];
  return (
    <div>
      <p
        class="f5 lh-copy center fw3"
        style={{ width: "inherit", overflowY: "scroll", height: "425px" }}
      >
        <div class="pa5">
          <p class="f3 fw6">Resources</p>
          <p class="f4">
            <button
              class="ph3 f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black"
              onClick={() => setIndex(0)}
            >
              View List
            </button>
            <button
              class="ph3 f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black"
              onClick={() => setIndex(1)}
            >
              Add a Resource
            </button>
          </p>
          {components[index]}
        </div>
      </p>
    </div>
  );
};

export default Resources;
