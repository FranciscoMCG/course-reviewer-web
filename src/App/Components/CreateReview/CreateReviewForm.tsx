import { useState } from "react";

import { Service, Review } from "../../types/types";

export type PostReview = Pick<
  Review,
  "_id" | "firstName" | "lastName" | "email" | "phone" | "course" | "review"
>;

const CreateReviewForm = () => {
  const [service, setService] = useState<Service<PostReview>>({
    status: "init"
  });

  const publishReview = (review: PostReview) => {
    setService({ status: "loading" });

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");

    return new Promise((resolve, reject) => {
      fetch("http://localhost:4000/reviews/", {
        method: "POST",
        body: JSON.stringify(review),
        headers
      })
        .then(response => response.json())
        .then(response => {
          setService({ status: "loaded", payload: response });
          resolve(response);
          window.location.pathname = "./reviews";
        })
        .catch(error => {
          setService({ status: "error", error });
          reject(error);
        });
    });
  };

  return {
    service,
    publishReview
  };
};

export default CreateReviewForm;
