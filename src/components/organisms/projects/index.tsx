"use client";

import { classNameProjects } from "./style";
import { SectionHeader } from "@/components/molecules/section-header";
import { ProjectCard } from "@/components/molecules/project-card";
import projects from "./constants/projects";

const Projects = () => {
  return (
    <section id="projects" className={classNameProjects.projectsWrapper}>
      <SectionHeader title="projects" dir="r" />

      <div className={classNameProjects.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
