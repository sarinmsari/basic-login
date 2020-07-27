import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class login extends Component {
  state = { name: "user" };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h3>LOGIN</h3>
        </div>
        <div className="form">
          Name:&nbsp;
          <input
            type="name"
            name="name"
            id="name"
            placeholder="name"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          Password:&nbsp;
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <br />
          <Link
            to={{
              pathname: "/dashboard",
              name: this.state.name,
            }}
          >
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
}

export default login;
