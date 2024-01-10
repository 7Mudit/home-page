import React from "react";
// import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./Hero1.css";
// const noto_sans2 = Noto_Sans({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });

const Hero1 = () => {
  return (
    <div className="text-white  flex px-2 sm:p-24 pt-48 flex-col w-full items-center justify-center relative  overflow-hidden">
      <div className="bg-gemini-style-gradient custom-hover-effect hidden sm:block animated-background"></div>
      <h1
        className={`text-[12vw] tracking-tight leading-[12vw]  ${inter.className} text-center relative`}
      >
        Welcome to
      </h1>
      <h1
        className={`text-[12vw] tracking-tight leading-[12vw]  ${inter.className}  animated-gradient text-center`}
      >
        <span className={`font-extrabold `}>Learn</span> to code
      </h1>
    </div>
  );
};

export default Hero1;
