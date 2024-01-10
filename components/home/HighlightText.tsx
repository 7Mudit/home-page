import React from "react";

const HighlightText = ({ text }: any) => {
  return (
    <span className="animated-gradient text-transparent bg-clip-text font-bold">
      {text}
    </span>
  );
};

export default HighlightText;
