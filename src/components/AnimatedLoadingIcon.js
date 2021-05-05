import React from "react";

import { RiLoader4Fill, RiLoader5Fill } from "react-icons/ri";

const AnimatedLoadingIcon = (props) => {
  return (
    <>
      <RiLoader4Fill
        size={props.size}
        className="absolute animate-spin text-yellow-200"
      />
      <RiLoader5Fill
        size={props.size}
        className="absolute animate-spin text-white"
      />
      <div style={{ width: props.size, height: props.size }}></div>
    </>
  );
};

export default AnimatedLoadingIcon;
