import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarMeter({ rating = 0, ...rest }) {
  const ratingPercent = String((rating / 5) * 100) + "%";
  return (
    <>
      {/* Stars */}
      <div className="flex">
        <div className="relative flex text-gray-200 self-start">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          {/* Stars Inner */}
          <div
            className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
            style={{ width: ratingPercent }}
          >
            <div className="text-primary flex w-24">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
