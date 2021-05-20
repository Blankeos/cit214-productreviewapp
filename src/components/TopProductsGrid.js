import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalProductCard from "./HorizontalProductCard";
import HorizontalProductCardSkeleton from "./Skeletons/HorizontalProductCardSkeleton";
import { Link } from "react-router-dom";

// Services
import { getAllProducts } from "../services/restServices";

export default function TopProductsGrid() {
  const [products, setProducts] = useState(null);

  async function fetchData() {
    const results = await getAllProducts(-1);
    setProducts(results);
    console.log(results);
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, []);

  return (
    <div>
      {products ? (
        products.map((product) => {
          return (
            <HorizontalProductCard key={product._id} productData={product} />
          );
        })
      ) : (
        <>
          <HorizontalProductCardSkeleton />
          <HorizontalProductCardSkeleton delayFactor={0.1} />
          <HorizontalProductCardSkeleton delayFactor={0.2} />
          <HorizontalProductCardSkeleton delayFactor={0.3} />
          <HorizontalProductCardSkeleton delayFactor={0.4} />
        </>
      )}
    </div>
  );
}
