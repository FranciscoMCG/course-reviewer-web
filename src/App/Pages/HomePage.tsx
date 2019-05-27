import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <h1>Course reviews</h1>
    <div className="col-md-12">
      <div className="button-wrapper btn-container-center">
        <Link to="/reviews" className="link">
          See reviews
        </Link>
        <Link to="/reviews/create-review" className="link">
          Create a review
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;
