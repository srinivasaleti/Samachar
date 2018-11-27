import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import "../../enzyme-setup";

describe("App", () => {
  const posts = { data: ["a", "b", "c"] };

  beforeEach(() => {
    fetch = jest.fn(() => {
      return Promise.resolve({
        json: function() {
          return posts;
        }
      });
    });
  });

  const wrapper = shallow(<App />);
  it("Renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("update the state with posts", async () => {
    const wrapper = await shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state("posts")).toBe(posts.data);
  });

  it("renders posts list", async () => {
    const wrapper = await mount(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    expect(wrapper.find("PostList").props()).toEqual({ posts: posts.data });
  });
});
