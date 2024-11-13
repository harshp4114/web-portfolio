import React from "react";
import { Link, useLocation } from "react-router-dom";
import gsap, { Linear } from "gsap";
const Header = () => {
  const location = useLocation();

  const links = [
    { href: "https://harshkp-portfolio.netlify.app/", label: "Home" },
    { href: "#project1", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  return (
    <div className="bg-white w-full pt-[1.8vw] px-0 m-3 mb-0 mt-0 top-0 left-0 xl:static xl:w-auto fixed xl:pt-4 xl:px-6 flex justify-between items-center xl:m-16 xl:mb-0 xl:mt-0">
      <div className="flex mt-4 items-center xl:space-x-2 xl:mt-12">
        <a href="https://harshkp-portfolio.netlify.app/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-[7vw] h-[7vw] mr-[1.4vw] mt-[1vw] xl:w-14 xl:mb-3 xl:h-14 xl:mr-3 cursor-pointer"
          >
            <g transform="translate(20, 70)">
              <text
                x="-9"
                y="-30"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="45"
                fill="#323232"
                fontStyle="italic"
              >
                H
              </text>
              <text
                x="14"
                y="-14"
                transform="rotate(17)"
                fontFamily="Arial"
                fontWeight="100"
                fontSize="80"
                fill="#323232"
              >
                /
              </text>
              <text
                x="45"
                y="-5"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="45"
                fill="#323232"
                fontStyle="italic"
              >
                P
              </text>
            </g>
          </svg>
        </a>
        <pre className="text-[8vw] pb-[1vw] font-extralight xl:text-5xl xl:pt-1 xl:pb-3 xl:font-extralight text-[#323232] xl:mb-2 font-dm-sans">
          |
        </pre>
        <a href="https://harshkp-portfolio.netlify.app/" className="ml-0 text-xl pb-1 xl:ml-3 xl:pb-3 font-extralight text-[#323232] xl:mb-2 font-dm-sans">
          <span
            id="name"
            className="text-[4.5vw] font-light ml-2 border-t-[0.5vw] border-transparent hover:border-gray-500 xl:text-5xl xl:font-extralight xl:border-t-[3px] xl:border-transparent xl:hover:border-gray-500 transition-all duration-300 ease-in-out"
          >
            Harsh Patadia
          </span>
        </a>
      </div>

      <nav className="mt-2 xl:mt-12 mr-5">
        <ul className="flex space-x-[3vw] xl:space-x-8 xl:pb-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={`text-gray-500 text-[3.8vw] pt-2 pb-1 xl:pb-1 xl:text-2xl transition-all duration-300 ease-in-out
          ${
            location.pathname === link.href
              ? "border-b-[0.5vw] xl:border-b-[3px] border-gray-500 text-gray-800"
              : "hover:border-b-[0.5vw] hover:border-gray-500 border-b-[0.5vw] xl:hover:border-b-[3px] xl:hover:border-gray-500 xl:border-b-[3px] border-transparent hover:text-[#323232]"
          }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
