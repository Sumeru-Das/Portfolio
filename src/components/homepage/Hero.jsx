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
          <span className="rounded-2xl bg-[#FE5F2F] px-3 py-1 text-heading-3 text-[#000000] sm:text-heading-1">
            Full-Stack Developer
          </span>
          <br />
          I merge design & databases, <br />
          propelled by a passion for learning <br />
          and career growth.
        </p>
      </div>
      <div className="hidden w-full font-medium sm:text-xl lg:block">
        <div className="flex items-center justify-between sm:p-10">
          <RandomQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero;
