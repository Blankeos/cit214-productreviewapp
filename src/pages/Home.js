import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import HorizontalProductCard from "../components/HorizontalProductCard";
import PageContainer from "../components/PageContainer";

import CafelyLogo1 from "../assets/imgs/cafely-graphic-logo.svg";
import CafelyLogo2 from "../assets/imgs/cafely-graphic-logotype.svg";
// Goal is to have a hero (banner)
// product feature component (display featured products)
// "join our community" button
// "sign up for newsletter" button

const Home = () => {
  return (
    <div className="flex flex-col flex-grow h-full overflow-hidden">
      {/* Hero Section */}
      <div className="bg-darkGray w-full h-96 mx-auto">
        <div className="flex mx-auto max-w-4xl h-full relative">
          <div className="p-10 pr-16 py-20 h-full text-white relative">
            <div className="">
              <h1 className="text-4xl font-black">What's the best for you?</h1>
              <p className="mt-5 mb-8 font-light text-xl">
                <i>
                  Defining the best coffee experience. In culture, in taste.
                </i>
              </p>
              <button className="text-sm animate-bounce default-btn flex items-center justify-center">
                <span>Browse Now</span>
                <AiOutlineArrowDown
                  className="transform translate-x-1"
                  size="1.3em"
                />
              </button>
            </div>
          </div>
          <div className="hidden sm:block w-96 transform sm:-translate-x-8">
            <div className="animate-pulse absolute transform translate-x-4 -rotate-12 w-96 h-96 bg-primary shadow-md rounded-2xl"></div>
            <img
              src={CafelyLogo1}
              className="absolute transform rotate-12 w-96 h-96 bg-white opacity-90 border-white border-4 shadow rounded-2xl"
              style={{ animationDelay: "2s" }}
            />
            <div
              class="h-12 w-12 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse translate-y-5"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              class="h-10 w-10 bottom-0 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse -translate-y-7"
              style={{ animationDelay: ".8s" }}
            ></div>
            <div class="h-16 w-16 right-0 top-0 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse translate-y-10"></div>
          </div>
          {/* <div className="absolute flex justify-end w-full bottom-0 right-0 mb-10 gap-5">
            <div className="rounded-lg bg-primary w-44 h-72"></div>
            <div className="rounded-lg bg-primary w-44 h-72"></div>
          </div> */}
        </div>
      </div>
      {/* Other Sections */}
      <div className="flex flex-col flex-grow h-full bg-darkGray">
        {/* Other Sections Starts Here */}
        <div className="bg-white flex-grow h-full rounded-t-3xl pt-16 px-2 sm:px-8 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-gray-800">
            {/* Primary Left Bar */}
            <div className="col-span-full lg:col-span-2">
              <h2 className="font-bold text-xl my-5">
                🔥 Top Rated Products Today
              </h2>
              <div className="shadow-md rounded-2xl border border-gray-100 overflow-hidden">
                <HorizontalProductCard />
                <HorizontalProductCard />
                <HorizontalProductCard />
                <HorizontalProductCard />
                <HorizontalProductCard />
              </div>
            </div>
            {/* Side Bar */}
            <div className="hidden lg:flex lg:flex-col lg:col-span-1">
              {/* Latest Story */}
              <h2 className="font-bold text-xl my-5">📄 Latest Story</h2>
              <a href="https://www.globenewswire.com/news-release/2021/05/03/2221241/0/en/Wawa-s-Free-Coffee-Tuesday-Offer-for-Rewards-Members-Returns-this-May-with-Enhancements.html">
                <div className="shadow-xl rounded-xl border border-gray-100 flex justify-between overflow-hidden">
                  <div className="h-full w-full pl-4 py-4 pr-2 text-sm">
                    Wawa’s “Free Coffee Tuesday” Offer for Rewards Members
                    Returns this May with Enhancements
                  </div>
                  <div className="min-h-full w-28 flex-shrink-0">
                    <img
                      alt="Latest Story"
                      className="object-cover w-full h-full"
                      src="https://ml.globenewswire.com/Resource/Download/45f0eb60-9290-40f4-b9e5-0bb0b842747e?size=3"
                    />
                  </div>
                </div>
              </a>
              {/* NewsLetter */}
              <h2 className="font-bold text-xl my-5 mt-10">📰 Newsletter</h2>
              <div className="shadow-xl rounded-xl border border-gray-100 flex flex-col overflow-hidden text-sm">
                {/* Picture */}
                <div
                  className="h-44 w-full"
                  style={{
                    backgroundImage: `url("https://static.wikia.nocookie.net/5ef5d627-c162-4309-ab47-e09f6b411883")`,
                    backgroundSize: "cover",
                  }}
                ></div>
                {/* Words and Form */}
                <div className="p-5 flex-col space-y-4">
                  <div>
                    Get the best new coffee products in your inbox, every day 👇
                  </div>
                  <form className="flex flex-col space-y-2">
                    <input
                      className="border w-full p-3 rounded"
                      placeholder="Your email"
                    ></input>
                    <button className="select-none bg-primary p-3 rounded text-white">
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
