"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const HomePageExplore = [
  {
    tag: "Free",
    courses: [
      {
        heading: "Learn HTML",
        description:
          "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Learn CSS",
        description:
          "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Responsive Web design",
        description:
          "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
        level: "Beginner",
        lessionNumber: 6,
      },
    ],
  },
  {
    tag: "New to coding",
    courses: [
      {
        heading: "HTML",
        description:
          "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "CSS",
        description:
          "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Responsive ",
        description:
          "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
        level: "Beginner",
        lessionNumber: 6,
      },
    ],
  },
  {
    tag: "Most popular",
    courses: [
      {
        heading: "Java",
        description:
          "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Python",
        description:
          "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "SCSS",
        description:
          "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
        level: "Beginner",
        lessionNumber: 6,
      },
    ],
  },
  {
    tag: "Skills paths",
    courses: [
      {
        heading: "Flask",
        description:
          "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Django",
        description:
          "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Fast API",
        description:
          "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
        level: "Beginner",
        lessionNumber: 6,
      },
    ],
  },
  {
    tag: "Career paths",
    courses: [
      {
        heading: "Next.js",
        description:
          "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Nuxt.js",
        description:
          "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
        level: "Beginner",
        lessionNumber: 6,
      },
      {
        heading: "Sanity",
        description:
          "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
        level: "Beginner",
        lessionNumber: 6,
      },
    ],
  },
];

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value: any) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%]  lg:translate-y-[70%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
