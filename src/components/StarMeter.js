import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarMeter({
  rating = 0,
  lightClass = "text-gray-200",
  shadeClass = "text-primary",
  shadeIcon = <FaStar />,
  lightIcon = <FaStar />,
  ...rest
}) {
  const ratingPercent = String((rating / 5) * 100) + "%";
  return (
    <>
      {/* Stars */}
      <div className="flex">
        <div className={`relative flex self-start ${lightClass}`}>
          {lightIcon}
          {lightIcon}
          {lightIcon}
          {lightIcon}
          {lightIcon}
          {/* Stars Inner */}
          <div
            className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
            style={{ width: ratingPercent }}
          >
            <div className={`flex w-24 ${shadeClass}`}>
              {shadeIcon}
              {shadeIcon}
              {shadeIcon}
              {shadeIcon}
              {shadeIcon}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
