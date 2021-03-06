import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// Icons
import { AiOutlineArrowDown } from "react-icons/ai";
import { CgMouse } from "react-icons/cg";
import CafelyLogo1 from "../assets/imgs/cafely-graphic-logo.svg";

// Components
import TopProductsGrid from "../components/TopProductsGrid";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cafe.ly | Coffee Review Site</title>
        <meta name="title" content="Cafe.ly | Coffee Review Site" />
        <meta
          name="description"
          content="User Reviews and Recommendations of Best Tasting Coffee at Cafe.ly. Defining the best coffee experience. In culture, in taste!"
        />
      </Helmet>
      <div className="flex flex-col flex-grow h-full overflow-hidden">
        {/* Hero Section */}
        <div
          className="absolute w-full mx-auto overflow-hidden"
          style={{
            height: "26rem",
          }}
        >
          {/* Coffee image */}
          <div
            className="absolute w-full h-full bg-gray-800"
            style={{
              backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              transform: "scaleX(-1)",
              WebkitTransform: "scaleX(-1)",
            }}
          ></div>
          {/* Black opaque covering the bg image */}
          <div className="absolute bg-gradient-to-bl from-gray-700 to-darkGray w-full h-full opacity-60"></div>
          <div className="flex mx-auto max-w-4xl h-full relative">
            <div className="p-10 pr-16 py-20 h-full text-white relative">
              <div className="">
                <motion.h1
                  initial={{ x: "-500", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 1, stiffness: 120 }}
                  className="text-4xl font-black text-yellow-400"
                >
                  What's the best for you?
                </motion.h1>
                <motion.p
                  initial={{ x: "-100vw", opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  className="mt-5 mb-8 font-light text-xl"
                >
                  ???{" "}
                  <i>
                    Defining the best coffee experience. In culture, in taste.
                  </i>
                </motion.p>
                {/* Browse now button */}
                <motion.button
                  initial={{ y: 500, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", duration: 2 },
                  }}
                  transition={{ type: "spring" }}
                  whileHover={{
                    transition: { duration: 1, type: "spring" },
                    scale: 1.08,
                  }}
                  className="flex flex-start cursor-pointer outline-none focus:outline-none"
                >
                  <ScrollLink
                    to="browse"
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-90}
                    className="text-sm animate-bounce flex space-x-1 items-center outline-none focus:outline-none"
                  >
                    <CgMouse size="1.3em" />
                    <span>Browse Now</span>
                    <AiOutlineArrowDown
                      className="transform translate-x-1"
                      size="1.3em"
                    />
                  </ScrollLink>
                </motion.button>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative z-10 hidden sm:block w-96 transform sm:-translate-x-8">
              <div className="animate-pulse absolute transform translate-x-4 -rotate-12 w-96 h-96 bg-primary shadow-md rounded-2xl"></div>
              <img
                src={CafelyLogo1}
                className="absolute transform rotate-12 w-96 h-96 bg-white opacity-90 border-white border-4 shadow rounded-2xl"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="h-12 w-12 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse translate-y-5"
                style={{ animationDelay: "3s" }}
              ></div>
              <div
                className="h-10 w-10 bottom-0 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse -translate-y-7"
                style={{ animationDelay: ".8s" }}
              ></div>
              <div className="h-16 w-16 right-0 top-0 bg-primary absolute rounded-full transform translate-x-4 shadow-md animate-pulse translate-y-10"></div>
            </div>
          </div>
        </div>
        <div className="relative h-96" style={{ zIndex: -100 }}></div>
        {/* Other Sections */}
        <div className="relative z-0 flex flex-col flex-grow h-full">
          {/* Other Sections Starts Here */}
          <div
            name="browse"
            className="bg-white flex-grow h-full rounded-t-3xl pt-16 px-2 sm:px-8 pb-24"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-gray-800">
              {/* Primary Left Bar */}
              <div className="col-span-full lg:col-span-2">
                <h2 className="font-bold text-xl my-5">
                  ???? Top Rated Products Today
                </h2>
                <div className="shadow-md  rounded-2xl border-t border-l border-r border-gray-100 overflow-hidden">
                  <TopProductsGrid />
                </div>
              </div>
              {/* Side Bar */}
              <div className="hidden lg:flex lg:flex-col lg:col-span-1">
                {/* Latest Story */}
                <h2 className="font-bold text-xl my-5">???? Latest Story</h2>
                <a
                  href="https://www.globenewswire.com/news-release/2021/05/03/2221241/0/en/Wawa-s-Free-Coffee-Tuesday-Offer-for-Rewards-Members-Returns-this-May-with-Enhancements.html"
                  target="_blank"
                >
                  <div className="shadow-xl rounded-xl border border-gray-100 flex justify-between overflow-hidden">
                    <div className="h-full w-full pl-4 py-4 pr-2 text-sm">
                      Wawa???s ???Free Coffee Tuesday??? Offer for Rewards Members
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
                <h2 className="font-bold text-xl my-5 mt-10">???? Newsletter</h2>
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
                      Get the best new coffee products in your inbox, every day
                      ????
                    </div>
                    <form className="flex flex-col space-y-2">
                      <input
                        className="border w-full p-3 rounded inpfield-transition"
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
    </>
  );
};

export default Home;
