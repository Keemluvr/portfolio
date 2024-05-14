"use client";

import { classNameSectionHeader } from "./style";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/atoms/motion-effects/reveal";

interface SectionHeaderProps {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "l" }: SectionHeaderProps) => {
  const t = useTranslations("Sidebar");

  return (
    <div className={classNameSectionHeader.sectionHeaderWrapper(dir)}>
      <div className={classNameSectionHeader.SectionHeaderLine} />
      <h3>
        <Reveal>
          <span className={classNameSectionHeader.SectionHeaderTitle}>
            {t(title)}
            <span className={classNameSectionHeader.SectionHeaderDot}>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
