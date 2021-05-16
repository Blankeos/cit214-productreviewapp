import React from "react";
import StarMeter from "../StarMeter";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";

export default function HorizontalProductCardSkeleton({delayFactor = 0, durationFactor = 1.5, ...props}) {
  return (
    <div className="select-none flex-col sm:flex-row sm:h-64 md:h-52 w-full flex overflow-hidden">
      {/* Image */}
      <div
        className="w-full h-64 sm:h-full sm:w-48 bg-gray-200 flex-shrink-0 animate-pulse flex items-center justify-center border-t border-gray-300"
        style={{
          animationDuration: `${durationFactor}s`,
          animationDelay: `${delayFactor}s)`,        }}
      >
        <AnimatedLoadingIcon size="3em" backFillClass="text-gray-300" />
      </div>
      {/* Body */}
      <div className="p-5 flex flex-col flex-grow justify-between border-t border-gray-200 ">
        <div className="flex space-x-10 justify-between">
          <div className="flex-grow">
            <h3 className="font-bold text-sm sm:text-xl text-gray-300 bg-gray-300 inline rounded select-none animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+0.2}s`,
            }}>
              ProductName
            </h3>
            <div className="flex flex-col space-y-1">
            <p className="text-gray-200 text-xs sm:text-sm w-10/12 bg-gray-200 rounded animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+0.4}s`,
            }}>
              .
            </p>
            <p className="text-gray-200 text-xs sm:text-sm w-7/12 bg-gray-200 rounded animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+0.6}s`,
            }}>
              .
            </p>
            <p className="text-gray-200 text-xs sm:text-sm w-8/12 bg-gray-200 rounded animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+0.8}s`,
            }}>
              .
            </p>
            <p className="text-gray-200 text-xs sm:text-sm w-8/12 bg-gray-200 rounded animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+1}s`,
            }}>
              .
            </p>
            </div>
          </div>
          {/* Button CTA */}
          <div className="h-full flex-shrink-0 flex justify-end">
            <div className="bg-gray-100 h-10 w-10 rounded flex justify-center items-center shadow focus:outline-none outline-none transform transition active:scale-90 hover:scale-110 overflow-hidden focus:ring focus:ring-offset-2 focus:ring-brown-200 radius-active animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+1.2}s`
            }}>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-5 sm:text-sm sm:mt-0 text-gray-200">
          <p className="bg-gray-200 rounded animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+1.4}s`
            }}>18 Reviews</p>
          <div className="flex space-x-1 items-center animate-pulse" style={{
              animationDuration: `${durationFactor}s`,
              animationDelay: `${delayFactor+1.6}s`
            }}>
            <StarMeter iconSize="1.4em" />
            <span className="bg-gray-200 text-gray-200 rounded text-rounded">0.0 (000)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
