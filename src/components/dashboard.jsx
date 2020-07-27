import React from "react";
import { Link} from "react-router-dom";
import Content from "./content.jsx";
import "./style.css";

function dashboard(params) {
  console.log(params.location.name);

  return (
    <div className="container">
      <Link to="/login" className="logout">
        Logout
      </Link>
      <div className="header">Hi {params.location.name}</div>
      <Content/>
      <Content/>
      <Content/>
    </div>
  );
}

export default dashboard;
