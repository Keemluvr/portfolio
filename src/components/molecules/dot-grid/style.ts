import clsx from "clsx";

export const classNameDotGrid = {
  dotGridWrapper: (isLoaded: boolean) =>
    clsx(
      isLoaded ? "opacity-100" : "opacity-0",
      "grid absolute top-0 left-0 lg:left-auto right-auto lg:right-0 top-auto z-10 transition-opacity duration-300 delay-700"
    ),
  dotGridItem: "rounded-lg p-2.5 group hover:bg-secondary transition-colors hover:bg-opacity-80 hover:cursor-pointer",
  dotFGridPoint: clsx(
    "dot-point",
    "w-2 h-2 rounded-full opacity-45",
    "bg-gradient-to-t from-primary to-secondary",
    "group-[:hover]:opacity-95 group-[:hover]:from-white group-[:hover]:to-white"
  )
};
