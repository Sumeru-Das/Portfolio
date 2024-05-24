import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change h-screen overflow-hidden"
    >
      <Heading title="Projects" />
    </section>
  );
}
