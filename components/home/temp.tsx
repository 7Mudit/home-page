import { useRef, useEffect } from "react";

const svgContainerRef = useRef(null);

useEffect(() => {
  const paths = svgContainerRef.current.querySelectorAll(".svg-path");

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const handleScroll = () => {
    const scrollPercentage =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);

    paths.forEach((path) => {
      const length = path.getTotalLength();
      const drawLength = length * scrollPercentage;

      path.style.strokeDashoffset = Math.max(length - drawLength, 0);
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
