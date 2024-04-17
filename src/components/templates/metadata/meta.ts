import { pages } from "./index";

type metaType = {
  name: string;
  path: string;
  description: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
};

const meta: Record<pages, metaType> = {
  home: {
    name: "Keila Fernandes",
    path: "",
    description: "",
    image: {
      path: "meta/hero.png",
      width: 1208,
      height: 589
    }
  }
};

export default meta;
