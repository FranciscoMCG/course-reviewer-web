import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../Components/Table/table.css";
import { Review, Service } from "../types/types";
import ReviewsListTable from "../Components/Table/ReviewsListTable";

const FetchReviews = () => {
  const [result, setResult] = useState<Service<Review[]>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("http://localhost:4000/reviews/")
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};
const ReviewsListPage: React.FC<{}> = () => {
  const service = FetchReviews();

  return (
    <div>
      <h1>Reviews received</h1>
      {service.status === "loading" && <div>Loading...</div>}
      {service.status === "loaded" && (
        <ReviewsListTable reviews={service.payload} />
      )}
      {service.status === "error" && <div>Something went wrong...</div>}
      <div className="col-md-12">
        <div className="button-wrapper btn-container-center">
          <Link to="/" className="link">
            Return to the home page
          </Link>
          <Link to="/reviews/create-review" className="link">
            Create a review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewsListPage;
