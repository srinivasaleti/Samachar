import React from "react";
import PostList from "./PostList";
import { shallow, mount } from "enzyme";
import "../../enzyme-setup";

describe("PostList", () => {
  describe("No posts", () => {
    it("do not render", () => {
      const wrapper = shallow(<PostList posts={{}} />);
      expect(wrapper.html()).toBe(null);
    });
  });

  describe("Post Available", () => {
    it("render empty div when childrens not available", () => {
      const posts = { children: [] };
      const wrapper = shallow(<PostList posts={posts} />);
      expect(wrapper.html()).toBe('<div class="post-list-container"></div>');
    });
    it("renders post when childrens available", () => {
      const posts = {
        children: [
          { data: { title: "A", id: "A" } },
          { data: { title: "B", id: "B" } }
        ]
      };
      const wrapper = shallow(<PostList posts={posts} />);
      const posts_ = wrapper.find("Post");
      expect(posts_.at(0).props()).toEqual({
        post: posts.children[0].data
      });
      expect(posts_.at(1).props()).toEqual({
        post: posts.children[1].data
      });
    });
  });
});
