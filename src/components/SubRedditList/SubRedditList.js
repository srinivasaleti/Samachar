import React, { Component } from "react";
import "./SubReddit.css";

export default class SubRedditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subReddits: ["News", "Sports", "Movies", "Technology", "Business"],
      hide: true,
      firstTimeOpen: true
    };
  }

  changeState = () => {
    this.setState(prevState => ({
      hide: !prevState.hide,
      firstTimeOpen: false
    }));
  };

  subRedditSelectionHandler = event => {
    this.setState({
      hide: true
    });
    this.props.onSelectSubReddit(event);
    event.preventDefault();
  };

  mapAllSubRedditsToHtmlOptions() {
    return this.state.subReddits.map((reddit, index) => (
      <option
        key={index}
        onClick={this.subRedditSelectionHandler}
        value={reddit}
      >
        {reddit}
      </option>
    ));
  }

  render() {
    const classNameFopSubRedditConatiner =
      "subreddit-container " + (this.state.hide ? "slide-out" : "slide-in");
    return (
      <div className="sub-reddits-section">
        <div onClick={this.changeState} className="show-reddit">
          <div />
          <div />
          <div />
        </div>
        {!this.state.firstTimeOpen && (
          <div className={classNameFopSubRedditConatiner}>
            {this.mapAllSubRedditsToHtmlOptions()}
          </div>
        )}
      </div>
    );
  }
}
