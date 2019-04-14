import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//post, spinner, comments, comment box

//getposts

export class Posts extends Component {
  render() {
    return <div className="posts">Posts</div>;
  }
}

Posts.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
