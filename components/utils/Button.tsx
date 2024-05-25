import Image from "next/image";
import React from "react";
import contact from "@/public/icons/contact.svg";

const Button: React.FC = () => {
  return (
    <DrawOutlineButton className="hidden sm:flex ">
      Contact me
    </DrawOutlineButton>
  );
};

const DrawOutlineButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative flex gap-2 items-center px-4 py-2 font-medium text-3xl text-home-text transition-colors duration-[400ms]"
    >
      <Image src={contact} alt="Mail" />
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-home-text transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-home-text transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-home-text transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-home-text transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
