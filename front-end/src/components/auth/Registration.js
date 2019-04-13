//modukles
import React, { Component } from "react";
import PropTypes from "prop-types";
// import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

//actions

//components
// import InputGroup from "../common/InputGroup";

//css

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

    this.onFacebookSignin = this.onFacebookSignin.bind(this);
  }

  onFacebookSignin(e) {
    console.log("signing up with facebook");
  }

  state = {};
  render() {
    //bring in errors
    const { errors } = this.state;
    return (
      <div className="register bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <img src="logo" alt="logo" /> */}
              <h1 className="display-4 text-center">InstaPro</h1>
              <p className="lead text-center">
                Sign up to see photos and videos from your friends and others
                around the world.
                {/* <InputGroup className="btn btn-primary">
                  Log in with Facebook
                </InputGroup> */}
                <br />
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={this.onFacebookSignin.bind(this)}
                >
                  Log in with Facebook
                </button>
                <br />
                Or
                <br />
                
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
