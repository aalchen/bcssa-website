import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "API CALL HERE";
let calendars = [{ calendarId: "ID HERE" }];

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
