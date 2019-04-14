import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";

import { addPost } from "../../actions/PostActions";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      image: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      image: "image",
      user: user
    };

    this.props.addPost(newPost);
    this.setState({ text: "", image: "" });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <input type="file" />
        <form noValidate onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Image"
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.onChange}
            error={errors.image}
          />
          <TextFieldGroup
            placeholder="Write a caption"
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            error={errors.text}
          />
          <input
            type="submit"
            value="Share"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = {
  addPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);