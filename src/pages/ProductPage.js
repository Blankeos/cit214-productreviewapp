import React from "react";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";

const ProductPage = () => {
  const { slug } = useParams();

  return (
    <PageContainer className="bg-purple-200">
      <div className="max-w-6xl mx-auto bg-purple-700">
        {slug ? slug : "Product Not Found"}
      </div>
    </PageContainer>
  );
};

export default ProductPage;
