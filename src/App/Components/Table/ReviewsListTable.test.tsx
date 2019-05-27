import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import ReviewsListTable from "./ReviewsListTable";

describe("<ReviewsListTable />", () => {
  it("should render component", () => {
    const wrapper = shallow(<ReviewsListTable />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("renders empty message as table cell if there is no data", () => {
    const headers = [
      { header: "First Name" },
      { header: "Last Name" },
      { header: "Email" },
      { header: "Course" },
      { header: "Review" }
    ];

    const container = shallow(<ReviewsListTable reviews={[]} />);
    const table = container.find("table");
    expect(table).toHaveLength(1);
    const thead = table.find("thead");
    expect(thead).toHaveLength(1);
    const tableHeaders = thead.find("th");
    expect(tableHeaders).toHaveLength(headers.length);
    const tbody = table.find("tbody");
    expect(tbody).toHaveLength(1);
  });
});
