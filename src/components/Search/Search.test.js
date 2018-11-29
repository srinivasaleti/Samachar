import React from "react";
import Search from "./Search";
import { shallow, mount } from "enzyme";
import "../../enzyme-setup";

describe("Search", () => {
  describe("render the input value", () => {
    it("to be empty when clearSearchValue is true", () => {
      const props = { clearSearchValue: true };
      const wrapper = shallow(<Search {...props} />)
        .find("input")
        .render();
      expect(wrapper[0].attribs.value).toEqual("");
    });

    it("to same as state value when clearSearchValue is false", () => {
      const props = { clearSearchValue: false };
      const wrapper = shallow(<Search {...props} />);
      wrapper.setState({
        value: "test"
      });
      const rendered = wrapper.find("input").render();
      expect(rendered[0].attribs.value).toEqual("test");
    });
  });

  describe("trigger callback event", () => {
    it("should call the onSearch method", () => {
      const mock = jest.fn();
      const props = { clearSearchValue: false, onSearch: mock };
      const wrapper = shallow(<Search {...props} />);
      wrapper.simulate("change", { target: { value: "test" } });
      expect(mock).toBeCalled();
      expect(wrapper.state().value).toBe("test");
    });
  });
});
