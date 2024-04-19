"use client";

import { classNameSectionHeader } from "./style";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";

interface SectionHeaderProps {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "l" }: SectionHeaderProps) => {
  const t = useTranslations("Sidebar");
  const className = useMemo(() => classNameSectionHeader, []);

  return (
    <div className={className.sectionHeaderWrapper(dir)}>
      <div className={className.SectionHeaderLine} />
      <h3>
        <Reveal>
          <span className={className.SectionHeaderTitle}>
            {t(title)}
            <span className={className.SectionHeaderDot}>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
