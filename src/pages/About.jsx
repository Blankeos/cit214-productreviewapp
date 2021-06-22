import React from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Cafe.ly | About</title>
        <meta name="title" content="Cafe.ly | About" />
        <meta
          name="description"
          content="User Reviews and Recommendations of Best Tasting Coffee at Cafe.ly. Defining the best coffee experience. In culture, in taste!"
        />
      </Helmet>

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
            <span className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 1.2,
                    type: "spring",
                    delay: 0.5,
                    stiffness: 200,
                  },
                }}
                className="font-extrabold text-5xl m-8"
              >
                Meet the Team
              </motion.h2>
            </span>
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
                delay={0.3}
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
                delay={0.3}
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
                delay={0.3}
                imageSource="https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/team_images/documentation_specialist.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TeamMember = ({ name, title, imageSource, delay = 0, ...rest }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        height: "83.333333%",
        transition: {
          type: "spring",
          duration: 1,
          stiffness: 100,
          delay: delay,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: delay + 0.5,
        },
      });
      animation3.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: delay + 1,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="flex flex-col h-96">
      <div className="w-full flex-grow flex-shrink-0 overflow-hidden relative">
        {/* Background */}
        <motion.div
          initial={{ height: "0%" }}
          animate={animation}
          className="absolute bottom-0 w-full h-5/6 bg-gradient-to-tl from-primary to-yellow-300"
        ></motion.div>
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
      <div className="flex flex-col space-y-2 pt-5 overflow-hidden">
        <motion.h3
          initial={{ x: "-100vh" }}
          animate={animation2}
          className="text-xl font-bold"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ y: 200 }}
          animate={animation3}
          className="uppercase text-sm text-gray-500"
        >
          {title}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
