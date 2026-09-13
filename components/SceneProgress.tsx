"use client";

import { useEffect, useState } from "react";

const scenes = [
  ["home", "Opening"],
  ["about", "About"],
  ["universe", "Universe"],
  ["work", "Work"],
  ["journey", "Journey"],
  ["education", "Education"],
  ["philosophy", "Philosophy"],
  ["contact", "Contact"],
];

export default function SceneProgress() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 801px)");
    let observer: IntersectionObserver | undefined;
    const observe = () => {
      observer?.disconnect();
      if (!desktop.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          const current = entries.find((entry) => entry.isIntersecting);
          if (current) setActive(current.target.id);
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      scenes.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section) observer?.observe(section);
      });
    };
    observe();
    desktop.addEventListener("change", observe);
    return () => {
      observer?.disconnect();
      desktop.removeEventListener("change", observe);
    };
  }, []);

  return (
    <nav className="scene-progress" aria-label="Scene navigation">
      {scenes.map(([id, label], i) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
          aria-label={`Scene ${i + 1}: ${label}`}
          aria-current={active === id ? "location" : undefined}
        >
          <span className="scene-tooltip">{label}</span>
          <span className="progress-tick" aria-hidden="true" />
        </a>
      ))}
      <span className="progress-count" aria-hidden="true">
        0{scenes.findIndex(([id]) => id === active) + 1}
        <i>/08</i>
      </span>
    </nav>
  );
}
