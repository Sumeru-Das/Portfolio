import { paragraph } from "../../data";
import TextMask from "../ui/TextMask";
import Word from "../ui/Word";
import { iconsData } from "../../data";

export default function About({ forwardedRef }) {
  const phrases = ["About"];
  return (
    <section className="h-[10vh] sm:h-[100vh]" ref={forwardedRef}>
      <div className="flex h-full flex-col items-center gap-10 px-10">
        <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
          <TextMask>{phrases}</TextMask>
        </h1>
        <div className="mb-10 w-full">
          <Word paragraph={paragraph} />
        </div>
        <div className="hidden lg:block">
          <div className="flex w-full flex-col">
            <h1 className="mb-20 flex items-center justify-center text-center text-[5vw] text-[#FE5F2F] sm:text-[3vw] ">
              <span className="mr-2 rounded-2xl bg-[#000000] px-5 text-[5vw] text-[#FFFFFF]  sm:text-[3vw]">
                Technologies
              </span>{" "}
              I am familiar with ...
            </h1>
            <div className="flex items-center justify-center gap-x-[10px] overflow-x-scroll pb-5 sm:overflow-x-hidden">
              {iconsData.map((item) => (
                <div className="" key={item.id}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-[5vw] w-[5vw]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
