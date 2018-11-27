import React, { Component } from "react";
import "./post.css";

export default class Post extends Component {
  render() {
    const post = this.props.post;
    const d = new Date(0);
    d.setUTCSeconds(post.created_utc);
    return (
      <div className="post-container">
        <div className="details">
          <h1 className="title">
            <a href={post.url}>{post.title}</a>
          </h1>
          <span className="author">Posted by: {post.author}</span>

          <span className="posted_time">
            &nbsp;at&nbsp;{d.toLocaleString()}
          </span>
        </div>

        <div className="votes">
          <span>
            <i className="fa fa-hand-o-up" />
            &nbsp;&nbsp;
            <span className="up">{post.ups}</span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i className="fa fa-hand-o-down" />
            &nbsp;&nbsp;
            <span className="down">{post.downs}</span>
          </span>
        </div>
      </div>
    );
  }
}
