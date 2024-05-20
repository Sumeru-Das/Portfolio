import { iconsData } from "../ui/icons";

export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="about"
      className="nav-change my-10 flex select-none flex-col items-center justify-center overflow-hidden py-5 md:my-[1%] "
      aria-label=""
    >
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium leading-[1.25em] text-secondary-400 md:leading-[1.08em]">
          Passionate about coding, collaboration, and leveraging technology to
          create meaningful solutions.
        </h1>
      </div>
      <div className="scrollbar mx-[9rem] gap-10 overflow-x-scroll rounded-2xl py-[5rem]">
        {iconsData.map((iconData) => {
          return (
            <img
              className="h-[5rem] "
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </div>
      <h1 className="mt-10 flex items-center justify-center text-heading-3 text-[#FE5F2F]">
        <span className="mr-2 rounded-2xl bg-[#FFFFFF] px-3 text-heading-3 text-[#000000]">
          Technologies
        </span>{" "}
        I am familiar with .
      </h1>
    </section>
  );
}
