"use client";

import { useEffect, useState } from "react";

const UseSectionInView = () => {
  const [inView, setInView] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const threshold = 0.3;

    const options: IntersectionObserverInit = { threshold };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setInView(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return inView;
};

export default UseSectionInView;
