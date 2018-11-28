import React, { Component } from "react";
import "./SubReddit.css";

export default class SubRedditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subReddits: ["News", "Sports", "Movies", "Technology", "Business"]
    };
  }
  render() {
    return (
      <div className="subreddit-container">
        {this.state.subReddits.map((reddit, index) => {
          return (
            <option
              key={index}
              onClick={this.props.onSelectSubReddit}
              value={reddit}
            >
              {reddit}
            </option>
          );
        })}
      </div>
    );
  }
}
