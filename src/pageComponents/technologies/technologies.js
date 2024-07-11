import TechCard from "@/components/TechCard";
import { TechnologiesData } from "./constant";

export default function TechnologiesComponent() {
  return (
    <div className="min-h-screen ">
      <h1>Technologies</h1>
      <div className="md:flex-row flex flex-col w-4/4  justify-center w-full  items-center">
      {/* {TechnologiesData?.map((data, index) => (
          
            <div className="w-4/5 md:w-2/4" key={index}>
              <TechCard data={data} />
            </div>
          
        ))} */}
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
