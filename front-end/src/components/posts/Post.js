import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import classNames from "classnames";
// import { Link } from "react-router-dom";
import checkDate from "../../utils/checkDate";
//like post, flat post, add comment, actions(report innappropritate, unfoolow, go to post, cancel)

export class Post extends Component {
  render() {
    const { post } = this.props;
    //add auth here to check if the user is blocked? idk
    let comments;
    //display first comment in array, then display in descending order, first comment needs to be caption, ther's no heart for it
    console.log(post.comments.length);
    if (post.comments === null || post.comments === undefined) {
      comments = "";
    } else {
      post.comments.length > 1
        ? (comments = (
            <div>
              {post.comments.user}: {post.comments[0].text}
            </div>
          ))
        : (comments = comments = post.comments.map(comment => (
            <div>
              {comment.user}: {comment.text}
            </div>
          )));
    }

    return (
      <div className="post card card-body mt-5">
        <div className="row">
          <div>User: {post.user}</div>
          <div className="float-right">Actions</div>
        </div>
        <div className="row">Image: {post.image}</div>
        <div className="row">
          {" "}
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
        </div>
        <div>likes: {post.likes.length}</div>
        <div className="row">{comments}</div>
        <div>{checkDate(post.date)}</div>
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
