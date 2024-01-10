import React from "react";
import CodeBlocks from "./CodeBlocks";
import HighlightText from "./HighlightText";

const CodeSection = () => {
  return (
    <div className="flex flex-col px-[20px] gap-[100px]">
      {/* Code Section 1  */}
      <CodeBlocks
        position={"lg:flex-row"}
        heading={
          <div className="text-4xl font-semibold">
            Master Algorithms with
            <HighlightText text={" LeetCode Challenges"} />
          </div>
        }
        subheading={
          "Dive deep into algorithmic problems with our interactive LeetCode challenges. Enhance your problem-solving skills and prepare for technical interviews."
        }
        ctabtn1={{
          btnText: "Start Solving",
          link: "/leetcode-challenges",
          active: true,
        }}
        ctabtn2={{
          btnText: "Explore Algorithms",
          link: "/algorithms",
          active: false,
        }}
        codeColor={"text-yellow-25"}
        codeblock={`def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n\n    while left <= right:\n        mid = (left + right)\n        if arr[mid] == target:\n            return mid  # Target found\n        elif arr[mid] < target:\n            left = mid + 1  # Search in the right half\n        else:\n            right = mid - 1  # Search in the left half\n\n    return -1  # Target not found\n\n`}
      />

      {/* Code Section 2 */}
      <CodeBlocks
        position={"lg:flex-row-reverse"}
        heading={
          <div className="w-[100%] text-4xl font-semibold ">
            Build Stunning Websites with
            <HighlightText text={" new web frameworks"} />
          </div>
        }
        subheading={
          "Learn how to create dynamic and responsive websites using React. From simple components to complex interactive UIs, start building amazing web experiences."
        }
        ctabtn1={{
          btnText: "Continue Learning",
          link: "/react-tutorials",
          active: true,
        }}
        ctabtn2={{
          btnText: "View Projects",
          link: "/projects",
          active: false,
        }}
        codeColor={"text-white"}
        codeblock={`// Simple React Component\nimport React from 'react';\n\nconst WelcomeMessage = () => {\n  return (\n    <div>\n      <h1>Welcome to Our Website!</h1>\n      <p>Explore our tutorials and start your coding journey today.</p>\n    </div>\n  );\n};\n\nexport default WelcomeMessage;`}
        backgroundGradient={<div className="codeblock2 absolute"></div>}
      />
    </div>
  );
};

export default CodeSection;
