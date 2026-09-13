"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Motion is an enhancement: the server-rendered page works without this chunk. */
export default function CinematicMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    let generation = 0;
    let cleanup: (() => void) | undefined;

    const update = async () => {
      const current = ++generation;
      cleanup?.();
      cleanup = undefined;
      if (!preference.matches) return;

      try {
        const { createSceneMotion } = await import("@/lib/motion/scenes");
        if (generation === current && preference.matches)
          cleanup = createSceneMotion();
      } catch {
        // Native scrolling and content remain available if motion cannot load.
      }
    };

    void update();
    preference.addEventListener("change", update);
    return () => {
      generation++;
      preference.removeEventListener("change", update);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
