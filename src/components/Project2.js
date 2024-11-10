import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import findWorkerImage from "../assets/images/findWorker.png";

gsap.registerPlugin(ScrollTrigger);

const Project2 = () => {
  useEffect(() => {
    // ScrollTrigger for pinning the section when scrolling
    ScrollTrigger.create({
      trigger: "#project2", // Target the section
      start: "top top", // Start when the top of the section reaches the top of the viewport
      end: "bottom top", // End when the bottom of the section reaches the top of the viewport
      pin: true, // Pin this section in place
      pinSpacing: false, // Remove extra space when the section is pinned
      scrub: true, // Smooth scroll effect
    });
  }, []);

  return (
    <div
      id="project2"
      className="h-screen bg-slate-500 flex justify-center items-center z-10 relative"
    >
      <div className="w-full h-full relative">
        {/* Fixed background image with parallax effect */}
        <img
          src={findWorkerImage}
          className="background-img w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Find Worker"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-black/50">
          <div className="absolute top-0 w-full h-full bg-black/50 flex justify-center items-center">
            <div className="z-40 font-dm-sans p-4">
              <h1 className="font-NumFont text-gray-400 text-[4.5rem]">02</h1>
              <h1 className="font-NumFont text-white font-thin leading-3 mt-7 text-[5rem]">
                Find Worker
              </h1>
              <h1 className="font-dm-sans font-extralight text-white text-[1.4rem] pl-2 w-[30rem] mt-14">
                Bridging Workers and Providers for Seamless Collaboration!
              </h1>

              <a
                className="font-dm-sans font-extralight text-[1.4rem] w-52 flex justify-center text-white items-center h-12 bg-black border-2 border-gray-300 mt-5 ml-2 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in "
                href="https://github.com/harshp4114/findWorker"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
