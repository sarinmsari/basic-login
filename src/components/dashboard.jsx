import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function dashboard() {
  return (
    <div className="container">
      <Link to="/login" className="logout">Logout</Link>
      <div className="header">Dashboard</div>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit
        tempora quam quidem quasi possimus dicta! Laboriosam quas tempora a
        tempore, quidem harum consequuntur asperiores dolor non, maxime
        provident dignissimos.
      </div>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit
        tempora quam quidem quasi possimus dicta! Laboriosam quas tempora a
        tempore, quidem harum consequuntur asperiores dolor non, maxime
        provident dignissimos.
      </div>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odit
        tempora quam quidem quasi possimus dicta! Laboriosam quas tempora a
        tempore, quidem harum consequuntur asperiores dolor non, maxime
        provident dignissimos.
      </div>
    </div>
  );
}

export default dashboard;
