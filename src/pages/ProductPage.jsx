import React, { useEffect, useState } from "react";

// Context API
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// Services
import { getOneProductAndReviews } from "../services/restServices";

// Components
import PageContainer from "../components/PageContainer";
import ProductPageHeader, {
  ProductPageHeaderSkeleton,
} from "../components/ProductPage/ProductPageHeader";
import ProductPageStats, {
  ProductPageStatsSkeleton,
} from "../components/ProductPage/ProductPageStats";
import ProductReviews from "../components/ProductPage/ProductReviews";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [productRatings, setProductRatings] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleChangeImage(imageIndex) {
    setCurrentImageIndex(imageIndex);
  }

  async function fetchData() {
    const result = await getOneProductAndReviews(slug);
    setProduct(result.product);
    setProductRatings(result.productRatings);
  }

  useEffect(() => {
    const unsubscribe = fetchData(); //subscribe
    return unsubscribe; //unsubscribe
  }, [product, slug]);

  return (
    <PageContainer className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Container */}
        {product ? (
          <>
            <ProductPageHeader
              product={product}
              handleChangeImage={handleChangeImage}
              currentImageIndex={currentImageIndex}
            />
            <ProductPageStats productData={product} />
          </>
        ) : (
          <>
            <ProductPageHeaderSkeleton />
            <ProductPageStatsSkeleton />
          </>
        )}
      </div>

      <ProductReviews data={productRatings} />
    </PageContainer>
  );
};

export default ProductPage;
