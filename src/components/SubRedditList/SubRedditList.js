import React, { Component } from "react";
import "./SubReddit.css";
import { selectedSubReddit } from "../../redux/main/actions/actions";
import { connect } from "react-redux";
import { updateStoreWithPostsOf } from "../../redux/main/actions/actions";

export class SubRedditList extends Component {
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
    const reddit = event.target.value;
    this.props.setSelectedSubReddit(reddit);
    this.props.fetchPosts(reddit);
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

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedSubReddit: subReddit => {
      dispatch(selectedSubReddit(subReddit));
    },
    fetchPosts: subReddit => {
      dispatch(updateStoreWithPostsOf(subReddit));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubRedditList);
