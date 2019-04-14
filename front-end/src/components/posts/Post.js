import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";

//like post, flat post, add comment, actions(report innappropritate, unfoolow, go to post, cancel)

export class Post extends Component {
  render() {
    const { post, auth } = this.props;
    return (
      <div className="post card card-body mt-5">
        <div className="row">
          <div>image and name</div>
          <div className="float-right">Actions</div>
        </div>
        <div className="row">BIG IMAGE</div>
        <div className="row">Comment box</div>
      </div>
    );
  }
}

Post.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
