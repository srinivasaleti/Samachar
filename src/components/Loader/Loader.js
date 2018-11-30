import React, { Component } from "react";
import "./Loader.css";
import { connect } from "react-redux";

export class Loader extends Component {
  render() {
    return this.props.showLoader ? (
      <div className="loader-modal">
        <div className="loader">
          <i className="fa fa-spinner fa-spin spinner" />
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    showLoader: state.subReddit.subRedditsFetching
  };
};
export default connect(mapStateToProps)(Loader);
