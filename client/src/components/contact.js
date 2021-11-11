import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <p class="f6 f4-ns lh-copy measure center tc">
        <p class="pa4">
          <div class="pa4">
            <div class="overflow-auto">
              <table class="f6 w-100 mw8 center" cellspacing="0">
                <tbody class="lh-copy">
                  <tr>
                    <td class="pv3 pr3 bt bb b--black-20">
                      Email : ubc.bcsclub@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td class="pv3 pr3 bb b--black-20">
                      Facebook :{" "}
                      <a href="https://www.facebook.com/groups/209406665894256">
                        BCS Group
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </p>
      </p>
    </div>
  );
};

export default Contact;
