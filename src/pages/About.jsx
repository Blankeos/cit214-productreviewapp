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
              <TeamMember
                name="Carlo Taleon"
                title="Lead Developer"
                imageSource="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/170753804_4249592568426660_2396136441650263141_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEv8XiL6KQkh3YwT6HAVmfjTWnQUnBKrlFNadBScEquUfaIAoBbfLIw80FRWD2ElQAtn2vH3NU8TjGynTzH1ir8&_nc_ohc=1V4tkHtMkgcAX8C-HFJ&_nc_ht=scontent.fceb2-1.fna&oh=63d824ca599fdc236d2abdc3159b7eea&oe=60C3A8AB"
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
                imageSource="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/142299667_240387301011197_6516933063339469195_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGYv4Gk_nB43Fg5VPrwMuzukYCMAvI8PCqRgIwC8jw8KvHp7rNwyO0rjPM6CAnUYar6eg_V-4TkMsl4UWOk-IKo&_nc_ohc=F5yOkeTZHW0AX_jZFm5&_nc_ht=scontent.fceb2-1.fna&oh=52f52266c3c8d2db1738eb49489a26cc&oe=60C3A6D1"
              />
              <TeamMember
                name="Gene Caleb Carbonilla"
                title="Data Specialist"
                imageSource="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/152552229_4423375211011385_137838467295572734_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHZgiHL-NItDp6AZC2nOPlMY096oYGRvi9jT3qhgZG-L9ldHWMj5MhkdVMsjLDtoN2GQ5VdpYzAZ2vHnCgW5eCM&_nc_ohc=FHaDOtDbSOEAX-UaJyw&_nc_ht=scontent.fceb2-2.fna&oh=604233eb891c1298936abb0bd336e2fd&oe=60C38714"
              />
              <TeamMember
                name="Xyphrus Von Keith Caguan"
                title="UX Designer"
                imageSource="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/119425146_342515593617256_1883148394415592026_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGjiWucsq2MRgd1rQ1ROMHh1sM6xMA7ZHHWwzrEwDtkceALSabOTRaY36B_2u6qTzrsZktKtwmZgViQfKSXWiqd&_nc_ohc=pFhx5JlyAwAAX8QsTJd&_nc_ht=scontent.fceb2-1.fna&oh=04194033549975008845af01b017637f&oe=60C4B65A"
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
