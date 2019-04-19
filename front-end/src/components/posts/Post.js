import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import checkDate from "../../utils/checkDate";
//like post, flat post, add comment, actions(report innappropritate, unfoolow, go to post, cancel)

export class Post extends Component {
  render() {
    const { post } = this.props;
    //add auth here to check if the user is blocked? idk
    let comments;
    let likes;
    //display first comment in array, then display in descending order, first comment needs to be caption, ther's no heart for it
    if (post.comments === null || post.comments === undefined) {
      comments = "";
    } else {
      post.comments.length > 1
        ? (comments = (
            <li>
              {post.comments.user}: {post.comments[0].text}
            </li>
          ))
        : (comments = comments = post.comments.map(comment => (
            <li key={comment._id} className="list-group-item">
              {comment.user}: {comment.text}
            </li>
          )));
    }
    if (post.likes !== null && post.likes !== undefined) {
      post.likes.length > 1 ? (likes = <div>Likes: 0</div>) : (likes = "");
    }
    return (
      <div className="post card card-body mt-5">
        <div className="row">
          <div>User: {post.user}</div>
          <div className="float-right">Actions</div>
        </div>
        <img src={post.image} alt={post.image} />
        {/* <div className="row">Image: {`http://localhost/${post.image}`}</div> */}
        <div className="row">
          {" "}
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
          <i className="far fa-heart fa-lg" />
        </div>
        <div>{likes}</div>
        <div className="row">
          <ul className="list-group list-group-flush">{comments}</ul>
        </div>
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
