import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.svg";

import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "Professionals",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Social Commitment",
    },
    {
      id: 4,
      link: "Careers",
    },
    {
      id: 5,
      link: "New & Insights",
    },
    {
      id: 6,
      link: "Locations",
    },
    {
      id: 7,
      link: "Alumni",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://s24.q4cdn.com/382246808/files/doc_downloads/2021/01/indigenous-community-relations_banner.jpg)",
        }}
        className="fixed w-full h-16  text-black z-20  "
      >
        <div className="flex justify-end  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <img src={logo} alt="" />
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="cursor-pointer"
          >
            {isMenuShown ? (
              <div>
                <FaTimes size={30} className="text-red-500 hover:text-black" />
                <p className="text-[12px]">Menu</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <FaBars size={30} className="text-red-500 hover:text-black" />
                <p className="text-[12px]">Menu</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://s24.q4cdn.com/382246808/files/doc_downloads/2021/01/indigenous-community-relations_banner.jpg)",
        }}
        className={`fixed w-full   text-black z-10 left-0 h-screen py-12 flex justify-end px-40 text-right text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl  " : "top-[100%]"
        }`}
      >
        <ul className="">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary"
            >
              {link}
            </li>
            /* <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
            </Link> */
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;