"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";

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
  const videoScale = inView ? 1.8 : 1;
  return (
    <div className="flex flex-col items-center gap-[50px] justify-center">
      {/* heading */}
      <div className="relative text-center mt-[150px] ">
        <h1
          className={`text-4xl ${noto_sans2.className}  font-extrabold text-[80px] text-center text-white leading-normal`}
        >
          Master Coding with LTC
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
      {/* <h2 className={`${inter.className} text-[80px] text-center text-white`}>
        Master Coding with LTC
      </h2> */}
      <div className={`text-center text-gray-500 ${inter.className}`}>
        <p>Explore the new era of coding education,</p>
        <p>where technology meets learning.</p>
      </div>
      <div
        ref={videoRef}
        className="h-[400px] flex items-center justify-center mt-[200px]  transition-all duration-500  overflow-hidden shadow-[10px_-5px_50px_-5px] shadow-blue-200"
        style={{ transform: `scale(${videoScale})` }}
      >
        {/* <div className="mx-3 my-7 s"></div> */}
        {/* YouTube iframe with autoplay and no controls */}
        <iframe
          width="600px"
          height="300px"
          src="https://www.youtube.com/embed/0MBfZY0FnKk?autoplay=1&controls=0&mute=1"
          title="JavaScript for Beginners: Introduction, Features, and First Code | Episode 1"
          className="shadow-lg rounded-xl dark:shadow-dimWhite shadow-emerald-400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
