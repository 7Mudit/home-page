"use client";
import styles from "./page.module.scss";
import { projects } from "./data";
import Card from "../Card/index";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      {/* heading */}
      <div className="relative text-center mt-[50px] ">
        <h1
          className={`text-4xl ${noto_sans2.className}  font-extrabold text-[80px] text-center text-black leading-normal`}
        >
          Snapshots of my Freelancing Projects
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

      <main ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}
