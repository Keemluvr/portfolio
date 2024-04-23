import { EN, PT } from "@/constants/locales";
import { pages } from "./index";

type metaType = {
  name: string;
  path: string;
  description: string;
  image: {
    path: {
      [key: string]: string;
    };
    width: number;
    height: number;
  };
};

const meta: Record<pages, metaType> = {
  home: {
    name: "Keila Fernandes | Frontend Developer",
    path: "",
    description: "home-description",
    image: {
      path: {
        [EN]: "meta/hero-en.png",
        [PT]: "meta/hero-pt.png"
      },
      width: 1920,
      height: 912
    }
  }
};

export default meta;
