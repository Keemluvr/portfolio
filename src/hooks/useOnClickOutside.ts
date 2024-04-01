import { MutableRefObject, useEffect } from "react";
type EventType = MouseEvent | TouchEvent;
type HandlerType = (event: EventType) => void;

const useOnClickOutside = (ref: MutableRefObject<HTMLElement | null>, handler: HandlerType) => {
  useEffect(() => {
    const listener = (event: EventType) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
