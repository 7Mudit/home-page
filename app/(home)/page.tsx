import Hero1 from "@/components/home/Hero1";
import MainNavbar from "@/components/home/MainNavbar";
import Navbar1 from "@/components/home/Navbar1";
import TextClipMaskEffect from "@/components/shared/TextClipMaskEffect";
import Character from "@/components/home/Character";
import TextSection from "@/components/home/TextSection";
import VideoSection from "@/components/home/VideoSection";
import YtViewsGraph from "@/components/home/YtViewsGraph";
import CodeSection from "@/components/home/CodeSection";
import { useEffect } from "react";
import ExploreMore from "@/components/home/ExploreMore";
import TimelineSection from "@/components/home/TimelineSection";
import HighlightText from "@/components/home/HighlightText";
import Button from "@/components/home/Button";
import { FaArrowRight } from "react-icons/fa";
import Pipes from "@/components/home/Pipes";
import Footer from "@/components/home/Footer";
import CardsSection from "@/components/home/CardsSection";
import PricingSection from "@/components/home/PricingSection";
import Works from "@/components/home/Works";

export default function Home() {
  return (
    <div>
      <main
        className="flex h-full bg-black text-white gap-[50px] 
                    sm:gap-[100px] flex-col"
      >
        <Navbar1 />
        <Hero1 />
        <MainNavbar />
        <TextClipMaskEffect />
        {/* <Character paragraph={paragraph} /> */}
        {/* <div className="h-[50vh]"></div> */}
        <TextSection />
        <VideoSection />
        <YtViewsGraph />
        <div className="max-w-maxContent  relative mx-auto">
          <CodeSection />
          {/* <ExploreMore /> */}
          <Works />
          <TimelineSection />
          {/* Timeline Section - Section 2 */}
        </div>
        <CardsSection />
        <PricingSection />
        {/* <Pipes /> */}
        <div className="w-11/12 relative mx-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
}
