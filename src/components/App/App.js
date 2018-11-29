import React, { Component } from "react";
import "./App.css";
import PostList from "../PostList/PostList";
import SubRedditList from "../SubRedditList/SubRedditList";
import Search from "../Search/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      filteredPosts: { children: [] },
      clearSearchValue: false
    };
    this.onSelectSubReddit = this.onSelectSubReddit.bind(this);
    this.filterPostList = this.filterPostList.bind(this);
  }

  componentDidMount() {
    this.updatePosts("news");
  }

  onSelectSubReddit(event) {
    this.clearPreviousState();
    this.updatePosts(event.target.value);
  }

  filterPostList(event) {
    const children = this.state.posts.children.filter(post => {
      return (
        post.data.title
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({
      filteredPosts: {
        children: children
      }
    });
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

  clearPreviousState() {
    this.setState({
      filteredPosts: {
        children: []
      },
      clearSearchValue: true
    });
  }

  getPostListElement() {
    if (this.state.filteredPosts.children.length)
      return <PostList posts={this.state.filteredPosts} />;
    return <PostList posts={this.state.posts} />;
  }

  render() {
    return (
      <div className="app">
        <Search
          clearSearchValue={this.state.clearSearchValue}
          onSearch={this.filterPostList}
        />
        {!this.state.hide && (
          <SubRedditList onSelectSubReddit={this.onSelectSubReddit} />
        )}
        {this.getPostListElement()}
      </div>
    );
  }
}

export default App;
