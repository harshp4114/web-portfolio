import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventHubImage from "../assets/images/event.png";

gsap.registerPlugin(ScrollTrigger);

const Project3 = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#project3", 
      start: "top top", 
      end: "bottom top", 
      pin: true, 
      pinSpacing: false, 
      scrub: true, 
    });
  }, []);

  return (
    <div
      id="project3"
      className="h-screen bg-slate-500 flex justify-center items-center z-10 relative"
    >
      <div className="w-full h-full relative">
        <img
          src={eventHubImage}
          className="background-img w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Project 3"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-0 left-0 w-1/2 h-full bg-black/50">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
            <div className="z-40 font-dm-sans p-4">
              <h1 className="font-NumFont text-gray-400 text-[4.5rem]">03</h1>
              <h1 className="font-NumFont text-white font-thin leading-3 mt-7 text-[5rem]">
                Event Hub
              </h1>
              <h1 className="font-dm-sans font-extralight text-white text-[1.4rem] pl-2 w-[30rem] mt-14">
              Where Events Meet Opportunity: Hosts Create, Sponsors Compete, and Auctions Drive Success!
              </h1>

              <a
                className="font-dm-sans font-extralight text-[1.4rem] w-52 flex justify-center text-white items-center h-12 bg-black border-2 border-gray-300 mt-5 ml-2 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in "
                href="https://github.com/Dev22Patel/EventHub" 
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

export default Project3;
