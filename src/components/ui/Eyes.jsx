import React, { useEffect, useState } from "react";

import eyes from "../../assets/icons/eyes.svg";

export default function Eyes({ className, forwardedRef }) {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 280);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden lg:block" ref={forwardedRef}>
      <div className="background flex h-screen w-full items-center justify-center gap-[30px]">
        <div
          className={`flex items-center justify-center rounded-full border-[2px] border-[#21212188] bg-white ${className}`}
        >
          <img
            style={{
              transform: `rotate(${rotate}deg)`,
            }}
            src={eyes}
            alt="img"
            className="h-full w-full object-cover"
          />
          <h1 className="absolute uppercase text-white">Play</h1>
        </div>
        <div
          className={`flex items-center justify-center rounded-full border-[2px] border-[#21212188] bg-white ${className}`}
        >
          <img
            style={{
              transform: `rotate(${rotate}deg)`,
            }}
            src={eyes}
            alt="img"
            className="h-full w-full object-cover"
          />
          <h1 className="absolute uppercase text-white">Play</h1>
        </div>
      </div>
    </div>
  );
}
