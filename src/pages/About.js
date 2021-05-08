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
          <div className="text-gray-800  mx-auto max-w-6xl flex-grow flex flex-col items-center pt-16 px-2 sm:px-8 pb-24">
            <h2 className="font-extrabold text-5xl m-8">Meet the Team</h2>
            {/* Grids of the people */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full p-5 px-20 sm:px-5">
              <TeamMember name="Carlo Taleon" title="Lead Developer" />
              <TeamMember name="CJ Rubinos" title="Front-End Developer" />
              <TeamMember name="Jiezel Maglalang" title="UI/UX Designer" />
              <TeamMember
                name="Gene Caleb Carbonilla"
                title="Data Specialist"
              />
              <TeamMember name="Xyphrus Von Keith Caguan" title="UX Designer" />
              <TeamMember
                name="Zhyray Remigio"
                title="Documentation Specialist"
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/documentation_specialist.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TeamMember = ({ name, title, imageSource, ...rest }) => {
  return (
    <div className="flex flex-col h-96">
      <div className="w-full flex-grow overflow-hidden relative">
        {/* Background */}
        <div className="absolute bottom-0 w-full h-5/6 bg-gradient-to-tl from-primary to-yellow-300"></div>
        {/* Image */}
        <div
          className="w-full h-full absolute"
          style={{
            backgroundImage: `url(${imageSource})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="flex flex-col space-y-2 pt-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="uppercase text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default About;
