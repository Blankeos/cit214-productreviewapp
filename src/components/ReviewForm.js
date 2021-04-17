import React, { useState } from "react";
import StarRating from "./StarRating";

const ReviewForm = () => {
  const [state, setState] = useState({
    productName: "",
    productReview: "",
  });

  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submitReview = () => {
    console.log(state);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-16">
      <form className="flex flex-col space-y-3">
        <h2 className="text-2xl">Product</h2>
        <input
          className="border rounded border-black p-2"
          placeholder="Enter product name"
          onChange={(event) => handleChange(event, "productName")}
        />
        <h2 className="text-2xl">Rating</h2>
        <StarRating starCount={5} />
        <h2 className="text-2xl">Review</h2>
        <textarea
          className="border rounded border-black p-2 h-36"
          placeholder="Optional..."
          onChange={(event) => handleChange(event, "productReview")}
        />
        <div>
          <button
            className="shadow-md disabled:opacity-50 border bg-primary px-5 py-2 rounded-full mt-4 text-white transition hover:bg-yellow-400"
            type="submit"
            onClick={submitReview}
          >
            Submit Review
          </button>
        </div>
      </form>

      <div className="bg-purple-600 flex justify-start items-start p-4">
        <div className="bg-blue-300 w-56 h-56 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ReviewForm;
