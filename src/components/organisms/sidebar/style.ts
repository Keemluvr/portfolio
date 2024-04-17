import clsx from "clsx";
import { SidebarItem } from "./types";

export const classNameSidebar = {
  sidebarNav: "bg-primary-900 flex flex-col items-center sticky h-screen top-0 left-0",
  sidebarLogoWrapper: "flex justify-center items-center bg-primary my-7 mx-1.5 w-11 h-11 rounded",
  sidebarlogo: "flex justify-center items-center font-black text-white text-xl h-min !leading-none",
  sidebarLogoDot: "text-secondary",
  sidebarItem: (selected: string, item: SidebarItem) =>
    clsx(
      "h-24 w-full",
      "text-base sm:text-lg vertical-rl",
      "flex justify-center items-center font-extralight border-r-1",
      "hover:opacity-100 hover:border-secondary hover:bg-background",
      selected === item.label ? "opacity-100 border-secondary bg-background" : "border-transparent opacity-50"
    )
};
