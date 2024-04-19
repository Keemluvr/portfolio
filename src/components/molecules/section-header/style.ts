import clsx from "clsx";

export const classNameSectionHeader = {
  sectionHeaderWrapper: (flexDirection: "l" | "r") =>
    clsx("flex items-center gap-5 mb-10", flexDirection === "r" ? "flex-row" : "flex-row-reverse"),
  SectionHeaderLine: "w-full h-px bg-primary-100 opacity-30",
  SectionHeaderTitle: "text-3xl md:text-6xl font-black text-end",
  SectionHeaderDot: "text-secondary"
};
