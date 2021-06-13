import React, { useEffect, useState } from "react";

// Context API
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// Services
import { getOneProductAndReviews } from "../services/restServices";

// Components
import PageContainer from "../components/PageContainer";
import ProductPageStats from "../components/ProductPage/ProductPageStats";
import ProductReviews from "../components/ProductPage/ProductReviews";

// Icons
import { MdRateReview } from "react-icons/md";

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
        <div
          className="flex w-full h-full flex-col space-y-2 md:flex-row md:space-x-2"
          style={{
            minHeight: "24rem",
          }}
        >
          {/* Image Container */}
          <div className="productpage-image-container">
            {/* Main Image */}
            <div class="relative flex-grow w-full h-full flex-shrink-0">
              {product && (
                <>
                  <div
                    className="opacity-60 hidden md:block absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${
                        product && product.images[currentImageIndex]
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: `blur(5px)`,
                    }}
                  ></div>
                  <img
                    className="relative object-center object-cover md:object-contain h-full w-full"
                    src={product.images[currentImageIndex]}
                    alt="Product"
                  />
                </>
              )}
            </div>
            {/* Other Images */}
            <div className="absolute flex flex-col w-20 h-full">
              {product &&
                product.images.map((imageUrl, i) => (
                  <AltImageButton
                    key={i}
                    imageUrl={imageUrl}
                    onClick={() => handleChangeImage(i)}
                  />
                ))}
            </div>
          </div>
          {/* Product Description Body */}
          <div className="md:w-8/12 p-8 md:p-12 flex flex-col justify-between rounded-md bg-white shadow-md text-sm flex-wrap border">
            <div className="flex flex-col space-y-3">
              <h1 className="font-extrabold text-3xl">
                {product && product.name}
              </h1>
              <p className="">{product && product.description}</p>
            </div>
            <Link to={product && `/review/${product._id}`}>
              <button className="flex items-center space-x-1 bg-primary text-white px-4 py-4 rounded-md mt-8 transform hover:translate-y-1 transition ease-in-out">
                <MdRateReview size="1.2em" />
                <span>Rate This Product</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ProductPageStats productData={product} />
      <ProductReviews data={productRatings} />
    </PageContainer>
  );
};

const AltImageButton = ({ imageUrl, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-20 h-20 shadow-xl overflow-hidden outline-none focus:outline-none"
    >
      <div
        className="w-full h-full transition duration-300 transform ease-in-out opacity-60 hover:opacity-100 hover:scale-110"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </button>
  );
};

export default ProductPage;
