import React, { Component } from "react";
import "./App.css";
import PostList from "../PostList/PostList";
import SubRedditList from "../SubRedditList/SubRedditList";
import {
  selectedSubReddit,
  updateStoreWithPostsOf
} from "../../redux/main/actions/actions";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
export class App extends Component {
  componentDidMount() {
    this.props.setSubReddit("news");
    this.props.fetchPosts("news");
  }

  getPostListElement() {
    return <PostList posts={this.props.posts} />;
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Loader />
        <SubRedditList />
        {this.getPostListElement()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSubReddit: state.subReddit.selectedSubReddit,
    posts: state.subReddit.posts
  };
};

const mapDispatchToProps = disptach => {
  return {
    setSubReddit: subReddit => {
      disptach(selectedSubReddit(subReddit));
    },
    fetchPosts: subReddit => {
      disptach(updateStoreWithPostsOf(subReddit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
