import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div>
      <h1>Product Grid</h1>
      <ProductCard
        productName="Product Name"
        productRating="5 stars"
        productReviews="215 reviews"
        productImage="product image"
      />
      <ProductCard
        productName="Product Name"
        productRating="5 stars"
        productReviews="215 reviews"
        productImage="product image"
      />
      <ProductCard
        productName="Product Name"
        productRating="5 stars"
        productReviews="215 reviews"
        productImage="product image"
      />
    </div>
  );
};

export default ProductGrid;
