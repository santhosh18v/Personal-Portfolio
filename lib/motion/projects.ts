import { gsap } from "gsap";
import { reveal } from "./reveal";

export function createProjectMotion(desktop: boolean) {
  document.querySelectorAll<HTMLElement>(".project-scene").forEach((scene) => {
    const copy = scene.querySelector(".project-copy");
    if (copy) {
      const stages = [
        scene.querySelector("h3"),
        scene.querySelector(".project-subtitle"),
        scene.querySelector(".project-description"),
        scene.querySelector(".technology-list"),
        scene.querySelector(".project-actions"),
      ].filter((element): element is Element => Boolean(element));
      reveal(copy, stages, { stagger: 0.1, distance: desktop ? 22 : 12 });
    }

    const screen = scene.querySelector(".exhibition-screen");
    if (!screen) return;
    if (!desktop) {
      reveal(screen, screen, { distance: 12, duration: 0.7 });
      return;
    }

    // A screen settles into focus, then recedes as the next project arrives.
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top 90%",
          end: "bottom top",
          scrub: 0.7,
        },
      })
      .fromTo(
        screen,
        { scale: 0.96, y: 24, opacity: 0.72, rotateY: -3 },
        { scale: 1, y: 0, opacity: 1, rotateY: 0, duration: 0.3, ease: "none" },
      )
      .to(screen, { scale: 1, duration: 0.45 })
      .to(screen, {
        scale: 0.98,
        y: -12,
        opacity: 0.72,
        duration: 0.25,
        ease: "none",
      });
  });
}
