export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 text-body-4 sm:flex md:text-body-3">
      <div className="flex flex-col justify-between md:w-[62.5vw] md:flex-row lg:w-[57.5vw]">
        <div className="flex space-x-1">
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">
            Sumeru Das
          </span>
        </div>
        <div>
          <span className=" text-body-4 2xl:text-body-1 flex items-center gap-2">
            Site designed and coded with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ff0a0a"
              viewBox="0 0 256 256"
            >
              <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
            </svg>
          </span>
        </div>
      </div>
      <button
        onClick={toTop}
        className="group col-span-2 flex w-fit items-center space-x-2 2xl:text-body-1"
      >
        <span className="font-extrabold uppercase duration-200 hover:font-black">
          BACK TO TOP
        </span>
        <span className="duration-300 ease-in-out group-hover:-translate-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M184,216a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Zm45.66-101.66-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,176H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path>
          </svg>
        </span>
      </button>
    </footer>
  );
}
