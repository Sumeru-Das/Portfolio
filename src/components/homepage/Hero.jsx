import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import RandomQuote from "../ui/RandomQuote";

const Hero = () => {
  const pRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      id="about"
      className="nav-change flex h-screen select-none flex-col items-center justify-center overflow-hidden bg-white"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20 rounded-2xl sm:border-b-2 sm:py-20">
        <p
          ref={pRef}
          className="px-5 py-5 text-heading-1 font-medium leading-[1.25em] text-[#10100F] sm:mt-10 sm:px-10 sm:pb-10 sm:text-heading-1 md:leading-[1.08em]"
        >
          Starting out as a <br />
          <span className="rounded-2xl bg-[#FE5F2F] px-2 py-1 text-heading-3 text-[#000000] sm:text-heading-1">
            Front-end Developer
          </span>
          <br />
          I build clean, <br />
          production-ready web apps <br />
          that scale.
        </p>
      </div>
      <div className="hidden w-full font-medium sm:text-xl lg:block">
        <div className="flex items-center justify-between sm:p-10">
          <RandomQuote />
          <a
            href="mailto:sumerudas2019@gmail.com"
            className="
    inline-flex items-center justify-center
    rounded-2xl
    bg-white px-6 py-3
    font-logo font-medium
    text-black
    transition-all duration-300
    hover:-translate-y-1 hover:bg-[#FE5F2F] hover:text-white
    active:scale-95 
  "
          >
            Hire Me⚡
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
