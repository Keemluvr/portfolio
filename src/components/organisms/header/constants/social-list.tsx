import CodePen from "@/components/atoms/svg/code-pen";
import Github from "@/components/atoms/svg/github";
import Instagram from "@/components/atoms/svg/instagram";
import Linkedin from "@/components/atoms/svg/linkedin";
import { CODE_PEN, GITHUB, INSTAGRAM, LINKEDIN } from "@/constants/social";

const social = [
  {
    label: "Linkedin",
    icon: <Linkedin />,
    link: LINKEDIN
  },
  {
    label: "Github",
    icon: <Github />,
    link: GITHUB
  },
  {
    label: "Instagram",
    icon: <Instagram />,
    link: INSTAGRAM
  },
  {
    label: "Code Pen",
    icon: <CodePen />,
    link: CODE_PEN
  }
];

export default social;
