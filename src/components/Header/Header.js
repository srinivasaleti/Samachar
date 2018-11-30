import React, { Component } from "react";
import { showSubRedditPaneButtonClicked } from "../../redux/main/actions/actions";
import { connect } from "react-redux";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div
          className="show-reddit"
          onClick={() => {
            this.props.showSubRedditPaneButtonClicked();
          }}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = disptach => {
  return {
    showSubRedditPaneButtonClicked: () => {
      disptach(showSubRedditPaneButtonClicked());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
