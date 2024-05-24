import { iconsData } from "../../data";
import LogoMarquee from "../ui/LogoMarquee";

export default function Skills() {
  return (
    <section className="mt-[15rem] h-[80vh]">
      <div className="flex w-full flex-col">
        <h1 className="mb-20 flex items-center justify-center text-center text-[5vw] text-[#FE5F2F] sm:text-[3vw] ">
          <span className="mr-2 rounded-2xl bg-[#FFFFFF] px-3 text-[5vw] text-[#000000]  sm:text-[3vw]">
            Technologies
          </span>{" "}
          I am familiar with ...
        </h1>
        <LogoMarquee baseVelocity={-1}>
          <div className="flex items-center gap-x-[10px] pb-5">
            {iconsData.map((item) => (
              <div className="h-[5rem] w-[5rem] " key={item.id}>
                <img
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="h-[5rem] w-[5rem]"
                />
              </div>
            ))}
          </div>
        </LogoMarquee>
        <LogoMarquee baseVelocity={1}>
          <div className="flex items-center gap-x-[10px]">
            {iconsData.map((item) => (
              <div className="h-[5rem] w-[5rem] " key={item.id}>
                <img
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="h-[5rem] w-[5rem]"
                />
              </div>
            ))}
          </div>
        </LogoMarquee>
      </div>
    </section>
  );
}
