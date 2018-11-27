import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return <li>{this.props.post.title}</li>;
  }
}
