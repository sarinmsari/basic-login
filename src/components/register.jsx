import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function register() {
  return (
    <div className="container">
      <div className="header">
        <h4>REGISTER</h4>
      </div>
      <div className="form">
        Name:&nbsp;
        <input type="text" name="name" id="name" placeholder="name" />
        <br />
        Email:&nbsp;
        <input type="email" name="email" id="email" placeholder="email" />
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
          <button type="submit">Register</button>
        </Link>
      </div>
      <div className="login">
        <h6>
          Have an account? <Link to="/login">Login</Link>
        </h6>
      </div>
    </div>
  );
}

export default register;
