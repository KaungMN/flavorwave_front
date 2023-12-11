import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>Error Code: 404 Not Found</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default NoMatch;
