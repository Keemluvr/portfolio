import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "DOE",
    imgSrc: "/assets/projects/doe.png",
    code: "https://github.com/Keemluvr/doe",
    projectLink: "https://doe-hw54.onrender.com",
    tech: ["Javascript", "ITCSS", "Nunjucks", "Postgres", "Express", "Node"],
    description: "doe-description",
    modalContent: ["this-blood-donor-registration", "during-the-development-process", "as-an-additional-feature"]
  },
  {
    title: "Hipsta Witch",
    imgSrc: "/assets/projects/hipsta-witch.png",
    code: "https://github.com/Keemluvr/hipsta-witch",
    projectLink: "https://hipsta-witch.vercel.app",
    tech: ["Javascript", "p5js", "sketch"],
    description: "hipsta-witch-description",
    modalContent: ["is-a-engaging-game", "during-the-development", "through-hipsta-witch"]
  },
  {
    title: "Be the Hero",
    imgSrc: "/assets/projects/be-the-hero.png",
    code: "https://github.com/Keemluvr/be-the-hero",
    projectLink: "https://to-be-hero.netlify.app",
    tech: ["ReactJS", "Local Storage", "Node", "Express", "SQLite", "Knex", "Celebrate", "Expo"],
    description: "be-the-hero-description",
    modalContent: ["is-a-project-i-developed", "in-developing-i-used-a", "during-the-project", "the-end-result-was-an"]
  }
];

export default projects;
