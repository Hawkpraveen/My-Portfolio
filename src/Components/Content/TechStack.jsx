import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStackList from "../../All_Lists/TechStackList";
import { Card } from "flowbite-react";

function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

  return (
    <div
      id="TechStack"
      className="bg-white text-black dark:bg-slate-900  dark:text-white md:p-24 p-7 flex flex-col items-center min-h-screen pb-1 w-full overflow-hidden"
    >
      <h1
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-out-sine"
        className="text-4xl md:text-5xl font-semibold mb-6 leading-normal uppercase text-fuchsia-500"
      >
        Tech Stack
      </h1>
      <div className="grid  md:grid-cols-2 grid-cols-1 justify-around gap-8 p-2 ">
        {TechStackList.map((tech, index) => (
          <div
            key={index}
            data-aos-offset="200"
            data-aos-easing="ease-out-sine"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className=" flex font-semibold text-fuchsia-800 rounded-3xl h-full  border-2 border-fuchsia-800 border-glow"
          >
            <div   className=" w-full h-full ">
              <h1 className="flex justify-center text-3xl text-emerald-400 mt-2">
                {tech.title}
              </h1>
              <div className="w-full  flex  justify-evenly mt-2 flex-wrap p-3">
                {tech.skills.map((skill, index) => {
                  return (
                    <div
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                      key={index}
                      className="hover:scale-110 transition-transform shadow-sky-500 border-2 border-violet-700 shadow-md p-3 m-2  flex w-full md:w-fit h-full gap-2 items-center rounded-full "
                    >
                      <img
                        src={skill.image}
                        alt=""
                        className="h-7 w-7 rounded-full"
                      />
                      <h1 className="text-lg text-orange-500">{skill.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
