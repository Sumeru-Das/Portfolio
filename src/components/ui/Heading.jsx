export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          <h2 className="w-fit text-5xl font-medium uppercase text-general text-[#FE5F2F] sm:text-heading-2">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
}
