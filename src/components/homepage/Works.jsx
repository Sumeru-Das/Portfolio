import TextMask from "../ui/TextMask";

export default function Works({ forwardedRef }) {
  const phrases = ["Projects"];

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change mt-20 h-screen overflow-hidden px-10"
    >
      <h1 className="mt-10 text-[5vw] font-semibold uppercase text-[#FFFFFF] sm:my-20 sm:text-[3vw]">
        <TextMask>{phrases}</TextMask>
      </h1>
    </section>
  );
}
