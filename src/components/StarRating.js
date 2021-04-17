import { PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = (props) => {
  const [starState, setStarState] = useState(0);

  const starIcon = {
    0: <BsStar className="text-primary" size="2em" />,
    1: <BsStarFill className="text-primary" size="2em" />,
  };

  return (
    <span
      className="p-1 transform transition ease-in-out hover:scale-125"
      onMouseEnter={() => props.mouseEnter(props.starID)}
    >
      {starIcon[starState]}
    </span>
  );
};

const StarRating = (props) => {
  const [stars, setStars] = useState(<Star />);

  const handleStarState = (id) => {
    // return stars.map((star) => {
    //   if (star.starID <= id) star.setStarState(1);
    //   else star.setStarState(0);
    // });
  };

  const initStars = () => {
    setStars(
      [...Array(props.starCount)].map((e, i) => (
        <Star key={i} starID={i} mouseEnter={handleStarState} />
      ))
    );
  };

  useEffect(() => {
    initStars();
  }, []);

  return (
    <div className="flex">
      {props && stars}
      <p></p>
    </div>
  );
};

export default StarRating;
