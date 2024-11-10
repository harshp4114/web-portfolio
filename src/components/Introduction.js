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
    <div id="fixed-text-intro" className="max-w-4xl">
      <div className="flex flex-wrap space-y-2">
        <div>
          <h1
            id="hello"
            className="text-[11rem] p-0 font-serif pl-20 text-gray-900 opacity-0 fixed top-[8.3rem]"
          >
            Hello 
          </h1>
          <h1
            id="world"
            className="text-[11rem] p-0 leading-9 font-serif pl-20 text-gray-900 opacity-0 basis-full fixed top-[24.9rem]"
          >
            World.
          </h1>
        </div>
      </div>

      <div className="w-[40rem]">
        <p
          id="para-intro"
          className="pt-[4.9rem] pl-24 text-[1.2rem] text-gray-700 leading-relaxed opacity-0 max-w-2xl fixed top-[26.7rem]"
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
