import React from "react";

// about the company
// contact us
// social media
// address

const About = () => {
  return (
    <>
      <div className="flex flex-col flex-grow h-full bg-gray-500">
        {/* Header Section */}
        <div className="relative h-96 w-full">
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
        </div>
        {/* Teams Section */}
        <div className="h-full flex flex-grow bg-gray-100">
          <div className="text-gray-800 bg-yellow-100 mx-auto max-w-6xl flex-grow flex flex-col items-center pt-16 px-2 sm:px-8 pb-24">
            <h2 className="font-extrabold text-5xl">Meet the Team</h2>
            {/* Grids of the people */}
            <div className="grid grid-cols-2 gap-10 w-full p-5">
              <div className="bg-brown-100 h-96">asd</div>
              <div className="bg-brown-100 h-96">asd</div>
              <div className="bg-brown-100 h-96">asd</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
