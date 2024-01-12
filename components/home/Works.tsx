"use client";
import Image from "next/image";
import { Tilt } from "react-tilt";
import img1 from "../assets/Images/FoundingStory.png";
import Heading from "./Heading";
import { Noto_Sans } from "next/font/google";
import Button from "./Button";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });

const courses = [
  {
    name: "Youtube Tutorials",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link: "https://github.com/",
  },
  {
    name: "NPTEL Notes",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Semester Notes",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link: "https://github.com/",
  },
];

const CourseCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: any) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={` bg-black ${noto_sans2.className} border-pure-greys-100 border text-white p-5 rounded-2xl md:w-[360px] w-full`}
    >
      {/* image and github floating icon */}

      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            {/* <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            /> */}
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-justify text-pure-greys-200  text-secondary text-[14px]">
          {description}
        </p>
      </div>
      {/* third section */}
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        {tags.map((tag: any) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <div className=" py-5">
        <Button linkto="/course" active={true}>
          Go to Course
        </Button>
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      {/* heading */}
      <Heading heading="Courses" />

      <div className="mt-10 p-5 items-center justify-center flex flex-wrap gap-7">
        {courses.map((course, index) => (
          <CourseCard key={`project-${index}`} index={index} {...course} />
        ))}
      </div>
    </>
  );
};

export default Works;
