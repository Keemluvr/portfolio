"use client";

import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { classNameProjectCard } from "./style";
import { useMemo, useState } from "react";
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
  const { title, imgSrc, code, projectLink, tech, description } = project;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [hovered, setHovered] = useState(false);

  const t = useTranslations("Projects");

  const className = useMemo(() => classNameProjectCard, []);

  return (
    <>
      <Reveal>
        <div
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onOpen}
          onKeyDown={onOpen}
          className={className.projectImageWrapper}
        >
          <Image
            priority
            src={imgSrc}
            className={className.projectImage(hovered)}
            alt={t("an-image-of-the", { title })}
            width={1000}
            height={0}
          />
        </div>
        <div className={className.projectCopy}>
          <Reveal>
            <div className={className.projectTitle}>
              <h4 className={className.projectTitleName}>{title}</h4>
              <div className={className.projectTitleLine} />

              <ExternalLink href={code}>
                <AiFillGithub />
              </ExternalLink>

              <ExternalLink href={projectLink}>
                <AiOutlineExport />
              </ExternalLink>
            </div>
          </Reveal>
          <Reveal>
            <div className={className.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={className.projectDescription}>
              {t(description)} <br />
              <span
                onClick={onOpen}
                onKeyDown={onOpen}
                role="button"
                tabIndex={0}
                className={className.projectLearnMore}
              >
                {t("learn-more")}
              </span>
            </p>
          </Reveal>
        </div>
      </Reveal>
      <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
