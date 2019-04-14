import React, { Component } from "react";
import Registration from "../auth/Registration";

//css
import "./Landing.css";
class Landing extends Component {
  render() {
    return (
      <div className="landing h-100">
        <div className="landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-6 fadeBackground">
                <img src="../../images/InstaPro.jpg" alt="InstaPro" />
                <img src="../../images/InstaPro2.jpg" alt="InstaPro" />
              </div>
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
