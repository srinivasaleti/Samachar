import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import "../../enzyme-setup";

describe("App", () => {
  const news = { data: ["a1", "b1", "c1"] };
  const sports = { data: ["a2", "b2", "c2"] };

  function fetchPosts(posts) {
    fetch = jest.fn(() => {
      return Promise.resolve({
        json: function() {
          return posts;
        }
      });
    });
  }

  const wrapper = shallow(<App />);
  it("Renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe("Update state", () => {
    it("with news", async () => {
      fetchPosts(news);
      const wrapper = await shallow(<App />);
      await wrapper.instance().updatePosts("news");
      expect(wrapper.state("posts")).toBe(news.data);
    });

    it("with sports", async () => {
      fetchPosts(sports);
      const wrapper = await shallow(<App />);
      await wrapper.instance().updatePosts("sports");
      expect(wrapper.state("posts")).toBe(sports.data);
    });
  });
  it("after component mounts state should update with news", () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().updatePosts = mock;
    wrapper.instance().componentDidMount();
    expect(mock).toBeCalledWith("news");
  });

  it("renders posts list", async () => {
    fetchPosts(news);
    const wrapper = await mount(<App />);
    await wrapper.instance().updatePosts("news");
    wrapper.update();
    expect(wrapper.find("PostList").props()).toEqual({ posts: news.data });
  });

  it("update posts based on subreddit", () => {
    fetchPosts(sports);
    const wrapper = mount(<App />);
    const mock = jest.fn();
    const subReddit = wrapper.find("select");
    const event = { target: { value: "sports" } };
    wrapper.instance().updatePosts = mock;
    subReddit.simulate("change", event);
    expect(mock).toBeCalledWith("sports");
  });
});
