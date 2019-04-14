//modukles
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

//actions
import { loginUser } from "../../actions/AuthActions";

//components
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onFacebookLogin = this.onFacebookLogin.bind(this);
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

  onFacebookLogin(e) {
    console.log("logging up with facebook");
    //implement facebook sign up
  }

  onSubmit(e) {
    console.log("signing up");
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(newUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="login bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {/* <img src="logo" alt="logo" /> */}
                <i className="fas fa-camera-retro fa-5x" />
                <h1 className="display-4 text-center">InstaPro</h1>
                <form noValidate onSubmit={this.onSubmit}>
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
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
                <br />
                Or
                <br />
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={this.onFacebookLogin.bind(this)}
                >
                  Log in with Facebook
                </button>
                <a href="/passwordReset" title="Reset Password">
                  Forgot passowrd?
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="login mt-1">
          Don't have an account?{" "}
          <a href="/" title="Sign up">
            Sign up
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth, errors: state.errors });
const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
