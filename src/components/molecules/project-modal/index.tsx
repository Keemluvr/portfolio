"use client";

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { classNameProjectModal, classNamesProjectModal } from "./style";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { motionModal } from "./motion";
import { Project } from "@/types";
import ExternalLink from "@/components/atoms/external-link";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const ProjectModal = ({ project, isOpen, onOpenChange }: ProjectModalProps) => {
  const { title, imgSrc, imgBlur, code, projectLink, tech, modalContent } = project;

  const t = useTranslations("Projects");

  return (
    <Modal
      size="3xl"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={classNamesProjectModal}
      className={classNameProjectModal.modalWrapper}
      motionProps={motionModal}
    >
      <ModalContent>
        <ModalHeader>
          <Image
            src={imgSrc}
            width={768}
            height={768}
            placeholder="blur"
            blurDataURL={imgBlur}
            loading="lazy"
            alt={t("an-image-of-the", { title })}
            quality={100}
          />
        </ModalHeader>
        <ModalBody>
          <h4 className={classNameProjectModal.modalTitle}>{title}</h4>
          <div className={classNameProjectModal.modalTech}>{tech.join(" - ")}</div>

          <div className={classNameProjectModal.suppliedContent}>
            {modalContent.map((content) => (
              <p key={content}>{t(content)}</p>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <p className={classNameProjectModal.linksText}>
            {t("project-links")}
            <span className={classNameProjectModal.linksTextDot}>.</span>
          </p>
          <div className={classNameProjectModal.links}>
            <ExternalLink href={code} className={classNameProjectModal.link}>
              <AiFillGithub /> {t("source-code")}
            </ExternalLink>
            <ExternalLink href={projectLink} className={classNameProjectModal.link}>
              <AiOutlineExport /> {t("live-project")}
            </ExternalLink>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
