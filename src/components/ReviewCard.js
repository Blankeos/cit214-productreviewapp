import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex border h-32 w-2/3 my-5">
      <div className="w-2/12 bg-black"></div>
      <div className="p-5 py-3">
        <div className="flex mb-3 space-x-5 items-center">
          <div className="font-bold text-lg">product name</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
        <p>written review</p>
      </div>
    </div>
  );
};

export default ReviewCard;
