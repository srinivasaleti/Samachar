import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import "../../enzyme-setup";

describe("App", () => {
  const news = {
    data: {
      children: [
        { data: { id: "a", title: "a1" } },
        { data: { id: "b", title: "b1" } },
        { data: { id: "c", title: "c1" } }
      ]
    }
  };
  const sports = {
    data: {
      children: [
        { data: { title: "a2" } },
        { data: { title: "b2" } },
        { data: { title: "c2" } }
      ]
    }
  };

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
    const showReddit = wrapper.find(".show-reddit");
    showReddit.simulate("click");
    const subReddit = wrapper.find("option").at(0);
    const event = { target: { value: "sports" } };
    wrapper.instance().updatePosts = mock;
    subReddit.simulate("click", event);
    expect(mock).toBeCalledWith("sports");
  });

  it("clear the previous filtered posts on subreddit", () => {
    fetchPosts(sports);
    const wrapper = mount(<App />);
    const mock = jest.fn();
    const subReddit = wrapper.find("select");
    const event = { target: { value: "sports" } };
    wrapper.instance().updatePosts = mock;
    subReddit.simulate("change", event);
    expect(wrapper.state().filteredPosts.children.length).toBe(0);
    expect(wrapper.state().clearSearchValue).toBe(true);
  });

  describe("search", () => {
    it("get filtered posts bases on value", async () => {
      fetchPosts(news);
      const wrapper = await mount(<App />);
      await wrapper.instance().updatePosts("news");
      wrapper.find("input").simulate("change", { target: { value: "c" } });
      expect(wrapper.state("filteredPosts")).toEqual({
        children: [{ data: { id: "c", title: "c1" } }]
      });
    });

    it("get should get empty when value is invaid", async () => {
      fetchPosts(news);
      const wrapper = await mount(<App />);
      await wrapper.instance().updatePosts("news");
      wrapper.find("input").simulate("change", { target: { value: "blah" } });
      expect(wrapper.state("filteredPosts")).toEqual({
        children: []
      });
    });

    it("get should get empty when value is invaid", async () => {
      fetchPosts(news);
      const wrapper = await mount(<App />);
      await wrapper.instance().updatePosts("news");
      wrapper.find("input").simulate("change", { target: { value: "" } });
      expect(wrapper.state("filteredPosts")).toEqual(news.data);
    });

    it.only("should render all posts when filtered list is empty", async () => {
      fetchPosts(news);
      const wrapper = await mount(<App />);
      await wrapper.instance().updatePosts("news");
      wrapper.find("input").simulate("change", { target: { value: "blah" } });
      // console.log(wrapper.find("PostList").state(), "FDd");
      expect(
        wrapper
          .find("PostList")
          .at(0)
          .props().posts
      ).toEqual(news.data);
    });
  });
});
