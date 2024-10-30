import React from "react";

const Hero = () => {
  return (
    <div className=" pb-4 lg:mb-36   ">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        <div className=" w-full lg:w-1/2 ">
          <div className="flex justify-center lg:p-8">
            <img
              src="./src/assets/rohitImg.png "
              alt="Rohit Choukiker"
              className=" border border-stone-900 rounded-3x"
            ></img>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className=" flex flex-col items-center lg:items-start mt-10  mx-16">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl">
              Rohit Choukiker
            </h2>
            {/* <span className=' bg-gradient-to-r from-stone-300 to-stone-600  bg-clip-text text-3xl tracking-tighter text-transparent'>Full stack defajsdf </span> */}
            <p className=" my-2 max-w-lg py-6 text-xl  leading-relaxed ">
              👨‍💻 Third Year | B.Tech Computer Science
              <br />
              🌱 Currently diving into Django, GenAI, and Python full-stack
              development <br />
              👀 Passionate about building Projects
            </p>
            <a
              href="/src/assets/Resume.pdf"
              target="_blank"
              className="bg-white rounded-full p-4 text-md  text-stone-800 mb-10"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
