import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating, disabled = false, ...rest }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex space-x-2 items-center">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        let color;
        if (!disabled) {
          if (hover) {
            color =
              ratingValue <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-200";
          } else {
            color =
              ratingValue <= (hover || rating)
                ? "text-primary"
                : "text-gray-200";
          }
        } else {
          color = "text-gray-200 opacity-40";
        }
        return (
          <label
            key={i}
            className="transform transition hover:scale-125 ease-in-out"
          >
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              disabled={disabled}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={
                `${
                  !disabled && "active:text-yellow-300"
                }  cursor-pointer transition ease-in-out ` + color
              }
              size="2.5em"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

// const Star = (props) => {
//   const starIcon = {
//     0: <BsStar className="text-primary" size="2em" />,
//     1: <BsStarFill className="text-primary" size="2em" />,
//   };
//   return (
//     <span
//       className="p-1 transform transition ease-in-out hover:scale-125"
//       onClick={() => props.onClick(props.value)}
//       onMouseEnter={() => props.onHover(props.value)}
//     >
//       {starIcon[props.starState]}
//     </span>
//   );
// };

// const StarRating = (props) => {
//   const [rating, setRating] = useState(0);
//   const [hoverValue, setHoverValue] = useState({
//     hovered: false,
//     value: 0,
//   });

//   const handleClick = (value) => {
//     setRating(value);
//   };
//   const handleHover = (value) => {
//     setHoverValue((prevState) => {
//       return { ...prevState, value: value, hovered: true };
//     });
//   };

//   const handleHoverExit = () => {
//     setHoverValue((prevState) => {
//       return { ...prevState, hovered: false };
//     });
//   };
//   return (
//     <div className="flex items-center">
//       {props && !hoverValue.hovered
//         ? [...Array(props.starCount)].map((e, i) => (
//             <Star
//               key={i}
//               starState={i < rating ? 1 : 0}
//               value={i + 1}
//               onClick={handleClick}
//               onHover={handleHover}
//             />
//           ))
//         : [...Array(props.starCount)].map((e, i) => (
//             <Star
//               key={i}
//               starState={i < hoverValue.value ? 1 : 0}
//               value={i + 1}
//               onClick={handleClick}
//               onHover={handleHover}
//               onHoverExit={handleHoverExit}
//             />
//           ))}
//       <p class="ml-5">{rating}</p>
//     </div>
//   );
// };

export default StarRating;
