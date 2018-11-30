import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";
import "../../enzyme-setup";

describe("App", () => {
  const posts = {
    data: {
      children: [
        { data: { id: "a", title: "a1" } },
        { data: { id: "b", title: "b1" } },
        { data: { id: "c", title: "c1" } }
      ]
    }
  };

  const props = {
    setSubReddit: jest.fn(),
    fetchPosts: jest.fn(),
    posts
  };

  const wrapper = shallow(<App {...props} />);
  it("renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Update state with news", () => {
    shallow(<App {...props} />);
    expect(props.setSubReddit).toBeCalledWith("news");
    expect(props.fetchPosts).toBeCalledWith("news");
  });

  it("renders posts list", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find("PostList").props()).toEqual({ posts });
  });
});
