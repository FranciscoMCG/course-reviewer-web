import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import ReviewsListPage from "./ReviewsListPage";

describe("<ReviewsListPage />", () => {
  const wrapper = shallow(<ReviewsListPage />);
  it("should contain 1 h1 element", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
  it("h1 contains correct text", () => {
    expect(wrapper.find("h1").text()).toBe("Reviews received");
  });
});
