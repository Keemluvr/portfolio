export type Project = {
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  description: string;
  modalContent: string[];
};

export type Experience = {
  title: string;
  time: {
    start: string;
    end: string;
  };
  location: string;
  steps: {
    position: string;
    description: string;
  }[];
  tech: string[];
};
