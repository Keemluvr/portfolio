"use client";

import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { classNameProjectCard } from "./style";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useDisclosure } from "@nextui-org/react";
import { ProjectModal } from "../project-modal";
import { Project } from "@/types";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import ExternalLink from "@/components/atoms/external-link";
import Image from "next/image";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const { title, imgSrc, imgBlur, code, projectLink, tech, description } = project;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [hovered, setHovered] = useState(false);

  const t = useTranslations("Projects");

  return (
    <div className={classNameProjectCard.projectWrapper}>
      <Reveal>
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onOpen}
          onKeyDown={onOpen}
          className={classNameProjectCard.projectImageWrapper}
        >
          <Image
            src={imgSrc}
            placeholder="blur"
            blurDataURL={imgBlur}
            loading="lazy"
            className={classNameProjectCard.projectImage(hovered)}
            alt={t("an-image-of-the", { title })}
            width={1000}
            height={0}
          />
        </div>
      </Reveal>
      <div className={classNameProjectCard.projectCopy}>
        <Reveal>
          <div className={classNameProjectCard.projectTitle}>
            <h4 className={classNameProjectCard.projectTitleName}>{title}</h4>
            <div className={classNameProjectCard.projectTitleLine} />

            <ExternalLink href={code}>
              <AiFillGithub />
            </ExternalLink>

            <ExternalLink href={projectLink}>
              <AiOutlineExport />
            </ExternalLink>
          </div>
        </Reveal>
        <Reveal>
          <div className={classNameProjectCard.projectTech}>{tech.join(" - ")}</div>
        </Reveal>
        <Reveal>
          <p className={classNameProjectCard.projectDescription}>
            {t(description)} <br />
            <span
              onClick={onOpen}
              onKeyDown={onOpen}
              role="button"
              tabIndex={0}
              className={classNameProjectCard.projectLearnMore}
            >
              {t("learn-more")}
            </span>
          </p>
        </Reveal>
      </div>
      <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};
