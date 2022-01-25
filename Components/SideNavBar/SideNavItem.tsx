import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface Props {
  icon: "string | StaticImport";
  title: string;
  badge?: string;
  isCollapsed: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const SideNavItem = ({
  icon,
  title,
  badge,
  isCollapsed,
  isSelected,
  onSelect,
}: Props) => {
  return (
    <div
      className={`flex p-2 hover:contrast-75 items-center gap-2  m-3 rounded-lg h-12  ${
        isSelected
          ? "bg-slate-400 dark:bg-secondary"
          : "bg-slate-300 dark:bg-tertiary"
      }
      ${isCollapsed ? "w-12" : ""}
      `}
      onClick={() => onSelect()}
    >
      <Image src={icon} width={35} height={35} alt={title} />
      {isCollapsed ? "" : title}
      {!isCollapsed ? (
        <>
          <div className="ml-auto mr-4 text-sm font-semibold dark:bg-slate-200 dark:text-black bg-darkPrimary text-white rounded-xl px-2">
            {badge}
          </div>
          <FaAngleRight />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideNavItem;
