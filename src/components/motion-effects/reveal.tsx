import clsx from "clsx";
import { m, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "full";
  className?: string;
};

export const Reveal = ({ children, width = "fit-content", className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={clsx(width, "relative overflow-hidden", className)}>
      <m.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </m.div>
    </div>
  );
};
