import clsx from "clsx";

export const classNameProjectCard = {
  projectWrapper: "flex flex-col",
  projectImageWrapper: "rounded-lg overflow-hidden bg-primary-200 cursor-pointer relative w-full aspect-[16/9]",
  projectImage: (hovered: boolean) =>
    clsx(
      "rounded-md w-[85%] absolute left-2/4 bottom-0 -translate-x-2/4 transition-all",
      hovered ? "rotate-[2deg]" : "rotate-[0deg]"
    ),
  projectCopy: "flex flex-col gap-y-2 mt-5",
  projectTitle: "flex items-center gap-3 font-bold text-xl md:text-2xl",
  projectTitleName: "shrink-0 max-w-[calc(100% - 150px)]",
  projectTitleLine: "w-full h-px bg-primary-100 opacity-30",
  projectTech: "flex flex-wrap gap-1 text-secondary text-sm md:text-base",
  projectDescription: "font-extralight text-sm md:text-lg",
  projectLearnMore: "font-normal text-sm md:text-base text-secondary hover:underline"
};
