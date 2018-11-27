import React from "react";
import App from "./App";
import { mount } from "enzyme";
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

  const wrapper = mount(<App />);
  it("Renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("update the state with posts", async () => {
    const wrapper = await mount(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state("posts")).toBe(posts.data);
  });
});
