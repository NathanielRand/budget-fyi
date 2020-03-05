import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <h1>This is footer</h1>
      <Link to="/about">
        <h5>About</h5>
      </Link>
      <Link to="/help">
        <h5>Help</h5>
      </Link>
      <Link to="/contact">
        <h5>Contact</h5>
      </Link>
    </div>
  );
}

export default Footer;
