import React from "react";
import Post from "./Post";
import { shallow } from "enzyme";
import "../../enzyme-setup";

describe("Post", () => {
  it("display title", () => {
    const wrapper = shallow(<Post post={{ title: "test" }} />);
    expect(wrapper.html()).toBe("<li>test</li>");
  });
});
