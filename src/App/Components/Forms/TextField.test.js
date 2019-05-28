import React from "react";
import { mount, shallow } from "enzyme";

import TextField from "./TextField";

describe("<TextField />", () => {
  let props, wrapper, input, value, label, name, type;

  beforeEach(() => {
    props = {
      type: "text",
      name: "first_name",
      label: "First Name",
      value: "Test",
      onChange: jest.fn()
    };

    wrapper = mount(<TextField {...props} />);
    type = wrapper.find("type");
    label = wrapper.find("label");
    input = wrapper.find("input");
    value = wrapper.find("value");
    name = wrapper.find("name");
  });

  it("renders text input with label", () => {
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual("First Name");

    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("first_name");
    expect(input.prop("value")).toEqual("Test");
  });
});
