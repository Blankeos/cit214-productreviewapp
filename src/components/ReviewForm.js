import React, { useState } from "react";
import StarRating from "./StarRating";
import { MdRateReview } from "react-icons/md";
import AnimatedLoadingIcon from "./AnimatedLoadingIcon";

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:max-w-6xl mx-auto px-3 lg:px-8">
      <form className="overflow-hidden bg-white shadow-xl px-6 py-6 rounded-2xl border border-gray-100 flex flex-col space-y-3 col-span-1 lg:col-span-2">
        <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-5">
          <MdRateReview className="relative transform translate-y-1.5 text-primary" />
          <span>Review</span>
        </h2>
        <h2 className="text-xl text-gray-600">Product</h2>
        <input
          className="border border-gray-300 rounded-sm p-2 inpfield-transition"
          placeholder="Enter product name"
          onChange={(event) => handleChange(event, "productName")}
        />
        <h2 className="text-xl text-gray-600">Rating</h2>
        <StarRating starCount={5} />
        <h2 className="text-xl text-gray-600">Review</h2>
        <textarea
          className="border border-gray-300 rounded-sm p-2 h-36 max-h-48 inpfield-transition"
          style={{ minHeight: "9rem" }}
          placeholder="Describe your experience."
          onChange={(event) => handleChange(event, "productReview")}
        />
        <div>
          <button className="default-btn" type="submit" onClick={submitReview}>
            Post My Review
          </button>
        </div>
      </form>

      <div className="flex flex-row col-span-1 order-first lg:order-last lg:flex-col">
        <div className="overflow-hidden space-x-4 sm:w-full md:w-8/12 lg:w-full lg:flex-col lg:space-y-4 lg:space-x-0 lg:p-0 lg:pb-6 lg:items-center bg-white flex flex-row p-4 rounded-2xl border border-gray-100 shadow-xl">
          <div
            className="relative rounded-xl lg:rounded-none flex-shrink-0 bg-yellow-400 animate-pulse w-32 h-32 lg:w-full lg:h-64 md:w-56 md:h-56 flex justify-center items-center"
            style={{ animationDelay: "0.5s" }}
          >
            <AnimatedLoadingIcon size="3.5em" />
          </div>

          <div className="flex flex-col w-10/12 space-y-4">
            <div
              className="w-full h-12 bg-yellow-400 rounded-lg animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>

            <div className="w-full space-y-2">
              <div
                className="w-24 h-5 bg-yellow-200 rounded-lg animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
              <div
                className="w-20 h-5 bg-yellow-200 rounded-lg animate-pulse"
                style={{ animationDelay: "1.6s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
