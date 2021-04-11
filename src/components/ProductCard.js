import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link>
      <div className="border rounded border-black w-1/4 text-center">
        <h1>{props.productName}</h1>
        <h1>{props.productRating}</h1>
        <h1>{props.productReviews}</h1>
        <h1>{props.productImage}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
