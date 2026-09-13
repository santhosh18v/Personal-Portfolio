import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function createJourneyMotion(desktop: boolean) {
  const stage = document.querySelector<HTMLElement>(".timeline-stage");
  if (!stage) return;
  const chapters = Array.from(
    stage.querySelectorAll<HTMLElement>(".journey-chapter"),
  );
  const path = stage.querySelector(
    desktop
      ? ".timeline-path .timeline-draw"
      : ".timeline-path-mobile .timeline-draw",
  );
  let active = -1;

  const highlight = (index: number) => {
    if (index === active) return;
    active = index;
    chapters.forEach((chapter, i) => {
      chapter.classList.toggle("is-current", i === index);
      chapter.classList.toggle("is-past", i < index);
    });
  };

  stage.classList.add("journey-enhanced");
  if (path) {
    gsap.fromTo(
      path,
      { strokeDasharray: 1, strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top 78%",
          end: "bottom 55%",
          scrub: 0.5,
        },
      },
    );
  }

  if (desktop) {
    ScrollTrigger.create({
      trigger: stage,
      start: "top 78%",
      end: "bottom 55%",
      onUpdate: ({ progress }) =>
        highlight(
          Math.min(chapters.length - 1, Math.floor(progress * chapters.length)),
        ),
      onRefresh: ({ progress }) =>
        highlight(
          Math.min(chapters.length - 1, Math.floor(progress * chapters.length)),
        ),
    });
  } else {
    chapters.forEach((chapter, i) =>
      ScrollTrigger.create({
        trigger: chapter,
        start: "top 65%",
        onEnter: () => highlight(i),
        onLeaveBack: () => highlight(Math.max(0, i - 1)),
      }),
    );
    highlight(0);
  }

  return () => {
    stage.classList.remove("journey-enhanced");
    chapters.forEach((chapter) =>
      chapter.classList.remove("is-current", "is-past"),
    );
  };
}
