import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import NotFoundPage from "./NotFoundPage";
import { isRegExp } from "util";

describe("<NotFoundPage/ >", () => {
  it("should render component", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
