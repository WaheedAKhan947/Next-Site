"use client";
import React from "react";
import DesignAnimation from "../assets/animations/DesigingAnime.json";
// import AppAnimation from "../assets/animations/AppDevelopmentAnime.json";
import SoftwareAnimation from "../assets/animations/SoftwareEngineeringAnime.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-5 py-8 bg-[#f8f3ee] text-black text-center">
        <h2 className="text-center text-3xl md:text-5xl">What I do?</h2>
        <p className="text-sm lg:text-lg lg:px-32 text-center my-3 ">
          I’m passionate about using my technical expertise to empower
          businesses to innovate and grow. My proficiency in the latest
          technologies enables companies to scale efficiently and achieve
          sustainable success. 🤝 <br />
          <b>Here’s the tech stack I specialize in:</b>
        </p>
        <div className="content flex flex-col lg:flex-row justify-center items-center my-5">
          <div className="Animation my-10 ">
            <Player
              autoplay
              loop
              src={SoftwareAnimation}
              // className="border-2 border-yellow-400 border-solid"
              // Use responsive classes to adjust for larger screens
              className="lg:h-[56vh] lg:w-[55vw] text-6xl"
            />
          </div>
          <div className="description flex flex-col lg:items-start items-center gap-y-4">
            <h4 className="text-3xl lg:text-5xl font-bold">App Development</h4>
            <div className="icons"></div>
            <div className="details">
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Developing cross-platform mobile applications using React
                Native for both iOS and Android
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Building custom UI components that are highly reusable and
                optimized
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Utilizing React Navigation for smooth, intuitive app
                navigation Native
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Enhancing performance through optimizations like lazy
                loading, memoization, and code-splitting
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Implementing features like push notifications, deep linking,
                and location-based services
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Managing app releases on both Google Play Store and Apple App
                Store
              </p>
            </div>
          </div>
        </div>
        <div className="content flex flex-col lg:flex-row lg:justify-start items-center my-10 ">
          <div className="Animation my-10">
            <Player
              autoplay
              loop
              src={DesignAnimation}
              className="lg:h-[56vh] md:h-[36vh] lg:w-[55vw] text-6xl"
            />
          </div>
          <div className="description flex flex-col lg:items-start items-center gap-y-4">
            <h4 className="text-3xl lg:text-5xl font-bold">Web Development</h4>
            <div className="icons"></div>
            <div className="details">
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Conducting user research to gather insights and define user
                personas
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Creating Single page rendering applications using Redux and
                HooksJs
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Developing cross-platform mobile applications using React
                Native
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Creating optimized application backends in Node.js and
                Express.js
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
                ⚡ Experience in usage of Rest APIs in modern programming
                practices
              </p>
              <p className="lg:text-lg lg:text-start text-center text-sm">
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
