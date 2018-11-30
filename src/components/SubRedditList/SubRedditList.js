import React, { Component } from "react";
import "./SubReddit.css";
import {
  selectedSubReddit,
  subRedditSelected
} from "../../redux/main/actions/actions";
import { connect } from "react-redux";
import { updateStoreWithPostsOf } from "../../redux/main/actions/actions";

export class SubRedditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subReddits: ["News", "Sports", "Movies", "Technology", "Business"]
    };
  }

  subRedditSelectionHandler = event => {
    const reddit = event.target.value;
    this.props.setSelectedSubReddit(reddit);
    this.props.fetchPosts(reddit);
    this.props.subRedditSelected();
    event.preventDefault();
  };

  mapAllSubRedditsToHtmlOptions() {
    return this.state.subReddits.map((reddit, index) => (
      <option
        key={index}
        onClick={e => {
          this.subRedditSelectionHandler(e);
        }}
        value={reddit}
      >
        {reddit}
      </option>
    ));
  }

  subReddistListConainer() {
    const classNameFopSubRedditConatiner =
      "subreddit-container " + (this.props.show ? "slide-in" : "slide-out");
    return (
      <div className="sub-reddits-section">
        <div className={classNameFopSubRedditConatiner}>
          {this.mapAllSubRedditsToHtmlOptions()}
        </div>
      </div>
    );
  }

  render() {
    return this.props.displayedAtleastOnce
      ? this.subReddistListConainer()
      : null;
  }
}

function mapStateToProps(state) {
  return {
    show: state.subReddit.showSubRedditPane,
    displayedAtleastOnce: state.subReddit.subRedditPaneOpenAtleastOnce
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedSubReddit: subReddit => {
      dispatch(selectedSubReddit(subReddit));
    },
    fetchPosts: subReddit => {
      dispatch(updateStoreWithPostsOf(subReddit));
    },
    subRedditSelected: () => {
      dispatch(subRedditSelected());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubRedditList);
