import React, { useState } from "react";

const ReviewForm = () => {
  const [state, setState] = useState({
    productName: "",
    productReview: "",
  });

  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const submitReview = () => {
    console.log(state);
  };

  return (
    <div>
      <h1 className="text-2xl">Product</h1>
      <input
        className="border rounded border-black"
        value={state.name}
        onChange={(event) => handleChange(event, "productName")}
      />
      <h1 className="text-2xl">Review</h1>
      <textarea
        className="border rounded border-black"
        value={state.review}
        onChange={(event) => handleChange(event, "productReview")}
      />
      <div>
        <button onClick={submitReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewForm;
