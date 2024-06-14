import coindome from "../../assets/images/coindome.webp";
import dash from "../../assets/images/dash.webp";
import moqo from "../../assets/images/moqo.webp";
import rejoice from "../../assets/images/rejoice.webp";
import digital from "../../assets/images/digital.webp";

import Projects from "../ui/Projects";
import TextMask from "../ui/TextMask";

export default function Works({ forwardedRef }) {
  const phrases = ["Project"];
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <h1 className="flex items-center justify-center text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
        <TextMask>{phrases}</TextMask>
      </h1>
      <div className="mt-10 grid cursor-pointer grid-cols-1 gap-16 gap-y-10 p-5 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://coin-dome.vercel.app/"
            img={coindome}
            alt="Coindome"
            name="Coindome | a crypto tracking website"
            type="API Integration • Frontend Development"
            year="2024"
            tools="Reactjs • Framer Motion • Coingecko API • Chart.js"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://dash-ivory-three.vercel.app/"
            img={dash}
            alt="Dash"
            name="Dash | a video conferencing website"
            type="Full-Stack Development Development"
            year="2024"
            tools="TypeScript • Nextjs • Tailwind CSS • Stream SDK • Clerk"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://moqo-moqo.vercel.app/"
            img={moqo}
            alt="MOQO"
            name="MOQO | Mordern Web Design"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • GSAP|ScrollTrigger"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://rejoice-brown.vercel.app/"
            img={rejoice}
            alt="Rejoice"
            name="Rejoice Website"
            type="Frontend Development • Web Design"
            year="2023"
            tools="HTML • CSS • JavaScript • GSAP|ScrollTrigger • LocomotiveScroll"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://digital-phi-one.vercel.app/"
            img={digital}
            alt="Digital Performance Solution"
            name="Digital Performance Solution"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • GSAP|ScrollTrigger"
          />
        </div>
      </div>
    </section>
  );
}
