import React from "react";
import SubRedditList from "./SubRedditList";
import { mount } from "enzyme";
import "../../enzyme-setup";

describe("SubRedditList", () => {
  const onSelectSubReddit = jest.fn();

  const wrapper = mount(
    <SubRedditList onSelectSubReddit={onSelectSubReddit} />
  );

  it("don't show subreddit container initially", () => {
    expect(wrapper.find(".subreddit-container").exists()).toBe(false);
  });

  it("display subReddit container once show-reddit clicked", () => {
    const showReddit = wrapper.find(".show-reddit");
    showReddit.simulate("click");
    wrapper.update();
    expect(wrapper.find(".subreddit-container").exists()).toBe(true);
  });

  it("add slide-in class to subreddit-container when open", () => {
    const wrapper = mount(
      <SubRedditList onSelectSubReddit={onSelectSubReddit} />
    );
    const showReddit = wrapper.find(".show-reddit");
    showReddit.simulate("click");
    wrapper.update();
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

  it("add slide-out class to subreddit-container when open", () => {
    const wrapper = mount(
      <SubRedditList onSelectSubReddit={onSelectSubReddit} />
    );
    const showReddit = wrapper.find(".show-reddit");
    showReddit.simulate("click");
    wrapper.update();
    showReddit.simulate("click");
    wrapper.update();
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

  it("on subreddit change should parent to update subReddit", () => {
    const showReddit = wrapper.find(".show-reddit");
    showReddit.simulate("click");
    const subReddit = wrapper.find("option").at(0);
    subReddit.simulate("click");
    expect(onSelectSubReddit).toBeCalled();
  });
});
