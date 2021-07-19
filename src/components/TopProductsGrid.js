import React, { useState, useEffect } from "react";

// Components
import HorizontalProductCard from "./HorizontalProductCard";
import HorizontalProductCardSkeleton from "./Skeletons/HorizontalProductCardSkeleton";

// Services
import { getAllProducts } from "../services/restServices";
import { useMediaQuery } from "react-responsive";

export default function TopProductsGrid() {
  const [products, setProducts] = useState(null);
  const [maxTitleChar, setMaxTitleChar] = useState(40);

  const isSM = useMediaQuery({ query: "(min-width: 640px)" });
  const isMD = useMediaQuery({ query: "(min-width: 768px)" });
  const isLG = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXL = useMediaQuery({ query: "(min-width: 1280px)" });

  // For making the text overflow, responsive
  useEffect(() => {
    if (isXL) {
      setMaxTitleChar(38);
      console.log("xl");
    } else if (isLG) {
      setMaxTitleChar(28);
      console.log("lg");
    } else if (isMD) {
      setMaxTitleChar(35);
      console.log("md");
    } else if (isSM) {
      setMaxTitleChar(25);
      console.log("sm");
    } else {
      setMaxTitleChar(1000);
    }
  }, [isSM, isMD, isLG, isXL]);

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
            <HorizontalProductCard
              key={product._id}
              productData={product}
              maxTitleChar={maxTitleChar}
            />
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
