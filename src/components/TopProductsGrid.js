import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalProductCard from "./HorizontalProductCard";
import HorizontalProductCardSkeleton from "./Skeletons/HorizontalProductCardSkeleton";
import { Link } from "react-router-dom";

export default function TopProductsGrid() {
  const [products, setProducts] = useState(null);

  async function fetchData() {
    await axios
      .get("/api/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const results = response.data.map((product) => {
          return {
            ...product,
          };
        });
        setProducts(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, [products]);

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
          <HorizontalProductCardSkeleton delayFactor={2.8} />
          <HorizontalProductCardSkeleton delayFactor={4.1} />
          <HorizontalProductCardSkeleton delayFactor={6.7} />
          <HorizontalProductCardSkeleton delayFactor={8.8} />
        </>
      )}
    </div>
  );
}
