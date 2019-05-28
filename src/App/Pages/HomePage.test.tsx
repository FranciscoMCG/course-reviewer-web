import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import HomePage from "./HomePage";

describe("<HomePage/ >", () => {
  const wrapper = shallow(<HomePage />);
  it("should contain 1 h1 element", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("h1 contains correct text", () => {
    expect(wrapper.find("h1").text()).toBe("Course reviews");
  });
  it("should render component", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
