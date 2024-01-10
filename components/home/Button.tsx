import Link from "next/link";
import React from "react";

const Button = ({ children, active, linkto }: any) => {
  return (
    <Link href={linkto}>
      <div
        className={`text-center text-[10px] sm:text-[16px] px-6 sm:py-3 py-2 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
