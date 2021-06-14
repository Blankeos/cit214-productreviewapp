import React from "react";

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
            <div className="relative px-20 py-10 items-end text-white overflow-hidden">
              <div className="absolute w-5 h-8 bg-primary transform -translate-x-10 translate-y-2"></div>
              <h1 className="font-black text-5xl md:text-6xl mb-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full p-5 sm:px-20">
              <TeamMember
                name="Carlo Taleon"
                title="Lead Developer"
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/lead_developer.png"
              />
              <TeamMember
                name="CJ Rubinos"
                title="Front-End Developer"
                imageSource={
                  "https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/frontend_developer.png"
                }
                // imageSource="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.18169-9/13873075_119110735197762_7846843027922971199_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFED6FkdEfVpaadL8a5U4yJYibmsADzurFiJuawAPO6sbSABASxqKyBDiHzsG_iJPoiYJUT4TnapWmiLp3BovqV&_nc_ohc=5TNi0bvYbd8AX-iJk-3&_nc_ht=scontent.fceb2-1.fna&oh=de232d9152dfe08ae0eec6761524c1c0&oe=60C328A4"
              />
              <TeamMember
                name="Jiezel Maglalang"
                title="UI/UX Designer"
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/ui_ux_designer.png"
              />
              <TeamMember
                name="Gene Caleb Carbonilla"
                title="Data Specialist"
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/data_specialist.png"
              />
              <TeamMember
                name="Xyphrus Von Keith Caguan"
                title="UX Designer"
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/ux_designer.png"
              />
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
      <div className="w-full flex-grow flex-shrink-0 overflow-hidden relative">
        {/* Background */}
        <div className="absolute bottom-0 w-full h-5/6 bg-gradient-to-tl from-primary to-yellow-300"></div>
        {/* Image */}
        <div
          className="w-full h-full absolute"
          style={{
            backgroundImage: `url(${imageSource})`,
            backgroundPosition: "bottom",
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
