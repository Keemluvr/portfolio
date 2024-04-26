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
    tech: ["ReactJS", "Local Storage", "Node", "Express", "SQLite", "Knex", "Celebrate", "Expo", "Jest"],
    description: "be-the-hero-description",
    modalContent: ["is-a-project-i-developed", "in-developing-i-used-a", "during-the-project", "the-end-result-was-an"]
  },
  {
    title: "GitHub Consumer",
    imgSrc: "/assets/projects/github-consumer.png",
    code: "https://github.com/Keemluvr/github-consumer",
    projectLink: "https://github-consumer.vercel.app",
    tech: ["Vue.js", "Vue Router", "GitHub API", "Axios"],
    description: "github-consumer-description",
    modalContent: ["is-a-personal-project-i-developed", "to-build-the-project"]
  },
  {
    title: "Wildbeast",
    imgSrc: "/assets/projects/wildbeast.png",
    code: "https://github.com/Keemluvr/wildbeast",
    projectLink: "https://wildbeast.vercel.app/src",
    tech: ["HTML", "CSS", "Grid Layout", "ITCSS", "RSCSS", "Media Queries"],
    description: "wildbeast-description",
    modalContent: ["is-a-personal-project-i-created", "beyond-applying-what", "allowed-me-to-explore"]
  }
];

export default projects;
