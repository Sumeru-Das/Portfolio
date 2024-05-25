import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 2,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50" ref={logo}>
        <h1 className="px-8 py-2  text-3xl font-medium tracking-tight">
          Sumeru Das.
        </h1>
      </a>
      <nav className=" space-x-7  text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span className="text-xl font-semibold">About</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span className="text-xl font-semibold">Services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span className="text-xl font-semibold">Projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative px-2">
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
