import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { logoutUser } from "../../actions/AuthActions";

// import SearchInputGroup from "../common/SearchInputGroup";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // const { errors } = this.state;
    return (
      <nav className="navbar navbar-bottom navbar-expand-sm navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-camera-retro fa-lg" /> | InstaPro
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobilenav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {
                  // <SearchInputGroup
                  //   placeholder="Search..."
                  //   name="search"
                  //   icon="fas fa-search"
                  //   type="text"
                  //   value={this.state.name}
                  //   onChange={this.onChange}
                  //   error={errors.name}
                  // />
                }
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  <i className="far fa-compass fa-lg" />
                </Link>
              </li>
              <li className="nav-item">
                {/* recent activity */}
                <span className="nav-link">
                  <i className="far fa-heart fa-lg" />
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="far fa-user fa-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ errors: state.errors });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
