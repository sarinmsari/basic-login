import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function login() {
  return (
    <div className="container">
      <div className="header">
        <h3>LOGIN</h3>
      </div>
      <div className="loginform">
        Email:&nbsp;
        <input type="email" name="mailid" id="mailid" placeholder="email" />
        <br />
        Password:&nbsp;
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <br />
        <Link to="/dashboard">
          <button type="submit" id="login">
            LOGIN
          </button>
        </Link>
        <br />
      </div>
      <div className="register">
        <h6>
          Not a user? <Link to="/register">Register</Link>
        </h6>
      </div>
    </div>
  );
}

export default login;
