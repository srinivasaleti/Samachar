import React, { Component } from "react";
import "./App.css";
import PostList from "../PostList/PostList";
import SubRedditList from "../SubRedditList/SubRedditList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
    this.onSelectSubReddit = this.onSelectSubReddit.bind(this);
  }

  componentDidMount() {
    this.updatePosts("news");
  }

  onSelectSubReddit(event) {
    this.updatePosts(event.target.value);
  }

  async fetchPosts(subReddit) {
    const response = await fetch(
      "https://www.reddit.com/r/" + subReddit + ".json"
    );
    const posts = await response.json();
    return posts;
  }

  async updatePosts(subReddit) {
    const posts = await this.fetchPosts(subReddit);
    this.setState({
      posts: posts.data
    });
  }

  render() {
    return (
      <div className="app">
        <PostList posts={this.state.posts} />
        <SubRedditList onSelectSubReddit={this.onSelectSubReddit} />
      </div>
    );
  }
}

export default App;
