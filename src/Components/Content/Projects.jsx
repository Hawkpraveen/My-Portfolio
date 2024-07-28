import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsList from "../../All_Lists/ProjectsList";
import { AiFillGithub } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Card } from "flowbite-react";

function Projects() {
  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="Projects"
      className="bg-white text-black dark:bg-slate-900 dark:text-white md:py-20 md:px-20 p-5 flex flex-col items-center justify-center min-h-screen"
    >
      <h1
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-4xl md:text-5xl font-semibold mb-10 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid w-full h-full md:grid-cols-3 grid-cols-1 justify-around gap-10 ">
        {ProjectsList.slice().map((project) => (
          <div className='hover:scale-105 transition-transform duration-300 '>
            <Card
              key={project.id}
              data-aos={project.id % 2 === 0 ? "fade-down" : "fade-up"}
              className="flex flex-col items-center  shadow-xl dark:shadow-slate-700 border-2 rounded-2xl "
            >
              <div className="group w-full flex items-center justify-center rounded-3xl border-2 border-fuchsia-800">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="w-full h-full"
                >
                  <img
                    className="w-full h-44 object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-25"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                
                <div className="flex gap-10 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex items-center justify-center text-white"
                  >
                    <FaEye className="text-3xl hover:scale-125 transition-transform duration-300" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="transition-all duration-150 ease-in-out"
                  >
                    <AiFillGithub className="text-white text-3xl hover:scale-125 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              <p className="flex gap-2 h-full lg:mt-4 justify-center mt-4 text-center text-xl uppercase text-emerald-400">
                {project.title}
              </p>
              <hr className='border-2 mx-5'/>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech &&
                  project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-sky-700 dark:text-amber-300"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
              <hr className='border-2 mx-14'/>
              <p className="text-center  text-balance  dark:text-cyan-300 text-pink-500">
                {project.desc}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
