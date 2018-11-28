import React from "react";
import Post from "./Post";
import { shallow } from "enzyme";
import "../../enzyme-setup";

describe("Post", () => {
  const post = {
    title: "test",
    author: "Author",
    created_utc: 14532543,
    ups: 10,
    downs: 1000
  };
  it("display title", () => {
    const wrapper = shallow(<Post post={post} />);
    expect(wrapper.html()).toBe(
      '<div class="post-container"><div class="details"><h1 class="title"><a>test</a></h1><span class="author">Posted by: Author</span><span class="posted_time"> at 6/18/1970, 10:19:03 AM</span></div><div class="votes"><span><i class="fa fa-hand-o-up"></i>  <span class="up">10</span></span>        <span><i class="fa fa-hand-o-down"></i>  <span class="down">1000</span></span></div></div>'
    );
  });
});
