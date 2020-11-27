import React from "react";
import { Link } from "react-router-dom";
// import './error.scss';

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Hovsa! Siden findes ikke...</h1>
        <Link to="/" className="btn btn-primary">
          forside
        </Link>
      </div>
    </section>
  );
}
