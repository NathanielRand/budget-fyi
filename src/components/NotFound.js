import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <p>Whomp! Try a different page my friend...or go home below</p>
    <Link to="/">Phone Home Here</Link>
  </div>
);

export default NotFoundPage;
