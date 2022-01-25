import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

interface Props {}
const DropMenu = () => {
  return (
    <div
      className=" fixed bg-white dark:bg-dark1/2 z-50 w-2/3 shadow-2xl rounded-xl p-8 flex gap-12"
      style={{ left: "10%", top: "10%" }}
    >
      <div className="flex flex-col justify-center w-1/3">
        <Image
          src={require("../../public/tailwind-css.svg")}
          alt="tailwind-css"
        />
        <h1>TailwindCSS</h1>
        <span className="text-md py-4">
          Tailwind CSS is basically a utility-first CSS framework for rapidly
          building custom user interfaces. It is a highly customizable,
          low-level CSS framework that gives you all of the building blocks you
          need to build bespoke designs without any annoying opinionated styles
          you have to fight to override.
        </span>
      </div>
      <div className="w-1/3">
        <h3 className="font-bold text-lg text-purple-500 text-center">
          Features
        </h3>
        <ul className="text-md" style={{ listStyle: "outside" }}>
          <li className=" my-3">
            No more silly names for CSS classes and Id’s.
          </li>
          <li className=" my-3"> Minimum lines of Code in CSS file.</li>
          <li className=" my-3">
            We can customize the designs to make the components.
          </li>
          <li className=" my-3"> Makes the website responsive.</li>
          <li className=" my-3"> Makes the changes in the desired manner.</li>
          <li className=" my-3">
            {" "}
            Tailwind CSS we can use utility classes and make local changes.
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <h3 className="font-bold text-lg text-purple-500 text-center">
          Quick Start
        </h3>
      </div>
    </div>
  );
};
const TopNavBar = (props: Props) => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  return (
    <nav className=" px-2 sm:px-4 py-2.5 rounded">
      <ul className="flex flex-col mt-4 lg:flex-row  lg:mt-0 lg:text-sm lg:font-medium relative">
        <li>
          {showDropMenu && <DropMenu />}
          <a
            href="#"
            className="text-lg text-gray-900 px-5 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            aria-current="page"
            onMouseOver={() => {
              setShowDropMenu(true);
            }}
            onMouseLeave={() => {
              setShowDropMenu(false);
            }}
          >
            CSS
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg text-gray-900 px-5 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            onMouseOver={() => {
              setShowDropMenu(true);
            }}
            onMouseLeave={() => {
              setShowDropMenu(false);
            }}
          >
            TailwindCSS
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg text-gray-900 px-5 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            onMouseOver={() => {
              setShowDropMenu(true);
            }}
            onMouseLeave={() => {
              setShowDropMenu(false);
            }}
          >
            Bootstrap
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavBar;
