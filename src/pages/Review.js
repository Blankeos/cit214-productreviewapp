import React from "react";
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
    <div className="mt-10">
      <h1 className="px-8 text-4xl text-blue-500 md:max-w-6xl mx-auto mb-5">
        Review
      </h1>
      <ReviewForm />
    </div>
  );
};

export default Review;
