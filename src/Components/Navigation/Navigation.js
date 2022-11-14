import React from "react";
import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navbar">
      <nav className="header">
        <div className="fitness-brand">
          <FontAwesomeIcon className="icon" icon={faDumbbell}></FontAwesomeIcon>
          <h1 style={{ fontSize: "25px" }}>Fitness Xpress</h1>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/">Registration</a>
          <a href="/">About Us</a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
