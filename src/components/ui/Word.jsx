import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.6", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <>
      <p
        ref={container}
        className="flex flex-wrap text-[5vw] sm:text-[4vw] leading-[.4rem] sm:leading-[3.5rem] tracking-tighter text-[#FE5F2F]"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[1rem] mt-[1.9rem]">
      <span className="absolute opacity-0">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
