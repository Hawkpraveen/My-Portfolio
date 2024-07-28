import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

function Home() {
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [1000]);

  const social = [
    {
      link: "https://www.linkedin.com/in/praveen-kumar-496255190/",
      icon: <FaLinkedinIn />,
    },
    {
      link: "https://github.com/Hawkpraveen",
      icon: <AiFillGithub />,
    },
  ];

  return (
    <div
      id="Home"
      className="bg-neutral-100 w-full min-h-screen  text-black dark:bg-slate-900 dark:text-white  lg:px-40 lg:py-2 px-16 py-0 text-center gap-3 lg:text-start flex lg:flex-row flex-col-reverse  lg:gap-28 items-center "
    >
      <div className="lg:py-32 px-2 py-7 md:p-5 flex flex-col justify-center lg:items-start ">
        <h1 className="text-4xl font-semibold mb-2 leading-normal uppercase mt-1">
          Welcome To{" "}
          <span className="text-fuchsia-500">My Portfolio Website</span>
        </h1>
        <p
          className="text-2xl py-2 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Hi I'm{" "}
          <ReactTyped
            className="text-3xl md:text-4xl  dark:text-amber-400 text-sky-700 "
            strings={["Praveen Kumar", " ", "Full Stack Developer", " "]}
            typeSpeed={110}
            loop
            backSpeed={50}
            cursorChar="|"
            showCursor={true}
          />
        </p>
        <p data-aos="fade-left" className="text-xl mt-4 py-2 text-balance text-left">
          I'm a passionate, dedicated, and creative individual who thrives on
          pushing boundaries and learning new technologies. <br />
          Enthusiastic Entry-Level MERN Stack Developer adept in Express.js,
          React, Node.js, and MongoDB, committed to driving success through
          innovation and teamwork.
        </p>
        <div data-aos="fade-up" className="flex mt-2 gap-2 w-full">
          <div className="flex justify-center ">
            <div className="flex space-x-2 ">
              {social.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.link}
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-3 hover:scale-110 transition-transform"
                >
                  <div className="text-[28px]">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          data-aos="fade-up"
          src={img}
          width={350}
          height={290}
          alt=""
          className="rounded-full border-2 p-1 border-fuchsia-500 img_glow mt-5 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Home;
