import { useState, useEffect } from "react";

const useCounter = ({ end, duration = 2000 }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endCount = parseInt(end, 10);
    const interval = duration / endCount;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endCount) clearInterval(counter);
    }, interval);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};
