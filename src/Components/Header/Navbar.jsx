import React, { useEffect, useState } from "react";
import light from "../../assets/light.png";
import dark from "../../assets/dark.png";
import { Link } from "react-scroll";
import {
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = (event) => {
    setDarkMode(!darkMode);
    if (event.target.checked) {
      document.documentElement.setAttribute("class", "dark");
    } else {
      document.documentElement.removeAttribute("class");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", "dark");
  }, []);

  const handleClick = () => setClick(!click);

  const navItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Education", icon: <FaUser /> },
    { name: "TechStack", icon: <FaCode /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  const content = (
    
      <div className="lg:hidden block absolute w-full top-16 left-0 right-0 bg-white dark:bg-slate-900 transition">
        <ul className="text-center text-xl p-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.name}
              spy={true}
              smooth={true}
              onClick={() => setClick(false)} // Close the menu on item click
            >
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded flex items-center justify-center gap-2">
                {item.icon}
                {item.name}
              </li>
            </Link>
          ))}
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleTheme}
                checked={darkMode}
              />
              <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                <img
                  src={light}
                  alt="light"
                  className="absolute w-4 z-10 m-[4px] text-white "
                />
                <img
                  src={dark}
                  alt="dark"
                  className="absolute w-4 z-10 m-[4px] text-white right-0 "
                />
              </div>
            </label>
          </div>
        </ul>
      </div>
    
  );

  return (
    
      <nav className="sticky top-0 bg-neutral-100 text-sky-500 dark:bg-slate-900 dark:text-amber-400 ">
        <div className='h-10vh flex justify-between z-50 lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800'>
          <div className="flex items-center flex-1">
            <span className="text-2xl font-bold">
              <Link to="Home" spy={true} smooth={true} className="uppercase">
                Praveen
              </Link>
            </span>
          </div>
          <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
            <ul className="flex gap-7">
              {navItems.map((item, index) => (
                <Link key={index} to={item.name} spy={true} smooth={true}>
                  <li className="uppercase hover:text-fuchsia-600 transition list-none hover:border-b-fuchsia-600 hover:border-b-2 hover:scale-110 hover:transition-transform cursor-pointer flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </li>
                </Link>
              ))}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={toggleTheme}
                    checked={darkMode}
                  />
                  <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                    <img
                      src={light}
                      alt="light"
                      className="absolute w-4 z-10 m-[4px] text-white "
                    />
                    <img
                      src={dark}
                      alt="dark"
                      className="absolute w-4 z-10 m-[4px] text-white right-0 "
                    />
                  </div>
                </label>
              </div>
            </ul>
          </div>
          <button
            className="block md:hidden transition text-2xl"
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
          <div className="md:hidden">{click && content}</div>
        </div>
      </nav>
    
  );
}

export default Navbar;
