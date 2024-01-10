"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./VideoSection.css";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });

const inter = Inter({ weight: "400", subsets: ["latin"] });

const VideoSection = () => {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in the viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  // Adjust the scale based on visibility
  const videoScale = inView ? 1.3 : 1;
  return (
    <div className="flex flex-col items-center gap-[50px] justify-center">
      {/* heading */}
      <div className="relative text-center mt-[150px] ">
        <h1
          className={`text-[24px] sm:text-[48px] lg:text-[52px] xl:text-[80px] ${noto_sans2.className}  font-extrabold  text-center text-white leading-normal`}
        >
          Master Coding with LTC
        </h1>
        <div className="bg-red-black headingGradient"></div>
      </div>
      {/* <h2 className={`${inter.className} text-[80px] text-center text-white`}>
        Master Coding with LTC
      </h2> */}
      <div className={`text-center text-gray-500 ${inter.className}`}>
        <p className="text-pure-greys-200">
          Explore the new era of coding education,
        </p>
        <p className="text-pure-greys-200">where technology meets learning.</p>
      </div>
      <div
        ref={videoRef}
        className=" w-[50%] flex items-center justify-center mt-[50px]  transition-all duration-500  overflow-hidden shadow-[10px_-5px_50px_-5px] shadow-blue-200"
        style={{ transform: `scale(${videoScale})` }}
      >
        {/* <div className="mx-3 my-7 s"></div> */}
        {/* YouTube iframe with autoplay and no controls */}

        <video
          src="/medias/banner.mp4"
          className="videoStylings"
          autoPlay
          muted
          controls={false}
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;
