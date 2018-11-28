import React, { Component } from "react";

export default class SubRedditList extends Component {
  render() {
    return (
      <select onChange={this.props.onSelectSubReddit}>
        <option value="news">News</option>
        <option value="sports">Sports</option>
        <option value="movies">Movies</option>
      </select>
    );
  }
}
