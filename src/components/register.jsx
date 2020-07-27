import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class dashboard extends Component {
  state = { name: "user" };

  handleChange=(e)=>{
    this.setState({name: e.target.value})
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>REGISTER</h4>
        </div>
        <form className="form">
          Name:&nbsp;
          <input type="text" name="name" id="name" placeholder="name" onChange={e=>this.handleChange(e)} />
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
          <Link
            to={{
              pathname: "/dashboard",
              name: this.state.name,
            }}
          >
            <button type="submit">Register</button>
          </Link>
        </form>
        <div className="login">
          <h6>
            Have an account? <Link to="/login">Login</Link>
          </h6>
        </div>
      </div>
    );
  }
}

export default dashboard;
