import React from "react";
import { Link } from "react-router-dom";
import StarMeter from "./StarMeter";

const ActivityCard = ({ reviewData, ...rest }) => {
  return (
    <Link to={`/products/${reviewData.productID._id}`}>
      <div className="flex border-t border-r h-32 w-full rounded-md shadow-md  hover:shadow-lg transition overflow-hidden group">
        {/* Product Image */}
        <div
          className="hidden sm:flex h-32 w-32 bg-white transition group-hover:bg-gray-50 border-r flex-shrink-0"
          style={{
            backgroundImage: `url('${
              reviewData && reviewData.productID.images[0]
            }')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Body */}
        <div className="p-5 py-3 flex-grow flex-col flex justify-between group-hover:bg-gray-50 transition">
          <div>
            {/* Upper Part */}
            <div className="flex mb-1 space-x-5 justify-between">
              <div className="font-bold text-lg group-hover:text-primary transition">
                {reviewData
                  ? reviewData.productID.name
                  : "Product Name Not Found"}
              </div>
              <div>
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
            {/* Written Review */}
            <p className="text-gray-600 text-sm">
              {reviewData && reviewData.review}
            </p>
          </div>
          <p className="text-gray-400 text-xs">
            {reviewData && new Date(reviewData.updated).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ActivityCardSkeleton = () => {
  return (
    <div className="flex border h-32 w-full rounded-md shadow-md overflow-hidden select-none">
      {/* Product Image */}
      <div
        className="hidden sm:flex h-32 w-32 bg-gray-400 flex-shrink-0 animate-pulse"
        style={{
          animationDuration: "1s",
        }}
      ></div>
      {/* Body */}
      <div className="p-5 py-3 flex-grow flex-col flex justify-between">
        <div>
          {/* Upper Part */}
          <div className="flex mb-1 space-x-5 items-center justify-between">
            <div
              className="font-bold text-lg bg-gray-400 rounded text-gray-400 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "0.2s",
              }}
            >
              Product Name
            </div>
            <div
              className="flex items-center space-x-1 animate-pulse"
              style={{
                animationDuration: "1s",
                animationDelay: "0.4s",
              }}
            >
              <StarMeter iconSize="1.2em" />
              <span className="text-xs text-gray-200 bg-gray-200 rounded">
                00
              </span>
            </div>
          </div>
          {/* Written Review */}
          <div className="flex flex-col space-y-1">
            <p
              className="animate-pulse text-gray-200 text-sm bg-gray-200 w-8/12 rounded h-4"
              style={{
                animationDuration: "1s",
                animationDelay: "0.4s",
              }}
            >
              -
            </p>
            <p
              className="animate-pulse text-gray-200 text-sm bg-gray-200 w-5/12 rounded h-4"
              style={{
                animationDuration: "1s",
                animationDelay: "0.6s",
              }}
            >
              -
            </p>
          </div>
        </div>
        <p
          className="text-gray-200 text-xs bg-gray-200 animate-pulse h-3 w-3/12 rounded"
          style={{
            animationDuration: "1s",
            animationDelay: "0.8s",
          }}
        >
          The date today
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
