import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";
import checkDate from "../../utils/checkDate";
//like post, flat post, add comment, actions(report innappropritate, unfoolow, go to post, cancel)

export class Post extends Component {
  render() {
    const { post, auth } = this.props;

    let comments;
    console.log(post);
    //display first comment in array, then display in descending order, first comment needs to be caption, ther's no heart for it
    if (post.comments === null || post.comments === undefined) {
      comments = "";
    } else {
      post.comments.length > 1
        ? (comments = comments = post.comments.map(comment => (
            <div>{comment.text}</div>
          )))
        : (comments = "");
    }

    return (
      <div className="post card card-body mt-5">
        <div className="row">
          <div>image and name</div>
          <div className="float-right">Actions</div>
        </div>
        <div className="row">BIG IMAGE</div>
        <div className="row">
          {" "}
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
        </div>
        <small>{comments} likes</small>
        <div className="row">Comment box</div>
        <small>{checkDate(post.date)}</small>
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
