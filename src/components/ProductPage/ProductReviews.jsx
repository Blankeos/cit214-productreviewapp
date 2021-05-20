import React, { useState } from "react";

// ContextAPI & Hooks
import { Link } from "react-router-dom";

// Components
import StarMeter from "../StarMeter";

// Icons
import DefaultPhoto from "./DefaultPhoto";

const ProductReviews = ({ data, ...rest }) => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex flex-col items-center text-gray-600 space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-700">
          Ratings & Reviews
        </h2>
        {/* List starts here... */}
        <div className="flex flex-col w-full max-w-3xl gap-5">
          {data &&
            data.map((reviewData) => {
              return <ReviewCard reviewData={reviewData} />;
            })}
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ reviewData, ...rest }) => {
  return (
    <div
      className="flex flex-col w-full rounded-md shadow-md overflow-hidden border-t border-l border-r transition-height"
      style={{
        minHeight: "11rem",
      }}
    >
      {/* <div>{JSON.stringify(reviewData)}</div> */}
      <div className="flex p-3 items-center space-x-3">
        {/* Product Image */}
        <div
          className="overflow-hidden sm:flex h-16 w-16 bg-gray-300 flex-shrink-0 rounded-full"
          style={{
            backgroundImage: `url('${
              reviewData &&
              reviewData.user[0].photoURL &&
              reviewData.user[0].photoURL
            }')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {reviewData && !reviewData.user[0].photoURL && (
            <DefaultPhoto className="bg-primary text-white" />
          )}
        </div>
        {/* Name and Rating */}
        <div className="flex flex-col space-y-0.5">
          <div className="font-bold text-lg">
            {reviewData && reviewData.user[0].displayName
              ? reviewData.user[0].displayName
              : "Display Name Not Found"}
          </div>
          <div className="flex items-center space-x-1">
            <StarMeter
              rating={reviewData ? reviewData.rating : 0}
              iconSize="1.2em"
            />
            <span className="text-xs text-gray-400">
              {reviewData ? reviewData.rating : 0}
            </span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="p-5 py-3 flex-grow flex-col flex justify-between border-t">
        <div>
          {/* Written Review */}
          <p className="text-gray-600 text-sm">
            <ShowMoreText
              text={reviewData && reviewData.review}
              charLimit={250}
              buttonClass="text-primary"
            />
          </p>
        </div>
        <p className="text-gray-400 text-xs pt-2">
          {reviewData && new Date(reviewData.updated).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const ShowMoreText = ({ text, charLimit, buttonClass, ...rest }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {text && text.length > charLimit ? (
        <span className={`${active && "flex flex-col"}`}>
          {active ? text : text.slice(0, charLimit).trim() + "..."}
          <button
            onClick={handleClick}
            className={`outline-none focus:outline-none ${buttonClass} ${
              active && "block self-start"
            }`}
          >
            {active ? "Show Less" : "Show More"}
          </button>
        </span>
      ) : (
        text
      )}
    </>
  );
};

export default ProductReviews;
