import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "API";
let calendars = [
  { calendarId: "ID1" },
  {
    calendarId: "ID2",
    color: "#B241D1", //optional, specify color of calendar 2 events
  },
  {
    calendarId: "ID3",
    color: "#7BC17E", //optional, specify color of calendar 2 events
  },
];

let styles = {
  calendar: {
    padding: "10px",
  },
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
