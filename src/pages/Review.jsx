import React from "react";
import { Helmet } from "react-helmet";
import ReviewForm from "../components/ReviewForm.js";
// input: product drop-down / product search
// input: 5 star-rating
// input: optional review (text-area)
// input: submit review (button)
// product selected image (at the side)
// depending on the slug of the api, the product is automatically populated
// "Your product is not here? Add a new product." button
// (optional) the age of the reviewer (dont wanna do it lmao)

const Review = () => {
  return (
    <>
      <Helmet>
        <title>Cafe.ly | Review</title>
        <meta name="title" content="Cafe.ly | Review" />
        <meta name="description" content="Post a new review on Cafe.ly" />
      </Helmet>

      <div className="mt-10">
        <ReviewForm />
      </div>
    </>
  );
};

export default Review;
