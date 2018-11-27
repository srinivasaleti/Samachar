import React, { Component } from "react";
import "./App.css";
import PostList from "../PostList/PostList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  async componentDidMount() {
    const response = await fetch("https://www.reddit.com/r/news.json");
    const posts = await response.json();
    this.setState({
      posts: posts.data
    });
  }

  render() {
    return <PostList posts={this.state.posts} />;
  }
}

export default App;
