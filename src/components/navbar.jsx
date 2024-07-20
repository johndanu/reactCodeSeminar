import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar bg-primary navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Buy Da
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="d-flex ms-auto">
            <Link to="/about" className="main-routing">
              Home
            </Link>
            <Link to="/about" className="main-routing">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
