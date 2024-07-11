"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
export default function TechCard(props) {
  return (
    <div className=" bg-white shadow-md m-1 rounded-md ">
      <div className="flex justify-center flex-col items-center">
        <div className="w-20 h-20" >
          <Image
            src={props?.data?.image}
            className="p-2 w-full h-full"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <h1> {props?.data?.tehnology} </h1>
        <ProgressBar percentage={80} />
      </div>
    </div>
  );
}
