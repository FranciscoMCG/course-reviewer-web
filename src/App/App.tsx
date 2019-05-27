import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

import NotFound from "./NotFound";
import ReviewsListPage from "./Pages/ReviewsListPage";
import CreateReviewPage from "./Pages/CreateReviewPage";
import HomePage from "./Pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reviews" component={ReviewsListPage} />
        <Route path="/reviews/create-review" component={CreateReviewPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
