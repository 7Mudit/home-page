import React from "react";
import { Inter } from "next/font/google";

// const noto_sans2 = Noto_Sans({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });
const TextSection = () => {
  return (
    <div className="flex py-[50px] items-center justify-center">
      <section
        className={`leading-normal text-[16px] sm:leading-[32px] sm:text-[32px] lg:leading-[48px] lg:text-[48px] xl:leading-[63px] xl:text-[58px] text-white  ${inter.className} `}
      >
        <p className="sm:text-center">
          Learn to Code is crafted to empower your{" "}
        </p>
        <p className="sm:text-center">
          <span className="animated-gradient-text">coding journey </span>
          bridging knowledge gaps
        </p>
        <p className="sm:text-center">
          with courses, videos, interactive notes,
        </p>
        <p className="sm:text-center"> and career opportunities.</p>
      </section>
    </div>
  );
};

export default TextSection;
