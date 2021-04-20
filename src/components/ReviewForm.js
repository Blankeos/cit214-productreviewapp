import React, { useState } from "react";
import StarRating from "./StarRating";
import { MdRateReview } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiLoader4Fill, RiLoader5Fill } from "react-icons/ri";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-6xl mx-auto px-3 md:px-8">
      <form className="overflow-hidden bg-white shadow-xl px-6 py-6 rounded-2xl border border-gray-100 flex flex-col space-y-3 col-span-2">
        <h2 className="flex font-bold text-gray-600 space-x-2 text-2xl mb-5">
          <MdRateReview className="relative transform translate-y-1.5 text-primary" />
          <span>Review</span>
        </h2>
        <h2 className="text-xl text-gray-600">Product</h2>
        <input
          className="border border-gray-300 rounded-sm p-2"
          placeholder="Enter product name"
          onChange={(event) => handleChange(event, "productName")}
        />
        <h2 className="text-xl text-gray-600">Rating</h2>
        <StarRating starCount={5} />
        <h2 className="text-xl text-gray-600">Review</h2>
        <textarea
          className="border border-gray-300 rounded-sm p-2 h-36 max-h-48"
          style={{ minHeight: "9rem" }}
          placeholder="Optional..."
          onChange={(event) => handleChange(event, "productReview")}
        />
        <div>
          <button className="default-btn" type="submit" onClick={submitReview}>
            Submit Review
          </button>
        </div>
      </form>

      <div className="bg-white flex flex-col justify-start items-center p-6 col-span-1 rounded-2xl border border-gray-100 shadow-xl">
        <div
          className="relative bg-yellow-400 animate-pulse w-56 h-56 rounded-lg flex justify-center items-center"
          style={{ animationDelay: "0.5s" }}
        >
          <RiLoader4Fill
            size="3em"
            className="absolute animate-spin text-yellow-200"
          />
          <RiLoader5Fill
            size="3em"
            className="absolute animate-spin text-white"
          />
        </div>
        <div
          className="mt-5 w-8/12 h-8 bg-primary rounded-lg animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="mt-3 w-5/12 h-3 bg-yellow-200 rounded-lg animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="mt-3 w-6/12 h-3 bg-yellow-200 rounded-lg animate-pulse"
          style={{ animationDelay: "1.6s" }}
        ></div>
        <div
          className="mt-3 w-5/12 h-3 bg-yellow-200 rounded-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="mt-3 w-6/12 h-3 bg-yellow-200 rounded-lg animate-pulse"
          style={{ animationDelay: "2.4s" }}
        ></div>
        {/* <h2 className="mt-5">Product Name</h2> */}
      </div>
    </div>
  );
};

export default ReviewForm;
