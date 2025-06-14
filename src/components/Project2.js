import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import findWorkerImage from "../assets/images/findWorker.png";

gsap.registerPlugin(ScrollTrigger);

const Project2 = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#project2",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  }, []);

  return (
    <div
      id="project2"
      className="h-screen bg-slate-500 flex justify-center items-center z-10 relative xl:h-screen xl:bg-slate-500 xl:flex xl:justify-center xl:items-center xl:z-10 xl:relative"
    >
      <div className="w-full h-full relative">
        <img
          src="https://res.cloudinary.com/dlh2n274r/image/upload/rural_fin_chat_dvvhuo.png"
          className="background-img w-full h-full object-cover absolute top-0 left-0 z-0 background-img xl:w-full xl:h-full xl:object-cover xl:absolute xl:top-0 xl:left-0 xl:z-0"
          alt="Find Worker"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-0 left-1/2 w-1/2 h-full bg-black/50">
          <div className="absolute top-0 w-full h-full bg-black/50 flex justify-center items-center">
            <div className="z-40 w-full font-dm-sans flex flex-wrap content-center justify-start items-center xl:block xl:w-auto p-4">
              <h1 className="font-NumFont text-gray-400 text-[8vw] xl:font-NumFont xl:text-gray-400 xl:text-[4.5rem]">
                02
              </h1>
              <h1 className="font-NumFont text-white font-thin leading-3 mt-3 mb-6 text-[6.5vw] xl:font-NumFont xl:text-white xl:font-thin xl:leading-3 xl:mt-7 xl:text-[5rem]">
                RuralFin
              </h1>
              <h1 className="font-dm-sans font-extralight text-white text-[4vw] w-full xl:font-dm-sans xl:font-extralight xl:text-white xl:text-[1.4rem] xl:pl-2 xl:w-[30rem] xl:mt-14">
                Banking Beyond Banks – Empowering Everyone with Financial
                Freedom!
              </h1>

              <div className="w-full flex flex-wrap justify-start xl:flex-nowrap">
                <a
                  className="font-dm-sans font-extralight text-[4vw] w-[34vw] flex justify-center mt-5 text-white items-center h-[10vw] bg-black border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in xl:font-dm-sans xl:font-extralight xl:text-[1.4rem] xl:w-44 xl:flex xl:justify-center xl:text-white xl:items-center xl:h-12 xl:bg-black xl:border-2 xl:border-gray-300 xl:mt-5 xl:ml-2 xl:rounded-lg xl:hover:bg-gray-300 xl:hover:text-black xl:transition-all duration-1s xl:ease-in"
                  href="https://github.com/Jhil20/Exception-RuralFin"
                  target="_blank"
                >
                  View Project
                </a>
                <a
                  href="https://ruralfin.netlify.app/"
                  target="_blank"
                  className="font-dm-sans font-extralight text-[4vw] w-[34vw] flex justify-center mt-3 text-white items-center h-[10vw] bg-black border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:text-black transition-all duration-1s ease-in xl:font-dm-sans xl:font-extralight xl:ml-8 xl:text-[1.4rem] xl:w-44 xl:flex xl:justify-center xl:text-white xl:items-center xl:h-12 xl:bg-black xl:border-2 xl:border-gray-300 xl:mt-5  xl:rounded-lg xl:hover:bg-gray-300 xl:hover:text-black xl:transition-all duration-1s xl:ease-in"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
