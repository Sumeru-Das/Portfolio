import { paragraph } from "../../data";
import TextMask from "../ui/TextMask";
import Word from "../ui/Word";

export default function About({ forwardedRef }) {
  const phrases = ["About"];
  return (
    <section className="h-[10vh] sm:h-[50vh]" ref={forwardedRef}>
      <div className="flex h-full flex-col items-center gap-10 px-10">
        <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
          <TextMask>{phrases}</TextMask>
        </h1>
        <div className="mb-10 w-full">
          <Word paragraph={paragraph} />
        </div>
      </div>
    </section>
  );
}
