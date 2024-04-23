"use client";

import { classNameProjects } from "./style";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProjectCard } from "@/components/molecules/project-card";
import { useMemo } from "react";
import projects from "./constants/projects";

const Projects = () => {
  const className = useMemo(() => classNameProjects, []);

  return (
    <section id="projects" className={className.projectsWrapper}>
      <SectionHeader title="projects" dir="r" />

      <div className={className.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
