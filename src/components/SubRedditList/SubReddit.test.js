import React from "react";
import { SubRedditList } from "./SubRedditList";
import { mount } from "enzyme";
import "../../enzyme-setup";

describe("SubRedditList", () => {
  it("don't show sub reddits list initially", () => {
    const props = {
      show: false,
      displayedAtleastOnce: false
    };
    const wrapper = mount(<SubRedditList {...props} />);

    expect(wrapper.find(".subreddit-container").exists()).toBe(false);
  });

  it("renders sub reddits when atleast once it is displayed", () => {
    const props = {
      show: false,
      displayedAtleastOnce: true
    };
    const wrapper = mount(<SubRedditList {...props} />);

    expect(wrapper.find(".subreddit-container").exists()).toBe(true);
  });

  it("add slide-in class to subreddit-container when open", () => {
    const props = {
      show: true,
      displayedAtleastOnce: true
    };
    const wrapper = mount(<SubRedditList {...props} />);
    expect(
      wrapper
        .find(".subreddit-container")
        .find(".slide-in")
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find(".subreddit-container")
        .find(".slide-out")
        .exists()
    ).toBe(false);
  });
  it("add slide-out class to subreddit-container when it closes", () => {
    const props = {
      show: false,
      displayedAtleastOnce: true
    };
    const wrapper = mount(<SubRedditList {...props} />);
    expect(
      wrapper
        .find(".subreddit-container")
        .find(".slide-out")
        .exists()
    ).toBe(true);
    expect(
      wrapper
        .find(".subreddit-container")
        .find(".slide-in")
        .exists()
    ).toBe(false);
  });
  it("on select a subReddit should update to store", () => {
    const props = {
      show: false,
      displayedAtleastOnce: true,
      setSelectedSubReddit: jest.fn(),
      subRedditSelected: jest.fn(),
      fetchPosts: jest.fn()
    };
    const wrapper = mount(<SubRedditList {...props} />);
    const subReddit = wrapper.find("option").at(0);
    subReddit.simulate("click");
    expect(props.fetchPosts).toBeCalled();
    expect(props.setSelectedSubReddit).toBeCalledWith("News");
    expect(props.subRedditSelected).toBeCalled();
  });
});
