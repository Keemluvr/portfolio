import clsx from "clsx";
import { m, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  bottom: { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } },
  top: { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } }
};

type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "full";
  delay?: number;
  origin?: keyof typeof variants;
  className?: string;
};

export const Reveal = ({ children, className, delay, origin = "bottom", width = "fit-content" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={clsx(width, "relative overflow-hidden", className)}>
      <m.div
        variants={variants?.[origin]}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay || 0.15 }}
      >
        {children}
      </m.div>
      <m.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-secondary z-50"
      />
    </div>
  );
};
