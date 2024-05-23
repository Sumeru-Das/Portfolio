import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const curs = useRef(null);
  const svg = useRef(null);

  useEffect(() => {
    // TODO Learn useContext and useRef here
    const images = document.querySelectorAll(".img");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, {
      height: "112px",
      width: "112px",
      ease: "expo.inout",
    }).to(svg.current, { opacity: 1, width: "96px", height: "96px" }, 0);

    images.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        tl.play();
      });

      img.addEventListener("mouseleave", function () {
        tl.reverse();
        tl.eventCallback("onReverseComplete", function () {
          gsap.set(svg.current, { opacity: 0 }); // Hide the SVG element
          gsap.set(curs.current, { height: "12px", width: "12px" }); // Hide the SVG element
        });
      });
    });

    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={curs}
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:flex"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#FFC100"
        viewBox="0 0 256 256"
      >
        <path d="M220.49,190.83a12,12,0,0,1,0,17L207.8,220.49a12,12,0,0,1-17,0l-56.56-56.57L115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13-50.17,19.27ZM96,32a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0v8A8,8,0,0,0,96,32ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31Z"></path>
      </svg>
    </div>
  );
}
