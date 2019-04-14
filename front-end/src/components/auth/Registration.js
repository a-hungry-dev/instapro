//modukles
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//actions
import { registerUser } from "../../actions/AuthActions";

//components
import TextFieldGroup from "../common/TextFieldGroup";

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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } else {
      console.log("not authorized");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFacebookSignin(e) {
    console.log("signing up with facebook");
    //implement facebook sign up
  }

  onSubmit(e) {
    console.log("signing up");
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };

    console.log(`signing up user with ${newUser}`);
    //create actions and reducers, bring in redux
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="register bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <img src="logo" alt="logo" /> */}
                <i className="fas fa-camera-retro fa-5x" />
                <h1 className="display-4 text-center">InstaPro</h1>
                <p className="lead text-center">
                  Sign up to see photos and videos from your friends and others
                  around the world.
                </p>
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
                <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="Username"
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.onChange}
                    error={errors.username}
                  />
                  <TextFieldGroup
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password_confirm"
                    type="text"
                    value={this.state.password_confirm}
                    onChange={this.onChange}
                    error={errors.password_confirm}
                  />
                  <input
                    type="submit"
                    value="Next"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
                <p>
                  By signing up, you agree to our{" "}
                  <a href="/terms" title="Terms">
                    Terms
                  </a>{" "}
                  . Learn how we collect, use and share your data in our{" "}
                  <a href="/data" title="Data">
                    Data Policy
                  </a>
                  and how we use cookies and similar technology in our{" "}
                  <a href="/cookies" title="Cookies">
                    Cookies Policy
                  </a>{" "}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="register mt-1">
          Have an account?{" "}
          <a href="/login" title="Login">
            Log in
          </a>
        </div>
        <div>
          <p>Get the app. - coming soon...</p>
          links to stores here
        </div>
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth, errors: state.errors });

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Registration));
