"use client";
import TechCard from "@/components/TechCard";

export default function Technologies() {
  return (
    <div className="min-h-screen ">
      <h1>Technologies</h1>
      <div className="md:flex-row flex flex-col  justify-center w-full  items-center">
        <div className=" w-4/5  md:w-1/4">
          <TechCard />
        </div>
        <div className="   w-4/5  md:w-1/4">
          <TechCard />
        </div>
        <div className="   w-4/5  md:w-1/4">
          <TechCard />
        </div>
        <div className="   w-4/5  md:w-1/4">
          <TechCard />
        </div>
       
      </div>
    </div>
  );
}
