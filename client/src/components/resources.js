// Essential imports
import React from "react";
import ResourceList from "./resourceList";

const Resources = () => {
  return (
    <div>
      <p
        class="f5 lh-copy center fw3"
        style={{ width: "inherit", overflowY: "scroll", height: "425px" }}
      >
        <div class="pa5">
          <p class="f3 fw6">Resources</p>
          <p class="f4">
            <a
              class="link dim gray f6 f5-ns dib mr3"
              href="/create"
              title="About"
            >
              Create
            </a>
          </p>
          <ResourceList />
        </div>
      </p>
    </div>
  );
};

export default Resources;
