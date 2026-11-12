import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Hero from "./Hero";
import Departures from "./Departures";
import TechStack from "./TechStack";
import Contact from "./Contact";
import { flip } from "./Flaps";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const root = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hello rises, World drops, like the original intro.
      gsap.timeline({ defaults: { ease: "expo.out", duration: 1 } })
        .from(".nav", { y: -30, opacity: 0, duration: .7 })
        .from(".js-hi", { y: 24, opacity: 0 }, "<.1")
        .from(".js-hello", { y: 60, opacity: 0 }, "<.1")
        .from(".js-world", { y: -60, opacity: 0 }, "<.15")
        .from(".nameboard .post", { scaleY: 0, transformOrigin: "top", stagger: .1 }, "<.2")
        .from(".js-intro > *", { y: 30, opacity: 0, stagger: .1 }, "<");

      // Boards (projects, upstream, tech stack): rows slide in, then the flaps spin to their labels.
      gsap.utils.toArray(".board").forEach((board) => {
        gsap.from(board.querySelectorAll(".cols, .row, .skill-row"), {
          y: 28, opacity: 0, stagger: .08, duration: .8, ease: "expo.out",
          scrollTrigger: { trigger: board, start: "top 80%", once: true, onEnter: () => flip(board) },
        });
      });

      gsap.from(".counter a", {
        y: 24, opacity: 0, stagger: .07, duration: .7, ease: "expo.out",
        scrollTrigger: { trigger: ".counter", start: "top 95%", once: true },
      });
    });
    // Opening a project row or a late image changes the page height; without a refresh the
    // triggers keep stale positions and sections near the bottom never reveal.
    let frame;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    ro.observe(root.current);

    return () => { ro.disconnect(); mm.revert(); };
  }, []);

  return (
    <div className="wrap" ref={root}>
      <Header />
      <Hero />
      <Departures />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Body;
