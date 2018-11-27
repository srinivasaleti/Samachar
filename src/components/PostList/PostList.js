import React, { Component } from "react";

export default class PostList extends Component {
  renderPosts() {
    return (
      <ul>
        {this.props.posts.children.map(post => (
          <li key={post.data.id}>{post.data.title}</li>
        ))}
      </ul>
    );
  }

  postContainsChildrens() {
    return this.props.posts && this.props.posts.children;
  }

  render() {
    return this.postContainsChildrens() ? this.renderPosts() : null;
  }
}
