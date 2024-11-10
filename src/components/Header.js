import React from "react";
import { Link, useLocation } from "react-router-dom";
import gsap, { Linear } from "gsap";
const Header = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/random-project", label: "Random Project" },
  ];

  return (
    <div className="bg-white pt-4 px-6 flex justify-between items-center m-16 mb-0 mt-0">
      <div className="flex items-center space-x-2 mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-14 h-14 mr-3 cursor-pointer"
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
        <pre className="text-5xl pt-1 pb-3 font-extralight text-[#323232] mb-2 font-dm-sans">
          |{"  "}
        </pre>
        <span
          id="name"
          className="text-5xl ml-3 pt-1 pb-3 font-extralight text-[#323232] mb-2 cursor-pointer font-dm-sans border-t-[3px] border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out"
        >
          Harsh Patadia
        </span>
      </div>

      <nav className="mt-12">
        <ul className="flex space-x-8 pb-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                aria-current={
                  location.pathname === link.href ? "page" : undefined
                }
                className={`text-gray-500 pb-1 text-2xl transition-all duration-300 ease-in-out
          ${
            location.pathname === link.href
              ? "border-b-[3px] border-gray-500 text-gray-800" // Active state
              : "hover:border-b-[3px] hover:border-gray-500 border-b-[3px] border-transparent hover:text-[#323232]" // Inactive state
          }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
