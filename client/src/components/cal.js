import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import BorderRadius from "autoprefixer/lib/hacks/border-radius";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCyu5AsHYYRT2DEiKbiHIfdNZxl0_BNyP0";
let calendars = [
  { calendarId: "ubc.bcsclub@gmail.com" },
  {
    calendarId: "m77u5u4bq0ve1ddcnlnaplea9c@group.calendar.google.com",
    color: "#B241D1", //optional, specify color of calendar 2 events
  },
  {
    calendarId: "n3nsme1q3vvfo8oc90lavndigo@group.calendar.google.com",
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
