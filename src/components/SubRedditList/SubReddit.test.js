import React from "react";
import SubRedditList from "./SubRedditList";
import { mount } from "enzyme";
import "../../enzyme-setup";

describe("SubRedditList", () => {
  const onSelectSubReddit = jest.fn();

  const wrapper = mount(
    <SubRedditList onSelectSubReddit={onSelectSubReddit} />
  );

  it("on subreddit change should parent to update subReddit", () => {
    const subReddit = wrapper.find("option").at(0);
    subReddit.simulate("click");
    expect(onSelectSubReddit).toBeCalled();
  });
});
