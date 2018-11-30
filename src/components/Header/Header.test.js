import React from "react";
import { Header } from "./Header";
import { mount } from "enzyme";
import "../../enzyme-setup";

describe("SubRedditList", () => {
  const props = {
    showSubRedditPaneButtonClicked: jest.fn()
  };
  const wrapper = mount(<Header {...props} />);
  it("renders show reddits", () => {
    expect(wrapper.find(".show-reddit").exists()).toBe(true);
  });
  it("emit an action when show reddits clicked", () => {
    wrapper.find(".show-reddit").simulate("click");
    expect(props.showSubRedditPaneButtonClicked).toBeCalled();
  });
});
