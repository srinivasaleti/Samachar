import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import "../../enzyme-setup";

describe("App", () => {
  const wrapper = shallow(<App />);
  it("Renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
