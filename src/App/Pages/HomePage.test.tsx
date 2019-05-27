import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import HomePage from "./HomePage";

describe("<HomePage/ >", () => {
  const wrapper = shallow(<HomePage />);
  it("should contain 1 h1 element", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("should render component", () => {
    const wrapper = shallow(<HomePage />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
