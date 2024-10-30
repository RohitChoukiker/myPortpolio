import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import React from "react";
import { FaNodeJs } from "react-icons/fa6";

const Tech = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className=" flex flex-wrap items-center justify-center gap-4 ">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>

        <div className="p-4">
          <RiTailwindCssFill className="text-7xl" />
        </div>

        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-400" />
        </div>

        <div className="p-4">
          <FaPython className="text-7xl text-green-400" />
        </div>

        <div className="p-4">
        <TbBrandCpp className="text-7xl"></TbBrandCpp>
      </div>

      <div className="p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
      
      
        
      </div>
    </div>
  );
};

export default Tech;
