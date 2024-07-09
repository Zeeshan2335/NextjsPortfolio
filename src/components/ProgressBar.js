import { useEffect, useState } from "react";

export default function ProgressBar ({ percentage }) {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev < percentage) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 50); // Adjust the interval time to make the progress faster or slower
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="w-full max-w-xs mx-auto px-2">
        <span> {counter}% </span>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div
            style={{ width: `${counter}%` }}
            className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
          ></div>
        </div>
      </div>
    );
  };
  