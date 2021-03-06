import React, { Component } from "react";
import Post from "../Post/Post";
import "./PostList.css";

export default class PostList extends Component {
  renderPosts() {
    return (
      <div className="post-list-container">
        {this.props.posts.children.map(post => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </div>
    );
  }

  postContainsChildrens() {
    return this.props.posts && this.props.posts.children;
  }

  render() {
    return this.postContainsChildrens() ? this.renderPosts() : null;
  }
}
