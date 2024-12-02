"use client";
import Image from "next/image";
import ProfilePic from "@/assets/home/waheedDp-removebg.png";
import { Player } from "@lottiefiles/react-lottie-player"; // Import the Lottie Player
import FacebookIcon from "../assets/animations/facebookAnime.json";
import XIcon from "../assets/animations/XAnime.json";
import LinkedInIcon from "../assets/animations/linkedinAnime.json";
import GithubIcon from "../assets/animations/githubAnime.json";
import InstaIcon from "../assets/animations/instaAnime.json";
import { Button } from "./ui/button";
import { FaFileAlt, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { PiHandWavingDuotone } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";

export default function Profile() {
  return (
    <section className="min-h-screen p-10 flex justify-center items-center">
      <div className="container mx-auto">
        {/* <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">Hello!</h1>
          <p className="text-2xl font-bold text-blue-900"> I`m Waheed Ahmad Khan, Full Stack Developer Based in Pakistan</p>
        </div> */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <Image
              src={ProfilePic} // Replace this with the actual image URL
              alt="Waheed image"
              width={250}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="p-6  text-black max-lg:max-w-screen-lg w-full md:w-1/2 text-left">
            <h2 className="md:text-3xl text-xl text-nowrap  flex items-center font-bold mb-4">
              Hello!
              <PiHandWavingDuotone color="#4E9FA1" />
              &nbsp;its Waheed
            </h2>
            <div className="md:text-lg text-sm font-medium flex leading-loose">
              <span>
                A Full Stack Engineer (MERN){" "}
                <IoLogoJavascript className="inline h-6 w-6" />| Mobile App
                Developer (React Native){" "}
                <FaMobileAlt className="inline h-6 w-6" />| Web Developer
                (React/Next) <FaLaptopCode className="inline w-6 h-6" />
              </span>
            </div>
            <div className="flex justify-between my-4 items-center flex-wrap">
              <a href="https://www.facebook.com/waheedakhan947" target="blank">
                <Player
                  autoplay
                  loop
                  src={FacebookIcon} // Path to your Lottie JSON
                  style={{ height: "8vh", width: "6vw" }} // Adjust size for responsiveness
                  className="md:h-12 md:w-12 h-8 w-8" // Add responsive classes
                />
              </a>
              <a href="https://twitter.com/WaHeeD_A_kHaN" target="blank">
                <Player
                  autoplay
                  loop
                  src={XIcon} // Path to your Lottie JSON
                  style={{ height: "6vh", width: "4vw" }} // Adjust size for responsiveness
                  className="md:h-12 md:w-12 h-8 w-8 " // Add responsive classes
                />
              </a>
              <a
                href="https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba/"
                target="blank"
              >
                <Player
                  autoplay
                  loop
                  src={LinkedInIcon} // Path to your Lottie JSON
                  style={{ height: "12vh", width: "10vw" }} // Adjust size for responsiveness
                  className="md:h-14 md:w-14 h-10 w-10" // Add responsive classes
                />
              </a>
              <a href="https://github.com/WaheedAKhan947" target="blank">
                <Player
                  autoplay
                  loop
                  src={GithubIcon} // Path to your Lottie JSON
                  style={{ height: "6vh", width: "4vw" }} // Adjust size for responsiveness
                  className="md:h-12 md:w-12 h-12 w-12" // Add responsive classes
                />
              </a>
              <a href="https://www.instagram.com/waheed_a_khan" target="blank">
                <Player
                  autoplay
                  loop
                  src={InstaIcon} // Path to your Lottie JSON
                  style={{ height: "7vh", width: "8vw" }} // Adjust size for responsiveness
                  className="md:h-12 md:w-12 h-8 w-8" // Add responsive classes
                />
              </a>
            </div>

            <div>
              <a
                href="/WaheedAhmadKhan_CV_JS.pdf"
                download="Waheed_Resume.pdf"
              >
                <Button variant="default" size="lg">
                  Resume &nbsp; <FaFileAlt />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
