import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import PrivateRoute from "../common/PrivateRoute";

import Posts from "../posts/Posts";

import Navbar from "../layout/Navbar";
//dashboard
//edit profile
//profiles
//profile
//posts
//post
//notfound

export class Dashboard extends Component {
  render() {
    // const { user, isAuthenticated } = this.props.auth;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Posts />
            </div>
            <div className="col-md-4">
              <p>Me</p>
              <p>Stories</p>
              <p>Suggestions</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
