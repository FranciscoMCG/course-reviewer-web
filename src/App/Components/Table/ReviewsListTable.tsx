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
        {reviews &&
          reviews.map((review: Review) => (
            <tr key={review._id}>
              <td>{review && review.firstName}</td>
              <td>{review && review.lastName}</td>
              <td>{review && review.email}</td>
              <td>{review && review.course}</td>
              <td>{review && review.review}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default ReviewsListTable;
