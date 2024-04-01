const appearOnBottom = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }
};

export default appearOnBottom;
