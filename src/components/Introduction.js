import { gsap } from "gsap";
import { useEffect } from "react";
const Introduction = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#hello", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      startAt: {
        x: 0,
        y: 50,
        opacity: 0,
      },
    });

    tl.to("#world", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      startAt: {
        x: 0,
        y: -50,
        opacity: 0,
      },
    });

    tl.to("#para-intro", {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.5,
      startAt: {
        x: 0,
        y: 50,
        opacity: 0,
      },
    });
  }, []);

  return (
    <div id="fixed-text-intro" className=" h-full w-full">
      <div className="flex flex-wrap space-y-2">
        <div>
          <h1
            id="hello"
            className=" text-[15vw] p-0 pl-[5vw] top-[19rem] xl:text-[11rem] xl:p-0 font-serif xl:pl-20 text-gray-900 opacity-0 fixed xl:top-[8.3rem] z-0"
          >
            Hello 
          </h1>
          <h1
            id="world"
            className="text-[15vw] p-0 leading-9 pl-[5.2vw] top-[23.9rem] xl:text-[11rem] xl:p-0 xl:leading-9 font-serif xl:pl-20 text-gray-900 opacity-0 basis-full fixed xl:top-[24.9rem] z-0"
          >
            World.
          </h1>
        </div>
      </div>

      <div className="w-full p-[7vw] xl:p-0 xl:w-[40rem]">
        <p
          id="para-intro"
          className="pt-[0rem] text-[4.5vw] top-[27rem] xl:pt-[4.9rem] xl:pl-24 xl:text-[1.2rem] text-gray-700 leading-relaxed opacity-0 xl:max-w-2xl fixed xl:top-[26.7rem] z-0"
        >
          I’m Harsh Patadia, a third-year Computer Engineering student with a
          passion for coding and web development. I enjoy exploring cutting-edge
          technologies and transforming ideas into impactful, real-world
          solutions.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
