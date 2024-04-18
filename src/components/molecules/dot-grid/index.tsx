import { MouseEvent, useCallback, useEffect, useMemo } from "react";
import { classNameDotGrid } from "./style";
import anime from "animejs";

export const DotGrid = () => {
  const GRID_WIDTH = 20;
  const GRID_HEIGHT = 20;
  const dots = [];

  const className = useMemo(() => classNameDotGrid, []);

  const handleDotClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const index = !target.dataset.index ? 0 : target.dataset.index;

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 }
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 }
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 0.35, easing: "easeInOutQuad", duration: 500 }
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(index)
      })
    });
  }, []);

  useEffect(() => {
    handleDotClick({ target: { dataset: { index: "0" } } } as unknown as MouseEvent<HTMLDivElement>);
  }, [handleDotClick]);

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div data-index={index} aria-hidden="true" className={className.dotGridItem} onClick={handleDotClick}>
          <div data-index={index} className={className.dotFGridPoint} />
        </div>
      );
      index++;
    }
  }

  return (
    <div style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }} className={className.dotGridWrapper}>
      {dots.map((dot) => dot)}
    </div>
  );
};
