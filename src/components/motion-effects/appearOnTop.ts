const appearOnTop = {
  initial: "hidden",
  whileInView: "visible",
  exit: "hidden",
  viewport: { once: true },
  transition: { duration: 0.5 },
  variants: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 }
  }
};

export default appearOnTop;
