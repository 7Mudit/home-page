import CreateCourse from "@/components/Backend/CreateCategory";
import Heading from "@/components/home/Heading";
import React from "react";
import "../globals.css";

const page = () => {
  return (
    <main
      className="flex h-full min-h-screen p-10 bg-black text-white gap-[50px] 
              sm:gap-[100px] flex-col"
    >
      <Heading heading="Create Category" />
      <div className="mt-9">
        <CreateCourse type="Create" />
      </div>
    </main>
  );
};

export default page;
