import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`/api/products/${slug}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <PageContainer className="bg-purple-200">
      <div className="max-w-6xl mx-auto bg-purple-300">
        <div className="flex bg-red-500">
          <div className="w-96 h-96 bg-gray-300 overflow-hidden">
            {product.images ? (
              <img
                className="bg-gray-300 object-center object-cover w-full h-96"
                src={product.images[0]}
                alt="Product"
              ></img>
            ) : (
              "Loading Image..."
            )}
          </div>
          <div className="flex flex-col">
            <div>Product name</div>
            <div>Product Description</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductPage;
