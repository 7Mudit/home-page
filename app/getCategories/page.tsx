"use client";
import Heading from "@/components/home/Heading";
import { Badge } from "@/components/ui/badge";
import { getAllCoursesCategory } from "@/lib/actions/course.action";
import React, { useEffect, useState } from "react";
interface Category {
  categoryName: string;
  categoryDescription: string;
  // Include other properties of a category if there are any
}

const Page = () => {
  const [parsedResult, setParsedResult] = useState<Category[]>([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        let result = await getAllCoursesCategory();

        if (typeof result === "string") {
          result = JSON.parse(result);
          // @ts-ignore
          setParsedResult(result);
        } else {
          console.error("Invalid result:", result);
          setParsedResult([]);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setParsedResult([]);
      }
    };
    getCourses();
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
