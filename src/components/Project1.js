import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="h-screen bg-slate-500 flex justify-center items-center z-10 relative xl:h-screen xl:flex xl:justify-center xl:items-center xl:z-10 xl:relative"
    >
      <div className="w-full h-full relative xl:w-full xl:h-full xl:relative">
        <img
          src="https://res.cloudinary.com/dlh2n274r/image/upload/v1731314708/algo_rpj1gq.png"
          className="background-img w-full h-full bg-black object-cover absolute top-0 left-0 z-0 background-img xl:w-full xl:h-full xl:object-cover xl:absolute xl:top-0 xl:left-0 xl:z-0"
          alt="Algorithm"
        />

        <div className="absolute inset-0 bg-black/50 xl:absolute xl:inset-0 xl:bg-black/50"></div>

        <div className="absolute top-0 left-0 w-1/2 h-full bg-black/50 xl:absolute xl:top-0 xl:left-0 xl:w-1/2 xl:h-full xl:bg-black/50">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:bg-black/50 xl:flex xl:justify-center xl:items-center">
            <div className="z-40 w-full font-dm-sans flex flex-wrap content-center justify-start items-center xl:block p-4 xl:w-auto xl:z-40 xl:font-dm-sans xl:p-4">
              <h1 className="font-NumFont text-gray-400 text-[8vw] xl:font-NumFont xl:text-gray-400 xl:text-[4.5rem]">01</h1>
              <h1 className="font-NumFont leading-3 mt-3 mb-6 text-white font-thin text-[6.5vw] xl:font-NumFont xl:text-white xl:font-thin xl:leading-3 xl:mt-7 xl:text-[5rem]">
                VisuAlgo
              </h1>
              <h1 className="font-dm-sans font-extralight text-white text-[4vw] pl-2 w-[30rem] xl:font-dm-sans xl:font-extralight xl:text-white xl:text-[1.4rem] xl:pl-2 xl:w-[30rem] xl:mt-14">
                Bringing Sorting Algorithms to Life – Visualize the Power of
                Order!
              </h1>

              <a
                className="font-dm-sans font-extralight text-[4vw] w-[34vw] flex justify-center text-white items-center h-[10vw] bg-black border-2 border-gray-300 mt-5 ml-2 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in xl:font-dm-sans xl:font-extralight xl:text-[1.4rem] xl:w-52 xl:flex xl:justify-center xl:text-white xl:items-center xl:h-12 xl:bg-black xl:border-2 xl:border-gray-300 xl:mt-5 xl:ml-2 xl:rounded-lg xl:hover:bg-gray-300 xl:hover:text-black xl:transition-all xl:duration-1s xl:ease-in"
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
