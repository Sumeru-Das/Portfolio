import { paragraph } from "../../data";
import TextMask from "../ui/TextMask";
import Word from "../ui/Word";

export default function About({ forwardedRef }) {
  const phrases = ["About"];
  return (
    <section className="h-screen" ref={forwardedRef}>
      <div className="flex h-full flex-col items-start gap-10 px-10">
        <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
          <TextMask>{phrases}</TextMask>
        </h1>
        <div className="w-full mb-10">
          <Word paragraph={paragraph} />
        </div>
      </div>
    </section>
  );
}
