import { Lenis } from "@studio-freight/react-lenis/types";
import { useRef, useState, useEffect } from "react";

const svgContainerRef = useRef(null);
const svgContainerRef2 = useRef(null);
const [isInViewport, setIsInViewport] = useState(false);
const totalLengths = useRef([]);
const totalLengths2 = useRef([]);
const [animationProgress, setAnimationProgress] = useState(0);
const [mirroredAnimationProgress, setMirroredAnimationProgress] = useState(0);
const lastYRef = useRef(0); // Initialize the ref

useEffect(() => {
  const paths = svgContainerRef.current.querySelectorAll(".svg-path");
  const paths2 =
    svgContainerRef2.current.querySelectorAll(".svg-path-mirrored");
  totalLengths.current = Array.from(paths).map((path) => path.getTotalLength());
  totalLengths2.current = Array.from(paths2).map((path) =>
    path.getTotalLength()
  );
  paths.forEach((path, index) => {
    path.style.strokeDasharray = totalLengths.current[index];
    path.style.strokeDashoffset = totalLengths.current[index];
  });
  paths2.forEach((path, index) => {
    path.style.strokeDasharray = totalLengths.current[index];
    path.style.strokeDashoffset = totalLengths.current[index]; // Start fully hidden
  });

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.target === svgContainerRef.current ||
        entry.target === svgContainerRef2.current
      ) {
        setIsInViewport(entry.isIntersecting);
      }
    });
  };

  const observerOptions = {
    root: null, // observing with respect to the viewport
    rootMargin: "0px",
    threshold: 0.9, // adjust as needed
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  observer.observe(svgContainerRef.current);
  observer.observe(svgContainerRef2.current);

  return () => {
    observer.disconnect();
  };
}, []);
// useEffect(() => {
// });
useEffect(() => {
  let lastTouchY = 0;
  // Initialize Lenis
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      // Only deal with one finger
      lastTouchY = event.touches[0].clientY;
    }
  };

  const handleTouchMove = (event) => {
    if (!isInViewport) return;

    const currentTouchY = event.touches[0].clientY;
    let deltaY = currentTouchY - lastYRef.current; // Calculate deltaY using the ref

    // Update lastYRef for the next movement
    lastYRef.current = currentTouchY;
    // console.log("deltaY", deltaY);
    // console.log("lastYRef", lastYRef);
    deltaY =
      deltaY > lastYRef.current
        ? Math.abs(deltaY / Math.abs(deltaY)) * 15
        : (deltaY / Math.abs(deltaY)) * 15; // Adjust the multiplier as needed
    // Apply the adjusted deltaY to update the animation
    updateAnimation(-1 * deltaY, event);
  };

  const maxProgressIncrement = 0.5; // Adjust this value based on testing
  function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }

  const updateAnimation = (deltaY, event) => {
    if (!isInViewport) return;
    // event.preventDefault();
    let progressIncrement = deltaY * 0.005;
    progressIncrement =
      Math.sign(progressIncrement) *
      Math.min(Math.abs(progressIncrement), maxProgressIncrement);
    let targetProgress = Math.max(
      0,
      Math.min(animationProgress + progressIncrement, 1)
    );

    setAnimationProgress((prevProgress) => {
      return lerp(prevProgress, targetProgress, 0.5); // Adjust the lerp factor based on desired smoothness
    });

    const paths = svgContainerRef.current.querySelectorAll(".svg-path");
    let allPathsFullyVisible = true;
    paths.forEach((path, index) => {
      const length = totalLengths.current[index];
      const drawLength = Math.max(0, length - length * animationProgress);
      path.style.strokeDashoffset = drawLength;
      const resistance = 0.01;
      if (drawLength > resistance) allPathsFullyVisible = false;
    });

    const mirroredPaths =
      svgContainerRef2.current.querySelectorAll(".svg-path-mirrored");
    let newMirroredProgress = deltaY * 0.005;
    newMirroredProgress =
      Math.sign(newMirroredProgress) *
      Math.min(Math.abs(newMirroredProgress), maxProgressIncrement);
    let targetMirroredProgress = Math.max(
      0,
      Math.min(mirroredAnimationProgress + newMirroredProgress, 1)
    );

    setMirroredAnimationProgress((prevProgress) => {
      return lerp(prevProgress, targetMirroredProgress, 0.5); // Smooth transition
    });

    let allMirroredPathsFullyVisible = true;
    mirroredPaths.forEach((path, index) => {
      const length = totalLengths2.current[index];
      const drawLength = Math.max(
        0,
        length - length * mirroredAnimationProgress
      );
      path.style.strokeDashoffset = drawLength;
      const resistance = 0.01;
      if (drawLength > resistance) allMirroredPathsFullyVisible = false;
    });

    // user going down animation completed
    // if (
    //   deltaY > 0 &&
    //   !allPathsFullyVisible &&
    //   !allMirroredPathsFullyVisible
    // ) {
    //   event.preventDefault();
    // }
    // if (
    //   deltaY < 0 &&
    //   animationProgress >= 0.01 &&
    //   mirroredAnimationProgress >= 0.01
    // ) {
    //   event.preventDefault();
    // }
  };

  const handleWheel = (event) => {
    if (!isInViewport) return;
    updateAnimation(event.deltaY, event);
    // let progress =
    //   lenis.direction === 1
    //     ? lenis.scroll / 1000
    //     : -1 * (lenis.scroll / 1000);
    // // console.log(lenis.direction);
    // // let progress = lenis.progress
    // updateAnimation(progress, event);
    // console.log(progress);
  };

  if (isInViewport) {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
  } else {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
  }

  return () => {
    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
  };
}, [isInViewport, animationProgress, mirroredAnimationProgress]);
