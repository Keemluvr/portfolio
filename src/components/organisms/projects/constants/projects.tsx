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
  }
];

export default projects;
