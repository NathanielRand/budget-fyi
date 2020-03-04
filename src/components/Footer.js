import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <h3>test</h3>
    <Link to="/help">
      <h2>HELP</h2>
    </Link>
  </footer>
);

export default connect(undefined)(Footer);
