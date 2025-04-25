import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({
  onClick,
  children,
  className = "",
  bgColor = "bg-black",
  textColor = "text-white",
  ...props
}) => (
  <button
    onClick={onClick}
    className={cn(
      "inline-block px-8 py-2 text-md md:text-2xl rounded-2xl font-bold text-base border-[3px] border-black  shadow-[6px_6px_0_black] cursor-pointer select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
      bgColor,
      textColor,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
