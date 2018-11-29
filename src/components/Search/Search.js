import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <input
        type="search"
        placeholder="Search here"
        value={this.props.clearSearchValue ? "" : this.state.value}
        onChange={event => {
          this.setState({
            value: event.target.value
          });
          this.props.onSearch(event);
        }}
      />
    );
  }
}
