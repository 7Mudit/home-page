"use client";
import React, { useEffect, useRef, useState } from "react";

import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import CountUp from "react-countup";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

const YtViewsGraph = () => {
  const [inView, setInView] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);
  return (
    <>
      {/* heading */}
      <div className="relative text-center mt-[150px] ">
        <h1
          className={`text-4xl ${noto_sans2.className}  font-extrabold text-[80px] text-center text-white leading-normal`}
        >
          Our Journey in Numbers
        </h1>
        <div
          className="bg-red-black"
          style={{
            position: "absolute",
            width: "600px",
            height: "157.05px",
            left: "50%", // Center horizontally
            top: "50%", // Center vertically
            transform: "translate(-50%, -50%) matrix(1, 0, -0.03, 1, 0, 0)", // Adjust for precise positioning
            opacity: 0.2,
            filter: "blur(34px)",
            borderRadius: "50%",
            zIndex: "0", // Ensure it's behind the text
          }}
        ></div>
      </div>
      <div
        className={`flex ${inter.className} items-center justify-center flex-col  px-[150px] relative gap-[150px]`}
      >
        <div className="flex flex-row border-b-2  border-dotted border-gray-500 w-full justify-between items-end">
          <div className="flex flex-col gap-5 p-2">
            <p className="text-gray-500 font-extrabold py-4 text-[40px] leading-[30px]">
              YouTube
            </p>
          </div>
          <div className="flex flex-col gap-5 p-2">
            <p className="text-white text-lg">Learn To Code</p>
            {inView ? (
              <p className="animated-gradient-text text-[90px] leading-[90px]">
                <CountUp end={172} duration={5} />
                K+
              </p>
            ) : (
              <p className="animated-gradient-text text-[90px] leading-[90px]">
                0
              </p>
            )}

            <p className="text-gray-500 font-extrabold self-end">Views</p>
          </div>
        </div>
        {/* <div className="h-[2px] w-full " /> */}
        <svg
          ref={chartRef}
          id="chart"
          width="742"
          height="100"
          viewBox="0 0 442 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "615.238px",
            rotate: "-0.475874rad",
            overflow: "hidden",
          }} // Updated style attribute
          className="absolute left-[45%] top-0 translate-x-[-50%]"
        >
          <path
            className={inView ? "path-animation" : ""}
            d="M1.86391 26.361L19.6592 10.343L34.2663 6.45284L43.2323 9.59318L55.0296 13.7252L78.9116 3.01777L87.8775 6.15811L98.046 13.4281L114.471 4.34714L127.258 16.2426L140.897 13.6029L152.036 9.02766L167.397 7.52094L177.733 3.72422L188.68 11.7967L203.831 3.32894L219.028 2.2941L242.081 4.54093L250.457 4.82597L260.839 8.46215L268.485 4.78282L290.192 12.3857C296.32 11.5298 309.24 9.73305 311.902 9.39386C314.563 9.05467 331.18 6.78684 339.156 5.69533L355.201 11.3149L403.029 16.9416L428.866 23.342L441.135 27.6393"
            stroke="url(#paint0_linear_844_5219)"
            strokeWidth="3"
          ></path>

          <defs>
            <linearGradient
              id="paint0_linear_844_5219"
              x1="179.485"
              y1="-420.1"
              x2="507.493"
              y2="-305.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#4FABFF"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-row w-full justify-between items-end">
          <div className="flex flex-col gap-2">
            {inView ? (
              <p className="text-white text-[50px]">
                <CountUp end={100} duration={5} />+
              </p>
            ) : (
              <p className="animated-gradient-text text-[90px] leading-[90px]">
                <CountUp end={172} duration={5} />0
              </p>
            )}
            <div>
              <p className="text-pure-greys-500 text-sm">
                Hands-on coding exercises
              </p>
              <p className="text-pure-greys-500 text-sm">Real-world projects</p>
            </div>

            <p className="text-white text-sm w-[50%]">
              *Engage in practical sessions to solidify your coding skills.
            </p>
          </div>

          <p className="animated-gradient-text self-start text-[20px] w-[30%]">
            Join &ldquo;Learn to Code&rdquo; to master programming languages,
            develop problem-solving skills, and build projects that matter
          </p>
        </div>
      </div>
    </>
  );
};

export default YtViewsGraph;
