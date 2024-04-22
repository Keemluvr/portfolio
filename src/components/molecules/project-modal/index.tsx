"use client";

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { classNameProjectModal, classNamesProjectModal } from "./style";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { motionModal } from "./motion";
import { Project } from "@/types";
import { useMemo } from "react";
import ExternalLink from "@/components/atoms/external-link";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const ProjectModal = ({ project, isOpen, onOpenChange }: ProjectModalProps) => {
  const { title, imgSrc, code, projectLink, tech, modalContent } = project;

  const t = useTranslations("Projects");

  const className = useMemo(() => classNameProjectModal, []);
  const classNames = useMemo(() => classNamesProjectModal, []);
  const motion = useMemo(() => motionModal, []);

  return (
    <Modal
      size="3xl"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={classNames}
      className={className.modalWrapper}
      motionProps={motion}
    >
      <ModalContent>
        <ModalHeader>
          <Image src={imgSrc} width={768} height={768} alt={t("an-image-of-the", { title })} quality={100} />
        </ModalHeader>
        <ModalBody>
          <h4 className={className.modalTitle}>{title}</h4>
          <div className={className.modalTech}>{tech.join(" - ")}</div>

          <div className={className.suppliedContent}>
            {modalContent.map((content) => (
              <p key={content}>{t(content)}</p>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <p className={className.linksText}>
            {t("project-links")}
            <span className={className.linksTextDot}>.</span>
          </p>
          <div className={className.links}>
            <ExternalLink href={code} className={className.link}>
              <AiFillGithub /> {t("source-code")}
            </ExternalLink>
            <ExternalLink href={projectLink} className={className.link}>
              <AiOutlineExport /> {t("live-project")}
            </ExternalLink>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
