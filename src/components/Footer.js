import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <Link to="/">
          <h3>BudgetFYI™</h3>
        </Link>
      </div>
      <div className="footer-content">
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
    </div>
  );
}

export default Footer;
