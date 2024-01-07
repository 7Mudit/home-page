import React from "react";
import { Inter } from "next/font/google";

// const noto_sans2 = Noto_Sans({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const TextSection = () => {
  return (
    <div className="flex py-[100px] items-center justify-center">
      <section
        className={`leading-[63px] text-[58px] text-white  ${inter.className} `}
      >
        <p className="text-center">Learn to Code is crafted to empower your </p>
        <p className="text-center">
          <span className="animated-gradient-text">coding journey</span> —
          bridging knowledge gaps
        </p>
        <p className="text-center">with courses, videos, interactive notes,</p>
        <p className="text-center"> and career opportunities.</p>
      </section>
    </div>
  );
};

export default TextSection;
