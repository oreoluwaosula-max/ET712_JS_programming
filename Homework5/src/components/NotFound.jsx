
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">

      <div className="error-icon">🔍</div>

      <h1>404</h1>

      <h2>Oops! Page Not Found.</h2>

      <p>
        The page you are looking for does not exist
        or may have been moved.
      </p>

      <Link to="/" className="primary-button">
        ← Back to Home
      </Link>

    </div>
  );
}

export default NotFound;
