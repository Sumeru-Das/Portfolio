import { useEffect, useRef, useState } from "react";

import coindome from "../../assets/images/coindome.webp";
import dash from "../../assets/images/dash.webp";
import moqo from "../../assets/images/moqo.webp";
import rejoice from "../../assets/images/rejoice.webp";
import digital from "../../assets/images/digital.webp";

import Projects from "../ui/Projects";
import TextMask from "../ui/TextMask";
import HoverLabel from "../ui/HoverLabel";

export default function Works({ forwardedRef }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const phrases = ["Project"];

  // 🔥 Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // ❌ Kill hover label immediately when leaving section
        if (!entry.isIntersecting) {
          setActiveLabel(null);
        }
      },
      {
        threshold: 0.25, // 25% visible = active
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="works"
        className="nav-change my-[10%] overflow-hidden bg-[#0E0E0C]"
      >
        <h1 className="flex items-center justify-center text-[5vw] font-semibold uppercase text-white sm:my-20 sm:text-[3vw]">
          <TextMask>{phrases}</TextMask>
        </h1>

        <div className="mt-10 grid cursor-pointer grid-cols-1 gap-16 gap-y-10 p-5 md:grid-cols-12">
          {/* Project 1 */}
          <div className="col-span-1 md:col-span-12">
            <Projects
              name="Coindome"
              link="https://coin-dome.vercel.app/"
              img={coindome}
              alt="Coindome"
              type="API Integration • Frontend Development"
              tools="React • Framer Motion • Coingecko"
              onHover={setActiveLabel}
            />
          </div>

          {/* Project 2 */}
          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Projects
              name="Dash"
              link="https://dash-ivory-three.vercel.app/"
              img={dash}
              alt="Dash"
              type="Full-Stack Development"
              tools="Next.js • TypeScript • Tailwind • Clerk"
              onHover={setActiveLabel}
            />
          </div>

          {/* Project 3 */}
          <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              name="MOQO"
              link="https://moqo-moqo.vercel.app/"
              img={moqo}
              alt="MOQO"
              type="Frontend Development • Web Design"
              tools="HTML • CSS • JS • GSAP"
              onHover={setActiveLabel}
            />
          </div>

          {/* Project 4 */}
          <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
            <Projects
              name="Rejoice"
              link="https://rejoice-brown.vercel.app/"
              img={rejoice}
              alt="Rejoice"
              type="Frontend Development • Web Design"
              tools="GSAP • ScrollTrigger • Locomotive"
              onHover={setActiveLabel}
            />
          </div>

          {/* Project 5 */}
          <div className="col-span-1 h-fit md:col-span-4">
            <Projects
              name="Digital Performance"
              link="https://digital-phi-one.vercel.app/"
              img={digital}
              alt="Digital Performance"
              type="Frontend Development • Web Design"
              tools="HTML • CSS • JS • GSAP"
              onHover={setActiveLabel}
            />
          </div>
        </div>
      </section>

      {/* ✅ Hover label ONLY when section is visible */}
      {isVisible && <HoverLabel label={activeLabel} />}
    </>
  );
}
