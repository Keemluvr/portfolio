export const motionModal = {
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
      y: 300,
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    }
  }
};
