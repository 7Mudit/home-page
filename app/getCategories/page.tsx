"use client";
import Heading from "@/components/home/Heading";
import { Badge } from "@/components/ui/badge";
import { getAllCoursesCategory } from "@/lib/actions/course.action";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [parsedResult, setParsedResult] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      let result = await getAllCoursesCategory();
      result = JSON.parse(result);
      setParsedResult(result);
    };
    getCourses();
    console.log(parsedResult);
  }, []);
  return (
    <div className="bg-black text-white flex flex-col w-full min-h-screen h-full gap-[100px]">
      <Heading heading="All Categories" />

      <div className="flex flex-col px-5 w-full gap-[50px]">
        {parsedResult &&
          parsedResult.map((category, index) => (
            <div key={index}>
              <Badge className="border-white text-[16px] p-2">
                {category?.categoryName}
              </Badge>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
