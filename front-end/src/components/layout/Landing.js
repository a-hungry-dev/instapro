import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import Registration from "../auth/Registration";

//css
import "./Landing.css";
class Landing extends Component {
  componentDidMount() {
    //checkauth, redirect to main
  }

  render() {
    return (
      <div className="landing h-100">
        <div className="landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-6">img</div>
              <div className="col-md-6">
                <Registration />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
