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
      //change to allow multiple files
      file: null,
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
    const fd = new FormData();
    fd.append("image", this.state.file);
    
    fd.append("text", this.state.text);
    fd.append("user", user);
    // const newPost = {
    //   text: this.state.text,
    //   image: "image",
    //   user: user,
    //   file: this.state.file
    // };

    this.props.addPost(fd);
    this.setState({ text: "", image: "", file: null });
  }
  handleFileSelect = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.handleFileSelect}
          ref={fileUpload => (this.fileUpload = fileUpload)}
        />
        <i
          className="fas fa-file-upload fa-5x"
          onClick={() => this.fileUpload.click()}
        />
        {/* <form action="/api/posts" method="post" enctype="multipart/form-data">
          <input type="file" name="avatar" />
          <input
            type="submit"
            value="Share"
            className="btn btn-info btn-block mt-4"
          />
        </form> */}
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
