import React from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.logo}
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch ">
            <input
              className="form-check-input mx-2 "
              type="checkbox"
              onClick={props.darkMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlhtmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable Dark mode"
                : "Disbale Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
