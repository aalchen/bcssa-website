// Essential imports
import React from "react";

const About = () => {
  return (
    <div>
      <p
        class="f5 lh-copy center fw3"
        style={{ overflowY: "scroll", height: "425px" }}
      >
        <div class="pa5">
          <p class="f3 fw6">About</p>
          <p class="f4">
            Welcome to the website for the Bachelor of Computer Science Student
            Association, located at UBC in Vancouver, BC!
          </p>
          <p class="f4">
            Official UBC BCS links :
            <ul>
              <li>
                <a href="https://www.cs.ubc.ca/students/undergrad/degree-programs/bcs-program-second-degree">
                  Website
                </a>
              </li>
              <li>
                <a href="https://www.calendar.ubc.ca/vancouver/index.cfm?tree=12,215,816,1299">
                  Program Details
                </a>
              </li>
              <li>
                <a href="https://www.calendar.ubc.ca/vancouver/index.cfm?page=deadlines">
                  UBC Calendar
                </a>
              </li>
              <li>
                <a href="https://students.ubc.ca/enrolment/exams/exam-schedule">
                  Exam Schedule
                </a>
              </li>
            </ul>
          </p>
          <p class="f4">
            BCSSA links (for admitted students):
            <ul>
              <li>
                <a href="https://www.facebook.com/groups/ubcbcsclub">
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="https://discord.gg/22BNREa">Discord</a>
              </li>
            </ul>
          </p>
        </div>
      </p>
    </div>
  );
};

export default About;
