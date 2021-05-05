import React from "react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

export default function StarMeter({
  rating = 0,
  iconSize = "1em",
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
        <IconContext.Provider value={{ size: iconSize }}>
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
              <div className={`flex w-max ${shadeClass}`}>
                {shadeIcon}
                {shadeIcon}
                {shadeIcon}
                {shadeIcon}
                {shadeIcon}
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}
