import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#project1",
      start: "top 85%",
      end: "top 50%",
      scrub: true,
      onEnter: () => gsap.to("#para-intro", { opacity: 0, duration: 0.2 }),
      onLeaveBack: () => gsap.to("#para-intro", { opacity: 1, duration: 0.2 }),
    });

    ScrollTrigger.create({
      trigger: "#project1",
      start: "top 45%",
      end: "top 50%",
      scrub: true,
      onEnter: () => gsap.to("#hello", { opacity: 0, duration: 0.2 }),
      onLeaveBack: () => gsap.to("#hello", { opacity: 1, duration: 0.2 }),
    });

    ScrollTrigger.create({
      trigger: "#project1",
      start: "top 65%",
      end: "top 50%",
      scrub: true,
      onEnter: () => gsap.to("#world", { opacity: 0, duration: 0.2 }),
      onLeaveBack: () => gsap.to("#world", { opacity: 1, duration: 0.2 }),
    });
  }, []);

  return (
    <div
      id="project1"
      className="h-screen bg-slate-500 flex justify-center items-center"
    >
      <div>
        <img ></img>
      </div>
    </div>
  );
};

export default Project1;
