import clsx from "clsx";

export const classNameExperienceItem = {
  experienceItemWrapper: "border-b border-primary-200 m-3 mx-0 md:mx-3 mb-7 pb-7",
  experienceItemHeading:
    "flex flex-col md:flex-row items-start md:items-center justify-between mb-4 text-sm md:text-base",
  experienceItemTitle: "font-bold text-xl md:text-2xl",
  experienceItemDescription: "mb-7 font-extralight text-white text-sm md:text-base",
  experienceItemStepsWrapper: (stepsLength: number) =>
    clsx("marker:text-secondaryspace-y-3 text-secondary", stepsLength > 1 ? "list-disc  pl-5" : "list-none"),
  experienceItemStep: (isLastItem: boolean) =>
    clsx(
      "relative",
      "before:absolute before:content-normal before:-left-[0.92rem] before:top-7",
      "before:h-[85%] before:w-0.5",
      "before:bg-secondary",
      isLastItem ? "before:opacity-0" : "before:opacity-20"
    ),
  experienceItemPosition: "text-secondary font-bold text-xl",
  experienceItemLocation: "text-white",
  experienceItemTech: "flex flex-wrap gap-2",
  experienceItemTechChip: "bg-primary-200 text-sm md:text-lg transition-all cursor-default"
};
