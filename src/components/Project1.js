import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import algorithmImage from "../assets/images/algo.png";

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#project1", 
      start: "top top", 
      end: "bottom top", 
      pin: true, 
      pinSpacing: false, 
      scrub: true, 
    });
  }, []);

  return (
    <div
      id="project1"
      className="h-screen bg-slate-500 flex justify-center items-center z-10 relative"
    >
      <div className="w-full h-full relative">
        <img
          src="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314708/algo_rpj1gq.png"
          className="background-img w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="Algorithm"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-0 left-0 w-1/2 h-full bg-black/50">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
            <div className="z-40 font-dm-sans p-4">
              <h1 className="font-NumFont text-gray-400 text-[4.5rem]">01</h1>
              <h1 className="font-NumFont text-white font-thin leading-3 mt-7 text-[5rem]">
                VisuAlgo
              </h1>
              <h1 className="font-dm-sans font-extralight text-white text-[1.4rem] pl-2 w-[30rem] mt-14">
                Bringing Sorting Algorithms to Life – Visualize the Power of
                Order!
              </h1>

              <a
                className="font-dm-sans font-extralight text-[1.4rem] w-52 flex justify-center text-white items-center h-12 bg-black border-2 border-gray-300 mt-5 ml-2 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in "
                href="https://github.com/harshp4114/visualgo" target="_blank"
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

export default Project1;
