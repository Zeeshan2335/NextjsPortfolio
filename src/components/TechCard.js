"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
export default function TechCard() {
  return (
    <div className=" bg-white shadow-md m-1 rounded-md ">
      <div className="flex justify-center flex-col items-center">
        <Image
          src="/reactjs.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <h1> Tech Card </h1>
        <ProgressBar percentage={80} />
      </div>
    </div>
  );
}


