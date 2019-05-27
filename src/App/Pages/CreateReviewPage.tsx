import React from "react";
import "../Components/Forms/form.css";

import CreateReviewForm, {
  PostReview
} from "../Components/CreateReview/CreateReviewForm";

import TextField from "../Components/Forms/TextField";
import TextAreaField from "../Components/Forms/TextAreaField";
import SubmitButton from "../Components/Forms/SubmitButton";
import Form from "../Components/Forms/Form";

const CreateReviewPage: React.FC<{}> = () => {
  const initialReviewState: PostReview = {
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    review: ""
  };
  const [review, setReview] = React.useState<PostReview>(initialReviewState);
  const { service, publishReview } = CreateReviewForm();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setReview(prevReview => ({
      ...prevReview,
      [event.target.name]: event.target.value
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    publishReview(review).then(() => setReview(initialReviewState));
  };

  return (
    <div className="container">
      <div className="row">
        <h4 style={{ textAlign: "center" }}>
          We'd love to know your thoughts about the course!
        </h4>
      </div>
      <Form onSubmit={handleFormSubmit}>
        <div className="row input-container">
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <TextField
                label="First Name"
                name="firstName"
                value={review.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <TextField
                label="Last name"
                name="lastName"
                value={review.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <TextField
                type="email"
                label="Email"
                name="email"
                value={review.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <TextField
                label="Course title"
                name="course"
                value={review.course}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <TextAreaField
                label="Tell us your thoughts about your experience"
                name="review"
                value={review.review}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-xs-12">
            <SubmitButton>Send</SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateReviewPage;
