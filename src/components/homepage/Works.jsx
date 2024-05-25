import TextMask from "../ui/TextMask";

import { HoverEffect } from "../ui/card-hover-effect";

// export default function Works({ forwardedRef }) {
//   const phrases = ["Projects"];

//   return (
//     <section
//       ref={forwardedRef}
//       id="works"
//       className="nav-change mt-20 h-screen overflow-hidden px-10"
//     >
//       <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
//         <TextMask>{phrases}</TextMask>
//       </h1>
//     </section>
//   );
// }

export default function Works({ forwardedRef }) {
  const phrases = ["Projects"];

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <section ref={forwardedRef} className="h-screen ">
      <div className="flex h-full flex-col items-center gap-10  px-10">
        <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
          <TextMask>{phrases}</TextMask>
        </h1>
        <div className="flex w-[80%] items-center justify-center overflow-y-scroll sm:overflow-y-hidden">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
