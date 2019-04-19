import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import Spinner from "../common/Spinner";
import Post from "./Post";
import { getPosts } from "../../actions/PostActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props;

    let postContent;

    if (posts.posts === null || loading) {
      // postContent = <Spinner />;
      postContent = <div>No Posts</div>;
    } else {
      if (posts.posts.length > 0) {
        postContent = posts.posts.map(post => (
          <Post key={post._id} post={post} />
        ));
      }
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
