import React from "react";

// Icons
import { SiCoffeescript } from "react-icons/si";

const DefaultPhoto = ({
  size = "1.5em",
  className = "bg-primary text-white",
  ...rest
}) => {
  return (
    <div
      className={`${className} flex w-full h-full items-center justify-center`}
    >
      <SiCoffeescript size={size} />
    </div>
  );
};

export default DefaultPhoto;
