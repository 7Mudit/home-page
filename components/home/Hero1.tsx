import React from "react";
// import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";

// const noto_sans2 = Noto_Sans({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });

const Hero1 = () => {
  return (
    <div className="text-white  flex px-2 sm:px-24 pt-24 flex-col w-full items-center justify-center relative overflow-hidden">
      <div
        className="bg-gemini-style-gradient hidden sm:block animated-background"
        style={{
          position: "absolute",
          width: "320px",
          height: "60%",
          left: "10%", // Center horizontally
          top: "15%", // Center vertically
          //   transform: "translate(-50%, -50%) matrix(1, 0, -0.03, 1, 0, 0)", // Adjust for precise positioning
          opacity: 0.35,
          filter: "blur(64px)",
          borderRadius: "50%",
          zIndex: "0", // Ensure it's behind the text
        }}
      ></div>
      <h1
        className={`text-[12vw] tracking-tight leading-[12vw]  ${inter.className} text-center`}
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
