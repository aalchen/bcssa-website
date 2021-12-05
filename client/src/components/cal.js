import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import BorderRadius from "autoprefixer/lib/hacks/border-radius";
import { css } from "@emotion/react";

const API_KEY = "API";
let calendars = [
  { calendarId: "ubc.bcsclub@gmail.com" },
  {
    calendarId: "ID",
    color: "#B241D1", //optional, specify color of calendar 2 events
  },
  {
    calendarId: "ID",
    color: "#7BC17E", //optional, specify color of calendar 2 events
  },
];

let styles = {
  calendar: {
    padding: "10px",
    background: "white",
    BorderRadius: "5px",
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    color: red;
    border: 2px solid red;
  `,
};

const Cal = () => {
  return (
    <div
      style={{
        width: "90%",
        paddingTop: "50px",
        paddingBottom: "50px",
        margin: "auto",
        maxWidth: "1200px",
      }}
    >
      <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
    </div>
  );
};

export default Cal;
