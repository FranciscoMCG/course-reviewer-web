import React from "react";
import { Review } from "../../types/types";

const ReviewsListTable = ({ reviews }: any) => (
  <div className="table-wrapper">
    <table className="fl-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Review</th>
        </tr>
      </thead>

      {reviews.map((review: Review) => (
        <tr key={review._id}>
          <td>{review.firstName}</td>
          <td>{review.lastName}</td>
          <td>{review.email}</td>
          <td>{review.course}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default ReviewsListTable;
