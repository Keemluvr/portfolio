"use client";

import { classNameExperienceItem } from "./style";
import { useFormatter, useTranslations } from "next-intl";
import { Experience } from "@/types";
import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { Chip } from "@nextui-org/react";

interface Props {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: Props) => {
  const { title, time, location, steps, tech } = experience;
  const t = useTranslations("Experience");
  const format = useFormatter();

  const startDate = new Date(time.start);
  const endDate = new Date(time.end);

  const className = useMemo(() => classNameExperienceItem, []);

  return (
    <div className={className.experienceItemWrapper}>
      <div className={className.experienceItemHeading}>
        <Reveal>
          <span className={className.experienceItemTitle}>{title}</span>
        </Reveal>
        <Reveal>
          <span>
            {format.dateTimeRange(startDate, endDate, {
              year: "numeric",
              month: "short"
            })}
          </span>
        </Reveal>
      </div>

      <ul className={className.experienceItemStepsWrapper(steps.length)}>
        {steps.map((step, index: number) => (
          <li key={step.position} className={className.experienceItemStep(steps.length - 1 === index)}>
            <div className={className.experienceItemHeading}>
              <Reveal>
                <span className={className.experienceItemPosition}>{t(step.position)}</span>
              </Reveal>
              <Reveal>
                <span className={className.experienceItemLocation}>{location}</span>
              </Reveal>
            </div>
            <Reveal>
              <p className={className.experienceItemDescription}>{t(step.description)}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <div className={className.experienceItemTech}>
          {tech.map((item) => (
            <Chip key={item} className={className.experienceItemTechChip}>
              {item}
            </Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
