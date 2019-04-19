import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";

import { addPost } from "../../actions/PostActions";

import config from "../../config/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(config);

const storage = firebase.storage().ref();

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
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
    const { errors } = this.props.errors;

    const upload = storage
      .child(`images/${user.id}/${this.state.file.name}`)
      .put(this.state.file);
    //consider cancel button?
    //monitor upload progress,cancel to resume when connection is established
    upload.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Uploaded: ${progress}%`);
        //switch statement here for state
      },
      err => {
        console.log(err);
        this.setState({ ["errors.upload"]: err });
      },
      () => {
        upload.snapshot.ref.getDownloadURL().then(downloadURL => {
          const newPost = {
            user: user.id,
            text: this.state.text,
            image: downloadURL
          };
          this.props.addPost(newPost);
          this.setState({ text: "", image: "", file: null });
        });
      }
    );
  }

  handleFileSelect = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <form noValidate onSubmit={this.onSubmit}>
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
