import React, { useState } from "react";
import { FaArrowLeft, FaPlus, FaTimes } from "react-icons/fa";
import SideNavItem from "./SideNavItem";
import materialUi from "../../public/material-ui.svg";
import bootstrap from "../../public/Bootstrap_logo.svg";
import css3 from "../../public/css3.svg";
import Image from "next/image";

interface Props {}

const SideNavBar = (props: Props) => {
  const [isCollapsed, setisCollapsed] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(-1);
  return (
    <div
      className={`h-full dark:bg-dark1/2 bg-slate-200 ${
        isCollapsed ? "w-1 lg:w-20" : "w-1/2 lg:w-1/5"
      } absolute left-0 top-0 transition-all`}
    >
      <div
        className={`pt-6 px-4 flex gap-4 items-center ${
          isCollapsed ? "invisible" : ""
        }`}
      >
        <FaArrowLeft size={24} />
        <input
          placeholder="search here..."
          className="rounded px-2 py-1 border text-black  "
        />
      </div>
      <span
        className={`absolute -right-7 lg:-right-3 top-5 shadow-2xl bg-slate-200 dark:bg-gray-900 dark:text-white p-2 rounded z-50`}
        onClick={() => setisCollapsed((prev) => !prev)}
      >
        {isCollapsed ? <FaPlus size={24} /> : <FaTimes size={24} />}
      </span>

      {/* side nav items */}
      <div
        className={`relative top-4 ${
          isCollapsed ? "w-1 lg:w-14 right-10 lg:right-0" : "w-full"
        }`}
      >
        <SideNavItem
          isCollapsed={isCollapsed}
          title={"Tailwind CSS"}
          icon={require("../../public/tailwind-css.svg")}
          isSelected={selected === 0}
          onSelect={() => setSelected(0)}
        />
        <SideNavItem
          isCollapsed={isCollapsed}
          title={"CSS"}
          icon={css3}
          isSelected={selected === 1}
          onSelect={() => setSelected(1)}
        />
        <SideNavItem
          isCollapsed={isCollapsed}
          title={"Bootstrap"}
          icon={bootstrap}
          badge={"v5.0.1"}
          isSelected={selected === 2}
          onSelect={() => setSelected(2)}
        />
        <SideNavItem
          isCollapsed={isCollapsed}
          title={"Material UI"}
          icon={materialUi}
          isSelected={selected === 3}
          onSelect={() => setSelected(3)}
        />
      </div>
    </div>
  );
};

export default SideNavBar;
