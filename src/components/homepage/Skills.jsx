import { iconsData } from "../../data";

export default function Skills() {
  return (
    <section className="mt-[15rem] flex h-[80vh] items-center justify-center py-[5rem]">
      <div className="flex w-full flex-col">
        <h1 className="mb-20 flex items-center justify-center text-center text-[5vw] text-[#FE5F2F] sm:text-[3vw] ">
          <span className="mr-2 rounded-2xl bg-[#000000] px-5 text-[5vw] text-[#FFFFFF]  sm:text-[3vw]">
            Technologies
          </span>{" "}
          I am familiar with ...
        </h1>
        <div className="flex items-center justify-center gap-x-[10px] pb-5">
          {iconsData.map((item) => (
            <div className="h-[5rem] w-[5rem]" key={item.id}>
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
      </div>
    </section>
  );
}
