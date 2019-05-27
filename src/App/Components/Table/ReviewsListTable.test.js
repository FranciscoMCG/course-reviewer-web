import React from "react";
import { shallow } from "enzyme";

import ReviewsListTable from "./ReviewsListTable";

it("renders empty message as table cell if there is no data", () => {
  const headers = [
    { header: "First Name" },
    { header: "Last Name" },
    { header: "Email" },
    { header: "Course" },
    { header: "Review" }
  ];
  // Shallow render the data table
  const container = shallow(<ReviewsListTable reviews={[]} />);
  // Copy-Paste from previous test:
  // There should be ONLY 1 table element
  const table = container.find("table");
  expect(table).toHaveLength(1);
  // The table should have ONLY 1 thead element
  const thead = table.find("thead");
  expect(thead).toHaveLength(1);
  // The number of th tags should be equal to number of columns
  const tableHeaders = thead.find("th");
  expect(tableHeaders).toHaveLength(headers.length);
  // Each th tag text should equal to column header
  // headers.forEach((th, idx) => {
  //   expect(th.text()).toEqual(headers[idx].header);
  // });
  // The table should have ONLY 1 tbody tag
  const tbody = table.find("tbody");
  expect(tbody).toHaveLength(1);
  // END Copy Paste
  // There should be ONLY one table row
  const row = tbody.find("tr");
  expect(row).toHaveLength(1);
  // The table row should have ONLY one cell
  const cell = row.find("td");
  expect(cell).toHaveLength(1);
  // The cell should have colSpan that is equal to the number of columns
  expect(cell.prop("colSpan")).toEqual(headers.length);
  // Check cell text
  expect(cell.text()).toEqual("There is no data in this table");
});
