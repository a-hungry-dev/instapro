//modukles
import React, { Component } from "react";
import PropTypes from "prop-types";
// import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

//actions

//components
import InputGroup from "../common/InputGroup";

//css
import RegistrationSytles from "./Registration.css";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
  }
  state = {};
  render() {
    //bring in errors
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6">{/* image slider, fade to next */}</div>
            <div className="col-md-6">
              {/* <img src="logo" alt="logo" /> */}
              <h1 className="display-4 text-center">InstaPro</h1>
              <p className="lead text-center">
                Sign up to see photos and videos from your friends and others
                around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
