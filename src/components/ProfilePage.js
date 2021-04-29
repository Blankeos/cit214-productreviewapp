import React from "react";
import ReviewCard from "./ReviewCard";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-36 w-36 rounded-full bg-black mb-5"></div>
      <h1 className="font-bold text-lg mb-5">name</h1>
      <p className="mb-5">profile description</p>
      <div className="flex items-center space-x-20">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">5</h1>
          <h2>Reviews</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">10</h1>
          <h2>Ratings</h2>
        </div>
      </div>
      <h1 className="font-bold text-4xl mt-10">Activity</h1>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ProductPage;
