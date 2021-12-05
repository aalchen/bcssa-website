// Essential imports
import React from "react";

// Components
import Edit from "./edit";
import ResourceList from "./resourceList";
import Create from "./create";

const ResourcesItems = (props) => {
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
          case "edit":
            return <Edit />;
          case "create":
            return <Create />;
          case "list":
            return <ResourceList />;
          default:
            return <ResourceList />;
        }
      })()}
    </div>
  );
};

export default ResourcesItems;
