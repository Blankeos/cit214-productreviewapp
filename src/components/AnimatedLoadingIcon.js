import React from "react";

import { RiLoader4Fill, RiLoader5Fill } from "react-icons/ri";

const AnimatedLoadingIcon = ({
  size = "1em",
  backFillClass = "text-yellow-200",
  ...rest
}) => {
  return (
    <>
      <RiLoader4Fill
        size={size}
        className={`absolute animate-spin ${backFillClass}`}
      />
      <RiLoader5Fill size={size} className="absolute animate-spin text-white" />
      <div style={{ width: size, height: size }}></div>
    </>
  );
};

export default AnimatedLoadingIcon;
