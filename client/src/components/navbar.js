import React from "react";
import "tachyons";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav class="pa3 pa4-ns">
        <a
          class="link dim black b f1 f-headline-ns tc db"
          href="/"
          title="Home"
        >
          BCSSA
        </a>
        <div class="tc pb3">
          <a class="link dim gray f6 f5-ns dib mr3" href="/" title="Home">
            Home
          </a>
          <a class="link dim gray f6 f5-ns dib mr3" href="/about" title="About">
            About
          </a>
          <a
            class="link dim gray f6 f5-ns dib mr3"
            href="/calendar"
            title="Store"
          >
            Calendar
          </a>
          <a
            class="link dim gray f6 f5-ns dib mr3"
            href="/contribute"
            title="Store"
          >
            Contribute!
          </a>
          {/* <a
            class="link dim gray f6 f5-ns dib mr3"
            href="/connect"
            title="Store"
          >
            Connect
          </a> */}
          <a class="link dim gray f6 f5-ns dib" href="/contact" title="Contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
