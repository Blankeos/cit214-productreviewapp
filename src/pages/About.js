import React from "react";

// about the company
// contact us
// social media
// address

const About = () => {
  return (
    <>
      <div className="relative h-96 w-full">
        {/* Header Section */}
        <div
          className="bg-gray-700 h-full w-full absolute"
          style={{
            backgroundImage: `url('https://i.giphy.com/media/l0ExdBwqD6YkeEhQ4/giphy.webp')`,
            backgroundSize: "cover",
            filter: "grayscale(100%)",
          }}
        ></div>
        <div className="bg-black opacity-60 w-full h-full absolute"></div>
        <div className="h-full flex items-end max-w-6xl mx-auto">
          <div className="relative px-20 py-10 items-end text-white">
            <div className="absolute w-5 h-8 bg-primary transform -translate-x-10 translate-y-2"></div>
            <h1 className="font-black text-6xl mb-5">
              What is
              <br />
              Cafely?
            </h1>
            <p>Defining the best coffee experience.</p>
          </div>
        </div>
        {/* Teams Section */}
        <div className="text-gray-800 bg-gray-100 max-w-6xl h-96 mx-auto flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-40 mb-10">Meet the Team</h2>
          <div className="flex bg-red-100 mt-10 w-full flex-grow h-full p-10">
            <div className="bg-red-200 w-full h-72"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
