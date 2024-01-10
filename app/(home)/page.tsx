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
        {/* <YtViewsGraph /> */}
        <div className="max-w-maxContent  relative mx-auto">
          {/* <CodeSection /> */}
          {/* <ExploreMore /> */}
          {/* Timeline Section - Section 2 */}
        </div>
        <div className="bg-pure-greys-5 text-richblack-700">
          <div className="homepage_bg h-[320px]">
            {/* Explore Full Catagory Section */}
            {/* <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
              <div className="lg:h-[150px]"></div>
              <div className="flex flex-row gap-7 text-white lg:mt-8">
                <Button active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </Button>
                <Button active={false} linkto={"/login"}>
                  Learn More
                </Button>
              </div>
            </div> */}
          </div>

          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
            {/* Job that is in Demand - Section 1 */}
            {/* <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
              <div className="text-4xl font-semibold lg:w-[45%] ">
                Get the skills you need for a{" "}
                <HighlightText text={"job that is in demand."} />
              </div>
              <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px]">
                  The modern StudyNotion is the dictates its own terms. Today,
                  to be a competitive specialist requires more than professional
                  skills.
                </div>
                <Button active={true} linkto={"/signup"}>
                  <div className="">Learn More</div>
                </Button>
              </div>
            </div> */}
            {/* <TimelineSection /> */}
            {/* <CardsSection /> */}
            {/* Timeline Section - Section 2 */}

            {/* Learning Language Section - Section 3 */}
            {/* <LearningLanguageSection /> */}
          </div>
        </div>
        {/* <PricingSection /> */}
        {/* <Pipes /> */}
        {/* <div className="w-11/12 relative mx-auto">
          <Footer />
        </div> */}
      </main>
    </div>
  );
}
