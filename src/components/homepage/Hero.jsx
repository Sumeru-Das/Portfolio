import RandomQuote from "../ui/RandomQuote";

const Hero = () => {
  return (
    <section
      id="about"
      className="nav-change flex h-screen select-none flex-col items-center justify-center overflow-hidden bg-white"
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20 rounded-2xl sm:border-b-2 sm:py-20">
        <p className="logo px-5 py-5 text-heading-1 font-medium leading-[1.25em] text-[#10100F] sm:mt-10  sm:px-10 sm:pb-10 sm:text-heading-1 md:leading-[1.08em] ">
          Starting out as a <br />
          <span className="rounded-2xl bg-[#FE5F2F] px-3 text-heading-3 text-[#000000] sm:text-heading-1">
            Full-Stack Developer
          </span>
          <br />I merge design & databases, <br />
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
