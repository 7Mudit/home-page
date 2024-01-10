import { useEffect } from "react";
// working as google
useEffect(() => {
  // let animationProgress = 0;
  // let mirroredAnimationProgress = 0;
  let svg1Completed = false;
  const handleWheel = (event) => {
    if (!isInViewport) return;

    event.preventDefault();
    let newProgress = animationProgress + event.deltaY * 0.005;
    newProgress = Math.max(0, newProgress);
    setAnimationProgress(newProgress);
    let allPathsFullyVisible = true;
    const paths = svgContainerRef.current.querySelectorAll(".svg-path");
    const mirroredPaths = document.querySelectorAll(".svg-path-mirrored");
    paths.forEach((path, index) => {
      const length = totalLengths.current[index];
      const drawLength = Math.max(0, length - length * animationProgress);
      path.style.strokeDashoffset = drawLength;
      if (drawLength > 0) allPathsFullyVisible = false;
    });

    if (allPathsFullyVisible) {
      let newMirroredProgress =
        mirroredAnimationProgress + event.deltaY * 0.005;
      setMirroredAnimationProgress(newMirroredProgress);
    } else {
      // Reset mirrored animation progress if svg1 is not fully visible
      setMirroredAnimationProgress(0);
    }

    // const mirroredPaths = document.querySelectorAll(".svg-path-mirrored");
    mirroredPaths.forEach((path, index) => {
      const length = totalLengths2.current[index];
      const drawLength = Math.max(
        0,
        length - length * mirroredAnimationProgress
      );
      path.style.strokeDashoffset = -drawLength;
    });
  };

  if (isInViewport) {
    window.addEventListener("wheel", handleWheel, { passive: false });
  } else {
    window.removeEventListener("wheel", handleWheel);
  }

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [isInViewport, animationProgress, mirroredAnimationProgress]);
