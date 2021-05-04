import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

// Goal is to have a hero (banner)
// product feature component (display featured products)
// "join our community" button
// "sign up for newsletter" button

const Home = () => {
  return (
    <div className="flex flex-col flex-grow h-full">
      {/* Hero Section */}
      <div className="bg-darkGray w-full h-96 mx-auto ">
        <div className="p-10 py-20 h-full max-w-4xl mx-auto text-white relative">
          <div className="">
            <h1 className="text-4xl font-black">What's the best for you?</h1>
            <p className="mt-5 mb-8 font-light text-xl">
              <i>In culture, in taste</i>
            </p>
            <button className="text-sm animate-bounce default-btn flex items-center justify-center">
              <span>Browse Now</span>
              <AiOutlineArrowDown
                className="transform translate-x-1"
                size="1.3em"
              />
            </button>
          </div>
          <div className="absolute flex justify-end w-full bottom-0 right-0 mb-10 gap-5">
            ASSSSSSSSSS ASSAASD
            <div className="rounded-lg bg-red-100 w-44 h-72"></div>
            <div className="rounded-lg bg-red-100 w-44 h-72"></div>
          </div>
        </div>
      </div>
      {/* Other Sections */}
      <div className="flex flex-col flex-grow h-full bg-darkGray">
        {/* Other Sections Starts Here */}
        <div className="bg-white flex-grow h-full rounded-t-3xl pt-16 px-8 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-gray-800">
            {/* Primary Left Bar */}
            <div className="col-span-full lg:col-span-2">
              <h2 className="font-bold text-xl my-5">
                🔥 Top Rated Products Today
              </h2>
              <div className="shadow-md rounded-2xl border border-gray-100">
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
              </div>
            </div>
            {/* Side Bar */}
            <div className="hidden lg:flex lg:flex-col lg:col-span-1">
              <h2 className="font-bold text-xl my-5">📄 Latest Story</h2>
              <a href="https://www.globenewswire.com/news-release/2021/05/03/2221241/0/en/Wawa-s-Free-Coffee-Tuesday-Offer-for-Rewards-Members-Returns-this-May-with-Enhancements.html">
                <div className="shadow-xl rounded-xl border border-gray-100 flex justify-between overflow-hidden">
                  <div className="h-full w-full pl-4 py-4 pr-2 text-sm">
                    Wawa’s “Free Coffee Tuesday” Offer for Rewards Members
                    Returns this May with Enhancements
                  </div>
                  <div className="min-h-full w-28 flex-shrink-0">
                    <img
                      className="object-cover w-full h-full"
                      src="https://ml.globenewswire.com/Resource/Download/45f0eb60-9290-40f4-b9e5-0bb0b842747e?size=3"
                    />
                  </div>
                </div>
              </a>
              <h2 className="font-bold text-xl my-5 mt-10">📰 Newsletter</h2>
              <div className="shadow-xl rounded-2xl border border-gray-100">
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
                <p>asdasd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
