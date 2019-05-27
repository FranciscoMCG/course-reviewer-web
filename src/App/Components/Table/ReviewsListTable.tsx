import React from "react";
import { Review } from "../../types/types";

const headers = ["First Name", "Last Name", "Email", "Course", "Review"];

const ReviewsListTable = ({ reviews }: any) => (
  <div className="table-wrapper">
    <table className="fl-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {reviews.map((review: Review) => (
          <tr key={review._id}>
            <td>{review.firstName}</td>
            <td>{review.lastName}</td>
            <td>{review.email}</td>
            <td>{review.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ReviewsListTable;
