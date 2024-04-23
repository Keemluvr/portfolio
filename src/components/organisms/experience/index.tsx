import { classNameExperience } from "./style";
import { ExperienceItem } from "@/components/molecules/experience-item";
import { SectionHeader } from "@/components/molecules/section-header";
import { useMemo } from "react";
import experience from "./constants/experience";

const Experience = () => {
  const className = useMemo(() => classNameExperience, []);

  return (
    <section id="experience" className={className.experienceWrapper}>
      <SectionHeader title="experience" dir="l" />

      {experience.map((item) => (
        <ExperienceItem key={item.title} experience={item} />
      ))}
    </section>
  );
};

export default Experience;
