"use client";
import React from "react";
import DesignAnimation from "../assets/animations/DesigingAnime.json";
import SoftwareAnimation from "../assets/animations/SoftwareEngineeringAnime.json";
import { Player } from "@lottiefiles/react-lottie-player";
const Services = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-5 py-8 bg-[#f8f3ee] text-black">
        <h2 className="text-center text-5xl">What I do?</h2>
        <p className="text-2xl my-3 text-center">
          I’m passionate about using my technical expertise to empower
          businesses to innovate and grow. My proficiency in the latest
          technologies enables companies to scale efficiently and achieve
          sustainable success. 🤝 <br />
          Here’s the tech stack I specialize in:
        </p>
        <div className="content flex flex-col lg:flex-row justify-center items-center my-10">
          <div className="Animation">
            <Player
              autoplay
              loop
              src={SoftwareAnimation} // Path to your Lottie JSON
              style={{ height: "56vh", width: "55vw" }} // Adjust size for responsiveness
              className=""
            />
          </div>
          <div className="description flex flex-col gap-y-4">
            <h4 className="text-5xl">Full Stack Development</h4>
            <div className="icons"></div>
            <div className="details ">
              {" "}
              <p className="lg:text-lg text-sm">
                ⚡ Building responsive websites using React-Redux.js | Next.js |
                HTML/CSS | TailwindCSS | Bootstrap | React Bootstrap | ShadCN UI
                | Material UI
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Creating Single page rendering applications using Redux and
                HooksJs
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Developing cross-platform mobile applications using React
                Native
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Creating optimized application backends in Node.js and
                Express.js
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Experience in usage of Rest APIs in modern programming
                practices
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Building secure authentication using JWT and Auth0
              </p>
            </div>
          </div>
        </div>
        <div className="content flex flex-col lg:flex-row justify-center items-center my-10">
          <div className="Animation">
            <Player
              autoplay
              loop
              src={DesignAnimation} // Path to your Lottie JSON
              style={{ height: "56vh", width: "55vw" }} // Adjust size for responsiveness
              className=""
            />
          </div>
          <div className="description flex flex-col gap-y-4">
            <h4 className="text-5xl">UI/UX Design</h4>
            <div className="icons"></div>
            <div className="details ">
              {" "}
              <p className="lg:text-lg text-sm">
                ⚡ Building responsive websites using React-Redux.js | Next.js |
                HTML/CSS | TailwindCSS | Bootstrap | React Bootstrap | ShadCN UI
                | Material UI
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Creating Single page rendering applications using Redux and
                HooksJs
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Developing cross-platform mobile applications using React
                Native
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Creating optimized application backends in Node.js and
                Express.js
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Experience in usage of Rest APIs in modern programming
                practices
              </p>
              <p className="lg:text-lg text-sm">
                ⚡ Building secure authentication using JWT and Auth0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
