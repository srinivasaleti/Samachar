import React from "react";
import SubRedditList from "./SubRedditList";
import { mount } from "enzyme";
import "../../enzyme-setup";

describe("SubRedditList", () => {
  const onSelectSubReddit = jest.fn();

  const event = {};

  const wrapper = mount(
    <SubRedditList onSelectSubReddit={onSelectSubReddit} />
  );

  it("on subreddit change should parent to update subReddit", () => {
    const subReddit = wrapper.find("select");
    subReddit.simulate("change");
    expect(onSelectSubReddit).toBeCalled();
  });
});
